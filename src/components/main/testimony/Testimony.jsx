import TestimonyTitle from "./TestimoniTitle.jsx";
import TestimonyList from "./TestimonyList.jsx";
import TestimonyBrand from "./TestimonyBrand.jsx";

export default function Testimony() {
    return (
        <div className="flex flex-col items-center bg-green-900">
            <div className="flex flex-col gap-8 py-20 px-5 sm:w-full max-w-7xl">
                <TestimonyTitle/>
                <TestimonyList/>
                <TestimonyBrand/>
            </div>
        </div>
    );
}