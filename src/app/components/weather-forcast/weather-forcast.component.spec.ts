import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForcastComponent } from './weather-forcast.component';

describe('WheatherForcastComponent', () => {
  let component: WeatherForcastComponent;
  let fixture: ComponentFixture<WeatherForcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForcastComponent],
    });
    fixture = TestBed.createComponent(WeatherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
