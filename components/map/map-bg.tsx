import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPopup } from './map-popup';
import Link from 'next/link';
import Image from 'next/image';
import arrow from './images/arrow.png'
import image1 from './images/image1.png';
import { ListProps } from '../constants/interfaces';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2dzZGdmIiwiYSI6ImNtOTh4OXdrdDA3MTcyaXM1MnpoaXcyb3AifQ.xdey_SzV46CErKH7frpRIg';

interface FeatureFromAPI extends ListProps {
  coordinate_heights: number;
  coordinate_width: number;
}

export function MapBg() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const [features, setFeatures] = useState<FeatureFromAPI[]>([]);
  const [popupData, setPopupData] = useState<FeatureFromAPI | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://rebuildua.site/api/get_objects.php');
        const data = await res.json();
        setFeatures(data);
      } catch (error) {
        console.error('Помилка при завантаженні даних:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (mapRef.current || !mapContainer.current || features.length === 0) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/sgsdgf/cm98xcfnx00jl01qza2pb0zbr',
      center: [30.73, 46.45],
      zoom: 11,
    });

    features.forEach((feature) => {
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
        map.flyTo({
          center: [feature.coordinate_width, feature.coordinate_heights],
          zoom: 13,
          offset: [0, -320],
          speed: 1.2,
          curve: 1.5,
          essential: true,
        });
      
        setPopupData({
          name: feature.obj_name,
          address: feature.address_1,
          aproximate: feature.approximate,
          total: feature.total,
          history: feature.history,
          img1: feature.photo_1 ?? '',
          img2: feature.photo_2 ?? '',
          img3: feature.photo_3 ?? '',
          img4: feature.photo_4 ?? '',
          img5: feature.photo_5 ?? '',
        });
        setIsPopupOpen(true);
      });

      map.on('click', () => {
        setIsPopupOpen(false);
      });
      el.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      new mapboxgl.Marker(el).setLngLat([feature.coordinate_width, feature.coordinate_heights]).addTo(map);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [features]);

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
          img1={popupData.img1}
          img2={popupData.img2}
          img3={popupData.img3}
          img4={popupData.img4}
          img5={popupData.img5}
          history={popupData.history}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          setIsOpen={setIsPopupOpen}
        />
      )}
    </>
  );
}