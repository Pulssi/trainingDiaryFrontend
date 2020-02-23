import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class PersonService {
  public person: Person;

  constructor(private http: HttpClient) {
  }

  getPerson$(email): Observable<Person> {
    return this.http.get<Person>(environment.baseApiUrl + 'person/testuserone@gmail.com');
  }
}
