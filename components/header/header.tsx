import Image from "next/image";
import logo from './images/header-icon.png'

export function Header() {
    return (
        <header>
            <div className="min-h-[223px] bg-[url('/bg-header.png')] bg-no-repeat bg-cover bg-center relative">
                <div className="absolute top-[-20px] right-0 z-[4]">
                    <Image width={160} src={logo} alt="logo" />
                </div>
                <div className="max-w-[388px] px-4 mx-auto relative z-[4]">
                    <h1 className={`text-shadow-[5px_10px_0px_rgba(0,_0,_0,_0.50)] pt-[63px] text-white text-[64px]/[81.115%] font-extrabold`}>
                        Re<br />BuildUA
                    </h1>
                </div>
                <div className="absolute w-[85px] h-[53px] bg-[#2E5A83] blur-[32px] top-0 left-0 header-block-animation1"></div>
                <div className="absolute w-[90px] h-[67px] bg-[rgba(140,_122,_52,_0.77)] blur-[37.9px] bottom-0 right-0 header-block-animation2"></div>
            </div>
        </header>
    )
}