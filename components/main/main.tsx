import { ButtonsItem } from "./main-item";
import Link from 'next/link';
import list from './images/list.png';
import map from './images/map.png';
import account from './images/account.png';
import tba from './images/tba.png';
import { useEffect, useState } from "react";
import { sizeHeight } from "../constants/main-functions";

export function Main() {
    const [isHeight, setIsHeight] = useState<boolean>(false);

    useEffect(() => sizeHeight(setIsHeight), []);

    return (
        <main>
            <div className={`bg-[url(/bg-main.png)] bg-fixed bg-repeat bg-[length:80px] bg-[#D9D9D9]
                ${isHeight ? 'min-h-[390px]' : 'min-h-[calc(100vh_-_223px_-_114px)]'}`}>
                <div className="max-w-[410px] px-4 mx-auto">
                    <div className="pt-[23px]">
                        <p className="text-black font-semibold text-[16px] lh-n">
                            Децентралізоване відновлення. Об’єднуємо активістів, волонтерів, інвесторів та забудовників для нашої України.
                        </p>
                    </div>
                    <div className="flex justify-center gap-[8px] pt-6 pb-[23px]">
                        <div className="flex flex-col gap-[26px]">
                            <Link href={'/list'}>
                                <ButtonsItem img={list} header="Всі об’єкти" text="Список всіх об’єктів, які потребують відновлення" />
                            </Link>
                            <Link href={'/cabinet'}>
                                <ButtonsItem img={account} header="Кабінет" text="Особистий кабінет (Волонтера, Інвестора, Забудовника)" />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[26px]">
                            <Link href={'/map'}>
                                <ButtonsItem img={map} width={32} header="Мапа" text="Інтерактивна мапа із локаціями зруйнованих об’єктів" />
                            </Link>
                            <ButtonsItem img={tba} header="Звіти" text="To be announced..." />                            
                        </div>
                    </div>
                </div>                
            </div>
        </main>
    )
}