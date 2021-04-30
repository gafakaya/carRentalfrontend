import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  carImages: any;
  imgUrl = 'https://localhost:44376';
  defaultImage = '/images/default.jpg';
  dataLoaded: boolean = false;
  constructor(
    private carService: CarService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getByBrandId(params['brandId']);
      } else {
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
}
