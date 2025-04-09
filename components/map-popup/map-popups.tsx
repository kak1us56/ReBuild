import { MapPopup } from "./map-popup";
import image1 from './images/image1.png';

export function MapPopups() {
    return (
        <div>
            <MapPopup
                name="ТРЦ “Шевченківський”"
                address="м. Одеса, просп. Шевченка, 4-Д"
                aproximate={140000}
                total={56724}
                img={image1}
                history="14.06.2023 російська ракета влучила у торговий центр “Шевченківський” у м. Одеса,
                внаслідок чого ТРЦ було зруйновано.
                Через брак коштів для відновлення, об’єкт досі знаходиться у стані, незадовільному для експлуатації." />
        </div>
    )
}