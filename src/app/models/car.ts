import { CarDetail } from './carDetail';

export interface Car extends CarDetail {
  carId: number;
  brandId: number;
  colorId: number;
  modelYear: string;
  dailyPrice: number;
  description: string;
}
