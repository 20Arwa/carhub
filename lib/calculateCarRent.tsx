import { carTypes } from "@/types"

export function calculateCarRent({carData}: carTypes): number {
    const basePricePerDay = 50; 
    const mileageFactor = 1 / carData.city_mpg;
    const age = new Date().getFullYear() - carData.year;
    const ageFactor = age < 5 ? 1.2 : age < 10 ? 1 : 0.8;

    let classFactor = 1;
    if (carData.class.toLowerCase().includes("sport")) classFactor = 1.5;
    else if (carData.class.toLowerCase().includes("luxury")) classFactor = 1.8;
    else if (carData.class.toLowerCase().includes("suv")) classFactor = 1.3;

    const rentPricePerDay = basePricePerDay * classFactor * ageFactor * mileageFactor * 10;

    return Math.round(rentPricePerDay);
}
