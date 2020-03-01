import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person';
import { environment } from 'src/environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class PersonService {
  public person: Person;

  constructor(private http: HttpClient) {
    console.log("CONSTRUCTOR PERSON SERVICE")
  }

  getPerson(email) {
    this.http.get<Person>(environment.baseApiUrl + 'person/' + email).subscribe(person => {
      console.log(person);
      this.person = person;
    })
  }
}
