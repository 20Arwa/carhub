"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import MainBtn from "@/components/ui/MainBtn";
import ScrollToTop from "@/components/ScrollToTop";

import carsData from "@/data/cars";
import { yearsOfProduction } from "@/data/catalogue";
import { fuels } from "@/data/catalogue";

export default function Home() {
  const router = useRouter()

  // Selected values
  const [selectedManufacturers, setselectedManufacturers] = useState<string | null>(null)
  const [selectedModel, setselectedModel] = useState<string | null>(null)
  const [selectedYear, setselectedYear] = useState<number| string | null>(null)
  const [selectedFuel, setselectedFuel] = useState<string | null>(null)

  // Number Of Visible Cars
  const [carsLimit, setCarsLimit] = useState<number>(8)

  // Get Values From URL
  const searchParams = useSearchParams()
  const manufacturer = searchParams.get("manufacturer")
  const model = searchParams.get("model")
  const year = searchParams.get("year")
  const fuel = searchParams.get("fuel")

  // Set Selected Values
  useEffect(() => {
    if (manufacturer) 
      setselectedManufacturers(manufacturer)
    if (model) 
      setselectedModel(model)
    if (year) 
      setselectedYear(year)       
    if (fuel) 
      setselectedFuel(fuel)
  }, [])

  // Filter Cars
  const filterCars = carsData.filter((car) => {
  const matchesManufacturer = manufacturer ? 
    manufacturer == "All" ? true : car.make.toLowerCase() === manufacturer.toLowerCase()
    : true

    const matchesModel = model ? car.model.toLowerCase().includes(model.toLowerCase()) : true

    const matchYear = year ? 
    year == "All" ? true : car.year.toString() === year
    : true
    
    const matchFuel = fuel ? 
    fuel == "All" ? true : car.fuel_type === fuel
    : true

    return matchesManufacturer && matchesModel && matchYear && matchFuel
  })

  // Convert Filterd Cars To Elements
  const carsEles = filterCars.slice(0,carsLimit).map((car,index) => {
    return <CarCard key={index} carData={car}></CarCard>
  })

  // Scroll To Cars Catalogue After Searching
  useEffect(() => {
    if (manufacturer || model || year || fuel) {
      const carsSection = document.getElementById("catalogue")
      if (carsSection) 
        carsSection.scrollIntoView({behavior: "smooth"})
    }
    setCarsLimit(8)
  }, [manufacturer , model , year , fuel])

  // Click On Show More Cars
  const showMoreCars = () : void => {
    setCarsLimit((prev) => prev + 8)
  }
  
  // Click On Clear All (Search And Filter)
  const clearAll = () => {
    setselectedManufacturers(null)
    setselectedModel(null)
    setselectedYear(null)
    setselectedFuel(null)
    setCarsLimit(8)

    const searchParamsToClear = new URLSearchParams(window.location.search)
    searchParamsToClear.delete("manufacturer")
    searchParamsToClear.delete("model")
    searchParamsToClear.delete("year")
    searchParamsToClear.delete("fuel")

    router.push(`${window.location.pathname}`)

    setTimeout(() => { 
      const carsSection = document.getElementById("catalogue"); 
      if (carsSection) carsSection.scrollIntoView({ behavior: "smooth" }); 
      }, 500); 
  }

  return (
    <>
    <Hero />
    <div className="catalogue container my-20 py-5" id="catalogue">
      <div>
        <h2 className="text-5xl">Car Catalogue</h2>
        <p className="text-[20px] my-4">Explore our cars you might like</p>
      </div>

      {/* Search And Filter */}
      <div className="search-bar flex flex-col lg:flex-row lg:items-center justify-between gap-y-5 my-12">
        <div className=" flex flex-col lg:flex-row md:gap-x-8 justify-between items-start lg:items-center gap-5">
          <SearchBar selectedManufacturers={selectedManufacturers} setselectedManufacturers={setselectedManufacturers} selectedModel={selectedModel} setselectedModel={setselectedModel}  />
          <div className="flex items-center gap-x-1">
            <CustomFilter title="Year" options={yearsOfProduction} selectedOption={selectedYear} setSelectedOption={setselectedYear}></CustomFilter>
            <CustomFilter title="Fuel" options={fuels} selectedOption={selectedFuel} setSelectedOption={setselectedFuel}></CustomFilter>
          </div>
        </div>

          <button 
            onClick={clearAll}   
            disabled={!manufacturer && !model && !year && !fuel}
            className={`w-[80px] text-md bg-red-700 text-white rounded-md py-1 lg:ml-3 ${!manufacturer && !model && !year && !fuel? "opacity-50 cursor-not-allowed" : ""}`}
            >Clear All
          </button>        
      </div>
        
      {/* Cars */}
      <div className={`cars grid ${carsEles.length == 0 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"} gap-6`}>
        {carsEles.length == 0 ? <p className="text-xl text-center">No Cars Found</p> : carsEles}
      </div>
      <div className="flex justify-center mt-5">
        {carsEles.length > 0 && carsLimit < filterCars.length &&  (
          <MainBtn textValue="Show more" handleClick={showMoreCars} styles="main-btn-blue"></MainBtn>)
        }
      </div>
    </div>

    <ScrollToTop></ScrollToTop> {/* Scroll To Top Arrow */}
    </>
  );
}