import icon from "../../assets/ic-plant-shop.png";

export default function FooterList() {
    return (
        <div
            className="flex flex-wrap flex-shrink content-center gap-8 py-20 px-5 justify-between sm:w-full max-w-7xl border-b-2"
        >
            <div className="flex flex-col gap-8 lg:w-1/4">
                <img
                    src={icon}
                    className="w-60 max-h-16 object-cover"
                    alt=""
                />
                <p>
                    Welcome to Plantshop Explore our collection of plants, join our
                    community and start your green adventure today!
                </p>
                <div className="flex text-3xl gap-5 text-white">
                    <i className="bx bxl-facebook bg-green-900 rounded-full p-2"></i>
                    <i className="bx bxl-twitter bg-green-900 rounded-full p-2"></i>
                    <i className="bx bxl-instagram bg-green-900 rounded-full p-2"></i>
                    <i className="bx bxl-linkedin bg-green-900 rounded-full p-2"></i>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-xl font-bold">Quick Links</p>
                <a href="">About</a>
                <a href="">Careers</a>
                <a href="">Press</a>
                <a href="">Corporate Orders</a>
                <a href="">Our Gurantee</a>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-xl font-bold">Support</p>
                <a href="">Help & FAQs</a>
                <a href="">Track Your Order</a>
                <a href="">Shipping</a>
                <a href="">Returns</a>
                <a href="">Contact Support</a>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-xl font-bold">Plant Question</p>
                <a href="">Plant Care Tips</a>
                <a href="">Plant Life Blog</a>
                <a href="">Vera Plant Care App</a>
                <a href="">Meet Plant Mom</a>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-xl font-bold">Contact Us</p>
                <a href="">
                    <i className="bx bx-phone"></i>
                    +1 2435 789
                </a>
                <a href="">
                    <i className="bx bxl-gmail"></i>
                    info@plantshop.com
                </a>
                <a href="">
                    <i className="bx bx-location-plus"></i>
                    Plant Shop, Indonesia
                </a>
            </div>
        </div>
    )
}