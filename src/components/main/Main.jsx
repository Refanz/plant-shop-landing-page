import Service from "./service/Service.jsx";
import TipsPlanting from "./tips-planting/TipsPlanting.jsx";
import Plants from "./plant/Plants.jsx";
import Testimony from "./testimony/Testimony.jsx";

export default function Main() {
    return (
        <main>
            <Service/>
            <TipsPlanting/>
            <Plants/>
            <Testimony/>
        </main>

    );
}