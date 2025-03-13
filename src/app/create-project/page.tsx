'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useLoginMutation } from '@/hooks/use-login';
import RegisterOrganizationOrIndividual from '@/components/register/register-organization-individual';

const RegisterPage = () => {
  return (
    <>
      <div className='bg-contact-banner h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-35'></div>
        <div className='absolute'>LIÊN HỆ GÓP Ý - PHẢN HỒI</div>
      </div>
      <div className='grid grid-cols-2 gap-8 container 2xl:max-w-[1200px] mx-auto my-8 mt-32'>
        <Button className='text-xl py-6'>Đăng ký tài khoản cá nhân</Button>
        <Button className='text-xl py-6'>Đăng ký tài khoản tổ chức</Button>
      </div>
    </>
  );
};

export default RegisterPage;
