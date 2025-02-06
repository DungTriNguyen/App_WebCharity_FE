// ** import image
import Image from 'next/image'
import logo from '../../../public/images/SGU-LOGO.png'
import TwitterIcon from './TwitterIcon'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import GithubIcon from './GithubIcon'
import { Button } from '../ui/button'
import Link from 'next/link'

const SOCIALS_ICONS = [
  {
    name: 'Twitter',
    icon: <TwitterIcon />
  },
  {
    name: 'Facebook',
    icon: <FacebookIcon />
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />
  },
  {
    name: 'Github',
    icon: <GithubIcon />
  }
]

const PROGRAMS_ITEMS = ['Quyên góp tiền', 'Đăng ký tình nguyện', 'Quyên góp & ĐKTN', 'Tuyển dụng']

const ABOUT_ITEMS = ['Chính sách bảo mật', 'Hướng dẫn quyên góp', 'Thống kê quyên góp']

const CONTACT_ITEMS = ['Gửi yêu cầu liên hệ', 'Gửi yêu cầu đăng ký chương trình']

const Footer = () => {
  return (
    <section className='py-10 bg-gray-50 sm:pt-16 lg:pt-24'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12'>
          <div className='col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8'>
            <Image className='w-auto h-11' src={logo.src} alt='' height={48} width={48} />
            <span className='inline-block text-blue-800'>SGU Charity</span>

            <p className='text-base leading-relaxed text-gray-600 mt-2'>
              Trang web kết nối cộng đồng với các hoạt động thiện nguyện, hỗ trợ những người cần giúp đỡ.
            </p>

            <ul className='flex items-center space-x-3 mt-9'>
              {SOCIALS_ICONS.map((social, index) => (
                <li key={index}>
                  <Button
                    variant={'link'}
                    title=''
                    className=' text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600'
                  >
                    <svg className='w-4 h-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                      {social.icon}
                    </svg>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='text-sm font-semibold tracking-widest text-gray-400 uppercase'>Chương trình</p>

            <ul className='mt-6 space-y-4'>
              {PROGRAMS_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    href='#'
                    title=''
                    className='flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600'
                  >
                    {' '}
                    {item}{' '}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='text-sm font-semibold tracking-widest text-gray-400 uppercase'>Về chúng tôi</p>

            <ul className='mt-6 space-y-4'>
              {ABOUT_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    href='#'
                    title=''
                    className='flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600'
                  >
                    {' '}
                    {item}{' '}
                  </Link>
                </li>
              ))}

              {/* <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                    </li> */}
            </ul>
          </div>

          <div className='col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8'>
            <p className='text-sm font-semibold tracking-widest text-gray-400 uppercase'>Liên hệ</p>

            <ul className='mt-6 space-y-4'>
              {CONTACT_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    href='#'
                    title=''
                    className='flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600'
                  >
                    {' '}
                    {item}{' '}
                  </Link>
                </li>
              ))}

              {/* <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                    </li> */}
            </ul>

            {/* <form action="#" method="POST" className="mt-6">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                </form> */}
          </div>
        </div>

        <hr className='mt-16 mb-10 border-gray-200' />

        <p className='text-sm text-center text-gray-600'>
          © Copyright 2025, tất cả nội dung thuộc quyền sở hữu của SGU-Charity
        </p>
      </div>
    </section>
  )
}

export default Footer
