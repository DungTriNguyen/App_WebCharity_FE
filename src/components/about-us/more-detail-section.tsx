import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MoreDetailSection = () => {
  const detailList = [
    {
      id: 1,
      category: 'Thành tựu và báo cáo',
      title:
        'Chúng tôi cam kết thực hiện minh bạch tài chính và tạo ra tác động lâu dài cho những người thụ hưởng',
      description:
        'Sự đóng góp của các nhà hảo tâm giúp chúng tôi thực hiện công việc của mình một cách tốt nhất. VCF đã giành được Chứng nhận Bạch kim về Minh bạch trong 4 năm liên tiếp (2019 - 2022), mức công nhận cao nhất của nhà phân tích tổ chức phi lợi nhuận GuideStar, một tổ chức đánh giá và báo cáo về hiệu quả và tính minh bạch của các tổ chức phi lợi nhuận có đăng ký tại Hoa Kỳ. Hàng năm, chúng tôi công bố các báo cáo chương trình và tài chính, trong đó nêu chi tiết cách thức và vị trí mà các khoản đóng góp của bạn được sử dụng.',
      img: 'https://picsum.photos/200/400',
    },
    {
      id: 2,
      category: 'Đối tác của chúng tôi',
      title:
        'Chúng tôi tự hào về mối quan hệ hợp tác bền chặt với nhiều đối tác trong các lĩnh vực.',
      description:
        'Các quan hệ đối tác đã đặt nền tảng cho công việc của VCF kể từ khi thành lập. Chúng tôi cố gắng hỗ trợ chính phủ Việt Nam và đảm bảo các cam kết của tổ chức đối với các ưu tiên phát triển chiến lược quốc gia. Với sự hỗ trợ của Bộ Y tế, chúng tôi cung cấp cơ hội tiếp cận các dịch vụ chăm sóc sức khỏe chất lượng cho các nhóm người dễ bị tổn thương nhất tại 63 tỉnh thành của Việt Nam thông qua quan hệ đối tác với các bệnh viện, trung tâm chăm sóc sức khỏe và các hiệp hội. Bênh cạnh đó, công việc của VCF chỉ có thể thực hiện được với sự hỗ trợ từ các nhà tài trợ, các đối tác truyền thông và đại sứ...',
      img: 'https://picsum.photos/200/400',
    },
    {
      id: 3,
      category: 'Đối tác của chúng tôi',
      title:
        'Chúng tôi tự hào về mối quan hệ hợp tác bền chặt với nhiều đối tác trong các lĩnh vực.',
      description:
        'Các quan hệ đối tác đã đặt nền tảng cho công việc của VCF kể từ khi thành lập. Chúng tôi cố gắng hỗ trợ chính phủ Việt Nam và đảm bảo các cam kết của tổ chức đối với các ưu tiên phát triển chiến lược quốc gia. Với sự hỗ trợ của Bộ Y tế, chúng tôi cung cấp cơ hội tiếp cận các dịch vụ chăm sóc sức khỏe chất lượng cho các nhóm người dễ bị tổn thương nhất tại 63 tỉnh thành của Việt Nam thông qua quan hệ đối tác với các bệnh viện, trung tâm chăm sóc sức khỏe và các hiệp hội. Bênh cạnh đó, công việc của VCF chỉ có thể thực hiện được với sự hỗ trợ từ các nhà tài trợ, các đối tác truyền thông và đại sứ...',
      img: 'https://picsum.photos/200/400',
    },
    {
      id: 4,
      category: 'Đối tác của chúng tôi',
      title:
        'Chúng tôi tự hào về mối quan hệ hợp tác bền chặt với nhiều đối tác trong các lĩnh vực.',
      description:
        'Các quan hệ đối tác đã đặt nền tảng cho công việc của VCF kể từ khi thành lập. Chúng tôi cố gắng hỗ trợ chính phủ Việt Nam và đảm bảo các cam kết của tổ chức đối với các ưu tiên phát triển chiến lược quốc gia. Với sự hỗ trợ của Bộ Y tế, chúng tôi cung cấp cơ hội tiếp cận các dịch vụ chăm sóc sức khỏe chất lượng cho các nhóm người dễ bị tổn thương nhất tại 63 tỉnh thành của Việt Nam thông qua quan hệ đối tác với các bệnh viện, trung tâm chăm sóc sức khỏe và các hiệp hội. Bênh cạnh đó, công việc của VCF chỉ có thể thực hiện được với sự hỗ trợ từ các nhà tài trợ, các đối tác truyền thông và đại sứ...',
      img: 'https://picsum.photos/200/400',
    },
    {
      id: 5,
      category: 'Đối tác của chúng tôi',
      title:
        'Chúng tôi tự hào về mối quan hệ hợp tác bền chặt với nhiều đối tác trong các lĩnh vực.',
      description:
        'Các quan hệ đối tác đã đặt nền tảng cho công việc của VCF kể từ khi thành lập. Chúng tôi cố gắng hỗ trợ chính phủ Việt Nam và đảm bảo các cam kết của tổ chức đối với các ưu tiên phát triển chiến lược quốc gia. Với sự hỗ trợ của Bộ Y tế, chúng tôi cung cấp cơ hội tiếp cận các dịch vụ chăm sóc sức khỏe chất lượng cho các nhóm người dễ bị tổn thương nhất tại 63 tỉnh thành của Việt Nam thông qua quan hệ đối tác với các bệnh viện, trung tâm chăm sóc sức khỏe và các hiệp hội. Bênh cạnh đó, công việc của VCF chỉ có thể thực hiện được với sự hỗ trợ từ các nhà tài trợ, các đối tác truyền thông và đại sứ...',
      img: 'https://picsum.photos/200/400',
    },
    {
      id: 6,
      category: 'Đối tác của chúng tôi',
      title:
        'Chúng tôi tự hào về mối quan hệ hợp tác bền chặt với nhiều đối tác trong các lĩnh vực.',
      description:
        'Các quan hệ đối tác đã đặt nền tảng cho công việc của VCF kể từ khi thành lập. Chúng tôi cố gắng hỗ trợ chính phủ Việt Nam và đảm bảo các cam kết của tổ chức đối với các ưu tiên phát triển chiến lược quốc gia. Với sự hỗ trợ của Bộ Y tế, chúng tôi cung cấp cơ hội tiếp cận các dịch vụ chăm sóc sức khỏe chất lượng cho các nhóm người dễ bị tổn thương nhất tại 63 tỉnh thành của Việt Nam thông qua quan hệ đối tác với các bệnh viện, trung tâm chăm sóc sức khỏe và các hiệp hội. Bênh cạnh đó, công việc của VCF chỉ có thể thực hiện được với sự hỗ trợ từ các nhà tài trợ, các đối tác truyền thông và đại sứ...',
      img: 'https://picsum.photos/200/400',
    },
  ];
  return (
    <div className='w-full max-w-[1440px] mx-auto mt-10'>
      {/* {detailList.map((item) => (
        <div key={item.id} className='flex flex-col p-4 bg-[#EEEEEE] w-[500px]'>
          <Avatar className='h-[200px] rounded-2xl mx-auto w-full'>
            <AvatarImage src={item.img} alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className='text-[#0064C1] text-left mt-4'>{item.category}</p>
          <h3 className='font-bold text-3xl mt-4'>{item.title}</h3>
          <p className='mt-4 font-bold'>{item.description}</p>
        </div>
      ))} */}
      <div className='relative [&_.swiper]:pb-10 [&_.swiper-pagination]:bottom-0  [&_.swiper-button-prev]:top-[50%] [&_.swiper-button-next]:top-[50%]'>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className='relative'
        >
          {detailList.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                key={item.id}
                className='flex flex-col p-4 bg-[#EEEEEE] w-[450px]'
              >
                <Avatar className='h-[200px] rounded-2xl mx-auto w-full'>
                  <AvatarImage src={item.img} alt='@shadcn' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-[#0064C1] text-left mt-4'>{item.category}</p>
                <h3 className='font-bold text-3xl mt-4'>{item.title}</h3>
                <p className='mt-4 font-bold'>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className='swiper-pagination !bottom-[-20px]' />
        </Swiper>
      </div>
    </div>
  );
};

export default MoreDetailSection;
