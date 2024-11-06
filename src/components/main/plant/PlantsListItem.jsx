export default function PlantsListItem({name, price, imgUrl}) {
    return (
        <div className="bg-white lg:w-1/4 p-2 rounded-lg">
            <img className="w-full" src={imgUrl} alt=""/>
            <div className="flex bg-green-900 p-4 rounded-md justify-between">
                <div className="text-white text-lg">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <i
                    className="bx bx-right-arrow-alt self-end bg-white p-2 text-green-900 rounded-lg text-[25px]"
                ></i>
            </div>
        </div>
    );
}