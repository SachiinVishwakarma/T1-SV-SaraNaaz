import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ServiceCard from "./ServiceCard";
import servicesTheme from "../Theme/servicesTheme.js";
import serviceCardTheme from "../Theme/serviceCardTheme";

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

  return (
    <Box
      id="services"
      style={servicesTheme.container}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
         style={servicesTheme.heading}
      >
        What's Included
      </Typography>

      <Box
        style={servicesTheme.cardsContainer}
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