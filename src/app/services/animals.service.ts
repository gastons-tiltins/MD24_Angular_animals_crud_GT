import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalsData } from '../app-types';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3000/animals');
  }

  deleteData(id: number) {
    return this.http.delete(`http://localhost:3000/animals/${id}`);
  }
}
