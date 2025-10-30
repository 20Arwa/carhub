"use client"

import { CircleArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 200 ? setVisible(true) : setVisible(false)
        }
        console.log(window.scrollY,visible)
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])
    
    return (
        <>
        {visible &&
            <button 
                className="arrow-up fixed bottom-10 right-3 z-[99999] bg-[var(--color-main)] rounded-full"
                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
            >
                <CircleArrowUp color="white" size={40}></CircleArrowUp>
            </button>
        }
        </>
    )
}
export default ScrollToTop