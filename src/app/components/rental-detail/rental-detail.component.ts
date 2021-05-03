import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  rentalDetails: RentalDetail[];
  dataLoaded = false;
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail(): void {
    this.rentalService.getRentalDetail().subscribe((response) => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
