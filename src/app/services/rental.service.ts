import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44376/api/rentals/';
  newPath = '';

  constructor(private httpClient: HttpClient) {}

  getRental(): Observable<RentalResponseModel> {
    this.newPath = `${this.apiUrl}getall`;
    return this.httpClient.get<RentalResponseModel>(this.newPath);
  }
  getRentalDetail(): Observable<RentalResponseModel> {
    this.newPath = `${this.apiUrl}getrentaldetail`;
    return this.httpClient.get<RentalResponseModel>(this.newPath);
  }
}
