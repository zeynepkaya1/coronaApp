import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

import { Model } from '../model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {

    //line chart

    let chart1 = am4core.create("chartdiv3", am4charts.XYChart);

    // Increase contrast by taking evey second color
    chart1.colors.step = 2;

    // Add data
    chart1.data = generateChartData();

    // Create axes
    let dateAxis = chart1.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    // Create series
    function createAxisAndSeries(field, name, opposite, bullet) {
      let valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());
      if (chart1.yAxes.indexOf(valueAxis) != 0) {
        valueAxis.syncWithAxis = chart1.yAxes.getIndex(0);
      }

      let series = chart1.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.strokeWidth = 2;
      series.yAxis = valueAxis;
      series.name = name;
      series.tooltipText = "{name}: [bold]{valueY}[/]";
      series.tensionX = 0.8;
      series.showOnInit = true;

      let interfaceColors = new am4core.InterfaceColorSet();

      switch (bullet) {
        case "triangle":
          let bullet1 = series.bullets.push(new am4charts.Bullet());
          bullet1.width = 12;
          bullet1.height = 12;
          bullet1.horizontalCenter = "middle";
          bullet1.verticalCenter = "middle";

          let triangle = bullet1.createChild(am4core.Triangle);
          triangle.stroke = interfaceColors.getFor("background");
          triangle.strokeWidth = 2;
          triangle.direction = "top";
          triangle.width = 12;
          triangle.height = 12;
          break;
        case "rectangle":
          let bullet2 = series.bullets.push(new am4charts.Bullet());
          bullet1.width = 10;
          bullet1.height = 10;
          bullet1.horizontalCenter = "middle";
          bullet1.verticalCenter = "middle";

          let rectangle = bullet1.createChild(am4core.Rectangle);
          rectangle.stroke = interfaceColors.getFor("background");
          rectangle.strokeWidth = 2;
          rectangle.width = 10;
          rectangle.height = 10;
          break;
        default:
          let bullet = series.bullets.push(new am4charts.CircleBullet());
          bullet.circle.stroke = interfaceColors.getFor("background");
          bullet.circle.strokeWidth = 2;
          break;
      }

      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 2;
      valueAxis.renderer.line.stroke = series.stroke;
      valueAxis.renderer.labels.template.fill = series.stroke;
      valueAxis.renderer.opposite = opposite;
    }

    createAxisAndSeries("visits", "Visits", false, "circle");
    createAxisAndSeries("views", "Views", true, "triangle");
    createAxisAndSeries("hits", "Hits", true, "rectangle");

    // Add legend
    chart1.legend = new am4charts.Legend();

    // Add cursor
    chart1.cursor = new am4charts.XYCursor();

    // generate some random data, quite different range
    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 100);
      firstDate.setHours(0, 0, 0, 0);

      let visits = 1600;
      let hits = 2900;
      let views = 8700;

      for (var i = 0; i < 15; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

        chartData.push({
          date: newDate,
          visits: visits,
          hits: hits,
          views: views
        });
      }
      return chartData;
    }

  }

  ngOnInit(): void {
  }

}
