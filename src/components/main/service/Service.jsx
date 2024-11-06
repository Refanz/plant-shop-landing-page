import ServiceList from "./ServiceList.jsx";

export default function Service() {
    return (
        <div className="flex flex-col items-center py-20 px-5 bg-green-900 relative">
            <div
                className="w-full flex lg:flex-row flex-col max-w-7xl justify-center gap-5"
            >
                <ServiceList/>
            </div>
        </div>
    );
}