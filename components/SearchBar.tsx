"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Car, Search } from "lucide-react";
import SearchManufacturer from "@/components/SearchManufacturer";

type SearchManuTypes = {
    selectedManufacturers: string | null,
    setselectedManufacturers: React.Dispatch<React.SetStateAction<string | null>>
    selectedModel: string | null,
    setselectedModel: React.Dispatch<React.SetStateAction<string | null>>
}

const SearchBar = (props: SearchManuTypes) => {

    const [errorShow, setErrorShow] = useState<boolean>(false)

    const router = useRouter()
    
    function handdleSubmit(e: React.FormEvent<HTMLFormElement>) : void {
        e.preventDefault()

        // Empty Search Bar Error
        if (!props.selectedManufacturers && !props.selectedModel) {
            setErrorShow(true)
            return
        } 
        setErrorShow(false)

        // Send Selected Values To Url
        const searchParams = new URLSearchParams(window.location.search)

        props.selectedManufacturers ? searchParams.set("manufacturer", props.selectedManufacturers) : searchParams.delete("manufacturer")
        props.selectedModel ? searchParams.set("model", props.selectedModel) : searchParams.delete("model")
        
        router.push(`${window.location.pathname}?${searchParams.toString()}`)
    }

    return (
        <form action="" name="search bar" onSubmit={handdleSubmit} className="w-full md:w-auto">
            <div className="flex items-center gap-2 relative">
                <div className="card rounded-md p-1 pl-2 pr-20 w-full flex flex-col md:flex-row gap-2">
                    <SearchManufacturer selectedManufacturers={props.selectedManufacturers} setselectedManufacturers={props.setselectedManufacturers} />
                    <div className="search-item ">
                        <Car className="text-gray-600 dark:text-gray-300"></Car>
                        <input 
                            className="search-input placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm font-medium" 
                            type="text" 
                            name="model" 
                            id="model" 
                            placeholder="Coroll..." 
                            maxLength={30} onChange={(e) => props.setselectedModel(e.target.value)}
                            value={props.selectedModel ? props.selectedModel: ""}
                        />
                    </div>
                </div>
                <button type="submit" className="main-btn-blue h-full rounded-r-md px-6 md:px-3 absolute -right-2.5">
                    <Search className="text-white" size={25} strokeWidth={3}></Search>
                </button>
            </div>
            <span className={`absolute error-msg text-sm text-red-400 font-medium transition-opacit duration-200  ${errorShow? "opacity-100" : "opacity-0"}`}>Please fill in the search bar</span>
        </form>
    )

}
export default SearchBar
