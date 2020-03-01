import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: "root",
})
export class MealService {
  public person: Person;
  private token: any;

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  //ngOnInit() {
  //  this.token = this.auth.getTokenSilently$().subscribe(data => {
  //    return data;
  //  });
  //}

  getMeals$(id: number): Observable<Meal[]> {
    return this.http.get<Meal[]>(environment.baseApiUrl + 'Meal/' + id);
  }
}
