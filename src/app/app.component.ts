import { Component, OnInit, ViewEncapsulation, NgZone, ViewChild } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  RootObject: any;
  search;

  SelectedCount: any = {this:this.RootObject};

  constructor(private http: HttpClient) { }

  ngOnInit(){
    let resp = this.http.get("https://api.covid19api.com/summary");
    resp.subscribe((data) => this.RootObject=data);
  }
}
