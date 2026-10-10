const heroTheme=(theme)=> ({
  container: {
     display: "flex",
    justifyContent: "space-between",
   padding: "50px 10%",
    marginTop: "97px",
    gap: "40px",
    alignItems: "center",
  },

  content: {
    width: "45%",
  },

  heading: {
    marginBottom: "20px",




  fontWeight: theme.typography.customFontWeight.bold,
  },

  description: {
   color: theme.palette.quaternary.main,
    marginBottom: "25px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
  },

  loginButton: {
   borderColor: theme.palette.secondary.main,
    height: "40px",
   
   borderRadius: theme.shape.customRadius.xs,
    textTransform: "none",
     color: theme.palette.quaternary.main,
  },
});

export default heroTheme;