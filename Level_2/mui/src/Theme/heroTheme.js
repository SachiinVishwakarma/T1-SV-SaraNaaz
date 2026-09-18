const heroTheme=(theme)=> ({
  container: {
     display: "flex",
    justifyContent: "space-between",
   padding: "50px 10%",
    marginTop: "97px",
    // marginBottom: "60px",
    gap: "40px",
    alignItems: "center",
  },

  content: {
    width: "45%",
  },

  heading: {
    marginBottom: "20px",
  fontWeight: "bold",
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
   borderRadius: "15px",
    textTransform: "none",
     color: theme.palette.quaternary.main,
  },
});

export default heroTheme;