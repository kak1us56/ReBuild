import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPopup } from './map-popup';
import Link from 'next/link';
import Image from 'next/image';
import arrow from './images/arrow.png'
import image1 from './images/image1.png';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2dzZGdmIiwiYSI6ImNtOTh4OXdrdDA3MTcyaXM1MnpoaXcyb3AifQ.xdey_SzV46CErKH7frpRIg';

// const geojson = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [30.749293, 46.459499],
//       },
//       properties: {
//         title: "Метка 1",
//         description: "Описание 1",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [30.712128, 46.398595],
//       },  
//       properties: {
//         title: "Метка 2",
//         description: "Описание 2",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [30.747015, 46.49154],
//       },
//       properties: {
//         title: "Метка 3",
//         description: "Описание 3",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [30.751372, 46.453121],
//       },
//       properties: {
//         title: "Метка 3",
//         description: "Описание 3",
//       },
//     },
//   ],
// };

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.749293, 46.459499],
      },
      properties: {
        title: 'ТРЦ “Шевченківський”',
        address: 'м. Одеса, просп. Шевченка, 4-Д',
        aproximate: 140000,
        total: 56724,
        history: '14.06.2023 російська ракета влучила у торговий центр “Шевченківський” у м. Одеса, внаслідок чого ТРЦ було зруйновано. Через брак коштів для відновлення, об’єкт досі знаходиться у стані, незадовільному для експлуатації.'
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.712128, 46.398595],
      },  
      properties: {
        title: 'ТРЦ “Шевченківський”',
        address: 'м. Одеса, просп. Шевченка, 4-Д',
        aproximate: 140000,
        total: 56724,
        history: '14.06.2023 російська ракета влучила у торговий центр “Шевченківський” у м. Одеса, внаслідок чого ТРЦ було зруйновано. Через брак коштів для відновлення, об’єкт досі знаходиться у стані, незадовільному для експлуатації.'
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.747015, 46.49154],
      },
      properties: {
        title: 'ТРЦ “Шевченківський”',
        address: 'м. Одеса, просп. Шевченка, 4-Д',
        aproximate: 140000,
        total: 56724,
        history: '14.06.2023 російська ракета влучила у торговий центр “Шевченківський” у м. Одеса, внаслідок чого ТРЦ було зруйновано. Через брак коштів для відновлення, об’єкт досі знаходиться у стані, незадовільному для експлуатації.'
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.751372, 46.453121],
      },
      properties: {
        title: 'ТРЦ “Шевченківський”',
        address: 'м. Одеса, просп. Шевченка, 4-Д',
        aproximate: 140000,
        total: 56724,
        history: '14.06.2023 російська ракета влучила у торговий центр “Шевченківський” у м. Одеса, внаслідок чого ТРЦ було зруйновано. Через брак коштів для відновлення, об’єкт досі знаходиться у стані, незадовільному для експлуатації.'
      },
    },
  ],
};

export function MapBg() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const [popupData, setPopupData] = useState<any | null>(null); // данные для MapPopup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/sgsdgf/cm98xcfnx00jl01qza2pb0zbr',
      center: [30.73, 46.45],
      zoom: 11,
    });

    geojson.features.forEach((feature) => {
      const el = document.createElement('div');
      el.className = 'marker';
      Object.assign(el.style, {
        width: '60px',
        height: '60px',
        backgroundImage: "url('/marker.png')",
        backgroundSize: 'cover',
        borderRadius: '50%',
        cursor: 'pointer',
      });

      el.addEventListener('click', () => {
        setPopupData({
          name: feature.properties.title,
          address: feature.properties.address,
          aproximate: feature.properties.aproximate,
          total: feature.properties.total,
          history: feature.properties.history,
          img: image1
        });
        setIsPopupOpen(true);
      });

      map.on('click', () => {
        setIsPopupOpen(false);
      });
      el.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates as [number, number]).addTo(map);
    });

    mapRef.current = map;
  }, []);

  return (
    <>
      <div ref={mapContainer} className="fixed top-0 left-0 w-full h-screen z-0" />
      <Link href={'/'} className='absolute top-[48px] left-[14px]'>
        <Image src={arrow} alt='arrow' />
      </Link>
      {popupData && (
        <MapPopup
          name={popupData.name}
          address={popupData.address}
          aproximate={popupData.aproximate}
          total={popupData.total}
          img={popupData.img}
          history={popupData.history}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          setIsOpen={setIsPopupOpen}
        />
      )}
    </>
  );
}