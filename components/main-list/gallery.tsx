import Image from "next/image";
import React from "react";

const images = [
  { src: "/images/image1.png", aspect: "col-span-2 row-span-2" }, // большая
  { src: "/images/image2.png", aspect: "" },
  { src: "/images/image3.png", aspect: "" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full max-w-xl">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`${img.aspect} relative w-full h-full overflow-hidden rounded-lg`}
        >
          <Image
            src={img.src}
            alt={`Gallery image ${idx + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
