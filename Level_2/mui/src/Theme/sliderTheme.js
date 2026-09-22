const sliderTheme= (theme)=> ({
  container: {
    width: "550px",
    height: "300px",
    marginTop: "15px",
    padding: "25px",
   
    borderRadius: theme.shape.customRadius.sm,
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.quaternary.main,
    boxShadow: `0px 0px 5px 1px ${theme.palette.primary.main}`,
    position: "relative",
  },

  title: {
    textAlign: "center",

    fontWeight: theme.typography.customFontWeight.bold,
    marginTop: "70px",
  },

  text: {
    textAlign: "center",
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
  borderRadius: theme.shape.customRadius.xxs,
  backgroundColor: theme.palette.secondary.main,
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

borderRadius: theme.shape.customRadius.xs,

    backgroundColor: theme.palette.Quinary.main,
     cursor: "pointer",
  },

 activeDot: {
  width: "32px",
    backgroundColor: theme.palette.secondary.main,
  },
});

export default sliderTheme;