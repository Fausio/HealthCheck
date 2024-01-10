import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})
export class FetchDataComponent implements OnInit {
  temperaturas?: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>(environment.baseUrl + 'WeatherForecast').subscribe(result => {
      this.temperaturas = result;
    }, error => console.error("erro", error));
  }

  ngOnInit(): void {
     
  }
}
