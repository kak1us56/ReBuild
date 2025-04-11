import Image, { StaticImageData } from "next/image";
import styles from "./gallery.module.css";

// const images = [
//   { src: "/images/image1.png", alt: "Фото 1", className: "item1" },
//   { src: "/images/image2.png", alt: "Фото 2", className: "item2" },
//   { src: "/images/image3.png", alt: "Фото 3", className: "item3" },
//   // { src: "/img/Rectangle20.png", alt: "Фото 4", className: "item4" },
//   // { src: "/img/Rectangle21.png", alt: "Фото 5", className: "item1" },
//   // { src: "/img/Rectangle22.png", alt: "Фото 6", className: "item2" },
//   // { src: "/img/Rectangle24.png", alt: "Фото 7", className: "item1" },
//   // { src: "/img/Rectangle25.png", alt: "Фото 8", className: "item1" },
// ];

interface ImageGallery {
  image1?: StaticImageData;
  image2?: StaticImageData;
  image3?: StaticImageData;
  image4?: StaticImageData;
  image5?: StaticImageData;
}

export const Gallery: React.FC<ImageGallery> = ({ image1, image2, image3, image4, image5 }) => {
  return (
    // <div className={styles.gallery}>
    //   {images.map((img, idx) => (
    //     <div key={idx} className={styles[img.className]}>
    //       <Image src={img.src} alt={img.alt} width={250} height={200} layout="responsive" />
    //     </div>
    //   ))}
    // </div>
    <div className={`${styles.gallery} ${image1 || image2 || image3 ? 'grid' : 'hidden'}`}>
      <div className={styles.item1}>
        {image1 && (
          <Image
            src={image1}
            alt="Фото 1"
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.item2}>
          {image2 && (
            <Image
              src={image2}
              alt="Фото 2"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div className={styles.item3}>
          {image3 && (
            <Image
              src={image3}
              alt="Фото 3"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
