"use client";

import Image from "next/image"
import CarCardDialog from "./CarCardDialog"
import { carTypes } from "@/types"
import {calculateCarRent} from "@/lib/calculateCarRent"
import { capitalizeFirstLetter } from "@/lib/capitalizeFirstLetter";

const CarCard = ({carData}: carTypes) => {
    return (
        <div className="car card p-6 rounded-lg">
            <h5 className="mt-0 text-lg">{capitalizeFirstLetter(carData.make)} {capitalizeFirstLetter(carData.model)}</h5>
            <div className="rent-price">
                <sup>$</sup>
                <span className="text-2xl font-bold">{calculateCarRent({carData})}</span>
                <sub className="text-sm">/day</sub>
            </div>
            <Image src={"/car.png"} alt="car" width={500} height={50} className="my-6 mx-auto w-[350px] md:w-[500px]"></Image>
            <div className="group flex flex-col gap-x-4 relative">
                <div className="car-card-feature lg:group-hover:opacity-0 flex flex-row justify-between items-center gap-x-4">
                    <div>
                        <Image src={"/gas.svg"} alt="gas icon" width={20} height={20}></Image>
                        <p>{carData.transmission === "a" ? "Automatic" : "Manual"}</p>
                    </div>
                    <div>
                        <Image src={"/tire.svg"} alt="tire icon" width={20} height={20}></Image>
                        <p>{carData.drive}</p>
                    </div>
                    <div>
                        <Image src={"/steering-wheel.svg"} alt="steering wheel icon" width={20} height={20}></Image>
                        <p>{carData.city_mpg} MPG</p>
                    </div>
                </div>
                <CarCardDialog carData={carData}></CarCardDialog>
            </div>
        </div>
    )
}
export default CarCard