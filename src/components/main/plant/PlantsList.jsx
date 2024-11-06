import PlantsListItem from "./PlantsListItem.jsx";
import plant1 from "../../../assets/plant-1.png";
import plant2 from "../../../assets/plant-2.png";

export default function PlantsList() {
    return (
        <div className="flex lg:flex-row flex-col justify-between gap-4">
            <PlantsListItem name="Dumb Cane" price="$15.99" imgUrl={plant1}/>
            <PlantsListItem name="Dumb Cane" price="$15.99" imgUrl={plant2}/>
            <PlantsListItem name="Dumb Cane" price="$15.99" imgUrl={plant2}/>
            <PlantsListItem name="Dumb Cane" price="$15.99" imgUrl={plant2}/>
        </div>
    );
}