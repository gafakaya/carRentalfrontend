import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44376/api/cars/';
  newPath = '';
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<CarResponseModel> {
    this.newPath = `${this.apiUrl}getall`;
    return this.httpClient.get<CarResponseModel>(this.newPath);
  }

  getCarDetail(): Observable<CarDetailResponseModel> {
    this.newPath = `${this.apiUrl}getcardetail`;
    return this.httpClient.get<CarDetailResponseModel>(this.newPath);
  }

  getCarByBrandId(brandId: number): Observable<CarDetailResponseModel> {
    this.newPath = `${this.apiUrl}getcardetailbybrandid?brandId=${brandId}`;
    return this.httpClient.get<CarDetailResponseModel>(this.newPath);
  }


}
