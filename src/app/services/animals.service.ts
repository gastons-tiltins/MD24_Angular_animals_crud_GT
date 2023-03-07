import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { AnimalsData } from '../app-types';
import handleError from './config.services';
import { Animal } from '../add-animals/add-animals.component';

type AnimalResponse = Animal & { _id: string };

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  getAnimals(catsOnly: boolean) {
    return this.http
      .get<AnimalResponse[]>(
        `http://localhost:3004/animals?catsOnly=${catsOnly}`
      )
      .pipe(catchError(handleError));
  }

  deleteAnimal(id: string) {
    return this.http
      .delete<string>(`http://localhost:3004/animals/${id}`)
      .pipe(catchError(handleError));
  }

  createAnimal(body: Animal) {
    return this.http
      .post<AnimalResponse>('http://localhost:3004/animals', body)
      .pipe(catchError(handleError));
  }
}
