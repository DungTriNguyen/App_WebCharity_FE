'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { usePostRegisterOrganizationMutation } from '@/hooks/use-register';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import DropzoneForm from '@/app/dropzone-form';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),

  birth: z.date().refine((date) => !isNaN(date.getTime()), {
    message: 'Thông tin không được trống',
  }),
  website: z
    .string()
    .min(1, {
      message: 'Thông tin không được trống',
    })
    .regex(
      new RegExp(
        /^(https?:\/\/)?(([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})|(\d{1,3}(\.\d{1,3}){3})|(\[[a-fA-F0-9:]+\]))(:\d{1,5})?(\/.*)?$/
      ),
      {
        message: 'Không đúng định dạng website',
      }
    ),
  field: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  address: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  username: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  information: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  representative_name: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  representative_phone_number: z
    .string()
    .min(1, {
      message: 'Thông tin không được trống',
    })
    .max(10, {
      message: 'Số điện thoại không được quá 11 ký tự',
    })
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      {
        message: 'Không đúng định dạng số điện thoại',
      }
    ),
  representative_email: z
    .string()
    .min(1, {
      message: 'Thông tin không được trống',
    })
    .email({ message: 'Không đúng định dạng email' }),
  related_images: z.array(
    z.object({
      name: z.string(),
      base64: z.string()
    })).optional().nullable(),
});

const OrganizationForm = () => {
  const { mutate, isPending } = usePostRegisterOrganizationMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      birth: new Date(),
      website: '',
      field: '',
      address: '',
      username: '',
      information: '',
      representative_name: '',
      representative_phone_number: '',
      representative_email: '',
      related_images: [],
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    mutate(data as TRegisterOrganizationForm);
  };
  return (
    <Form {...form}>
      <form
        className='grid grid-cols-2 gap-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tên tổ chức</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Tên tổ chức' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='birth'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel className='block'>Ngày thành lập</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon />
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      toDate={new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='website'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Website' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='field'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Lĩnh vực</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Lĩnh vực' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tên tài khoản</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Tên tài khoản' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='information'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Thông tin</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Thông tin' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Địa chỉ</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Địa chỉ' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='representative_name'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tên đại diện</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Tên đại diện' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='representative_phone_number'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Số điện thoại</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Số điện thoại' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='representative_email'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='col-span-2'>
          <FormField
            control={form.control}
            name="related_images"
            render={({ field, formState }) => (
              <FormItem className="col-span-2">
                <FormLabel className="">
                  Hình ảnh
                </FormLabel>
                <FormControl className="">
                  <div className="w-full">
                    <DropzoneForm
                      defaultValue={field.value as TUploadImage[]}
                      onChange={e => field.onChange(e as TUploadImage[])}
                      isError={!!formState?.errors?.related_images?.message}
                    />
                  </div>
                </FormControl>
                <div className="hidden md:block col-span-1" />
                <FormMessage className="col-span-2"></FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className='col-span-2 flex justify-center'>
          <Button type='submit' disabled={isPending || !form.formState.isValid}>
            Gửi
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OrganizationForm;
