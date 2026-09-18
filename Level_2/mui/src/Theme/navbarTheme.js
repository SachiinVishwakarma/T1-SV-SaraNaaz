const navbarTheme =(theme)=> ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: "30px",
  },

  toolbar: {
   minHeight: "48px",
    padding: "0 18px",
  },

  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
});

export default navbarTheme;