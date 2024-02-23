import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { WeatherDetailsService } from 'src/app/services/weather-details.service';
import { Weather } from 'src/app/types/weather';

@Component({
  selector: 'app-weather-conditions',
  templateUrl: './weather-conditions.component.html',
  styleUrls: ['./weather-conditions.component.css'],
})
export class WeatherConditionsComponent implements OnInit {
  locations: string[] = [];
  weatherDetails$: Observable<Weather & { zipCode: string }>[] = [];
  constructor(
    private locationsService: LocalStorageService,
    private weaterDetailes: WeatherDetailsService
  ) {}
  ngOnInit() {
    this.locationsService
      .getLocations()
      .forEach((zipCode) =>
        this.weatherDetails$.push(this.weaterDetailes.getDetails(zipCode))
      );
    this.locationsService.addedLocation.subscribe((zipCode: string) => {
      this.weatherDetails$.push(this.weaterDetailes.getDetails(zipCode)); // Update locations when a new location is added
    });
  }
}
