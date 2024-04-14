import numpy as np
import pandas as pd 
import yfinance as yf
from keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
import streamlit as st 


#Load the model
model = load_model(r'StockPredictionModel.h5')
model.compile(optimizer='adam', loss='mean_squared_error')

#Load the data
import json
import pandas as pd

tunisian_stock_market = 'Tunisian-Stock-Market.json'
with open(tunisian_stock_market, 'r') as json_file:
    
    json_data = json.load(json_file)

RawStockData = pd.DataFrame(json_data)
stock_names = RawStockData['Stock_name'].unique()



st.header('Price Prediction Model')
st.write(stock_names)
stock = st.text_input('Enter Stock Name').upper()

data = RawStockData[RawStockData['Stock_name'] == stock]
data.reset_index(inplace=True)
columnsToExclude = ['index']
data = data.drop(columns=columnsToExclude)

st.subheader(stock,' Price Data')
st.write(data)

columnsToExclude = ['Code_isin', 'Adj_low' , 'Adj_High' , 'Volume','Stock_name']
data = data.drop(columns=columnsToExclude)
data2 = data
data2.set_index('Date', inplace=True)
st.subheader(stock,' Line Chart')
st.line_chart(data2)

#Splitting Data 
train_data = data[:-100]
test_data = data[-200:]

scaler = MinMaxScaler(feature_range=(0,1))
train_data_scale = scaler.fit_transform(train_data)
test_data_scale = scaler.fit_transform(test_data)

base_days = 100 
x = []
y = []
for i in range(base_days , test_data_scale.shape[0]):
    x.append(test_data_scale[i-base_days:i])
    y.append(test_data_scale[i,0])

x,y = np.array(x) , np.array(y)
x = np.reshape(x,(x.shape[0],x.shape[1],1))

# Using the model and comparing with original prices
st.subheader('Predicted vs Original Prices')
pred = model.predict(x)
pred = scaler.inverse_transform(pred)
preds = pred.reshape(-1,1)
ys = scaler.inverse_transform(y.reshape(-1,1))
preds = pd.DataFrame(preds , columns=['Predicted Price'])
ys = pd.DataFrame(ys , columns=['Original Price'])
chart_data = pd.concat((preds,ys), axis=1)
st.write(chart_data)
st.subheader('Predicted vs Original Chart')
st.line_chart(chart_data)


future_days = 0
future_days = int(st.text_input('How many future days'))
#Predict Future Values
m = y  
z = []
inter = None  
for i in range(base_days, len(m) + future_days):
    m = m.reshape(-1, 1)
    inter = [m[-base_days:, 0]]
    inter = np.array(inter)
    inter = np.reshape(inter, (inter.shape[0], inter.shape[1], 1))
    pred = model.predict(inter)
    m = np.append(m, pred)
    z = np.append(z, pred)


st.subheader(stock,'Predicted Future Days Price ')
z = np.array(z)
z = scaler.inverse_transform(z.reshape(-1,1))
st.line_chart(z)