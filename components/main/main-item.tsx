import Image, { StaticImageData } from "next/image";

interface ItemProps {
    img: StaticImageData;
    header: string;
    text: string;
    width?: number;
}

export const ButtonsItem: React.FC<ItemProps> = ({ img, header, text, width }) => {
    return (
        <div className="w-[162px] h-[133.5px] rounded-[20px] bg-white border-2 border-[#989898]">
            <div className="flex items-center gap-2 pt-3 pl-[6px]">
                <div>
                    <Image src={img} alt="list" width={width} />
                </div>
                <p className="text-black font-semibold text-[16px]/[131.358%] tracking-[0.2px]">
                    {header}
                </p>
            </div>
            <div className="text-black text-[13px]/[131.358%] font-normal tracking-[0.14px] pl-[7px] pt-[6px] w-[160px]">
                {text}
            </div>
        </div>
    )
}