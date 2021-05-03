import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44376/api/rentals/';
  newPath = '';

  constructor(
    private httpClient: HttpClient,
    ) {}

  getRental(): Observable<ListResponseModel<Rental>> {
    this.newPath = `${this.apiUrl}getall`;
    return this.httpClient.get<ListResponseModel<Rental>>(this.newPath);
  }
  getRentalDetail(): Observable<ListResponseModel<RentalDetail>> {
    this.newPath = `${this.apiUrl}getrentaldetail`;
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.newPath);
  }

  addRental(rental: Rental) {
    // this.newPath = `${this.apiUrl}add`;
    // this.httpClient.post()
    //TODO Rental add...
  }

}
