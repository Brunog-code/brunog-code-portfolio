import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

type ProjectImage = {
  caption: string;
  url: string;
};

interface ISlidesFadeProps {
  images: ProjectImage[];
}
export const SlidesFade = ({ images }: ISlidesFadeProps) => {
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
            <img key={i} src={img.url} alt={img.caption} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
