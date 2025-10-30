"use client"

import Image from "next/image"
import Header from "./Header"
import MainBtn from "./ui/MainBtn"

const Hero = () => {
    
    const handleExploreCars = ():void => {
        const carsSection = document.getElementById("catalogue")
        if (carsSection) 
            carsSection.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className="overflow-x-hidden">
            <Header />
            <div className="container h-screen flex flex-col lg:flex-row items-center lg:justify-between gap-7">
                <div className="text lg:w-1/3">
                    <h3 className="text-5xl">Find, book, rent a car—quick and super easy!</h3>
                    <p className="text-[20px] my-6">Streamline your car rental experience with our effortless booking process.</p>
                    <MainBtn textValue="Explore Cars" handleClick={handleExploreCars} styles="main-btn-blue"/>
                </div>
                <div className="image lg:w-2/3 relative flex justify-end">
                    <Image src={"/hero-car.png"} alt="hero car" width={750} height={750}></Image>
                    <Image 
                        src={"/hero-bg.png"} 
                        alt="hero background" 
                        width={1000} 
                        height={1000} 
                        className="absolute -z-50 h-[380px] md:h-[500px] lg:h-[850px] top-1/2 lg:top-8 -translate-y-1/2 -right-28 md:-right-44 lg:-right-48"
                    ></Image>
                </div>
            </div>
        </div>
    )
}
export default Hero