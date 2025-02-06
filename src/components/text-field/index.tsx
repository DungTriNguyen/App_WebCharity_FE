// ** Mui Imports

import { TextFieldProps, TextField } from "@mui/material"


const CustomTextField = (props: TextFieldProps) => {
    const {InputLabelProps, size = 'small', variant="filled", ...rest} = props

  return <TextField size={size} variant={variant} InputLabelProps={{...InputLabelProps}} {...rest} />
}

export default CustomTextField
