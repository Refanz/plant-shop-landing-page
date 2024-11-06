export default function TipsPlantingItem({title, desc, imgUrl}) {
    return (
        <div className="flex flex-col gap-3">
            <img
                src={imgUrl}
                className="max-w-80 h-48 rounded-xl"
                alt=""
            />
            <p className="text-green-900 text-2xl font-semibold">{title}</p>
            <p className="border-b-2"></p>
            <p>{desc}</p>
        </div>
    );
}