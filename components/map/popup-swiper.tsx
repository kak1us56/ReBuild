import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';

const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
];

export const PopupSwiper = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
      loop: true,
      slides: {
        perView: 1.2,
        spacing: 16,
        origin: 'center',
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      renderMode: 'performance',
    });
  
    return (
        <div className='overflow-hidden'>
            <div ref={sliderRef} className="keen-slider px-4 pt-4">
                {images.map((img, i) => (
                    <div
                        className={`keen-slider__slide flex justify-center transition-all duration-300 ${
                            i === currentSlide ? 'scale-100 blur-0' : 'scale-80 blur-sm opacity-60'
                        }`}
                        >
                        <div className="w-[260px] h-[170px] overflow-hidden shadow-xl bg-white relative">
                            <Image src={img} alt={`slide-${i}`} fill className="object-cover" />
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    );
}