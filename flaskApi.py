from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import json
from keras.models import load_model
from sklearn.preprocessing import MinMaxScaler

app = Flask(__name__)

# Load the model
model = load_model(r'StockPredictionModel.h5')
model.compile(optimizer='adam', loss='mean_squared_error')

# Load the data
tunisian_stock_market = 'Tunisian-Stock-Market.json'
with open(tunisian_stock_market, 'r') as json_file:
    json_data = json.load(json_file)

RawStockData = pd.DataFrame(json_data)
# Remove the "Code_isin" column from the dataframe if it exists
if "Code_isin" in RawStockData.columns:
    RawStockData.drop(columns=["Code_isin"], inplace=True)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = RawStockData.to_dict(orient='records')
    return jsonify(data)


@app.route('/api/stock/<stock_name>', methods=['GET'])
def get_stock_data(stock_name):
    data = RawStockData[RawStockData['Stock_name'] == stock_name.upper()].to_dict(orient='records')
    if not data:
        return jsonify({"error": "Stock data not found"}), 404
    return jsonify(data)


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    stock_name = data['stock_name'].upper()
    future_days = int(data['future_days'])
    
    data = RawStockData[RawStockData['Stock_name'] == stock_name]
    if data.empty:
        return jsonify({"error": "Stock data not found"}), 404

    data.reset_index(inplace=True)
    columnsToExclude = ['index']
    data = data.drop(columns=columnsToExclude)
    columnsToExclude = ['Adj_low', 'Adj_High', 'Volume', 'Stock_name']
    data = data.drop(columns=columnsToExclude)
    data2 = data
    data2.set_index('Date', inplace=True)

    train_data = data[:-100]
    test_data = data[-200:]

    # Check if train_data or test_data is empty
    if train_data.empty or test_data.empty:
        return jsonify({"error": "Not enough data to perform scaling"}), 400

    scaler = MinMaxScaler(feature_range=(0,1))
    train_data_scale = scaler.fit_transform(train_data)
    test_data_scale = scaler.fit_transform(test_data)

    base_days = 100
    x = []
    y = []
    for i in range(base_days, test_data_scale.shape[0]):
        x.append(test_data_scale[i-base_days:i])
        y.append(test_data_scale[i,0])

    x, y = np.array(x), np.array(y)
    if x.size == 0 or y.size == 0:
        return jsonify({"error": "Not enough data for prediction"}), 400

    x = np.reshape(x, (x.shape[0], x.shape[1], 1))

    pred = model.predict(x)
    pred = scaler.inverse_transform(pred)
    preds = pred.reshape(-1,1)
    ys = scaler.inverse_transform(y.reshape(-1,1))
    
    m = y
    z = []
    for i in range(base_days, len(m) + future_days):
        m = m.reshape(-1, 1)
        inter = [m[-base_days:, 0]]
        inter = np.array(inter)
        inter = np.reshape(inter, (inter.shape[0], inter.shape[1], 1))
        pred = model.predict(inter)
        m = np.append(m, pred)
        z = np.append(z, pred)

    z = np.array(z)
    z = scaler.inverse_transform(z.reshape(-1,1))

    return jsonify(predicted_future_prices=z.tolist())

if __name__ == '__main__':
    app.run(debug=True)
