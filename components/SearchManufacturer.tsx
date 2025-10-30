"use client"

import { useState } from "react";
import { manufacturers } from "@/data/catalogue";
import { Check, ChevronsUpDown, Factory } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type SearchManuTypes = {
    selectedManufacturers: string | null,
    setselectedManufacturers: React.Dispatch<React.SetStateAction<string | null>>
}

export function SearchManufacturer(props: SearchManuTypes) {

    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <div className="flex justify-between items-center">
                <div className="">
                    <Button
                    type="button"
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`md:w-[350px] p-0 bg-transparent border-0 shadow-none justify-start hover:bg-transparent text-light ${props.selectedManufacturers ? "text-black dark:text-white" : "text-gray-400 hover:text-gray-400"}`}
                    >
                    <Factory className="text-gray-600 dark:text-gray-300"></Factory>
                    {props.selectedManufacturers
                        ? manufacturers.find((manuf) => manuf === props.selectedManufacturers)
                        : "Toyot..."}
                    </Button>
                    
                </div>
            </div>
        </PopoverTrigger>
        <PopoverContent className="md:w-[350px] p-0 dark:bg-[var(--color-bg-third-dark)]">
            <Command className="dark:bg-[var(--color-bg-third-dark)]">
            <CommandInput placeholder="Search Manufacturer..." className="h-9 " />
            <CommandList>
                <CommandEmpty>No Manufacturer found.</CommandEmpty>
                <CommandGroup>
                {manufacturers.map((manuf,index) => (
                    <CommandItem
                    className="cursor-pointer"
                    key={index}
                    value={manuf}
                    onSelect={(currentValue) => {
                        props.setselectedManufacturers(currentValue === props.selectedManufacturers ? "" : currentValue)
                        setOpen(false)
                    }}
                    >
                    {manuf}
                    <Check
                        className={cn(
                        "ml-auto",
                        props.selectedManufacturers === manuf ? "opacity-100" : "opacity-0"
                        )}
                    />
                    </CommandItem>
                ))}
                </CommandGroup>
            </CommandList>
            </Command>
        </PopoverContent>
        </Popover>
    )
}
export default SearchManufacturer;