export function Profil() {
    return (
        <div className="flex gap-[28px] pt-[41px] pl-[14px] pb-[32px]">
            <div className="w-[96px] h-[128px] bg-[#B6B5B5] rounded-[10px]"></div>
            <div className="flex flex-col gap-[9px]">
                <div className="flex flex-col">
                    <p className="text-[#464646] text-[12px] lh-n font-semibold">
                        Ім’я
                    </p>
                    <div className="w-[105px] h-[20px] bg-[#B6B5B5]">

                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#464646] text-[12px] lh-n font-semibold">
                        Прізвище
                    </p>
                    <div className="w-[134px] h-[20px] bg-[#B6B5B5]">

                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#464646] text-[12px] lh-n font-semibold">
                        Дата народження
                    </p>
                    <div className="flex">
                        <div className="w-[15px] h-[15px] bg-[#B6B5B5]"></div>.
                        <div className="w-[15px] h-[15px] bg-[#B6B5B5]"></div>.
                        <div className="w-[30px] h-[15px] bg-[#B6B5B5]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}