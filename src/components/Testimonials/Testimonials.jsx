import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "./testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Client Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Trusted by Industry Leaders
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Our commitment to quality, innovation and customer satisfaction
            has earned the trust of clients across various industries.
          </p>

        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="mt-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;