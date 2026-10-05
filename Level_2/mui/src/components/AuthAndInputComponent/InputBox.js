import {TextField, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InputBoxTheme from "../../Theme/InputBoxTheme.js"


function InputBox({label,name,value,onChange,error,helperText, size ,type,placeholder}){
      const theme = useTheme();
  const style = InputBoxTheme(theme);
    return(
        <Box sx={
            size=="large"?
            style.large:    
            size=="medium"?
            style.medium:
            style.small
        }>
            <Typography sx={style.label}>
                {label}
            </Typography>

            <TextField
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            placeholder={placeholder} 
            sx={style.input}         
            />
        </Box>

    )
}

export default InputBox;