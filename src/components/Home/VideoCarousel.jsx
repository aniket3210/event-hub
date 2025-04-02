import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const videos = [
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743503599/141159-777088863_vkx2zw.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743426571/1908423-uhd_3840_2160_25fps_lgq8ik.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743425993/2890196-hd_1920_1080_30fps_mx7mxx.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743426564/Pouring_Vine_Vine_Pouring._Free_Stock_Video_rwgkx2.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743426556/3188890-hd_1920_1080_25fps_rfac6x.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743508092/183107-870151708_pce7k5.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743426554/161885-824623417_medium_feehpw.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743425992/2022395-hd_1920_1080_30fps_jzft7m.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743503598/156274-812085324_iunzel.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743503602/142039-779071826_medium_kqfva9.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743508097/33902-399148548_medium_gxbqpv.mp4",
  "https://res.cloudinary.com/doysmdgpc/video/upload/v1743426557/5026-182666667_medium_mc4hrh.mp4",
];

const VideoCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPlaying(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <motion.div
      className="w-[1480px] h-screen z-0 sm:h-[90vh] md:h-[80vh] lg:h-[70vh] xl:h-[80vh] relative overflow-hidden m-2 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <video
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              src={video}
              style={{ filter: "brightness(0.7)" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default VideoCarousel;
