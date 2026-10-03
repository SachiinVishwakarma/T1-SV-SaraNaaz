const dashOverviewTheme = (theme) => ({
  dashboardCard: {
    boxShadow: `0px -3px 10px ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.tertiary.main,
    margin: "3% 8% 20% 2%",
    borderRadius: theme.shape.customRadius.sm,
    padding: "15px 50px 30px 29px",
    boxSizing: "border-box",
  },

  welcomeSection: {
    marginBottom: "25px",
  },

  welcomeHeading: {
    margin: "10px 15px",
    fontSize: theme.typography.customFontSize.lg,
    fontWeight: theme.typography.customFontWeight.bold,
  },

  description: {
    marginLeft: "15px",
    fontSize: theme.typography.customFontSize.sm,
  },

  squareCards: {
    display: "flex",
    margin: "25px 15px 40px 6px",
  },

  smallCard: {
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.sm,
    backgroundColor: theme.palette.primary.contrastBG,
    margin: "10px 13px",
    width: "220px",
    height: "150px",
    padding: "17px 15px 0px 15px",
    boxSizing: "border-box",
  },

  title: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.medium,
  },

  smallText: {
    margin: "12px 3px 10px 1px",
    fontSize: theme.typography.customFontSize.sm,
  },

  markLine: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.customRadius.sm,
    height: "7px",
    width: "155px",
  },

  quickActions: {
    margin: "0px 0px 15px 15px",
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.bold,
  },

  rectangleCards: {
    display: "flex",
    margin: "25px 15px 40px 6px",
  },

  rectangleCard: {
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.sm,
    backgroundColor: theme.palette.primary.contrastBG,
    margin: "10px 13px",
    width: "465px",
    height: "120px",
    padding: "25px 15px 0px 15px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  actionTitle: {
    fontSize: theme.typography.customFontSize.md,
    fontWeight: theme.typography.customFontWeight.regular,
  },

  actionText: {
    margin: "7px",
    fontSize: theme.typography.customFontSize.xs,
  },
});

export default dashOverviewTheme;