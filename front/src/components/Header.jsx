import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

const Header = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="header-section">
      <div className="header-wrapper">
        {slides.map((slide, index) => {
          return (
            <div className="header-slide" key={index}>
              {index === current && (
                <div className="slider">
                  <img
                    className="header-image"
                    src={slide.image}
                    alt={slide.alt}
                  />
                  <div className="header-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <button
                      className="btn btn-outline-light"
                      style={{ maxWidth: "160px" }}
                    >
                      {slide.label}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="slider-buttons">
          <i className="bi bi-arrow-left arrowButtons" onClick={prevSlide}></i>
          <i className="bi bi-arrow-right arrowButtons" onClick={nextSlide}></i>
        </div>
      </div>
    </section>
  );
};

export default Header;
