import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    MapChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
