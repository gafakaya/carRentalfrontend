export interface Rental {
    id: number;
    brandName: string;
    customer: string;
    rantelDate: Date;
    returnDate?: Date;
}