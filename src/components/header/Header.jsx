import Navbar from "./Navbar.jsx";
import Hero from "./hero/Hero.jsx";

export default function Header() {
    return (
        <header className="flex flex-col items-center p-5">
            <Navbar/>
            <Hero/>
        </header>
    )
}