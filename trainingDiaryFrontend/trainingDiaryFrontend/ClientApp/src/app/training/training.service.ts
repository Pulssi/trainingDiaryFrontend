import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GymSet } from '../models/gymSet';

@Injectable({
  providedIn: "root",
})
export class TrainingService {

  constructor(private http: HttpClient) {
  }

  getGymSets$(id: number): Observable<GymSet[]> {
    return this.http.get<GymSet[]>(environment.baseApiUrl + 'gymset/' + id);
  }
}
