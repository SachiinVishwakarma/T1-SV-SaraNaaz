import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import sliderTheme from "../../Theme/sliderTheme.js";
import { useTheme } from "@emotion/react";

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

const theme=useTheme();
 const style=sliderTheme(theme);

  return (
    <Box
     sx={style.container}
    >
      <Typography variant="h5"
        sx={style.title}
      >
        {slides[current].title}
      </Typography>

      <Typography variant="body1"
        sx={style.text}
      >
        {slides[current].text}
      </Typography>

      <Button
        onClick={previousSlide}
         sx={{
          ...style.arrowButton,
          ...style.previousButton,
        }}
      >
         &#8249;
      </Button>

      <Button
        onClick={nextSlide}
        sx={{
          ...style.arrowButton,
          ...style.nextButton,
        }}
      >
       &#8250;
      </Button>

      <Box
       sx={style.dots}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrent(index)}
           sx={{
              ...style.dot,
              ...(current === index ? style.activeDot : {}),
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Slider;