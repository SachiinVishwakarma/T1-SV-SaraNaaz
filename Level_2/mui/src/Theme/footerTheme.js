const footerTheme =(theme) =>({
  container: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.tertiary.main,
     display: "flex",
     alignItems: "center",
    justifyContent: "space-between",
    padding: "25px 50px",
    marginTop: "60px",
  },

  text: {
    margin: "0",
        fontWeight: theme.typography.customFontWeight.semibold,

   
  },

  buttons: {
    display: "flex",
    alignItems: "center",
  },
});

export default footerTheme;