"use client"

type mainBtnType = {
    textValue: string, 
    styles?: string, 
    handleClick?: React.MouseEventHandler<HTMLButtonElement>, 
    type?: "button" | "submit"
}
const MainBtn = (props: mainBtnType) => {
    return (
        <button 
            type={props.type || "button"} 
            className ={`${props.styles} main-btn`} 
            onClick={props.handleClick} 
        >
            {props.textValue}
        </button>
    )
}
export default MainBtn