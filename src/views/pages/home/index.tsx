// "use client"
// ** Import Next
import { NextPage } from "next";
import Image from "next/image";

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
import ImageHomePage from '/public/images/image-primary-homepage.png'


// ** Import form
// import { useForm } from "react-hook-form";


// ** Import Hooks
import { useState } from "react";
import { Icon } from "@iconify/react";
import Header from "src/components/header";
import Footer from "src/components/footer";

// type Tprops = {}

// const LoginPage: NextPage<Tprops> = () => {
    

//     return (
//       <div>
//         <Header/>
//           <div>
//             <div>
//               <Image src={ImageHomePage.src} width={1920} height={1004} alt=""/>
//             </div>
//             <div className="neo_container_wrapper box_category_wrapper" id="box_category_wrapper">
//               <div className="slick-slider  category_wrapper slick-initialized" id="ltr">
//                 <button className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium css-fbwzhd" tabindex="-1" type="button" disabled>
//                   <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowLeftIcon"><path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path></svg>
//                 </button>
//                 <div className="slick-list">
//                   <div className="slick-track" style="width: 2464px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
//                     <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 176px;">
//                       <div>
//                         <div className="d-flex align-items-start justify-content-start flex-column category_wrapper_item" tabindex="-1" style="width: 100%; display: inline-block;">
//                           <div className="d-flex align-items-center justify-content-start flex-column item_content_category">
//                             <div className="image_wrapper">
//                             <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-svg" style="width: 40px; height: 40px;"><path d="M22.75 4.375H5.25C4.78587 4.375 4.34075 4.55937 4.01256 4.88756C3.68437 5.21575 3.5 5.66087 3.5 6.125V12.553C3.5 22.3552 11.7928 25.6058 13.4531 26.157C13.8076 26.2784 14.1924 26.2784 14.5469 26.157C16.2094 25.6047 24.5 22.3541 24.5 12.5519V6.125C24.5 5.66087 24.3156 5.21575 23.9874 4.88756C23.6592 4.55937 23.2141 4.375 22.75 4.375ZM22.75 12.5552C22.75 21.1323 15.4941 23.998 14 24.4967C12.5202 24.0045 5.25 21.1411 5.25 12.5552V6.125H22.75V12.5552ZM9.625 14C9.625 13.7679 9.71719 13.5454 9.88128 13.3813C10.0454 13.2172 10.2679 13.125 10.5 13.125H13.125V10.5C13.125 10.2679 13.2172 10.0454 13.3813 9.88128C13.5454 9.71719 13.7679 9.625 14 9.625C14.2321 9.625 14.4546 9.71719 14.6187 9.88128C14.7828 10.0454 14.875 10.2679 14.875 10.5V13.125H17.5C17.7321 13.125 17.9546 13.2172 18.1187 13.3813C18.2828 13.5454 18.375 13.7679 18.375 14C18.375 14.2321 18.2828 14.4546 18.1187 14.6187C17.9546 14.7828 17.7321 14.875 17.5 14.875H14.875V17.5C14.875 17.7321 14.7828 17.9546 14.6187 18.1187C14.4546 18.2828 14.2321 18.375 14 18.375C13.7679 18.375 13.5454 18.2828 13.3813 18.1187C13.2172 17.9546 13.125 17.7321 13.125 17.5V14.875H10.5C10.2679 14.875 10.0454 14.7828 9.88128 14.6187C9.71719 14.4546 9.625 14.2321 9.625 14Z" fill="#FF9D2E"></path></svg>

//                             </div> 

//                           </div>
//                           <span>Xóa đói</span>

//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1s0dsql" tabindex="0" type="button" fdprocessedid="tboffp"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg><span className="MuiTouchRipple-root css-w0pj6f"></span>
//                     <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
//                     <span className="MuiTouchRipple-root css-w0pj6f"></span>
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         <Footer/>
//       </div>
//     )
// }

// export default LoginPage





