import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[];
  rentalDetails: RentalDetail[];
  cars: Car[];
  rentDate: Date;
  returnDate: Date;
  cardNumber: string;
  aa: number;
  yyyy: number;
  securityCode: string;
  imgUrl = 'https://localhost:44376';
  defaultImage = '/images/default.jpg';

  constructor(
    private carService: CarService,
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailById(params['carId']);
      }
    });
  }

  getCarDetailById(carId: number) {
    this.carService.getCarDetailById(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getRental() {
    this.rentalService.getRental().subscribe((response) => {
      this.rentals = response.data;
    });
  }

  addRental(car: Car) {
    let nowDate = new Date().getTime();
    console.log(nowDate);
    // if () {
    //   //TODO Return date validation
    // } else {
    //TODO creta new Rental...
    //   this.toastrService.success();
    //   this.rentalService.addRental(rental);
    // }
  }

  getRentalDetail(): void {
    this.rentalService.getRentalDetail().subscribe((response) => {
      this.rentalDetails = response.data;
    });
  }
}
