import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { WeatherConditionsComponent } from './components/weather-conditions/weather-conditions.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';
import { WeatherImageDirective } from './directives/weather-image.directive';
import { HomeComponent } from './components/home/home.component';
import { WeatherForcastComponent } from './components/weather-forcast/weather-forcast.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLocationComponent,
    WeatherConditionsComponent,
    WeatherForcastComponent,
    KelvinToCelsiusPipe,
    WeatherImageDirective,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
