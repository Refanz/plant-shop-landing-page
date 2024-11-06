import HeroText from "./HeroText.jsx";
import HeroImage from "./HeroImage.jsx";

export default function Hero() {
    return (
        <div
            className="w-full max-w-7xl flex lg:flex-row flex-col justify-between mt-10"
        >
            <HeroText/>
            <HeroImage/>
        </div>
    );
}