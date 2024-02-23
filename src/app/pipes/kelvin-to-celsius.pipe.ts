import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius',
})
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(value?: number): string {
    if (typeof value === 'number') return (value - 273.15).toFixed(2);
    return '';
  }
}
