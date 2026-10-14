
const helpSupportTheme = (theme) => ({
  pageContent: {
    width: "100%",
    boxSizing: "border-box",
    padding: "28px 14px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 12px",
    },
  },

  helpCard: {
    width: "100%",
    maxWidth: "1000px",
    margin: "2% 7% 20% 3%", 
    padding: "26px 30px 46px",

    minHeight: "386px",
    boxSizing: "border-box",
    // padding: "22px 31px 30px",
    backgroundColor: theme.palette.tertiary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.sm,
    boxShadow: `0px -3px 10px ${theme.palette.secondary.main}80`,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 16px",
      minHeight: "auto",
    },
  },

  heading: {
    fontSize: theme.typography.customFontSize.lg,
    fontWeight: theme.customFontWeight?.semibold || 600,
    color: theme.palette.quaternary.main,
    marginBottom: "20px",

    
  },

  sectionHeading: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "15px",
  },

  sectionTitle: {
    fontSize: theme.typography.customFontSize.md,
    fontWeight: theme.typography.customFontWeight.semibold,
    color: theme.palette.quaternary.main,
  },

  faqIcon: {
    fontSize: theme.typography.customFontSize.lg,
    color: theme.palette.secondary.main, 
  },

  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  faqCard: {
    width: "100%",
    minHeight: "90px",
    boxSizing: "border-box",
    padding: "15px 10px",
    backgroundColor: theme.palette.primary.contrastBG,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.xxs,
  },

  question: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.customFontWeight?.semibold || 600,
    color: theme.palette.quaternary.main,
    marginBottom: "7px",
  },

  answer: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.customFontWeight?.regular || 400,
    lineHeight: 1.5,
    color: theme.palette.quaternary.main,
  },

  contactSection: {
    marginTop: "30px",
  },

  contactIcon: {
    fontSize: theme.typography.customFontSize.lg,
    color: theme.palette.secondary.main,
  },

  contactDescription: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.customFontWeight?.regular || 400,
    lineHeight: 1.5,
    color: theme.palette.quaternary.main,
    marginTop: "15px",
  },
});

export default helpSupportTheme;
