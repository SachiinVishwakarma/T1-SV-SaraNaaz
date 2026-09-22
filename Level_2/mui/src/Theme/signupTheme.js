const signupTheme = (theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    backgroundColor: theme.palette.primary.contrastBG,
  },

  card: {
    width: "460px",
    backgroundColor: theme.palette.tertiary.main,
    borderRadius: theme.shape.customRadius.md,
    padding: "35px",
    boxShadow: `0px 10px 30px ${theme.palette.quaternary.main}30`,
    borderTop: `4px solid ${theme.palette.secondary.main}`,
  },

  heading: {
    
    fontSize: theme.typography.customFontSize.xl,
    fontWeight: theme.typography.customFontWeight.semibold,
    color: theme.palette.quaternary.main,
    marginBottom: "8px",
  },

  subtitle: {
    color: theme.palette.quaternary.main,
    
    fontSize: theme.typography.customFontSize.sm,
    marginBottom: "30px",
  },

  row: {
    display: "flex",
    gap: "18px",
  },

  inputGroup: {
    flex: 1,
    marginBottom: "20px",
  },

  label: {
    display: "block",

    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.semibold,
    color: theme.palette.quaternary.main,
    marginBottom: "8px",
    paddingLeft: "10px",
  },

  input: {
    width: "100%",
    height: "48px",

    "& .MuiOutlinedInput-root": {
      height: "48px",
      
      borderRadius: theme.shape.customRadius.xs,
      
    
      backgroundColor: theme.palette.primary.contrastBG,

      "& fieldset": {
        border: `1.5px solid ${theme.palette.secondary.main}`,
      },

      "&:hover fieldset": {
        borderColor: theme.palette.secondary.main,
      },

      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },

    "& input": {
      padding: "0 14px",
    
      fontSize: theme.typography.customFontSize.sm,
      color: theme.palette.quaternary.main,
    },
  },

  note: {
  
    fontSize: theme.typography.customFontSize.xs,
    color: theme.palette.quaternary.main,
    marginTop: "-6px",
    marginBottom: "10px",
  },

  terms: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "15px",
    marginLeft: "0px",
  },

  checkbox: {
    color: theme.palette.secondary.main,

    "&.Mui-checked": {
      color: theme.palette.secondary.main,
    },
  },

  termsLabel: {
    fontSize: theme.typography.customFontSize.sm,
    color: theme.palette.quaternary.main,
  },

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

export default signupTheme;

