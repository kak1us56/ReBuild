import { ButtonsItem } from "./main-item";
import list from './images/list.png';
import map from './images/map.png';
import account from './images/account.png';
import tba from './images/tba.png';

export function Main() {
    return (
        <main>
            <div className="bg-[url(/bg-main.png)] bg-repeat bg-[length:80px] bg-[#D9D9D9] h-[100vh]">
                <div className="max-w-[410px] px-4 mx-auto">
                    <div className="pt-[23px]">
                        <p className="text-black font-semibold text-[16px] lh-n">
                            Децентралізоване відновлення. Об’єднуємо активістів, волонтерів, інвесторів та забудовників для нашої України.
                        </p>
                    </div>
                    <div className="flex justify-center gap-[8px] pt-6">
                        <div className="flex flex-col gap-[26px]">
                            <ButtonsItem img={list} header="Всі об’єкти" text="Список всіх об’єктів, які потребують відновлення" />
                            <ButtonsItem img={account} header="Кабінет" text="Особистий кабінет (Волонтера, Інвестора, Відбудовника)" />
                        </div>
                        <div className="flex flex-col gap-[26px]">
                            <ButtonsItem img={map} width={32} header="Мапа" text="Інтерактивна мапа із локаціями зруйнованих об’єктів" />
                            <ButtonsItem img={tba} header="Звіти" text="To be announced..." />                            
                        </div>

                    </div>
                </div>                
            </div>
        </main>
    )
}