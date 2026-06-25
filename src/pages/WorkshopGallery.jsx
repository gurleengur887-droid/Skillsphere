import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    image: "/images/event1.png",
    title: "Teacher Wellness Growth Programme",
    subtitle: "Certificate Presentation",
  },
  {
    image: "/images/event2.png",
    title: "Teacher Wellness Growth Programme",
    subtitle: "Celebrating Educators",
  },
  {
    image: "/images/event3.png",
    title: "Teacher Wellness Growth Programme",
    subtitle: "Learning Together",
  },
  {
    image: "/images/event4.png",
    title: "Teacher Wellness Growth Programme",
    subtitle: "Community of Growth",
  },
  {
    image: "/images/event5.png",
    title: "Teacher Wellness Growth Programme",
    subtitle: "Recognition Ceremony",
  },
];

export default function WorkshopCarousel() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <section className="bg-[#050816] py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

         
          <p className="uppercase tracking-[4px] md:tracking-[5px] text-[#D4AF37] text-[11px] md:text-xs">
  Recent Event
</p>

<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
  Teacher Wellness
  <span className="text-[#D4AF37]">
    {" "}Growth Programme
  </span>
</h2>

<p className="max-w-3xl mx-auto mt-6 text-sm sm:text-base text-gray-400 leading-7">
  Moments from our recent educator wellbeing programme,
  celebrating growth, reflection and professional development.
</p>

        </motion.div>

    {isMobile ? (

  <Swiper
    modules={[Pagination, Autoplay]}
    slidesPerView={1}
    centeredSlides
    spaceBetween={20}
    loop
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    className="pb-14"
  >
    {events.map((event, index) => (
      <SwiperSlide key={index}>

        <div className="mx-auto w-[88%] overflow-hidden rounded-[28px] border border-white/10 bg-[#0C1425]">

          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[360px] object-cover"
          />

          <div className="p-6">

            <p className="uppercase tracking-[3px] text-[10px] text-[#D4AF37]">
              Recent Workshop
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {event.subtitle}
            </h3>

            <p className="mt-3 text-gray-400 text-sm">
              {event.title}
            </p>

          </div>

        </div>

      </SwiperSlide>
    ))}
  </Swiper>

) : (

  <Swiper
    modules={[
      EffectCoverflow,
      Navigation,
      Pagination,
      Autoplay,
    ]}
    effect="coverflow"
    centeredSlides
    slidesPerView="auto"
    loop
    speed={900}
    navigation
    grabCursor
    pagination={{ clickable: true }}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 220,
      modifier: 1.5,
      scale: 0.88,
      slideShadows: false,
    }}
    className="pb-20"
  >
    {events.map((event, index) => (
      <SwiperSlide
        key={index}
        className="!w-[700px]"
      >

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0C1425]">

          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[600px] object-cover"
          />

          <div className="p-8">

            <p className="uppercase tracking-[4px] text-xs text-[#D4AF37]">
              Recent Workshop
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              {event.subtitle}
            </h3>

            <p className="mt-4 text-gray-400">
              {event.title}
            </p>

          </div>

        </div>

      </SwiperSlide>
    ))}
  </Swiper>

)}

      </div>

    </section>
  );
}