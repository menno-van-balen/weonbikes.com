import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { slider, cStyle } from "./carousel.module.css";
import CustomImage400 from "../utils/customImage400";
import CustomImage600 from "../utils/customImage600";

const Carousel = ({ imagesObject, size }) => {
  // USAGE: <Carousel imagesObject={[{name: "about.png", alt: "hello", title: "Title", text:"This is me", link: "https://weonbikes.com", linkText: "Our website",}, {name: "oldshop.jpg"}]} />
  // const width = window.innerWidth ?? 1080;

  const settings = {
    dots: true,
    arrows: true,
    // arrows: width < 600 ? false : true,
    // fade: true,
    // lazyLoad: true,
    // vertical: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: width < 600 ? false : true,
    // autoplaySpeed: 4000,
  };
  const format = size || 400;
  // const customFormat = format > 450 ? toString(600) : toString(400)
  const imgMap = imagesObject.map((img, i) => {
    const image =
      img.name && format < 450 ? (
        <CustomImage400 name={img.name} alt={img.alt} />
      ) : (
        <CustomImage600 name={img.name} alt={img.alt} />
      );
    const title = img.title && (
      <h2 style={{ margin: "0.83em 0px" }}>{img.title}</h2>
    );
    const text = img.text && <p>{img.text}</p>;
    const link = img.link && (
      <a href={img.link} target="_blank" rel="noopener noreferrer">
        {img.linkText || img.link}
      </a>
    );
    const cardStyle = {
      minHeight: img.height || "20vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    };
    let card;
    if (title || text || link) {
      if (!image) {
        card = (
          <div style={cardStyle} className={cStyle}>
            {title}
            {text}
            {link}
          </div>
        );
      } else {
        card = (
          <div className={cStyle}>
            {title}
            {text}
            {link}
          </div>
        );
      }
    }

    return (
      <div key={i}>
        {image}
        {card}
      </div>
    );
  });

  return (
    <div className={slider}>
      <Slider {...settings}>{imgMap}</Slider>
    </div>
  );
};

export default Carousel;
