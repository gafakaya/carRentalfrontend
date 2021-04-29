import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44376/api/';
  newPath = '';
  constructor(private httpClient: HttpClient) {}

  getCarDetail(): Observable<ListResponseModel<Car>> {
    this.newPath = `${this.apiUrl}cars/getcardetail`;
    return this.httpClient.get<ListResponseModel<Car>>(this.newPath);
  }

  getCarDetailById(carId: number): Observable<ListResponseModel<Car>> {
    this.newPath = `${this.apiUrl}cars/getcardetailbyid?carId=${carId}`;
    return this.httpClient.get<ListResponseModel<Car>>(this.newPath);
  }

  getByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    this.newPath = `${this.apiUrl}cars/getbybrandid?brandId=${brandId}`;
    return this.httpClient.get<ListResponseModel<Car>>(this.newPath);
  }

  getByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    this.newPath = `${this.apiUrl}cars/getbycolorid?colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<Car>>(this.newPath);
  }
}
