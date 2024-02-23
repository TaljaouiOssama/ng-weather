import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  addedLocation = new EventEmitter<string>();
  addLocation(zipCode: string) {
    const locations = this.getLocations();
    localStorage.setItem('locations', JSON.stringify([...locations, zipCode]));
    this.addedLocation.emit(zipCode);
  }

  getLocations(): string[] {
    const locations = localStorage.getItem('locations') ?? '[]';
    return JSON.parse(locations) as string[];
  }
}
