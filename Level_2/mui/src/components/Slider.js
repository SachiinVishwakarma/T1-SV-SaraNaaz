import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import sliderTheme from "../Theme/sliderTheme.js";

function Slider() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Complete Auth Flow 1",
      text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
    },
    {
      title: "Complete Auth Flow 2",
      text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
    },
    {
       title: "Complete Auth Flow 3",
      text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
    },
  ];

  const nextSlide = () => {
  let index = current + 1;

  if (index >= slides.length) {
    index = 0;
  }

  setCurrent(index);
};

const previousSlide = () => {
  let index = current - 1;

  if (index < 0) {
    index = slides.length - 1;
  }

  setCurrent(index);
};

  return (
    <Box
     style={sliderTheme.container}
    >
      <Typography
        style={sliderTheme.title}
      >
        {slides[current].title}
      </Typography>

      <Typography
        style={sliderTheme.text}
      >
        {slides[current].text}
      </Typography>

      <Button
        onClick={previousSlide}
         style={{
          ...sliderTheme.arrowButton,
          ...sliderTheme.previousButton,
        }}
      >
        ‹
      </Button>

      <Button
        onClick={nextSlide}
        style={{
          ...sliderTheme.arrowButton,
          ...sliderTheme.nextButton,
        }}
      >
        ›
      </Button>

      <Box
       style={sliderTheme.dots}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrent(index)}
           style={{
              ...sliderTheme.dot,
              ...(current === index ? sliderTheme.activeDot : {}),
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Slider;