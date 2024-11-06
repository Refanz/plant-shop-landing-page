export default function PlantsTitle() {
    return (
        <div className="flex justify-between">
            <div className="text-green-900 font-bold text-4xl">
                <p>Make your home beautiful</p>
                <p>with these products</p>
            </div>
            <div className="self-end text-4xl">
                <i
                    className="bx bx-left-arrow-alt bg-white rounded-full text-green-900"
                ></i>
                <i
                    className="bx bx-right-arrow-alt bg-green-900 rounded-full text-white"
                ></i>
            </div>
        </div>
    );
}