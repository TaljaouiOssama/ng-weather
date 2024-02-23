import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Weather } from '../types/weather';
import { Forecast } from '../types/forecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherDetailsService {
  constructor(private http: HttpClient) {}
  getDetails(zipCode: string): Observable<Weather & { zipCode: string }> {
    return this.http
      .get<Weather>(
        `${environment.API_URL}/weather?q=${zipCode}&appid=${environment.API_KEY}`
      )
      .pipe(
        map((value) => ({
          ...value,
          zipCode,
        }))
      );
  }
  getForcast(zipCode: string): Observable<Forecast> {
    return this.http
      .get<Forecast>(
        `${environment.API_URL}/forecast?q=${zipCode}&appid=${environment.API_KEY}`
      )
      .pipe(
        map((response) => ({
          ...response,
          list: response?.list?.filter((_, index: number) => index % 8 === 0),
        }))
      );
  }
}
