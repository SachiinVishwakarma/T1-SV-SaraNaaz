// sending
const ProfileCompnntTheme = (theme) => ({
  profileCard: {
    backgroundColor: theme.palette.tertiary.main,
    boxShadow: `0px -3px 10px ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.xs,
    margin: "3% 5% 2% 20px",
    padding: "15px 35px 25px 35px",
    overFlowx: "none",
  },

  profileTitle: {
    fontSize: theme.typography.customFontSize.lg,
    fontWeight: theme.typography.customFontWeight.bold,
    margin: "0px 0px 15px 0px",
  },

  sectionTitle: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.semibold,
    marginBottom: "15px",
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

    "& > div": {
      width: "100%",
    },
  },
},

//   inputBox: {
//     display: "flex",
//     flexDirection: "column",
//     width: "50%",
//     marginBottom: "5px",
//     },
//   },

  label: {
    fontSize: theme.typography.customFontSize.xs,
    fontWeight: theme.typography.customFontWeight.regular,
    color: theme.palette.quaternary.main,
    marginBottom: "6px",
  },

 addressSection: {
  display: "flex",
  flexDirection: "column",
  margin: "15px 0px",
},

addressInput: {
  width: "100%",

  "& .MuiTextField-root": {
    width: "100%",
  },

  "& .MuiOutlinedInput-root": {
    width: "100%",
    minHeight: "50px",
    backgroundColor: theme.palette.primary.contrastBG,
    borderRadius: theme.shape.customRadius.xs,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  "& .MuiInputBase-inputMultiline": {
    padding: "12px",
    fontSize: theme.typography.customFontSize.sm,
  },
},
  addressTitle: {
    fontSize: theme.typography.customFontSize.lg,
    fontWeight: theme.typography.customFontWeight.semibold,
    marginBottom: "18px",
  },

  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
    marginTop: "10px",
  },

  cancelButton: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.medium,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.md,
    color: theme.palette.quaternary.main,
    padding: "8px 25px",
  },

  saveButton: {
    fontSize: theme.typography.customFontSize.sm,
    fontWeight: theme.typography.customFontWeight.medium,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.customRadius.md,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.tertiary.main,
    padding: "8px 25px",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
});

export default ProfileCompnntTheme;