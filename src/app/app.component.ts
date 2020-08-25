import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

import { Model } from './model';
import { Global, Country, RootObject } from './summary.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  model = new Model();

  getItems() {
    return this.model.items;
  }

  summary$: RootObject[];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    return this.dataService.getSummary()
    .subscribe(data => this.summary$ = data);
  }

  
}
