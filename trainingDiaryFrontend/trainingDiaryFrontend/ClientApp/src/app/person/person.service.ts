import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class PersonService {
  public person: Person;

  constructor(private http: HttpClient) {
  }

  public getPerson(email) {
    this.http.get<Person>(environment.baseApiUrl + 'person/testuserone@gmail.com').subscribe(result => {
      this.person = result;
      return this.person;
    }, error => console.error(error));
  }
}
