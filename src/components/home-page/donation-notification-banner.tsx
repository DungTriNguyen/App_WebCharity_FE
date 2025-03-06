'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useDonationQuery } from '@/hooks/use-donation';
import { TSDonationData } from '@/app/types';
import Image from 'next/image';

const DonationNotificationBanner: React.FC = () => {
  const {
    data: donations,
    isLoading,
    error,
  } = useDonationQuery({ page: 1, limit: 5 });
  // console.log('donationL:', donations);`

  const [notifications, setNotifications] = useState<TSDonationData[]>([]);

  useEffect(() => {
    if (donations && Array.isArray(donations.data)) {
      setNotifications(donations.data); // Chỉ set nếu donations.data là mảng
    }
  }, [donations]);

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error fetching donations: {error.message}</div>;
  }

  return (
    <div className='w-full'>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#00A7EF',
            '--swiper-pagination-bottom': '0',
            // 'swiper-navigation-disabled': true,
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
        {notifications.map((item: TSDonationData) => (
          <SwiperSlide
            key={item.id}
            className='rounded-lg overflow-hidden h-ful'
          >
            <div className='flex gap-4 p-4'>
              <div className='h-12 w-12 rounded-full bg-pink-300 flex-none'>
                <Image
                  src={item.user.avatar_url}
                  alt='avatar'
                  width={100}
                  height={100}
                  className='rounded-full'
                />
              </div>
              <div>
                <p className='line-clamp-1'>
                  <span className='font-bold'>{item.account_name}</span>
                  <span> vừa ủng hộ </span>
                  <span className='text-blue-500 font-bold'>
                    {item.project.name}
                  </span>
                </p>
                <p className='italic'>{item.created_at}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DonationNotificationBanner;
