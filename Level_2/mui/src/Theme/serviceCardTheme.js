const serviceCardTheme = (theme)=>({
  card: {
     borderRadius: "15px",
    boxShadow: `0px 2px 8px ${ theme.palette.secondary.main}60`,
  },

  description: {
    marginTop: "15px",
    color: theme.palette.quaternary.main,
  },
});

export default serviceCardTheme;