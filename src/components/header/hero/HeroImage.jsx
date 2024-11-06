import hero from "../../../assets/hero.png";

export default function HeroImage() {
    return (
        <div className="section-2">
            <img
                className="lg:max-w-xl lg:scale-y-[1.5] hidden lg:block lg:translate-y-20 hover:scale-y-[1.6] transition-all"
                src={hero}
                alt="monstera-plant-in-pot"
            />
        </div>
    );
}