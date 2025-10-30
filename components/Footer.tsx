import Link from "next/link";
import Image from "next/image";
import Logo from "./ui/logo";
import footerLinks from "@/data/footer-links"

const Footer = () => {

    const footerLinksEles = footerLinks.map((link) => {
        return (
            <div key={link.id}>
                <h4 className="text-[20px] mb-4">{link.title}</h4>
                {link.links.map((l) => {
                    return <Link key={l.title} href={l.url} className="block text-gray-500 dark:text-gray-300 mb-2">{l.title}</Link>
                })}
            </div>
        )
    })

    return (
        <footer>
            <div className="container my-10 flex flex-col md:flex-row justify-between gap-20">
                <div className="logo md:w-1/4">
                    <Logo></Logo>
                    <p>Carhub 2025</p>
                    <p>&copy; All Right Reserved</p>
                </div>
                <div className="links flex flex-wrap gap-x-28 gap-y-12">
                    {footerLinksEles}
                </div>
            </div>
            <div className="copyright flex flex-col md:flex-row items-center justify-between p-6 border-t-2 border-gray-200">
                <p>&copy; CarHub. All Right Reserved</p>
                <div className="text-gray-500 dark:text-gray-300">
                    <Link href={"/"}>Privacy & Policy</Link>
                    <Link href={"/"}>Terms & Condtion</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer