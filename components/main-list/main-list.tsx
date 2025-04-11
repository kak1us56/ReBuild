import Image from 'next/image';
import Link from 'next/link';
import arrow from './images/arrow.png'
import { ListItem } from './list-item';
import listItemImg from './images/list-item-img.png';
import sort from './images/sort.png'

export function MainList() {
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
                    <div className='flex justify-between items-center pt-[28px]'>
                        <select name="town" className='text-black text-[16px] lh-n font-semibold w-[162px] bg-white
                            h-[33px] rounded-[3px] shadow-[0px_2px_8.3px_0px_rgba(0,_0,_0,_0.25)]'>
                            <option value="Одеса">Одеса</option>
                            <option value="Київ">Київ</option>
                            <option value="Харків">Харків</option>
                            <option value="Львів">Львів</option>
                        </select>
                        <div>
                            <Image src={sort} alt='sort' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[39px] pt-[23px] pb-[39px]'>
                        <ListItem
                            name='ТРЦ “Шевченківський”'
                            address='м. Одеса, просп. Шевченка, 4-Д' 
                            img={listItemImg}
                            aproximate={140000}
                            total={56724}
                            information='#' />
                        <ListItem
                            name='ТРЦ “Шевченківський”'
                            address='м. Одеса, просп. Шевченка, 4-Д' 
                            img={listItemImg}
                            aproximate={140000}
                            total={56724}
                            information='#' />
                        <ListItem
                            name='ТРЦ “Шевченківський”'
                            address='м. Одеса, просп. Шевченка, 4-Д' 
                            img={listItemImg}
                            aproximate={140000}
                            total={56724}
                            information='#' />
                    </div>
                </div>
            </div>
        </main>
    )
}