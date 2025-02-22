'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Shield,
  Baby,
  PersonStanding,
  Heart,
  Activity,
  Users,
} from 'lucide-react';

const categories = [
  {
    icon: Shield,
    label: 'Xóa đói',
  },
  {
    icon: Baby,
    label: 'Trẻ em',
  },
  {
    icon: PersonStanding,
    label: 'Người cao tuổi',
  },
  {
    icon: Heart,
    label: 'Người nghèo',
  },
  {
    icon: Heart,
    label: 'Người nghèo',
  },
  {
    icon: Heart,
    label: 'Người nghèo',
  },
  {
    icon: Heart,
    label: 'Người nghèo',
  },
  {
    icon: Heart,
    label: 'Người nghèo',
  },
  {
    icon: Heart,
    label: 'Người nghèo',
  },
  {
    icon: Activity,
    label: 'Bệnh hiểm nghèo',
  },
  {
    icon: Users,
    label: 'Dân tộc thiểu số',
  },
];

const CampaignSlider = () => {
  return (
    <div className='relative [&_.swiper-button-prev]:top-[35%] [&_.swiper-button-next]:top-[35%] [&_.swiper-button-prev]:text-[#0BAEFF] [&_.swiper-button-next]:text-[#0BAEFF] py-12 [&_.swiper-button-prev]:scale-50 [&_.swiper-button-next]:scale-50 [&_.swiper-button-prev]::after:text-sm [&_.swiper-button-next]::after:text-sm'>
      <div className='[&>.swiper]:px-[25px]'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          className='relative'
        >
          {categories.map((category, index) => (
            <SwiperSlide
              key={index}
              className='flex items-center justify-between gap-2 cursor-pointer group py-4 px-[25px]'
            >
              <div className='p-2.5 rounded-full bg-[#0BAEFF]/10 group-hover:bg-[#0BAEFF] transition-colors'>
                <category.icon className='w-5 h-5 text-[#0BAEFF] group-hover:text-white' />
              </div>
              <span className='text-sm text-gray-600 group-hover:text-[#0BAEFF] transition-colors'>
                {category.label}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CampaignSlider;
