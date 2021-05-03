import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  carImages: any;
  filterText='';
  imgUrl = 'https://localhost:44376';
  defaultImage = '/images/default.jpg';
  dataLoaded: boolean = false;
  routerLink: string;
  constructor(
    private carService: CarService,
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getByColorId(params['colorId']);
      }else {
        this.getCarDetail();
      }
    });
    this.getCarDetail();
  }

  getCarDetail(): void {
    this.carService.getCarDetail().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailById(carId: number) {
    this.carService.getCarDetailById(carId).subscribe((response) => {});
  }

  getByBrandId(brandId: number) {
    this.carService.getByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getByColorId(colorId: number) {
    this.carService.getByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  addRental(car: Car) {
    // let datetime = new Date().getTime();
    
    if (false) {
      this.toastrService.error('This product is out of stock.', car.carName);//TODO Return date validation
    } else {
      this.routerLink = '/car/rental/{{car.carId}}';
    }
  }
}
