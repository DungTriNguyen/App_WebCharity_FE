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

const IndividualProjectSection = () => {
  const { data: project } = useGetProjectQuery({
    role: CAMPAIGN_ROLE.INDIVIDUAL,
  });

  return (
    <div>
      {/* <h3 className='text-3xl font-bold text-center'>
        Chiến dịch gây quỹ nổi bật
      </h3> */}
      <div className='flex justify-between items-center mb-6'>
        <span className='font-bold'>Chiến dịch của cá nhân</span>
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
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className='relative'
          >
            {project?.map((item: TCampaign) => (
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

export default IndividualProjectSection;
