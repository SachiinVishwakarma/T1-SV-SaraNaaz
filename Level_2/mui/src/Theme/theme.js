import { createTheme } from "@mui/material/styles";

const theme= createTheme({
    palette:{
        primary:{
            main:"#062748",
        },
         secondary:{
            main:"#40e0d0",
        },

        tertiary:{
            main:"#ffffff",
        },
        quaternary:{
            main: "#000000",
        },
    },

    components:{
        MuiCssBaseline: {
            styleOverrides:{
                body:{
                    margin: "0px",
                    padding: "0px",
                },
            },  
        },





        MuiButton:{
             styleOverrides:{
                root: ({theme})=>({
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