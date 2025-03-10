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
    <div className='bg-login-background min-h-screen w-full bg-cover object-contain bg-no-repeat flex justify-center items-center'>
      <RegisterOrganizationOrIndividual />
    </div>
  );
};

export default RegisterPage;
