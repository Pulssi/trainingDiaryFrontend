import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class PersonService {
  private person: BehaviorSubject<Person>;

  constructor(private http: HttpClient) {
    this.person = new BehaviorSubject<Person>({ idPerson: 0, userName: "", email: "" });
  }

  getValue(): Observable<Person> {
    return this.person.asObservable();
  }
  setValue(newPerson): void {
    this.person.next(newPerson);
  }

  getPerson(email) {
    this.http.get<Person>(environment.baseApiUrl + 'person/' + email).subscribe(person => {
      let _person: Person = person;
      this.setValue(_person);
      console.log("PERSON FETCHED FROM THE API");
    }, error => {
        console.log("ERROR WHEN FETCHING PERSON FROM API");
        console.log(error);
    })
  }
}
