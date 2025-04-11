import { StaticImageData } from "next/image";

export interface ListProps {
    name: string;
    address: string;
    img1?: StaticImageData;
    img2?: StaticImageData;
    img3?: StaticImageData;
    img4?: StaticImageData;
    img5?: StaticImageData;
    aproximate: number;
    total: number;
    information?: string;
    history?: string;
}