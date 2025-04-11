import Image from "next/image";
import Link from "next/link";
import arrow from './images/arrow.png';
import { Profil } from "./cabinet-profil";
import { Invest } from "./invest";

export function MainCabinet() {
    return (
        <main>
            <div className="min-h-[calc(100vh-115px_-_114px)] bg-fixed bg-[url('/bg-main.png')] bg-repeat bg-[length:80px] bg-[#D9D9D9]">
                <div className="max-w-[400px] px-4 mx-auto">
                    <Link href={'/'}>
                        <div className='flex gap-[9px] items-center pt-[19px]'>
                            <div>
                                <Image src={arrow} alt='arrow' />
                            </div>
                            <p className='text-black text-[20px] lh-n font-semibold '>
                                Головне меню
                            </p>
                        </div>                    
                    </Link>
                    <Profil />
                    <div>
                        <h2 className="text-black text-[15px] lh-n font-bold">
                            Мої інвестиції:
                        </h2>
                        <div className="w-[240px] h-[1px] bg-[#B6B5B5]"></div>
                        <div className="flex flex-col gap-[28px] pt-10 pb-[56px]">
                            <Invest />
                            <Invest />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}