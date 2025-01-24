import React, {
  useEffect,
  useState,
} from 'react';

import { useSwiper } from 'swiper/react';

import {
  ArrowBackIos,
  ArrowForwardIos,
} from '@mui/icons-material'; // Material-UI icons

const CustomButton = ({ position }) => {
  const swiper = useSwiper(); // Access the Swiper instance
  const [disable, setDisable] = useState({
    prevButton: true,
    nextButton: false,
  });

  useEffect(() => {
    const updateDisable = () => {
      setDisable({
        prevButton: swiper.isBeginning,
        nextButton: swiper.isEnd,
      });
    };

    swiper.on("slideChange", updateDisable);
    updateDisable();

    return () => {
      swiper.off("slideChange", updateDisable);
    };
  }, [swiper]);

  const commonStyles = {
    cursor: "pointer",
    opacity: disable[position === "previous" ? "prevButton" : "nextButton"] ? 0.5 : 1,
    position: "absolute",
    top: "30%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "50%",
    border: "none",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      {position === "previous" && (
        <button
          onClick={() => swiper.slidePrev()}
          disabled={disable.prevButton}
          style={{
            ...commonStyles,
            // left: "-20px", // Position beside the Swiper container
            visibility: position === "previous" ? "visible" : "hidden",
          }}
        >
          <ArrowBackIos fontSize="small" />
        </button>
      )}
      {position === "next" && (
        <button
          onClick={() => swiper.slideNext()}
          disabled={disable.nextButton}
          style={{
            ...commonStyles,
            // right: "-20px", // Position beside the Swiper container
            right:"0",
            visibility: position === "next" ? "visible" : "hidden",
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </button>
      )}
    </>
  );
};

export default CustomButton;
