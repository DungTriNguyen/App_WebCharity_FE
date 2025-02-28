// ** import image
import Image from 'next/image';
import logo from '../../../public/sgu-logo.png';
import Link from 'next/link';

const PROGRAMS_ITEMS = [
  'Quyên góp tiền',
  'Đăng ký tình nguyện',
  'Quyên góp & ĐKTN',
  'Tuyển dụng',
];

const ABOUT_ITEMS = [
  'Chính sách bảo mật',
  'Hướng dẫn quyên góp',
  'Thống kê quyên góp',
];

const CONTACT_ITEMS = [
  'Gửi yêu cầu liên hệ',
  'Gửi yêu cầu đăng ký chương trình',
];

const Footer = () => {
  return (
    <section className='py-10 bg-gray-50 sm:pt-16 lg:pt-24'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12'>
          <div className='col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8'>
            <Link href='/home' title=''>
              <Image
                className='w-auto h-11 m-auto'
                src={logo.src}
                alt=''
                height={48}
                width={48}
              />
            </Link>
          </div>

          <div>
            <p className='text-sm font-semibold tracking-widest text-gray-400 uppercase'>
              Chương trình
            </p>

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
            <p className='text-sm font-semibold tracking-widest text-gray-400 uppercase'>
              Về chúng tôi
            </p>

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
            <p className='text-sm font-semibold tracking-widest text-gray-400 uppercase'>
              Liên hệ
            </p>

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
  );
};

export default Footer;
