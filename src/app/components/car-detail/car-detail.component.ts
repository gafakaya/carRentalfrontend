import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: Car[];
  rentalDetails: RentalDetail[];
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

  addRental(car: Car) {
    // let datetime = new Date().getTime();
    
    // if () {
    //   this.toastrService.error();//TODO Return date validation
    // } else {
          //TODO creta new Rental...
    //   this.rentalService.addRental(rental);
    // }
  }
}
