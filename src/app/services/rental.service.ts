import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44376/api/rentals/';
  newPath = '';

  constructor(private httpClient: HttpClient) {}

  getRental(): Observable<ListResponseModel<Rental>> {
    this.newPath = `${this.apiUrl}getall`;
    return this.httpClient.get<ListResponseModel<Rental>>(this.newPath);
  }
  getRentalDetail(): Observable<ListResponseModel<Rental>> {
    this.newPath = `${this.apiUrl}getrentaldetail`;
    return this.httpClient.get<ListResponseModel<Rental>>(this.newPath);
  }
}
