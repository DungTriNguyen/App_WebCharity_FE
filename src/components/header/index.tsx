// ** import image
import logo from '../../../public/images/SGU-LOGO.png';

// ** import component
import GroupMenu from '../menu-drop-down/menu-ung-ho';
import GroupMenu1 from '../menu-drop-down/menu-chien-dich';
import GroupMenu2 from '../menu-drop-down/menu-ve-chung-toi';

// ** import icons MUI
import LoginIcon from '@mui/icons-material/Login';
import CustomTextField from '../text-field';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
    

  return (
    <header className="pb-6 bg-white lg:pb-0">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0 ">
                <a href="#" title="" className="flex items-center justify-between">
                    <img className="w-auto h-8 lg:h-10" src={logo.src} alt="" />
                    <span className='ml-2 text-blue-300'>SGU Charity</span>
                </a>
            </div>

            <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              {/* <CustomTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id=""
                label="Nhập từ khóa"
                name="tìm kiếm"
                autoComplete="email"
                autoFocus
                
              /> */}
                <GroupMenu/>
                <GroupMenu1/>
                <GroupMenu2/>

                {/* <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Liên hệ </a> */}

                {/* <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Tuyển dụng </a> */}

                <NotificationsIcon />
                
                <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Tạo chiến dịch </a>

                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"><LoginIcon className='ml-2' sx={{marginLeft:'2px'}}/> Đăng nhập </a>
            </div>

        </nav>

        {/* <!-- xs to lg --> */}
        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                <GroupMenu/>
                <GroupMenu1/>
                <GroupMenu2/>

                {/* <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Liên hệ </a> */}

                {/* <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Tuyển dụng </a> */}
                
                <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Tạo chiến dịch </a>
            {/* <div className="px-6 mt-6"> */}
                <a href="#" title="" className="w-40 h-9 text-center inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
            {/* </div> */}
                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 "> <LoginIcon/> Đăng nhập </a>

                </div>
            </div>

        </nav>
    </div>
</header>

  )
}

export default Header
