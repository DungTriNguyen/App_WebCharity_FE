'use client';

import { CAMPAIGN_TYPE } from '@/app/enum';
import { Avatar } from '@radix-ui/react-avatar';
import { ChevronDownIcon, LogInIcon, LogOutIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import logo from '../../../public/sgu-logo.png';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { AvatarFallback, AvatarImage } from '../ui/avatar';
import QuickSearchProjectDropdown from './quick-search-project-dropdown';
import { useGetUserProfileQuery } from '@/hooks/use-profile';
const Header = () => {
  const router = useRouter();
  const { data: userProfile } = useGetUserProfileQuery();

  const ACTIVITIES_ITEMS = [
    {
      label: 'Quyên góp tiền',
      href: `/projects?type=${CAMPAIGN_TYPE.DONATE}`,
      icon: '💰',
    },
    {
      label: 'Đăng ký tình nguyện viên',
      href: `/projects?type=${CAMPAIGN_TYPE.VOLUNTEER}`,
      icon: '🤝',
    },
    {
      label: 'Quyên góp và ĐKTNV',
      href: `/projects?type=${CAMPAIGN_TYPE.MULTIPLE}`,
      icon: '❤️',
    },
  ];

  const CATEGORY_ITEMS = [
    {
      label: 'Chiến dịch',
      href: '/projects',
      icon: '📢',
    },
    {
      label: 'Tổ chức gây quỹ',
      href: '/accounts?type=organization',
      icon: '🏢',
    },
    {
      label: 'Cá nhân gây quỹ',
      href: '/accounts?type=individual',
      icon: '👤',
    },
  ];

  const ABOUT_US_ITEMS = [
    {
      label: 'Thông tin chung',
      href: '/about-us',
      icon: 'ℹ️',
    },
    {
      label: 'Điều khoản ',
      href: '/terms',
      icon: '📖',
    },
    {
      label: 'Chính sách bảo mật',
      href: '/policy',
      icon: '🔒',
    },
    {
      label: 'Liên hệ',
      href: '/contact',
      icon: '📞',
    },
  ];

  const INFORMATION_USER_ITEMS = [
    {
      label: 'Xem trang cá nhân',
      href: '/user/profile',
      icon: 'ℹ️',
    },
    {
      label: 'Chỉnh sửa thông tin cá nhân',
      href: '/user/edit-profile',
      icon: '📖',
    },
    {
      label: 'Đổi mật khẩu',
      href: '/user/change-password',
      icon: '🔒',
    },
    {
      label: 'Lịch sử ủng hộ/ ĐK TNV',
      href: '/user/donated-history',
      icon: '🔒',
    },
  ];

  const renderMenu = (
    menuItems: { label: string; href: string; icon: string }[],
    header: string
  ) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='font-medium text-lg hover:bg-primary/10 hover:text-primary transition-colors'
          >
            <span>{header}</span>
            <ChevronDownIcon className='ml-1 h-6 w-6' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-64' side='bottom' align='center'>
          {menuItems.map(({ href, label, icon }, index) => (
            <React.Fragment key={index}>
              <DropdownMenuItem
                onClick={() => router.push(href)}
                className='py-3 text-base cursor-pointer hover:bg-primary/10'
              >
                <span className='mr-2 text-xl'>{icon}</span>
                {label}
              </DropdownMenuItem>
              {index < menuItems.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const logout = async () => {
    await signOut({ callbackUrl: '/login', redirect: true });
  };

  return (
    <header className='w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50'>
      <nav className='container 2xl:max-w-[1200px] mx-auto h-16 flex items-center justify-between px-4'>
        <div className='flex items-center gap-6'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src={logo}
              alt='Logo'
              width={48}
              height={48}
              className='object-contain'
            />
            <span className='font-bold text-xl text-primary'>SGUCharity</span>
          </Link>

          <div className='flex items-center gap-4 pl-[160px] pr-2'>
            {renderMenu(CATEGORY_ITEMS, 'Danh mục')}
            {renderMenu(ACTIVITIES_ITEMS, 'Hoạt động')}
            {renderMenu(ABOUT_US_ITEMS, 'Về chúng tôi')}
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4 '>
            <Link href='/create-account' className='flex items-center gap-2'>
              <Button variant='default' className='hover:opacity-70'>
                Tạo dự án
              </Button>
            </Link>
          </div>

          <QuickSearchProjectDropdown />

          {/* <Button variant='ghost' size='icon' className='hover:bg-primary/10'>
            <BellIcon className='h-6 w-6' />
          </Button> */}

          {userProfile ? (
            <div className='flex items-center gap-2'>
              <Avatar className='w-8 h-8 mx-auto rounded-full overflow-hidden'>
                <AvatarImage
                  src={userProfile?.data?.avatar_url}
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {renderMenu(INFORMATION_USER_ITEMS, '')}
              <Button
                variant='ghost'
                className='gap-2 hover:bg-primary/10'
                onClick={logout}
              >
                <LogOutIcon className='h-6 w-6' />
                Đăng xuất
              </Button>
            </div>
          ) : (
            <Button
              variant='default'
              className='gap-2'
              onClick={() => router.push('/login')}
            >
              <LogInIcon className='h-6 w-6' />
              Đăng nhập
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
