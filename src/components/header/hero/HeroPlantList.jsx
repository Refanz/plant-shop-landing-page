import plant1 from "../../../assets/plant-1.png";
import plant2 from "../../../assets/plant-2.png";

export default function HeroPlantList() {
    return (
        <>
            <div
                className="plant-card-1 bg-green-900 lg:max-h-40 lg:max-w-80 flex lg:flex-row flex-col justify-between p-5 rounded-3xl"
            >
                <img
                    className="object-contain lg:w-1/2 lg:scale-[2.0] lg:-translate-y-1/4"
                    src={plant1}
                    alt="plant-1"
                />
                <div className="flex flex-col justify-center text-white gap-2">
                    <p>Monstera</p>
                    <p>$12.00</p>
                    <a
                        className="bg-white text-green-900 rounded-full px-5 text-xs py-2"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
            <div
                className="plant-card-2 bg-green-900 lg:max-h-40 lg:max-w-80 flex lg:flex-row flex-col justify-between p-5 rounded-3xl"
            >
                <img
                    className="object-contain lg:w-1/2 lg:scale-[2.0] lg:-translate-y-1/4"
                    src={plant2}
                    alt="plant-1"
                />
                <div className="flex flex-col justify-center text-white gap-2">
                    <p>Monstera</p>
                    <p>$16.00</p>
                    <a
                        className="bg-white text-green-900 rounded-full px-5 text-xs py-2"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </>
    )
}