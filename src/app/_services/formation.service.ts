import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://135.125.236.23:5000/formations/';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<any> {
    return this.http.get(API_URL + 'getAll', { responseType: 'text' });
  }
}
