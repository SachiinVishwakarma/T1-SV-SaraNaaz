//Adding

const SecurityComponntTheme = (theme) => ({
  securityCard: {
    backgroundColor: theme.palette.tertiary.main,
    boxShadow: `0px -3px 10px ${theme.palette.secondary.main}80`,
    borderRadius: theme.shape.customRadius.sm,
    margin: "4% 7% 20% 4%",
    padding: "22px 35px 25px 35px",
    overflow: "hidden",

    "@media (max-width: 700px)": {
      margin: "20px",
      padding: "20px",
    },
  },

  securityTitle: {
    fontSize: theme.typography.customFontSize.lg,
    fontWeight: theme.typography.customFontWeight.bold,
    margin: "0px 0px 25px 0px",
  },

  sectionTitle: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.semibold,
    marginBottom: "10px",
  },

  description: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.regular,
    color: theme.palette.quaternary.main,
    marginBottom: "25px",
  },

  inputRow: {
    display: "flex",
    gap: "25px",
    marginBottom: "10px",

    "& > div": {
      flex: 1,
      minWidth: 0,
    },

    "@media (max-width: 700px)": {
      flexDirection: "column",
      gap: "10px",

      "& > div": {
        width: "100%",
      },
    },
  },

  confirmInput: {
    width: "100%",
    marginBottom: "5px",

    "& > div": {
      width: "100%",
    },
  },

  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "8px",
    marginTop: "15px",
  },

  clearButton: {
    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.medium,
    border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.primary.contrastBG,
       fontWeight: theme.typography.customFontWeight.semibold,
    borderRadius: theme.shape.customRadius.xxs,
    color: theme.palette.quaternary.main,
    padding: "8px 18px",

    
  },

  updateButton: {
    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.medium,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.xxs,
    backgroundColor: theme.palette.secondary.main,
        fontWeight: theme.typography.customFontWeight.semibold,
    
    color: theme.palette.tertiary.main,
    padding: "8px 18px",

   
  },

  divider: {
    height: "1px",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.4,
    margin: "20px 0px",
  },

  informationTitle: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.semibold,
    marginBottom: "25px",
  },

  infoRow: {
    display: "flex",
    gap: "12px",

    "@media (max-width: 700px)": {
      flexDirection: "column",
    },
  },

  infoCard: {
    flex: 1,
    width: "0px",
    height: "155px",
    backgroundColor: theme.palette.primary.contrastBG,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.sm,
    padding: "15px 18px",
    boxSizing: "border-box",
  },

infoIcon: {
  width: "10%",
  height: "auto",
  objectFit: "contain",
  marginBottom: "10px",
},

  infoCardTitle: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.semibold,
    marginBottom: "8px",
  },

  infoText: {
    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.regular,
  },
});

export default SecurityComponntTheme;