import { Component, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// Corrected amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  standalone: true,
  imports : [],
  selector: 'app-zoomable-bubble-chart',
  templateUrl: './zoomable-bubble-chart.component.html',
  styleUrls: ['./zoomable-bubble-chart.component.css']
})
export class ZoomableBubbleChartComponent {
  private root!: am5.Root;

  @Input() data: any | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
   
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);
      root._logo?.dispose();

      var chart: any = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelY: "zoomXY",
        pinchZoomX: true,
        pinchZoomY: true
      }));

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
      }));

      xAxis.children.moveValue(am5.Label.new(root, {
        text: "GDP per Capita, USD",
        x: am5.p50,
        centerX: am5.p50
      }), xAxis.children.length - 1);

      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: false
        }),
        tooltip: am5.Tooltip.new(root, {})
      }));

      yAxis.children.moveValue(am5.Label.new(root, {
        rotation: -90,
        text: "Life expectancy, years",
        y: am5.p50,
        centerX: am5.p50
      }), 0);


      // Create series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(am5xy.LineSeries.new(root, {
        calculateAggregates: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "y",
        valueXField: "x",
        valueField: "value",
        seriesTooltipTarget: "bullet",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold]{title}[/]\nLife expectancy: {valueY.formatNumber('#.0')}\nGDP: {valueX.formatNumber('#,###.')}\nPopulation: {value.formatNumber('#,###.')}"
        })
      }));

      series.strokes.template.set("visible", false);


      // Add bullet
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
      var circleTemplate: any = am5.Template.new({});
      circleTemplate.adapters.add('fill', function (fill: any, target: any) {
        var dataItem = target.dataItem;
        if (dataItem) {
          return am5.Color.fromString(dataItem.dataContext.color);
        }
        return fill
      });
      series.bullets.push(function () {
        var bulletCircle = am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill"),
          fillOpacity: 0.8
        }, circleTemplate);
        return am5.Bullet.new(root, {
          sprite: bulletCircle
        });
      });


      // Add heat rule
      // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
      series.set("heatRules", [{
        target: circleTemplate,
        min: 3,
        max: 60,
        dataField: "value",
        key: "radius"
      }]);
      
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Setting_data
      series.data.setAll(this.data);


      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        snapToSeries: [series]
      }));


      // Add scrollbars
      // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));

      chart.set("scrollbarY", am5.Scrollbar.new(root, {
        orientation: "vertical"
      }));


      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);


    });
  } 

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
