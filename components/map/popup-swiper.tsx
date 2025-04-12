import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'

// const images = [
//     '/images/image1.png',
//     '/images/image2.png',
//     '/images/image3.png',
// ];

interface FotosProps {
  img1?: StaticImageData;
  img2?: StaticImageData;
  img3?: StaticImageData;
  img4?: StaticImageData;
  img5?: StaticImageData;
}

export const PopupSwiper: React.FC<FotosProps> = ({ img1, img2, img3, img4, img5 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const images = [img1, img2, img3, img4, img5].filter(Boolean);

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="overflow-hidden px-4">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              className="flex-[0_0_70%] mx-0 transition-transform"
              key={index}
            >
                <div
                className={`relative w-full h-48 overflow-hidden shadow-xl transition-all duration-500 ${
                    selectedIndex === index
                    ? 'scale-100 blur-0 z-10'
                    : 'scale-80 blur-[3px] opacity-70 z-0'
                }`}
                >
                <Image
                  src={src}
                  alt={`Image ${index}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
