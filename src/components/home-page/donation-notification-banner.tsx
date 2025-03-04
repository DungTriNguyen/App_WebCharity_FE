import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface DonationNotification {
  id: string;
  username: string;
  avatarUrl: string;
  message?: string;
  timestamp: string;
}

const DonationNotificationBanner: React.FC = () => {
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
    // Add more sample notifications here
  ]);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    vertical: true,
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    dragSpeed: 1,
    mode: 'free-snap',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching new notifications in a real app
      // Here you would call an API to get the latest donations
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full bg-gray-100 py-2 overflow-hidden'>
      <div ref={sliderRef} className='keen-slider h-20'>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className='keen-slider__slide flex items-center space-x-3 px-4 py-2'
          >
            <div className='relative w-12 h-12 rounded-full overflow-hidden'>
              <Image
                src={notification.avatarUrl}
                alt={notification.username}
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <div className='flex-grow'>
              <p className='text-sm'>
                <span className='font-bold'>{notification.username}</span>
                <span className='text-gray-600 ml-1'>vừa ủng hộ</span>
                {notification.message && (
                  <span className='text-gray-700 ml-1'>
                    {notification.message}
                  </span>
                )}
              </p>
              <p className='text-xs text-gray-500'>{notification.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationNotificationBanner;
