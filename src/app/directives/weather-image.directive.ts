import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appWeatherImage]',
})
export class WeatherImageDirective {
  @HostBinding('src')
  imageSrc = '';
  @Input()
  set weatherCondition(value: string) {
    this.imageSrc = this.getWeatherIcon(value);
  }
  private getWeatherIcon(value: string) {
    switch (value) {
      case 'Rain':
        return 'https://www.angulartraining.com/images/weather/rain.png';
      case 'Clouds':
      case 'Mist':
        return 'https://www.angulartraining.com/images/weather/clouds.png';
      case 'Snow':
        return 'https://www.angulartraining.com/images/weather/snow.png';
      default:
        return 'https://www.angulartraining.com/images/weather/sun.png';
    }
  }
}