const LoginPage: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="">
        <div>
          <Image src={ImageHomePage.src} width={1920} height={1004} alt="Home Page Image" />
        </div>
        <div className="neo_container_wrapper box_category_wrapper h-48" id="box_category_wrapper">
          <div className="slick-slider category_wrapper" id="ltr">
            {/* Nút trái */}
            <button className="icon-button" type="button" >
              <svg viewBox="0 0 24 24">
                <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
              </svg>
            </button>

            <div className="slick-list">
              <div className="slick-track">
                <div className="slick-slide">
                  <div className="category_wrapper_item flex">
                    <div className="item_content_category">
                      <div className="image_wrapper">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.75 4.375H5.25C4.78587 4.375 4.34075 4.55937 4.01256 4.88756C3.68437 5.21575 3.5 5.66087 3.5 6.125V12.553C3.5 22.3552 11.7928 25.6058 13.4531 26.157C13.8076 26.2784 14.1924 26.2784 14.5469 26.157C16.2094 25.6047 24.5 22.3541 24.5 12.5519V6.125C24.5 5.66087 24.3156 5.21575 23.9874 4.88756C23.6592 4.55937 23.2141 4.375 22.75 4.375ZM22.75 12.5552C22.75 21.1323 15.4941 23.998 14 24.4967C12.5202 24.0045 5.25 21.1411 5.25 12.5552V6.125H22.75V12.5552ZM9.625 14C9.625 13.7679 9.71719 13.5454 9.88128 13.3813C10.0454 13.2172 10.2679 13.125 10.5 13.125H13.125V10.5C13.125 10.2679 13.2172 10.0454 13.3813 9.88128C13.5454 9.71719 13.7679 9.625 14 9.625C14.2321 9.625 14.4546 9.71719 14.6187 9.88128C14.7828 10.0454 14.875 10.2679 14.875 10.5V13.125H17.5C17.7321 13.125 17.9546 13.2172 18.1187 13.3813C18.2828 13.5454 18.375 13.7679 18.375 14C18.375 14.2321 18.2828 14.4546 18.1187 14.6187C17.9546 14.7828 17.7321 14.875 17.5 14.875H14.875V17.5C14.875 17.7321 14.7828 17.9546 14.6187 18.1187C14.4546 18.2828 14.2321 18.375 14 18.375C13.7679 18.375 13.5454 18.2828 13.3813 18.1187C13.2172 17.9546 13.125 17.7321 13.125 17.5V14.875H10.5C10.2679 14.875 10.0454 14.7828 9.88128 14.6187C9.71719 14.4546 9.625 14.2321 9.625 14Z"
                            fill="#FF9D2E"
                          />
                        </svg>
                      </div>
                      <span>Xóa đói</span>
                    </div>
                    <div className="item_content_category">
                      <div className="image_wrapper">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.75 4.375H5.25C4.78587 4.375 4.34075 4.55937 4.01256 4.88756C3.68437 5.21575 3.5 5.66087 3.5 6.125V12.553C3.5 22.3552 11.7928 25.6058 13.4531 26.157C13.8076 26.2784 14.1924 26.2784 14.5469 26.157C16.2094 25.6047 24.5 22.3541 24.5 12.5519V6.125C24.5 5.66087 24.3156 5.21575 23.9874 4.88756C23.6592 4.55937 23.2141 4.375 22.75 4.375ZM22.75 12.5552C22.75 21.1323 15.4941 23.998 14 24.4967C12.5202 24.0045 5.25 21.1411 5.25 12.5552V6.125H22.75V12.5552ZM9.625 14C9.625 13.7679 9.71719 13.5454 9.88128 13.3813C10.0454 13.2172 10.2679 13.125 10.5 13.125H13.125V10.5C13.125 10.2679 13.2172 10.0454 13.3813 9.88128C13.5454 9.71719 13.7679 9.625 14 9.625C14.2321 9.625 14.4546 9.71719 14.6187 9.88128C14.7828 10.0454 14.875 10.2679 14.875 10.5V13.125H17.5C17.7321 13.125 17.9546 13.2172 18.1187 13.3813C18.2828 13.5454 18.375 13.7679 18.375 14C18.375 14.2321 18.2828 14.4546 18.1187 14.6187C17.9546 14.7828 17.7321 14.875 17.5 14.875H14.875V17.5C14.875 17.7321 14.7828 17.9546 14.6187 18.1187C14.4546 18.2828 14.2321 18.375 14 18.375C13.7679 18.375 13.5454 18.2828 13.3813 18.1187C13.2172 17.9546 13.125 17.7321 13.125 17.5V14.875H10.5C10.2679 14.875 10.0454 14.7828 9.88128 14.6187C9.71719 14.4546 9.625 14.2321 9.625 14Z"
                            fill="#FF9D2E"
                          />
                        </svg>
                      </div>
                      <span>Xóa đói</span>
                    </div>
                    <div className="item_content_category">
                      <div className="image_wrapper">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.75 4.375H5.25C4.78587 4.375 4.34075 4.55937 4.01256 4.88756C3.68437 5.21575 3.5 5.66087 3.5 6.125V12.553C3.5 22.3552 11.7928 25.6058 13.4531 26.157C13.8076 26.2784 14.1924 26.2784 14.5469 26.157C16.2094 25.6047 24.5 22.3541 24.5 12.5519V6.125C24.5 5.66087 24.3156 5.21575 23.9874 4.88756C23.6592 4.55937 23.2141 4.375 22.75 4.375ZM22.75 12.5552C22.75 21.1323 15.4941 23.998 14 24.4967C12.5202 24.0045 5.25 21.1411 5.25 12.5552V6.125H22.75V12.5552ZM9.625 14C9.625 13.7679 9.71719 13.5454 9.88128 13.3813C10.0454 13.2172 10.2679 13.125 10.5 13.125H13.125V10.5C13.125 10.2679 13.2172 10.0454 13.3813 9.88128C13.5454 9.71719 13.7679 9.625 14 9.625C14.2321 9.625 14.4546 9.71719 14.6187 9.88128C14.7828 10.0454 14.875 10.2679 14.875 10.5V13.125H17.5C17.7321 13.125 17.9546 13.2172 18.1187 13.3813C18.2828 13.5454 18.375 13.7679 18.375 14C18.375 14.2321 18.2828 14.4546 18.1187 14.6187C17.9546 14.7828 17.7321 14.875 17.5 14.875H14.875V17.5C14.875 17.7321 14.7828 17.9546 14.6187 18.1187C14.4546 18.2828 14.2321 18.375 14 18.375C13.7679 18.375 13.5454 18.2828 13.3813 18.1187C13.2172 17.9546 13.125 17.7321 13.125 17.5V14.875H10.5C10.2679 14.875 10.0454 14.7828 9.88128 14.6187C9.71719 14.4546 9.625 14.2321 9.625 14Z"
                            fill="#FF9D2E"
                          />
                        </svg>
                      </div>
                      <span>Xóa đói</span>
                    </div>
                    <div className="item_content_category">
                      <div className="image_wrapper">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.75 4.375H5.25C4.78587 4.375 4.34075 4.55937 4.01256 4.88756C3.68437 5.21575 3.5 5.66087 3.5 6.125V12.553C3.5 22.3552 11.7928 25.6058 13.4531 26.157C13.8076 26.2784 14.1924 26.2784 14.5469 26.157C16.2094 25.6047 24.5 22.3541 24.5 12.5519V6.125C24.5 5.66087 24.3156 5.21575 23.9874 4.88756C23.6592 4.55937 23.2141 4.375 22.75 4.375ZM22.75 12.5552C22.75 21.1323 15.4941 23.998 14 24.4967C12.5202 24.0045 5.25 21.1411 5.25 12.5552V6.125H22.75V12.5552ZM9.625 14C9.625 13.7679 9.71719 13.5454 9.88128 13.3813C10.0454 13.2172 10.2679 13.125 10.5 13.125H13.125V10.5C13.125 10.2679 13.2172 10.0454 13.3813 9.88128C13.5454 9.71719 13.7679 9.625 14 9.625C14.2321 9.625 14.4546 9.71719 14.6187 9.88128C14.7828 10.0454 14.875 10.2679 14.875 10.5V13.125H17.5C17.7321 13.125 17.9546 13.2172 18.1187 13.3813C18.2828 13.5454 18.375 13.7679 18.375 14C18.375 14.2321 18.2828 14.4546 18.1187 14.6187C17.9546 14.7828 17.7321 14.875 17.5 14.875H14.875V17.5C14.875 17.7321 14.7828 17.9546 14.6187 18.1187C14.4546 18.2828 14.2321 18.375 14 18.375C13.7679 18.375 13.5454 18.2828 13.3813 18.1187C13.2172 17.9546 13.125 17.7321 13.125 17.5V14.875H10.5C10.2679 14.875 10.0454 14.7828 9.88128 14.6187C9.71719 14.4546 9.625 14.2321 9.625 14Z"
                            fill="#FF9D2E"
                          />
                        </svg>
                      </div>
                      <span>Xóa đói</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nút phải */}
            <button className="icon-button" type="button">
              <svg viewBox="0 0 24 24">
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-40">
          <div className="h-60 w-full mt-40"></div>
          <span>Các chiến dịch nổi bật</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
