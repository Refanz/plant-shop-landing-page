export default function ServiceItem({title, desc}) {
    return (
        <div
            className="flex gap-2 lg:justify-between items-center bg-[#ECF2EF] p-5 h-32 lg:w-1/3 rounded-xl"
        >
            <i className="bx bx-car text-5xl text-green-900"></i>
            <div className="service-desc flex flex-col gap-3">
                <p className="font-bold">{title}</p>
                <p>{desc}</p>
            </div>
        </div>
    );
}