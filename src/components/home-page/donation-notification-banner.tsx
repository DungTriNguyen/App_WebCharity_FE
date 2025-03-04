'use client';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useDonationQuery } from '@/hooks/use-donation';

interface DonationNotification {
  id: string;
  username: string;
  avatarUrl: string;
  message?: string;
  timestamp: string;
}

const DonationNotificationBanner: React.FC = () => {
  const { data } = useDonationQuery({ page: 1, limit: 5 });
  console.log(data);

  const [notifications, setNotifications] = useState<DonationNotification[]>([
    {
      id: '1',
      username: 'PHAN THI KIM PHUONG',
      avatarUrl: '/sgu-logo.png',
      message:
        'Lời khẩn cầu của một người mẹ tìm liều thuốc mắc nhất thế giới để cứu mạng con trai!',
      timestamp: '4 phút trước',
    },
    {
      id: '2',
      username: 'Người ủng hộ ẩn danh',
      avatarUrl: '/member.png',
      timestamp: '4 phút trước',
    },
  ]);

  return (
    <div className='w-full'>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#00A7EF',
            '--swiper-pagination-bottom': '0',
            'swiper-navigation-disabled': true,
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={24}
        navigation={false}
        slidesPerView={1}
        modules={[Autoplay]}
        className='mySwiper2 h-20'
        pagination={{
          clickable: false,
        }}
        direction={'vertical'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        simulateTouch={false}
      >
        {notifications.map((item) => (
          <SwiperSlide
            key={item.id}
            className='rounded-lg overflow-hidden h-ful'
          >
            <div className='flex gap-4 p-4'>
              <div className='h-12 w-12 rounded-full bg-pink-300 flex-none'></div>
              <div>
                <p className='line-clamp-1'>
                  <span className='font-bold'>{item.username}</span>
                  <span> vừa ủng hộ </span>
                  <span className='text-orange-500 font-bold'>
                    {item.message}
                  </span>
                </p>
                <p className='italic'>{item.timestamp}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DonationNotificationBanner;
