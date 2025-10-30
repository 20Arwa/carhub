import { IconCarFilled } from "@tabler/icons-react"

const Logo = () => {
    return (
        <div className="flex items-center">
                <IconCarFilled size={35} className="text-[var(--color-main)] text-2xl"></IconCarFilled>
                <h1 className="text-3xl ml-1.5">CarHub</h1>
        </div>
    )
}
export default Logo