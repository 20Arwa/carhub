import * as React from "react"
import { useRouter } from "next/navigation"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type customFilterTypes<T> = {
    title: string,
    options: string[],
    selectedOption: T | null,
    setSelectedOption: React.Dispatch<React.SetStateAction<T | null>>
}

const CustomFilter = <T,>({ title, options, selectedOption, setSelectedOption }: customFilterTypes<T>) => {

    const router = useRouter()
    
    const handleChange = (value:string) => {
        const filterParam = new URLSearchParams(window.location.search)
        
        if (value) {
            filterParam.set(title.toLowerCase(), value)
        }
        else {
            filterParam.delete(title.toLowerCase())
        }
        router.push(`${window.location.pathname}?${filterParam.toString()}`)
    }

    return (
        <Select 
        value={selectedOption ? String(selectedOption) : ""}
        onValueChange={(value) => {
            const parsedValue = typeof selectedOption === "number" ? Number(value) : value
            setSelectedOption(parsedValue as T)
            handleChange(value)
        }}>
            <SelectTrigger className="dark:bg-[var(--color-bg-second-dark)] w-[130px]">
                <SelectValue placeholder={selectedOption ? String(selectedOption) : title} />
            </SelectTrigger>
            <SelectContent position="popper" sideOffset={5}  className="max-h-[250px] overflow-y-auto dark:bg-[var(--color-bg-third-dark)]">
                <SelectGroup>
                {options.map((option) => {
                    return <SelectItem key={option} value={option}>{option}</SelectItem>
                })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default CustomFilter
