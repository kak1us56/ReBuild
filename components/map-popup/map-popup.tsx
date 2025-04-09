import Image from 'next/image';
import Link from 'next/link';
import { ListProps } from '../constants/interfaces';
import { useEffect, useState } from 'react';

export const MapPopup: React.FC<ListProps> = ({ name, address, aproximate, img, total, history }) => {
    const [sumPercents, setSumPercents] = useState<number>(0);
    const [sumWidth, setSumWidth] = useState<number>(0);

    useEffect(() => {
        const amountPercent = Number((total * 100 / aproximate).toFixed(1));
        const width = 280 * amountPercent / 100;

        setSumPercents(amountPercent);
        setSumWidth(width);
    }, [])

    return (
        <div className="w-full min-h-[250px] absolute bottom-0 bg-white rounded-t-[20px]">
            <div className='max-w-[379px] mx-auto px-4'>
                <div className="w-20 h-1 rounded-[2px] bg-[#404040] mx-auto mt-[18px]"></div>
                <h1 className='text-black text-[24px] lh-n font-bold pt-[28px]'>
                    {name}
                </h1>
                <p className='text-[12px] lh-n font-semibold text-[#464646] pb-4'>
                    {address}
                </p>
                <div>
                    <Image src={img} alt='img' />
                </div>
                <div className='pt-5'>
                    <p className='text-[#464646] text-[15px] lh-n font-normal'>
                        Історія: <br />{history}  
                    </p>
                </div>
                <div className="flex justify-between items-center pt-[7px]">
                    <p className="text-black text-[15px] lh-n font-normal">
                        Орієнтовна вартість відновлення:
                    </p>
                    <p className="text-black text-[15px] lh-n font-semibold">
                        {aproximate} грн.
                    </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                    <p className="text-black text-[15px] lh-n font-normal">
                        Інвестицій зібрано:
                    </p>
                    <p className="text-black text-[15px] lh-n font-semibold">
                        {total} грн.
                    </p>
                </div>
                <div className='bg-[#989898] w-[280px] h-5 rounded-[10px] mx-auto relative flex justify-center items-center
                    text-white text-[12px] lh-n font-normal'>
                    <div style={{width: `${sumWidth}px`}} className={`absolute top-0 left-0 h-5 bg-black rounded-[10px]`}></div>
                    <p className='z-[3] relative'>
                        {sumPercents}%  
                    </p>
                   
                </div>
                <Link href='#'>
                    <div className='w-[180px] h-10 bg-[#424242] rounded-[10px] flex justify-center items-center mx-auto my-[18px]'>
                        <p className='text-white text-[12px] lh-n font-semibold'>
                            Подати заявку на інвестиції
                        </p>
                    </div>                
                </Link>
            </div>
        </div>
    )
}