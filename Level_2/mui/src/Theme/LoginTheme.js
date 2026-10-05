const LoginTheme = (theme) => ({
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.contrastBG,
    fontFamily: theme.typography.fontFamily,
  },

  card: {
    width: "400px",
    minHeight: "430px",
    padding: "45px 33px",
    boxSizing: "border-box",

    backgroundColor: theme.palette.tertiary.main,

    borderRadius: theme.shape.customRadius.sm,

    boxShadow: `0px -2px 4px ${theme.palette.secondary.main}`,
  },

  heading: {
    textAlign: "center",
  },

  headingText: {
    fontSize: theme.typography.customFontSize.xl,
    fontWeight: theme.typography.customFontWeight.bold,
    color: theme.palette.quaternary.main,
  },

  subtitle: {
    marginTop: "3px",
    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.regular,
    color: theme.palette.quaternary.main,
  },

  form: {
    marginTop: "43px",
  },

  field: {
    marginBottom: "19px",
  },

  label: {
    display: "block",
    marginLeft: "7px",
    marginBottom: "4px",

    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.bold,

    color: theme.palette.quaternary.main,
  },

  input: {
    "& .MuiOutlinedInput-root": {
      height: "33px",
      

      backgroundColor: theme.palette.primary.contrastBG,

      borderRadius: theme.shape.customRadius.xxs,

      fontSize: theme.typography.customFontSize.md,
      fontWeight: theme.typography.customFontWeight.regular,

      "& fieldset": {
        border: `1px solid ${theme.palette.secondary.main}`,
      },

      "&:hover fieldset": {
        border: `1px solid ${theme.palette.secondary.main}`,
      },

      "&.Mui-focused fieldset": {
        border: `1px solid ${theme.palette.secondary.main}`,
      },
    },

    "& .MuiOutlinedInput-input": {
      padding: "8px 15px",

      fontSize: theme.typography.customFontSize.xs,
      fontWeight: theme.typography.customFontWeight.regular,

      color: theme.palette.quaternary.main,
    },
  },

  hint: {
    marginTop: "-3px",
    marginLeft: "7px",
    marginBottom: "22px",

    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.regular,

    color: theme.palette.quaternary.main,
  },

  checkRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: "20px",
  },

  remember: {
    display: "flex",
    alignItems: "center",
  },

  checkbox: {
    padding: "0px 4px 0px 0px",

    color: theme.palette.secondary.main,

    "&.Mui-checked": {
      color: theme.palette.secondary.main,
    },
  },

  rememberText: {
    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.regular,
    color: theme.palette.quaternary.main,
  },

  link: {
    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.regular,

    color: theme.palette.secondary.main,

    cursor: "pointer",
  },

  button: {
    height: "33px",

    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.tertiary.main,

    borderRadius: theme.shape.customRadius.xxs,

    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.bold,

    textTransform: "none",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },

  createAccount: {
    marginTop: "17px",
    marginLeft: "7px",
  },

  smallText: {
    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.regular,

    color: theme.palette.quaternary.main,
  },
});

export default LoginTheme;