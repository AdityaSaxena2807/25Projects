import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchImages(geturl) {
      try {
        setLoading(true);
        const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
        const data = await response.json();
        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (e) {
        setErrorMsg(e.message);
        setLoading(false);
      }
    }
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div className="loading">Loading... Please Wait!</div>;
  }
  if (errorMsg) {
    return <div className="error">{errorMsg}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="left-arrow"
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
      />

      {images && images.length
        ? images.map((imageItem, index) => (
            <div
              key={imageItem.id}
              className={index === currentSlide ? "slide active" : "slide"}
            >
              {index === currentSlide && (
                <img
                  src={imageItem.download_url}
                  alt={imageItem.author || "Slider image"}
                  className="slider-image"
                />
              )}
            </div>
          ))
        : null}

      <BsArrowRightCircleFill
        className="right-arrow"
        onClick={() =>
          setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
      />
    </div>
  );
}

export default ImageSlider;
