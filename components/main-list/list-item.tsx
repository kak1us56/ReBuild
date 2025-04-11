import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import { Gallery } from "./gallery";
import { ListProps } from "../constants/interfaces";
// import image1 from './images/list-item-img.png';
// import image2 from './images/list-item-img2.png';
// import image3 from './images/list-item-img3.png';

export const ListItem: React.FC<ListProps> = ({ id, name, address, img1, img2, img3, img4, img5, aproximate, total, information }) => {
    return (
        <div>
            <h1 className="text-black font-bold lh-n text-[24px]">
                {name}
            </h1>
            <p className="text-[#464646] text-[12px] lh-n font-semibold pb-[14px]">
                {address}
            </p>
            <div>
                {/* <Image src={img} alt="img" /> */}
                <Gallery image1={img1} image2={img2} image3={img3} />
            </div>
            <div className="flex justify-between items-center pt-[7px]">
                <p className="text-black text-[15px] lh-n font-normal">
                    Орієнтовна вартість відновлення:
                </p>
                <p className="text-black text-[15px] lh-n font-semibold">
                    {aproximate} грн.
                </p>
            </div>
            <div className="flex justify-between items-center pb-2">
                <p className="text-black text-[15px] lh-n font-normal">
                    Інвестицій зібрано:
                </p>
                <p className="text-black text-[15px] lh-n font-semibold">
                    {total} грн.
                </p>
            </div>
            <Link href={information}>
                <div className="w-[120px] h-[30px] flex justify-center items-center rounded-[10px] bg-[#424242]">
                    <p className="text-white text-[12px] font-semibold lh-n">
                        Детальніше
                    </p>
                </div>
            </Link>
        </div>
    )
}