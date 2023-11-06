import type { Loyalty } from "./enums";
import type { Country, Price } from "./types";

export interface Review 
  {
    name: string;
    stars: number;
    loyaltyUser: Loyalty;
    date: string;
  } 

export interface Property {
    image: string;
    title: string;
    price: Price;
    address: {
      firstLine: string;
      city: string;
      postcode: string | number;
      country: Country
    }
    contact: [number, string];
    isAvailable: boolean
}
