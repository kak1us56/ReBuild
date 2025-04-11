import { Roboto_Mono } from "next/font/google"
import Link from "next/link";

const robotoMono: any = Roboto_Mono({
    subsets: ["latin", "cyrillic"],
  });

export function Footer() {
    return (
        <footer>
            <div className="bg-[#1A1A1A] min-h-[114px]">
                <div className="max-w-[338px] px-4 mx-auto">
                    <div className="text-white text-[12px]/[131.358%] tracking-[0.12px] font-semibold pt-[14px] flex justify-between">
                        <div className="flex flex-col gap-[5px]">
                            <Link href={'/list'}>
                                Загальний список
                            </Link>
                            <Link href={'/map'}>
                                Інтерактивна мапа
                            </Link>
                            <Link href={'/cabinet'}>
                                Особистий кабінет
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[5px] text-right">
                            <p>
                                Звітність
                            </p>
                            <p>
                                Стати волонтером
                            </p>
                            <p>
                                Контакти
                            </p>
                        </div>
                    </div>
                    <p className={`${robotoMono.className} text-white text-[10px] lh-n font-normal text-center pt-[21px]`}>
                        By 4ht на хакатон FRESH AIR 2025
                    </p>
                </div>
            </div>
        </footer>
    )
}