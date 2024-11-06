import TipsPlantingItem from "./TipsPlantingItem.jsx";
import planting1 from "../../../assets/planting-1.jpg";
import planting2 from "../../../assets/planting-2.jpg";
import planting3 from "../../../assets/planting-3.jpg";

export default function TipsPlantingList() {
    return (
        <div className="flex lg:flex-row flex-col justify-between gap-3">
            <TipsPlantingItem title="01 Inoculate" desc="Applying a bacterial coating to seeds, enabling the to enrich
                    soil with nitrogen" imgUrl={planting1}/>
            <TipsPlantingItem title="02 Sow the seeds"
                              desc="We approximate our additions rather than measuring the precisely"
                              imgUrl={planting2}/>
            <TipsPlantingItem title="03 Place the pots"
                              desc="We possess of these blockers, equipped with a seed pin mechanism"
                              imgUrl={planting3}/>
        </div>
    );
}