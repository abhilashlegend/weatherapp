import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/WeatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('Hubli').subscribe({
      next: response => {
        this.weatherData = response;
        this.weatherData.main.temp = Math.floor(response.main.temp);
        console.log(this.weatherData);
      }
    });
  }

  onSubmit() {

  }

  title = 'Angular Weather App';
}
