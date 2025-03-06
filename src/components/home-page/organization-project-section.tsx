import { MoveRightIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import ProjectItem from '../project/project-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useGetProjectQuery } from '@/hooks/use-project';
import { CAMPAIGN_ROLE } from '@/app/enum';
import { TCampaign } from '@/app/types';

const OrganizationProjectSection = () => {
  const { data: project } = useGetProjectQuery({
    role: CAMPAIGN_ROLE.ORIGANIZATION,
  });
  // const projects = [
  //   {
  //     id: 1,
  //     title: 'Chiến dịch 1',
  //     description: 'Mô tả chiến dịch 1',
  //     image: 'https://via.placeholder.com/150',
  //     raised: 1000000,
  //     goal: 2000000,
  //     timeLeft: 10,
  //     details: [
  //       {
  //         unit: 'tình nguyện viên',
  //         current: 15,
  //         total: 20,
  //         label: 'đăng ký tình nguyện',
  //         count: 10,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: 'Chiến dịch 2',
  //     description: 'Mô tả chiến dịch 2',
  //     image: 'https://via.placeholder.com/150',
  //     raised: 1000000,
  //     goal: 2000000,
  //     timeLeft: 10,
  //     details: [
  //       {
  //         unit: 'tình nguyện viên',
  //         current: 15,
  //         total: 20,
  //         label: 'đăng ký tình nguyện',
  //         count: 10,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: 'Chiến dịch 2',
  //     description: 'Mô tả chiến dịch 2',
  //     image: 'https://via.placeholder.com/150',
  //     raised: 1000000,
  //     goal: 2000000,
  //     timeLeft: 10,
  //     details: [
  //       {
  //         unit: 'tình nguyện viên',
  //         current: 15,
  //         total: 20,
  //         label: 'đăng ký tình nguyện',
  //         count: 10,
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: 'Chiến dịch 2',
  //     description: 'Mô tả chiến dịch 2',
  //     image: 'https://via.placeholder.com/150',
  //     raised: 1000000,
  //     goal: 2000000,
  //     timeLeft: 10,
  //     details: [
  //       {
  //         unit: 'tình nguyện viên',
  //         current: 15,
  //         total: 20,
  //         label: 'đăng ký tình nguyện',
  //         count: 10,
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: 'Chiến dịch 2',
  //     description: 'Mô tả chiến dịch 2',
  //     image: 'https://via.placeholder.com/150',
  //     raised: 1000000,
  //     goal: 2000000,
  //     timeLeft: 10,
  //     details: [
  //       {
  //         unit: 'tình nguyện viên',
  //         current: 15,
  //         total: 20,
  //         label: 'đăng ký tình nguyện',
  //         count: 10,
  //       },
  //     ],
  //   },
  // ];
  return (
    <div>
      <h3 className='text-3xl font-bold text-center'>
        Các chiến dịch gây quỹ đang diễn ra
      </h3>
      <div className='flex justify-between items-center mb-6'>
        <span className='font-bold'>Chiến dịch của tổ chức</span>
        <Button variant={'link'}>
          Xem tất cả <MoveRightIcon size={24} />
        </Button>
      </div>
      <div className='w-full max-w-[1440px] mx-auto'>
        <div className='relative [&_.swiper]:pb-10 [&_.swiper-pagination]:bottom-0 [&_.swiper-button-prev]:top-[35%] [&_.swiper-button-next]:top-[35%]'>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className='relative'
          >
            {project?.data.map((item: TCampaign) => (
              <SwiperSlide key={item.id}>
                <ProjectItem key={item.id} project={item} />
              </SwiperSlide>
            ))}
            <div className='swiper-pagination !bottom-[-20px]' />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OrganizationProjectSection;
