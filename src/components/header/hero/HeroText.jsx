import HeroPlantList from "./HeroPlantList.jsx";

export default function HeroText() {
    return (
        <div className="section-1">
            <div className="flex flex-col gap-7 text-green-900">
                <p>Preserve and safeguard our precious planet</p>
                <div className="flex flex-col gap-3 text-5xl font-bold">
                    <p>Plant your tree</p>
                    <p>seedling anywhere</p>
                    <p>across the globe</p>
                </div>
                <p className="border-b-2"></p>
                <a
                    href=""
                    className="flex items-center border rounded-full w-fit py-1 pl-2 pr-7 bg-green-900 text-white font-semibold gap-2"
                >
                    <i className="bx bxs-right-top-arrow-circle text-5xl"></i>
                    Get started
                </a>
            </div>
            <div className="mt-16 flex md:flex-row flex-col gap-5">
                <HeroPlantList />
            </div>
        </div>
    )
}