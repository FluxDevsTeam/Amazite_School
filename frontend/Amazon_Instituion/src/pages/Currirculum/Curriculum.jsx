import React, { useState, useEffect, useRef } from "react";

import "./curriculum.css";
import image12 from "../../assets/curriulum-images/image 12.png";
import image1 from "../../assets/curriulum-images/image1.png";
import image2 from "../../assets/curriulum-images/image2.png";
import image from "../../assets/curriulum-images/image.png";
import image3 from "../../assets/curriulum-images/image3.png";
import image4 from "../../assets/curriulum-images/image4.png";
import image5 from "../../assets/curriulum-images/image5.png";
import image6 from "../../assets/curriulum-images/image6.png";
import image7 from "../../assets/curriulum-images/image-7.png";
import image8 from "../../assets/curriulum-images/image8.png";
import image9 from "../../assets/curriulum-images/image9.png";
import image10 from "../../assets/curriulum-images/image10.png";
import image11 from "../../assets/curriulum-images/image11.png";
import image13 from "../../assets/curriulum-images/image13.png";
import image14 from "../../assets/curriulum-images/image14.png";
import next_btn from "../../assets/curriulum-images/next-btn.png";
import facebook from "../../assets/curriulum-images/Facebook.png";
import twetter from "../../assets/curriulum-images/X.png";
import linkedin from "../../assets/curriulum-images/Linkedin.png";
import whatsapp from "../../assets/curriulum-images/whatsapp.png";
import Hero from "./hero-section";
import Slider from "react-slick";
import SliderCard from "./slider-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import PrevArrow from "../../components/custom-arrow/prevArrow";
// import NextArrow from "../../components/custom-arrow/nextArrow";


const Curriculum = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  };


  return (
    <div className="container">
      <Hero />

      <div className="container-1">
        <div className="horizontal-line"></div>
        <h2>Course Overview</h2>

        <div className="container-courses">
          <h2>Kindergarten Courses</h2>
          <Slider {...settings}>
            <div>
              <SliderCard src={image12} title="Basic Mathematics" link="" />
            </div>
            <div className="courses">
              <SliderCard
                src={image1}
                title="Identification of Shapes and Objects"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image2}
                title="English: Phonics and word recognition"
                link=""
              />
            </div>

            <div className="courses">
              <SliderCard src={image12} title="Basic Mathematics" link="" />
            </div>
            <div className="courses">
              <SliderCard
                src={image1}
                title="Identification of Shapes and Objects"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image2}
                title="English: Phonics and word recognition"
                link=""
              />
            </div>
          </Slider>

          <h2>Grade 1 Courses</h2>
          <Slider {...settings}>
            <div>
              <SliderCard
                src={image}
                title="Mathematics: Addition, Subtraction, e.t.c"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image3}
                title="English Language: Vocabulary Building."
                link=""
              />
            </div>

            <div className="courses">
              <SliderCard src={image4} title="Social studies" link="" />
            </div>
            <div className="courses">
              <SliderCard
                src={image}
                title="Mathematics: Addition, Subtraction, e.t.c"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image3}
                title="English Language: Vocabulary Building."
                link=""
              />
            </div>

            <div className="courses">
              <SliderCard src={image4} title="Social studies" link="" />
            </div>
          </Slider>

          <h2>Grade 2 Courses</h2>
          <Slider {...settings}>
            <div>
              <SliderCard src={image5} title="Mathematics" link="" />
            </div>
            <div className="courses">
              <SliderCard src={image6} title="Critical Thinking" link="" />
            </div>

            <div className="courses">
              <SliderCard src={image7} title="English Language" link="" />
            </div>
            <div className="courses">
              <SliderCard src={image5} title="Mathematics" link="" />
            </div>
            <div className="courses">
              <SliderCard src={image6} title="Critical Thinking" link="" />
            </div>

            <div className="courses">
              <SliderCard src={image7} title="English Language" link="" />
            </div>
          </Slider>

          <h2>Grade 3 Courses</h2>

          <Slider {...settings}>
            <div>
              <SliderCard
                src={image8}
                title=" Mathematics: Understanding fractions and their representation"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image9}
                title="  Science: Conversational fluency and writing longer texts in
              French."
                link=""
              />
            </div>

            <div className="courses">
              <SliderCard
                src={image10}
                title=" French: Conversational fluency and writing longer texts in French."
                link=""
              />
            </div>

            <div className="courses">
              <SliderCard
                src={image8}
                title=" Mathematics: Understanding fractions and their representation"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image9}
                title="  Science: Conversational fluency and writing longer texts in
              French."
                link=""
              />
            </div>

            <div className="courses">
              <SliderCard
                src={image10}
                title=" French: Conversational fluency and writing longer texts in French."
                link=""
              />
            </div>

            <div className="courses">
              <img src={next_btn} alt="" className="next-4" link="" />
            </div>
          </Slider>

          <h2>Grade 4 Courses</h2>

          <Slider {...settings}>
            <div>
              <SliderCard
                src={image11}
                title=" English Language: Reading comprehension, Writing essays with a
                clear structure"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image13}
                title=" French: Understanding French grammar.Exploring French-speaking
                culture"
                link=""
              />
            </div>

            <div className="courses">
              <SliderCard
                src={image14}
                title="   Social Studies: In-depth study of U.S. history, significant
                events and movements e.t.c"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image11}
                title=" English Language: Reading comprehension, Writing essays with a
                clear structure"
                link=""
              />
            </div>
            <div className="courses">
              <SliderCard
                src={image13}
                title=" French: Understanding French grammar.Exploring French-speaking
                culture"
                link=""
              />
            </div>

            <div className="courses">
              <SliderCard
                src={image14}
                title="   Social Studies: In-depth study of U.S. history, significant
                events and movements e.t.c"
                link=""
              />
            </div>
          </Slider>
        </div>

        <div className="container-2">
          <p>
            Together, these subjects form a comprehensive curriculum that
            supports intellectual growth and prepares students for the
            challenges and opportunities ahead. We are excited to embark on this
            educational journey with your child!
          </p>

          <div className="social-icons">
            <div className="icons-links">
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </div>

            <div className="icons-links">
              <a href="">
                <img src={twetter} alt="" />
              </a>
            </div>

            <div className="icons-links">
              <a href="">
                <img src={linkedin} alt="" />
              </a>
            </div>

            <div className="icons-links">
              <a href="">
                <img src={whatsapp} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
