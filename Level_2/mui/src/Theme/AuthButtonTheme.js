 const AuthButtonTheme = (theme) => ({
//take css
createButton: {
    width: "100%",
    height: "48px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.customRadius.xs,
    color: theme.palette.tertiary.main,
    fontSize: theme.typography.customFontSize.sm,
      
    fontWeight: theme.typography.customFontWeight.semibold,
    textTransform: "none",
    marginLeft: "0px",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },

  login: {
    textAlign: "left",
    marginTop: "22px",
    fontSize: theme.typography.customFontSize.sm,
    color: theme.palette.quaternary.main,
  },

  loginLink: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontWeight: theme.typography.customFontWeight.semibold,

    "&:hover": {
      textDecoration: "underline",
    },
  },
 
});

export default AuthButtonTheme;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 