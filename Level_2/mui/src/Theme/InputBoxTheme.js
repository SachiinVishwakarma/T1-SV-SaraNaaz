const InputBoxTheme=(theme)=>({
    label:{
        display: "block",

    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.semibold,
    color: theme.palette.quaternary.main,
    marginBottom: "8px",
    paddingLeft: "10px",

    },

     input: {
    width: "100%",
    height: "40px",

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

  large: {
    width: "100%",
  },
  medium: {
    width: "100%",
  },
    small: {
    width: "100%",
  },

})

export default InputBoxTheme;