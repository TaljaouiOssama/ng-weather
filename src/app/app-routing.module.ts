import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForcastComponent } from './components/weather-forcast/weather-forcast.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'forecast/:zipcode',
    component: WeatherForcastComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
