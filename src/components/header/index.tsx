'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import logo from '../../../public/sgu-logo.png';
import {
  BellIcon,
  LogInIcon,
  LogOutIcon,
  SearchIcon,
  ChevronDownIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

const Header = () => {
  const { data } = useSession();
  const router = useRouter();
  // console.log('thong tin user:', data?.user.image);

  const ACTIVITIES_ITEMS = [
    {
      label: 'Quyên góp tiền',
      href: '/donation',
      icon: '💰',
    },
    {
      label: 'Đăng ký tình nguyện viên',
      href: '/register-volunteer',
      icon: '🤝',
    },
    {
      label: 'Quyên góp và ĐKTNV',
      href: '/donation',
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
      href: '/organizations',
      icon: '🏢',
    },
    {
      label: 'Cá nhân gây quỹ',
      href: '/individuals',
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
      href: '/',
      icon: 'ℹ️',
    },
    {
      label: 'Chỉnh sửa thông tin cá nhân',
      href: '/donation',
      icon: '📖',
    },
    {
      label: 'Lịch sử ủng hộ/ ĐK TNV',
      href: '/privacy-policy',
      icon: '🔒',
    },
    // {
    //   label: 'Liên hệ',
    //   href: '/contact',
    //   icon: '📞',
    // },
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

          <div className='flex items-center gap-4 pl-[255px]'>
            {renderMenu(CATEGORY_ITEMS, 'Danh mục')}
            {renderMenu(ACTIVITIES_ITEMS, 'Hoạt động')}
            {renderMenu(ABOUT_US_ITEMS, 'Về chúng tôi')}
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4 '>
            <Link href='/register' className='flex items-center gap-2'>
              <Button variant='default' className='hover:opacity-70'>
                Tạo dự án
              </Button>
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='hover:bg-primary/10'
              >
                <SearchIcon className='h-6 w-6' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-80 p-2' align='end'>
              <div className='relative'>
                <Input
                  type='text'
                  placeholder='Tìm kiếm dự án thiện nguyện...'
                  className='w-full pl-4 pr-10 py-2'
                  autoFocus
                />
                <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
              </div>
            </DropdownMenuContent>
            <Button variant='ghost' size='icon' className='hover:bg-primary/10'>
              <BellIcon className='h-6 w-6' />
            </Button>
          </DropdownMenu>

          {data ? (
            <div className='flex'>
              <Avatar>{/* <AvatarImage src={'/sgu-logo.png'} /> */}</Avatar>
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
