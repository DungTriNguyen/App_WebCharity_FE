import React from 'react';
import { Separator } from '../ui/separator';

const SummarySection = () => {
  const summaryItems = [
    {
      title: 'Tầm nhìn',
      content:
        'Đến năm 2025 trở thành mạng xã hội thiện nguyện đầu tiên tại Việt Nam dành cho cộng đồng thiện nguyện minh bạch',
      icon: (
        <svg
          width='62'
          height='50'
          viewBox='0 0 62 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_81_756)'>
            <path
              d='M61.5542 5.92265C59.8402 8.47222 57.7373 10.6456 55.2456 12.4428C55.2702 12.9248 55.2825 13.4696 55.2825 14.0771C55.2825 17.4529 54.7903 20.8328 53.806 24.2167C52.8217 27.6007 51.3181 30.8397 49.2952 33.9338C47.2724 37.028 44.8628 39.7691 42.0665 42.1572C39.2702 44.5454 35.909 46.4495 31.9827 47.8697C28.0564 49.2899 23.8485 50 19.359 50C12.3523 50 5.89988 48.1085 0.00164795 44.3254C1.04851 44.4419 2.05255 44.5001 3.01375 44.5001C8.86725 44.5001 14.0954 42.6972 18.6981 39.0913C15.9689 39.0413 13.5246 38.2011 11.3654 36.5708C9.20617 34.9406 7.72023 32.8575 6.9076 30.3214C7.71083 30.4744 8.5036 30.5509 9.2859 30.5509C10.412 30.5509 11.52 30.4041 12.61 30.1103C9.6974 29.527 7.28115 28.0763 5.36125 25.7583C3.44141 23.4404 2.4815 20.765 2.4815 17.7322V17.5759C4.26926 18.5658 6.1762 19.0923 8.2023 19.1555C6.4769 18.0052 5.10891 16.5052 4.09835 14.6555C3.08771 12.8058 2.5824 10.8041 2.5824 8.65045C2.5824 6.37902 3.15158 4.26388 4.28995 2.30505C7.45735 6.19195 11.2953 9.29848 15.8038 11.6246C20.3124 13.9508 25.1493 15.2427 30.3144 15.5003C30.0941 14.5822 29.9838 13.6242 29.9834 12.6261C29.9834 9.14123 31.2166 6.16567 33.6831 3.6994C36.1496 1.23313 39.1253 0 42.6101 0C46.2587 0 49.3319 1.32852 51.8298 3.98555C54.6837 3.42025 57.3559 2.39777 59.8464 0.9181C58.8869 3.93777 57.038 6.26723 54.2998 7.9065C56.8165 7.60743 59.2346 6.94615 61.5541 5.92265H61.5542Z'
              fill='#0064C1'
            />
          </g>
          <defs>
            <clipPath id='clip0_81_756'>
              <rect width='61.556' height='50' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Sứ mệnh',
      content:
        'Ứng dụng công nghệ vào hoạt động nhân đạo, thiện nguyện, cộng đồng, thúc đẩy tính minh bạch',
      icon: (
        <svg
          width='55'
          height='55'
          viewBox='0 0 55 55'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16.099 27.099L19.25 20.625H25.2083V4.58334H41.25L38.9583 9.16668L41.25 13.75H29.7917V20.625H35.5208L38.7865 27.1563L31.9115 31.7396L27.5 29.5052L23.0885 31.7396L16.099 27.099ZM4.58334 50.4167L14.0365 31.224L22.7448 37.0104L27.5 34.6615L32.2552 37.0104L40.849 31.3386L50.4167 50.4167H4.58334Z'
            fill='#0064C1'
          />
        </svg>
      ),
    },
    {
      title: 'Giá trị cốt lõi',
      content: 'Minh bạch, sẻ chia, kết nối, thuận tiện',
      icon: (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.07285 9.25907L14.975 17.0472L22.6044 9.25907H9.07285ZM27.5543 9.25907L35.083 16.9433L40.8143 9.25897H27.5542L27.5543 9.25907ZM25.0793 9.34139L16.8061 17.7857H33.3525L25.0793 9.34139ZM42.453 10.1135L36.7278 17.7856H48.2939L42.453 10.1135ZM7.48584 10.1867L1.84326 17.7856H13.2476L7.48584 10.1867ZM1.77295 19.6105L22.1252 41.916L13.9984 19.6103H1.77305L1.77295 19.6105ZM15.9393 19.6105L25.0792 44.693L34.2191 19.6105H15.9395H15.9393ZM36.16 19.6105L28.0336 41.916L48.3856 19.6103H36.1602L36.16 19.6105Z'
            fill='#0064C1'
          />
        </svg>
      ),
    },
  ];

  return (
    <div className='bg-[#EDEDED] py-8'>
      <h3 className='text-3xl font-bold text-center'>Giới thiệu chung </h3>
      <Separator className='w-[125px] h-[2px] bg-[#0064C1] m-auto' />
      <p className='text-center mt-4 container mx-auto'>
        Giải pháp công nghệ tích hợp bao gồm App Thiện Nguyện và tài khoản thiện
        nguyện minh bạch 4 số, dành tặng các tổ chức, cá nhân vận động gây quỹ
        vì cộng đồng. Giải pháp là cấu phần thuộc Đề án Hệ tri thức Việt số hoá
        (iTrithuc)
      </p>
      <ul className='flex justify-around mt-4'>
        {summaryItems.map((item) => (
          <li
            key={item.title}
            className='flex flex-col items-center md:w-[300px] 2xl:w-[450px]'
          >
            {item.icon}
            <h4 className='text-xl font-bold mt-4'>{item.title}</h4>
            <p className='text-center mt-2'>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummarySection;
