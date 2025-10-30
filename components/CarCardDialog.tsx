"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import Image from "next/image";
import { carTypes } from "@/types";
import { capitalizeFirstLetter } from "@/lib/capitalizeFirstLetter";

const CarCardDialog = ({carData}: carTypes) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="main-btn main-btn-blue w-full mt-5 lg:mt-0 lg:absolute top-0 right-0 lg:opacity-0 group-hover:opacity-100 self-center transition-all duration-500 hover:bg-[var(--color-main)]">View more</button>
            </DialogTrigger>
        <DialogContent className="w-[40%] dark:bg-[var(--color-bg-second-dark)] gap-0 px-5 py-3">
            <DialogClose asChild>
                <button className="absolute right-2 top-2 rounded-full bg-gray-200 dark:bg-[var(--color-bg-third-dark)] hover:bg-gray-300 p-2 w-8 h-8 transition"></button>
            </DialogClose>
            <DialogHeader>
                <DialogTitle className="bg-linear-to-tr from-blue-500 to-blue-800 p-4 mb-2 rounded-md">
                    <Image src={"/car.png"} alt="car" width={160} height={160} className="mx-auto"></Image>
                </DialogTitle>
                <div className="car-sides-imgs flex justify-between gap-x-2">
                    <div><Image src={"/car-front.png"} alt="front" width={100} height={100}></Image></div>
                    <div><Image src={"/car-side.png"} alt="above" width={100} height={100}></Image></div>
                    <div><Image src={"/car-back.png"} alt="back" width={100} height={100}></Image></div>
                </div>      
            </DialogHeader>
            <h4 className="text-[22px] font-medium">{capitalizeFirstLetter(carData.make)} {capitalizeFirstLetter(carData.model)}</h4>
            <div className="features text">
                {Object.entries(carData).map(([key,value]) => {
                    return (
                        <div key={key} className="flex justify-between mb-1">
                            <p className="text-neutral-500 dark:text-gray-400">{key}</p>
                            <p className="font-medium">{value}</p>
                        </div>
                    )
                })}
            </div>
        </DialogContent>
    </Dialog>
    )
}
export default CarCardDialog