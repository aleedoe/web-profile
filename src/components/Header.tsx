import Link from "next/link";
import HamburgerHeader from "./HamburgerHeader";

const Header = () => {

    return (
        <nav className="backdrop-blur-sm fixed w-full h-16 bg-white/75 z-50 border-b-2 border-black/15">
            <div className="lg:flex md:flex hidden h-full gap-8 justify-center items-center">
                <Link rel="stylesheet" href="#about" >About</Link>
                <Link rel="stylesheet" href="#skill" >Skills</Link>
                <Link rel="stylesheet" href="#project" >Projects</Link>
                <Link rel="stylesheet" href="#experience" >Experiences</Link>
            </div>
            <div className="lg:hidden md:hidden flex h-full justify-end items-center px-4">
                <HamburgerHeader />
            </div>
        </nav>
    );
};

export default Header;