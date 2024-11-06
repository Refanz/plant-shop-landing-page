import PlantsTitle from "./PlantsTitle.jsx";
import PlantsList from "./PlantsList.jsx";

export default function Plants() {
    return (
        <div className="flex flex-col items-center bg-[#C5D7CE]">
            <div className="flex flex-col gap-8 py-20 px-5 sm:w-full max-w-7xl">
                <PlantsTitle/>
                <PlantsList/>
            </div>
        </div>
    );
}