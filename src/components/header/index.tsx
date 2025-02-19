'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import logo from '../../../public/sgu-logo.png';
import { LogInIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data } = useSession();
  const router = useRouter();
  const ACTIVITIES_ITEMS = [
    {
      label: 'Quyên góp tiền',
      href: '/',
    },
    {
      label: 'Đăng ký tình nguyện viên',
      href: '/',
    },
    {
      label: 'Quyên góp và ĐKTNV',
      href: '/',
    },
  ];

  const CATEGORY_ITEMS = [
    {
      label: 'Chiến dịch',
      href: '/',
    },
    {
      label: 'Tổ chức gây quỹ',
      href: '/',
    },
    {
      label: 'Cá nhân gây quỹ',
      href: '/',
    },
  ];

  const ABOUT_US_ITEMS = [
    {
      label: 'Thông tin chung',
      href: '/home',
    },
    {
      label: 'Hướng dẫn quyên góp',
      href: '/',
    },
    {
      label: 'Chính sách bảo mật',
      href: '/privacy-policy',
    },
    {
      label: 'Liên hệ',
      href: '/contact',
    },
  ];

  const renderMenu = (
    menuItems: { label: string; href: string }[],
    header: string
  ) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>{header}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-52' side='bottom' align='end'>
          {menuItems.map(
            ({ href, label }: { href: string; label: string }, index) => (
              <React.Fragment key={index}>
                <DropdownMenuItem onClick={() => router.push(href)}>
                  {label}
                </DropdownMenuItem>
                {index < menuItems.length - 1 && <DropdownMenuSeparator />}
              </React.Fragment>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const logout = async () => {
    await signOut({ callbackUrl: '/login', redirect: true });
  };

  return (
    <div className='w-full h-[76px] border-b'>
      <div className='container 2xl:max-w-[1200px] flex m-auto justify-around items-center h-full'>
        <Image
          className='w-auto h-8 lg:h-10'
          src={logo.src}
          width={48}
          height={48}
          alt=''
        />
        <div className='flex gap-16'>
          {renderMenu(CATEGORY_ITEMS, 'Ủng hộ')}
          {renderMenu(ACTIVITIES_ITEMS, 'Chiến dịch')}
          {renderMenu(ABOUT_US_ITEMS, 'Về chúng tôi')}
        </div>
        {data?.user ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button variant={'ghost'} onClick={() => router.push('/login')}>
            <LogInIcon /> Đăng nhập
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
