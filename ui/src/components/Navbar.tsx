import { NavLink } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import BurgerButton from "./BurgerButton";
import LinkNav from "./Clickables/LinkNav";

interface NavbarProps {
    authenticated: boolean;
}




export default function Navbar({ authenticated }: NavbarProps) {


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (<>
        <div className="w-full h-fit pt-2 z-50">
            <nav className="container text-secondary  px-3 md:px-10 py-2 mx-auto flex justify-between items-center">
                <div className="flex items-center  border border-black">
                    <a href="/" className="text-2xl font-bold">Logo</a>
                </div>
                <div className="invisible  md:visible  flex  flex-row">
                    <LinkNav to="/" label="Home" />
                    <LinkNav to="/search" label="Search" />
                    <LinkNav to="/about" label="About" />
                </div>
                <div className="md:flex hidden justify-center items-center">
                    <a href="/login" className="btn btn-ghost m-1 rounded-full px-5">Login</a>
                    <a href="/register" className="btn btn-outline btn-primary border-2 rounded-full px-10">Register</a>
                </div>
                {/* <button className="block md:hidden w-10 z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><img className="w-10 cursor-pointer" src={mobileMenuOpen ? cross : menuBurger} alt="" /></button> */}
                <BurgerButton className="visible md:hidden" visible={mobileMenuOpen} onClose={() => setMobileMenuOpen(!mobileMenuOpen)} />
                <MobileMenu setVisible={setMobileMenuOpen} visible={mobileMenuOpen} />
            </nav>
        </div>
    </>
    )
}