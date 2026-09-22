import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#062748",
            contrastBG: "#F5F7FA",
        },
        secondary: {
            main: "#40e0d0",
        },

        tertiary: {
            main: "#ffffff",
        },
        quaternary: {
            main: "#000000",
        },
        Quinary: {
            main: "#d9d9d9",
        },
    },

    shape: {
        customRadius: {
            xxs: 2,
            xs: 4,
            sm: 6,
            md: 8,
            lg: 12,
            xl: 16,
            pill: 999,
        },
    },

    typography: {
        h4: {
            fontWeight: 600,
        },

        customFontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },

       customFontSize: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "18px",
            xl: "24px",
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: ({theme})=>({
                    margin: "0px",
                    padding: "0px",
                    backgroundColor: theme.palette.Quinary.main,
                }),
            },
        },

        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontSize: "15px",
                    border: "1px solid",
                    borderColor: theme.palette.secondary.main,
                    borderRadius: "8px",
                    textTransform: "none",
                    color: "white",
                    margin: "5px 10px",
                    padding: "9px 18px 9px 18px",
                })
            }
        }
    }
});

export default theme;