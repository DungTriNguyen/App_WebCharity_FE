// "use client"
// ** Import Next
import { NextPage } from "next";

// ** Import MUI
import { Checkbox, CssBaseline, FormControlLabel, Grid, IconButton, InputAdornment } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

// ** Import component
import CustomTextField from "src/components/text-field";

// ** Import Image
import LoginImage from '/public/images/login-background.jpg';
import facebookSvg from '/public/svgs/facebook.svg'
import googleSvg from '/public/svgs/google.svg'

// ** Import form
// import { useForm } from "react-hook-form";


// ** Import Hooks
import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Header from "src/components/header";
import Footer from "src/components/footer";

type Tprops = {}

// function Copyright() {
//     return (
//       <Typography variant="body2" color="textSecondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
  
//   const useStyles = makeStyles((theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));
  
const LoginPage: NextPage<Tprops> = () => {
    
    // const {handleSubmit, formState: {errors}} = useForm({
    //     defaultValues: {
    //       email: '',
    //       passwordd: '',
    //     },
    //     mode: "onBlur",
    // });

    const [showPassword, setShowPassword] = useState(false);

    return (
      <div>
        <Header/>
      
        <Box sx={{backgroundImage: `url(${LoginImage.src})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        alignItems:"center",
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        display: "flex"
    
        }}>
        <Container component="main" maxWidth="xs" sx={{mt: "40px", mb: "40px", display:"flex",
            backgroundColor: "hsla(0,0%,100%,0.85)", 
            borderRadius: "10px",                   
            backdropFilter: "blur(5px)",            
            WebkitBackdropFilter: "blur(5px)",      
            padding: "20px",
            maxWidth: "",

         }}>
        <CssBaseline />
        <div style={ {
            maxWidth:""
        }}>
          <Typography component="h1" variant="h5" sx={{justifyContent:"center", alignItems:"center"}} >
            <b>Đăng Nhập</b>
          </Typography>
          <form  noValidate >
            <CustomTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nhập email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <CustomTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Nhập mật khẩu"
              type={ showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              inputProps={{
                enAdornment:(
                    <InputAdornment position="end">
                        <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}> 
                            {showPassword ? (<Icon icon="mdi:visibility-outline" width="24" height="24" />) : (<Icon icon="material-symbols:visibility-off-outline-rounded" width="24" height="24" />)}
                        </IconButton>
                    </InputAdornment>
                )
              }}
            />
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <FormControlLabel   
              control={<Checkbox value="remember" color="primary" />}
              label="Nhớ mật khẩu"
            />
            
                <Link href="#" variant="body2">
                  Quên mật khẩu?
                </Link>
         
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"

            >
              Đăng nhập
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="#" variant="body2">
                  {"Bạn chưa có tài khoản? Đăng ký ngay"}
                </Link>
              </Grid>
            </Grid>
                <Typography sx={{textAlign:"center", mt:4, mb:2}}>Hoặc</Typography>
            <Box sx={{display:"flex", justifyContent:'center', alignItems:"center", gap : 5}}>
                <IconButton>
                    <Image width={40} height={40} src={facebookSvg} alt="facebook" style={{height:"40px", width:"40px", color:"blue"}}  />
                </IconButton>
                <IconButton>
                    <Image width={40} height={40} src={googleSvg} alt="google" style={{height:"40px", width:"40px", color:"blue"}}  />
                </IconButton>
            </Box>
          </form>
          {/* <div style={{width:"1px", height: "260px", color:"#0000"}}></div> */}
        </div>
        <Box mt={8}>
          {/* <Copyright /> */}
        </Box>
      </Container>
      </Box>
      <Footer/>
      </div>
    )
}

export default LoginPage