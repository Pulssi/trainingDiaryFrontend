import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/person';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public person: Person;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Person>(environment.baseApiUrl + 'person/testuserone@gmail.com').subscribe(result => {
      this.person = result;
      console.log(this.person);
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
