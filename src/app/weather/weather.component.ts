import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weather: any = null;
  units: any = null;

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeather().subscribe((data: any) => {
      this.weather = data.current_weather;
      this.units = data.current_weather_units;
      console.log(this.weather);
      console.log( this.units)
    });

  }
   getDotColor(temp: number): string {
    if (temp < 0) return 'blue';
    if (temp <= 30) return 'yellow';
    if (temp <= 35) return 'green';
    return 'red';
  }


  getDirection(degree: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(degree / 45) % 8];
  }
}


