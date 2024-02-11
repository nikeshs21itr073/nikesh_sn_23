import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const testimonialData = [
  {
    id: 1,
    text:
      "I rented a car from Dream Car Motors, and I was amazed by the quality and service. The car was clean and in excellent condition. It made my trip enjoyable and hassle-free.",
    name: "Alice Johnson",
    role: "Customer",
    avatar: ava01,
  },
  {
    id: 2,
    text:
      "The staff at Dream Car Motors is incredibly friendly and professional. They helped me choose the perfect car for my family vacation. I highly recommend their services.",
    name: "Bob Alice",
    role: "Customer",
    avatar: ava02,
  },
  {
    id: 3,
    text:
      "My experience with Dream Car Motors was outstanding. The rental process was quick and easy, and the car performed flawlessly. I'll definitely rent from them again.",
    name: "Jane Smith",
    role: "Customer",
    avatar: ava03,
  },
  {
    id: 4,
    text:
      "Dream Car Motors provided me with a great car at an affordable price. The staff was helpful, and the car was in perfect condition. I had a fantastic road trip.",
    name: "John Doe",
    role: "Customer",
    avatar: ava04,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonialData.map((testimonial) => (
        <div key={testimonial.id} className="testimonial py-4 px-3">
          <p className="section__description">{testimonial.text}</p>
          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-25 h-25 rounded-2" />
            <div>
              <h6 className="mb-0 mt-3">{testimonial.name}</h6>
              <p className="section__description">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;

