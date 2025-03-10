import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import memberImg1 from '../../../public/test6.png';
import memberImg2 from '../../../public/test2.png';
import memberImg3 from '../../../public/test3.png';
import memberImg4 from '../../../public/test4.png';
import memberImg5 from '../../../public/test5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const MemberSection = () => {
  const imageGroupAboutUs = [
    {
      id: 1,
      description: 'ảnh 1',
      image: memberImg1.src,
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 2,
      description: 'ảnh 2',
      image: memberImg2.src,
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 3,
      description: 'ảnh 3',
      image: memberImg3.src,
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 4,
      description: 'ảnh 4',
      image: memberImg4.src,
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 5,
      description: 'ảnh 5',
      image: memberImg5.src,
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
  ];
  return (
    <div className='container 2xl:max-w-[1200px] mx-auto my-8 grid grid-cols-2 gap-2'>
      <div className='col-span-1'>
        {/* <Image
          width={500}
          height={600}
          src={memberImg.src}
          alt=''
          className='mx-auto'
        /> */}
        <div className='relative [&_.swiper]:pb-10 [&_.swiper-pagination]:bottom-0 [&_.swiper-button-prev]:top-[50%] [&_.swiper-button-next]:top-[50%]'>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 1,
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
            {imageGroupAboutUs.map((item) => (
              <SwiperSlide key={item.id}>
                <Image
                  width={500}
                  height={600}
                  src={item.image}
                  alt={item.description}
                  className='mx-auto rounded-3xl'
                />
              </SwiperSlide>
            ))}
            <div className='swiper-pagination !bottom-[-20px]' />
          </Swiper>
        </div>
      </div>
      <div className='col-span-1 flex flex-col justify-center items-start gap-4'>
        <h5>Tổ chức của chúng tôi</h5>
        <h3 className='text-4xl font-bold'>Đội ngũ làm nên thay đổi</h3>
        <p>
          SGU Charity tự hào có một đội ngũ cộng tác viên năng động, gồm cán bộ,
          giảng viên và sinh viên Trường Đại học Sài Gòn. Với tinh thần trách
          nhiệm và lòng nhiệt huyết, họ không chỉ đóng góp công sức trong các
          hoạt động thiện nguyện mà còn lan tỏa những giá trị nhân văn đến cộng
          đồng.
          <br />
          <br />
          🔹 <b>Cán bộ, giảng viên:</b> Đóng vai trò cố vấn, định hướng và hỗ
          trợ tổ chức các chương trình, đảm bảo tính hiệu quả và bền vững của
          các hoạt động từ thiện.
          <br />
          🔹 <b>Sinh viên tình nguyện:</b> Lực lượng nòng cốt trực tiếp tham gia
          các dự án như quyên góp, hỗ trợ trẻ em, giúp đỡ người khó khăn và phát
          triển cộng đồng.
          <br />
          <br />
          Sự đoàn kết và cống hiến của đội ngũ cộng tác viên là nguồn động lực
          giúp SGU Charity ngày càng phát triển, mang đến nhiều giá trị ý nghĩa
          cho xã hội.
        </p>
      </div>
    </div>
  );
};

export default MemberSection;
