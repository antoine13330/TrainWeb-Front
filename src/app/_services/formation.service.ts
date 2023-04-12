import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Formation} from "../_models/Formations/Formation";

const API_URL = 'http://135.125.236.23:5000/formations/';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(API_URL + 'getall');
  }

  createFormation(): Observable<any> {
    return this.http.post(API_URL + 'create', { responseType: 'text' });
  }
}
