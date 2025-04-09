import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2dzZGdmIiwiYSI6ImNtOTh4OXdrdDA3MTcyaXM1MnpoaXcyb3AifQ.xdey_SzV46CErKH7frpRIg';

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
        title: "Метка 1",
        description: "Описание 1",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.712128, 46.398595],
      },
      properties: {
        title: "Метка 2",
        description: "Описание 2",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.747015, 46.49154],
      },
      properties: {
        title: "Метка 3",
        description: "Описание 3",
      },
    },
  ],
};

export function MapBg() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/sgsdgf/cm98xcfnx00jl01qza2pb0zbr',
      center: [30.73, 46.45],
      zoom: 11,
    });

    geojson.features.forEach((feature) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = `url('/marker.png')`;
      el.style.backgroundSize = 'cover';
      el.style.width = '65px';
      el.style.height = '65px';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';

      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
          )
        )
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainer} className="w-full h-screen" />
  )
};