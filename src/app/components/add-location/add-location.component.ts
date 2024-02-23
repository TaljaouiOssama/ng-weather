import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent {
  constructor(private locationsService: LocalStorageService) {}
  addLocation(location: NgForm) {
    this.locationsService.addLocation(location.value.zip);
    location.reset();
  }
}
