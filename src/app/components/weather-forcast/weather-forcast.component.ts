import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDetailsService } from 'src/app/services/weather-details.service';
import { Forecast } from 'src/app/types/forecast';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.css'],
})
export class WeatherForcastComponent {
  forcast$!: Observable<Forecast>;
  @Input()
  set zipcode(value: string) {
    this.forcast$ = this.weaterDetailes.getForcast(value);
  }
  constructor(private weaterDetailes: WeatherDetailsService) {}
}
