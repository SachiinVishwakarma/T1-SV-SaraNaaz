const dashComponentTheme = (theme) => ({
  dashboard: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    backgroundColor: theme.palette.primary.contrastBG,
    overflowX: "hidden",
    fontFamily: "Arial, sans-serif",
  },

  sidebar: {
    width: "20%",
    minWidth: "200px",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.tertiary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    boxSizing: "border-box",
  },

  userProfile: {
    display: "flex",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    overflowWrap: "anywhere",
  },

  logo: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.tertiary.main,
    margin: "20px 5px 25px 10px",
    width: "47px",
    height: "42px",
    padding: "9px",
    borderRadius: theme.shape.customRadius.xs,
    fontSize: theme.typography.customFontSize.lg,
    fontWeight: theme.typography.customFontWeight.light,
    boxSizing: "border-box",
  },

  head: {
    margin: "20px 25px 25px 3px",
    minWidth: 0,
    overflow: "hidden",
  },

  userName: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.bold,
  },

  email: {
    fontSize: theme.typography.customFontSize.sm,
    marginTop: "3px",
  },

  dashMenu: {
    margin: "25px 25px 0px 12px",
  },

  sideTitle: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.regular,
  },

  items: {
    margin: "15px 5px 0px 10px",
  },

  menuItem: {
    fontSize: theme.typography.customFontSize.sm,
    padding: "15px 0px 30px 29px",
    margin: "10px 0px",
    height: "35px",
    width: "85%",
    boxSizing: "border-box",
  },

  selectedMenu: {
    fontSize: theme.typography.customFontSize.sm,
    padding: "10px 25px",
    margin: "10px 0px",
    width: "85%",
    height: "40px",
    boxSizing: "border-box",
    boxShadow: `-2px 0px 4px ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.contrastBG,
    borderRadius: theme.shape.customRadius.xs,
  },

  accountSection: {
    marginTop: "150px",
    marginLeft: "12px",
    marginRight: "25px",
  },

  mainContent: {
    width: "80%",
    marginLeft: "20%",
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.contrastBG,
    boxSizing: "border-box",
  },

  topNavbar: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.tertiary.main,
    height: "60px",
    padding: "18px 0px 18px 21px",
    boxSizing: "border-box",
  },

  navbarText: {
    fontSize: theme.typography.customFontSize.md,
    fontWeight: theme.typography.customFontWeight.bold,
  },

  pageContent: {
    width: "100%",
  },
});

export default dashComponentTheme;