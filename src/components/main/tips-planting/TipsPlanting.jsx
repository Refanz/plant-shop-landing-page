import TipsPlantingTitle from "./TipsPlantingTitile.jsx";
import TipsPlantingList from "./TipsPlantingList.jsx";

export default function TipsPlanting() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-8 py-20 px-5 max-w-7xl">
                <TipsPlantingTitle/>
                <TipsPlantingList/>
            </div>
        </div>
    );
}