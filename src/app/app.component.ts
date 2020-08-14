import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  model = new Model();

  getItems() {
    return this.model.items;
  }

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      // Exclude Antartica
      polygonSeries.exclude = ["AQ"];

      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true;

      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.polygon.fillOpacity = 0.6;


      // Create hover state and set alternative fill color
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = chart.colors.getIndex(0);

      // Add image series
      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.mapImages.template.propertyFields.longitude = "longitude";
      imageSeries.mapImages.template.propertyFields.latitude = "latitude";
      imageSeries.mapImages.template.tooltipText = "{title}";
      imageSeries.mapImages.template.propertyFields.url = "url";

      let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle.radius = 2;
      circle.propertyFields.fill = "color";


      function animateBullet(circle) {
        let animation = circle.animate([{ property: "scale", from: 1, to: 4 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function (event) {
          animateBullet(event.target.object);
        })
      }

      let colorSet = new am4core.ColorSet();

      imageSeries.data = [{
        "title": "Belçika \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111 ",
        "latitude": 50.8371,
        "longitude": 4.3676,
        "color": colorSet.next()
      }, {
        "title": "Danimarka \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 55.6763,
        "longitude": 12.5681,
        "color": colorSet.next()
      }, {
        "title": "Fransa \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 48.8567,
        "longitude": 2.3510,
        "color": colorSet.next()
      }, {
        "title": "İzlanda \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 64.1353,
        "longitude": -21.8952,
        "color": colorSet.next()
      }, {
        "title": "Rusya \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 62.920820,
        "longitude": 92.557695,
        "color": colorSet.next()
      }, {
        "title": "İspanya \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 40.4167,
        "longitude": -3.7033,
        "color": colorSet.next()
      }, {
        "title": "İngiltere \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 51.5002,
        "longitude": -0.1262,
        "url": "http://www.google.co.uk",
        "color": colorSet.next()
      }, {
        "title": "Çin \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 36.290575,
        "longitude": 103.968638,
        "color": colorSet.next()
      }, {
        "title": "Hindistan \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 28.6353,
        "longitude": 77.2250,
        "color": colorSet.next()
      }, {
        "title": "Japonya \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 35.6785,
        "longitude": 139.6823,
        "url": "http://www.google.co.jp",
        "color": colorSet.next()
      }, {
        "title": "Türkiye \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 39.9439,
        "longitude": 32.8560,
        "color": colorSet.next()
      }, {
        "title": "Arjantin \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": -32.660967,
        "longitude": -64.233486,
        "color": colorSet.next()
      }, {
        "title": "Brezilya \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": -15.7801,
        "longitude": -47.9292,
        "color": colorSet.next()
      }, {
        "title": "Kanada \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 59.498332,
        "longitude": -111.443668,
        "color": colorSet.next()
      }, {
        "title": "ABD \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 39.826089,
        "longitude": -98.288282,
        "color": colorSet.next()
      }, {
        "title": "Kongo \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": -4.3369,
        "longitude": 15.3271,
        "color": colorSet.next()
      }, {
        "title": "Mısır \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": 30.0571,
        "longitude": 31.2272,
        "color": colorSet.next()
      }, {
        "title": "Güney Afrika \n Vaka sayısı: 1,111,111\n Ölüm: 111,111\n İyileşme: 1,111,111",
        "latitude": -25.7463,
        "longitude": 28.1876,
        "color": colorSet.next()
      }];
    });
  }
}
