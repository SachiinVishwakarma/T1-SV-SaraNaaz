const serviceCardTheme = (theme)=>({
  card: {
     borderRadius: theme.shape.customRadius.sm,
     backgroundColor: theme.palette.tertiary.main,
    boxShadow: `0px 2px 8px ${ theme.palette.secondary.main}60`,
     textAlign: "left",
  },

  heading:{
    fontWeight: theme.typography.customFontWeight.bold,
  },

  description: {
    marginTop: "15px",
    color: theme.palette.quaternary.main,
  },
});

export default serviceCardTheme;