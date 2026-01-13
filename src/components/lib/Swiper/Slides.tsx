import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { ModalImage } from "../../ModalImage/ModalImage";
import { useState } from "react";

type ProjectImage = {
  caption: string;
  url: string;
};

interface ISlidesFadeProps {
  images: ProjectImage[];
}
export const SlidesFade = ({ images }: ISlidesFadeProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide>
            <img
              style={{ cursor: "pointer" }}
              key={i}
              src={img.url}
              alt={img.caption}
              onClick={() => {
                setOpenModal(true);
                setSelectedImage(img.url);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {openModal && selectedImage && (
        <ModalImage image={selectedImage} setOpenModal={setOpenModal} />
      )}
    </>
  );
};
