
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Kumar",
    image: "/assets/images/person-sq-1-min.jpg",
    message:
      "RUWA INDIA provides the best diagnostic services I have experienced. Highly recommended for their reliable results and friendly staff.",
  },
  {
    name: "Anil Sharma",
    image: "/assets/images/person-sq-2-min.jpg",
    message:
      "Their ambulance service saved my family member’s life. Quick response and professional care made all the difference.",
  },
  {
    name: "Priya Singh",
    image: "/assets/images/person-sq-3-min.jpg",
    message:
      "I trust RUWA INDIA with my health. Their commitment to quality and affordability is unmatched in the area.",
  },
  {
    name: "Kavita Joshi",
    image: "/assets/images/person-sq-4-min.jpg",
    message:
      "Booking appointments and accessing reports has never been easier. RUWA’s digital platform is incredibly user-friendly.",
  },
  {
    name: "Rohit Verma",
    image: "/assets/images/person-sq-5-min.jpg",
    message:
      "RUWA’s customer service is exceptional. I received immediate assistance during a critical time. Forever grateful.",
  },
  {
    name: "Neha Kapoor",
    image: "/assets/images/person-sq-6-min.jpg",
    message:
      "Affordable pricing, efficient diagnosis, and caring staff—RUWA INDIA is redefining health access in our community.",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="section testimonials__v2" id="testimonials">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3">Testimonials</span>
            <h2 className="mb-3">What Our Clients Say</h2>
            <p>Trusted by individuals and families across India</p>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial rounded-4 p-4 shadow-sm bg-white mx-2 h-100 border border-light">
                <div className="text-warning d-flex mb-2">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} color="#ffc107" />
                    ))}
                </div>

                <blockquote className="mb-3 text-muted">
                  &ldquo;{t.message}&rdquo;
                </blockquote>

                <div className="testimonial-author d-flex gap-3 align-items-center mt-3">
                  <img
                    className="rounded-circle img-fluid"
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                  />
                  <strong className="fs-6">{t.name}</strong>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
