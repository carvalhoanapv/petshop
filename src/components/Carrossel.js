import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../styles/Carrossel.css";
import whiskas_offers from "../assets/whiskas_offers.png";
import Royal_Canin_offers from "../assets/Royal_Canin_offers.png";
import Golden_offers from "../assets/Golden_offers.png";

export const Carrossel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const data = [
    {
      src: whiskas_offers,
      alt: "imagem 1",
    },
    {
      src: Royal_Canin_offers,
      alt: "imagem 2",
    },
    {
      src: Golden_offers,
      alt: "imagem 3",
    }]

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
      
    </div>
  );
};