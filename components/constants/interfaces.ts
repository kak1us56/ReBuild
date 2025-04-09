import { StaticImageData } from "next/image";

export interface ListProps {
    name: string;
    address: string;
    img: StaticImageData;
    aproximate: number;
    total: number;
    information?: string;
    history?: string;
}