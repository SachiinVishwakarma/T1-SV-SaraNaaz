
//Adding
const NotificationTheme = (theme) => ({
  card: {
    width: "auto",
    minHeight: "440px",
    margin: "4% 7% 20% 4%",
    padding: "26px 30px 46px",
    boxSizing: "border-box",
    backgroundColor: theme.palette.tertiary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.md,
    boxShadow: `0px -3px 10px ${theme.palette.secondary.main}80`,

    [theme.breakpoints.down("sm")]: {
      margin: "15px",
      padding: "20px 16px",
      minHeight: "auto",
    },
  },

  title: {
    fontSize: theme.typography.customFontSize.lg,
    fontWeight: theme.typography.customFontWeight.bold,
    color: theme.palette.quaternary.main,
    marginBottom: "24px",
  },

  section: {
    marginBottom: "26px",
  },

  sectionHeading: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  },

  heading: {
    fontSize: theme.typography.customFontSize.md,
    fontWeight: theme.typography.customFontWeight.semibold,
    color: theme.palette.quaternary.main,
  },

  description: {
    fontSize: theme.typography.customFontSize.md,
    marginBottom: "18px",
    color: theme.palette.text.primary,
  },

  preferenceContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "18px",
    width: "100%",
    alignItems: "stretch",
  },

  preferenceCard: {
    flex: "0 0 46%",

    minWidth: 0,
    minHeight: "140px",
    padding: "14px 16px",
    boxSizing: "border-box",
    backgroundColor: theme.palette.primary.contrastBG,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.xs,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  icon: {
    fontSize: theme.typography.customFontSize.lg,
    color: theme.palette.secondary.dark,
    marginBottom: "5px",
  },

  preferenceTitle: {
    fontSize: theme.typography.customFontSize.md,
    fontWeight: theme.typography.customFontWeight.medium,
    color: theme.palette.quaternary.main,
    marginBottom: "3px",
  },

  smallDescription: {
    fontSize: theme.typography.customFontSize.sm,
    color: theme.palette.text.primary,
  },

  checkboxLabel: {
    margin: "1px 0 0 -7px",

    "& .MuiFormControlLabel-label": {
    fontSize: theme.typography.customFontSize.sm,
    },
  },

  checkbox: {
    padding: "3px",
    color: theme.palette.secondary.main,

    "&.Mui-checked": {
      color: theme.palette.secondary.main,
    },

    "& .MuiSvgIcon-root": {
      fontSize: theme.typography.customFontSize.md,
    },
  },

  activitySection: {
    marginTop: "24px",
  },

  activityIcon: {
    fontSize: theme.typography.customFontSize.lg,
    color: theme.palette.secondary.main,
  },

  activityCard: {
    width: "94%",
    minHeight: "170px",
    padding: "16px 18px",
    boxSizing: "border-box",
    backgroundColor: theme.palette.primary.contrastBG,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.md,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "3px",
  },

  checkboxPreference: {
    margin: "1px 0 0 -2px",

    "& .MuiFormControlLabel-label": {
    fontSize: theme.typography.customFontSize.lg,
    },
  },
});

export default NotificationTheme;