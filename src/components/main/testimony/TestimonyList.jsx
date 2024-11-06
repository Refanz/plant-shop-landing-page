import person from "../../../assets/person.jpg";
import planting1 from "../../../assets/planting-1.jpg";

export default function TestimonyList() {
    return (
        <div className="flex lg:flex-row flex-col gap-5">
            <div className="flex flex-col">
                <q className="text-white text-xl">
                    I have been a plant enthusiast for years, and GreenThumb Haen has
                    quickly become my go-to for all things green. Their quality
                    plants, convenient delivery, and supportive community make
                    gardening even more enjoyable!
                </q>
                <div className="flex items-center gap-3 mt-16">
                    <img src={person} className="w-16 rounded-full" alt=""/>
                    <div className="flex flex-col text-white">
                        <p className="font-bold">Refanda Surya</p>
                        <p>Programmer</p>
                    </div>
                </div>
            </div>
            <img src={planting1} className="lg:w-2/4 rounded-lg" alt=""/>
        </div>
    );
}