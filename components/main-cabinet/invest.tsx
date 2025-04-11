import Link from "next/link";
import { useEffect, useState } from "react";

export function Invest() {
    const [sumPercents, setSumPercents] = useState<number>(0);
    const [sumWidth, setSumWidth] = useState<number>(0);

    useEffect(() => {
        const amountPercent = Number((78526 * 100 / 140000).toFixed(1));
        const width = 186 * amountPercent / 100;

        setSumPercents(amountPercent);
        setSumWidth(width);
    }, [])

    return (
        <div>
            <div className="bg-[#B6B5B5] w-[243px] h-[20px]"></div>
            <div className="bg-[#B6B5B5] w-[165px] h-[10px] mt-[11px]"></div>
            <div className="pt-[14px]">
                <div className="flex gap-1">
                    <div className="w-[137px] h-[120px] bg-[#B6B5B5]"></div>
                    <div className="flex flex-col gap-1">
                        <div className="w-[70px] h-[58px] bg-[#B6B5B5]"></div>
                        <div className="w-[70px] h-[58px] bg-[#B6B5B5]"></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center pt-[7px]">
                <p className="text-black text-[15px] lh-n font-normal">
                    Інвестицій зібрано:
                </p>
                <p className="text-black text-[15px] lh-n font-semibold">
                    ??? грн.
                </p>
            </div>
            <div className="flex justify-between items-center pb-2">
                <p className="text-black text-[15px] lh-n font-normal">
                    Інвестовано:
                </p>
                <p className="text-black text-[15px] lh-n font-semibold">
                    ??? грн.
                </p>
            </div>
            <p className="text-black text-[15px] lh-n font-normal">
                Прогрес по об’єкту:
            </p>
            <div className="flex justify-between items-center">
                <div className='bg-[#989898] w-[186px] h-5 rounded-[10px] relative flex justify-center items-center
                    text-white text-[10px] lh-n font-normal'>
                    <div style={{width: `${sumWidth}px`}} className={`absolute top-0 left-0 h-5 bg-black rounded-[10px]`}></div>
                    <p className='z-[3] relative'>
                        {sumPercents}%  
                    </p>
                </div>
                <Link href='#'>
                    <div className="w-[120px] h-[30px] flex justify-center items-center rounded-[10px] bg-[#424242]">
                        <p className="text-white text-[12px] font-semibold lh-n">
                            Детальніше
                        </p>
                    </div>
                </Link>                
            </div>

        </div>
    )
}