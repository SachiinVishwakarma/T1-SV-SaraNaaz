const sliderTheme = {
  container: {
    width: "550px",
    height: "300px",
    marginTop: "15px",
    padding: "25px",
    borderRadius: "28px",
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 0px 5px 1px #062748",
    position: "relative",
  },

  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "70px",
  },

  text: {
    textAlign: "center",
    fontSize: "18px",
    marginTop: "15px",
    padding: "0 70px",
  },

  arrowButton: {
    position: "absolute",
    top: "150px",
    minWidth: "48px",
    width: "48px",
    height: "48px",
    padding: 0,
    borderRadius: "12px",
  backgroundColor: "#40e0d0",
    fontSize: "32px",
  },

  previousButton: {
    left: "20px",
  },

  nextButton: {
    right: "20px",
  },

  dots: {
    position: "absolute",
bottom: "20px",
    left: 0,
    right: 0,
    display: "flex",
justifyContent: "center",
    gap: "10px",
  },

  dot: {
    width: "13px",
    height: "13px",
    
borderRadius: "10px",
    backgroundColor: "#d9d9d9",
     cursor: "pointer",
    transition: "0.3s",
  },

 activeDot: {
  width: "32px",
    backgroundColor: "#40e0d0",
  },
};

export default sliderTheme;