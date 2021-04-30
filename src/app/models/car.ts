import { CarImage } from "./carImage";

export interface Car {
  carId: number;
  carName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  brandId: number;
  colorId: number;
  carImageId: number;
  carImage: CarImage[];
  modelYear: string;
  descriptions: string;
}
