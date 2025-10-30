import carsData from "./cars";

// Get Data From Cars Data
export const manufacturers = 
[
    "All",
    ...Array.from(
        new Set(carsData.map((car) => (car.make.charAt(0).toUpperCase() + car.make.slice(1))))
    ).sort((a, b) => a.localeCompare(b))
]

export const yearsOfProduction =
[
    "All",
    ...Array.from(
        new Set(carsData.map((car) => (car.year.toString())))
    ).sort((a,b) => b - a)
]

export const fuels = 
[
    "All",
    ...Array.from(
        new Set(carsData.map((car) => (car.fuel_type)))
    )
]
