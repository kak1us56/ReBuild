import Image from 'next/image';
import logo from './images/header-icon.png';

export function HeaderList() {
    return (
        <header>
            <div className="min-h-[71px] bg-[url('/bg-header-list.png')] bg-no-repeat bg-cover bg-center">
                <div className="max-w-[410px] px-4 mx-auto">
                    <div className="flex justify-between items-center pt-[-9px]">
                        <h1 className="text-white text-shadow-[4px_6px_0px_rgba(0,_0,_0,_0.50)] font-semibold text-[28px]/[81.115%]">
                            Перелік об’єктів
                        </h1>
                        <div>
                            <Image src={logo} alt='logo' width={90} />
                        </div>    
                    </div>
                </div>
            </div>
        </header>
    )
}