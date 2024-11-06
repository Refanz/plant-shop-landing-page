import logo from "../../assets/ic-plant-shop.png";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center w-full max-w-7xl">
            <div className="nav-icon">
                <img
                    className="min-w-48 max-h-16 object-cover"
                    src={logo}
                    alt="ic-plant-shop"
                />
            </div>
            <div className="nav-link">
                <ul className="hidden lg:flex gap-7 text-lg">
                    <li className="hover:text-green-900 hover:font-bold hover:border-b-2 hover:border-b-green-900 transition-all">
                        <a href="">Home</a></li>
                    <li className="hover:text-green-900 hover:font-bold hover:border-b-2 hover:border-b-green-900 transition-all">
                        <a href="">Collection</a></li>
                    <li className="hover:text-green-900 hover:font-bold hover:border-b-2 hover:border-b-green-900 transition-all">
                        <a href="">Shop</a></li>
                    <li className="hover:text-green-900 hover:font-bold hover:border-b-2 hover:border-b-green-900 transition-all">
                        <a href="">Plant Care</a></li>
                    <li className="hover:text-green-900 hover:font-bold hover:border-b-2 hover:border-b-green-900 transition-all">
                        <a href="">Contact</a></li>
                </ul>
            </div>
            <div className="nav-action text-2xl">
                <i className="block lg:hidden bx bx-list-ul"></i>
                <div className="hidden lg:flex gap-2">
                    <i className="bx bx-search"></i>
                    <i className="bx bx-cart"></i>
                    <i className="bx bx-user"></i>
                </div>
            </div>
        </nav>
    )
}