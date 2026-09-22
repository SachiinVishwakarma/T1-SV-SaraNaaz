import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ServiceCard from "./ServiceCard";
import servicesTheme from "../../Theme/servicesTheme.js";
import serviceCardTheme from "../../Theme/serviceCardTheme.js";
import { useTheme } from "@emotion/react";

function Services() {
  const services = [
    {
      title: "Authentication Templates",
      description:
        "Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration",
    },
    {
      title: "Authentication Templates",
      description:
        "Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration",
    },
   {
      title: "Authentication Templates",
      description:
        "Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration",
    },
   {
      title: "Authentication Templates",
      description:
        "Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration",
    },
   {
      title: "Authentication Templates",
      description:
        "Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration",
    },
   {
      title: "Authentication Templates",
      description:
        "Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration",
    },
  ];

  
const theme=useTheme();
 const style=servicesTheme(theme);

  return (
    <Box
      id="services"
      sx={style.container}
    >
      <Typography
        variant="h4"
         sx={style.heading}
      >
        What's Included
      </Typography>

      <Box
        sx={style.cardsContainer}
      >
        {services.map((service, index) => (
          <ServiceCard
           key={index}
              title={service.title}
            description={service.description}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Services;