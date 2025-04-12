'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from '@/hooks/use-profile';
import { useDepartmentQuery } from '@/hooks/use-department';
import { USER_GENDER } from '@/app/enum';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  gender: z.string().min(1, { message: 'Thông tin không được trống' }),
  birth_of_date: z
    .date()
    .refine((date) => !isNaN(date.getTime()), {
      message: 'Thông tin không được trống',
    })
    .nullable(),
  tiktok: z.string().optional().nullable(),
  name: z.string().min(1, { message: 'Thông tin không được trống' }),
  facebook: z.string().optional().nullable(),
  phone_number: z.string().min(1, { message: 'Thông tin không được trống' }),
  youtube: z.string().optional().nullable(),
  address: z.string().min(1, { message: 'Thông tin không được trống' }),
  description: z.string().optional().nullable(),
  student_code: z.string().optional().nullable(),
  class: z.string().optional().nullable(),
  department_id: z.string().optional().nullable(),
});

const EditProfileForm = () => {
  const { data: profile } = useGetUserProfileQuery();
  const { mutate, isPending } = useUpdateUserProfileMutation();

  const { data: departments } = useDepartmentQuery();

  // console.log(Object.values(USER_GENDER), profile?.data);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      gender: '',
      birth_of_date: null,
      tiktok: '',
      name: '',
      facebook: '',
      phone_number: '',
      youtube: '',
      address: '',
      student_code: '',
      class: '',
      department_id: '',
      description: '',
    },
    values: profile?.data,
  });

  console.log(form.getValues('gender'), 'form');
  console.log(profile?.data?.gender, 'profile?.data');

  // useEffect(() => {
  //   if (profile?.data) {
  //     form.reset({
  //       gender: profile?.data.gender || '',
  //       birth_of_date: profile.data.birth_of_date
  //         ? new Date(profile.data.birth_of_date).toISOString().split('T')[0]
  //         : '',
  //       tiktok: profile.data.tiktok || '',
  //       name: profile.data.name || '',
  //       facebook: profile.data.facebook || '',
  //       phone_number: profile.data.phone_number || '',
  //       youtube: profile.data.youtube || '',
  //       address: profile.data.address || '',
  //       student_code: profile.data.student_code || '',
  //       class: profile.data.class || '',
  //       department_id: profile.data.department_id || '',
  //     });
  //     // console.log('gioi tinh:', profile.data.gender);
  //     // console.log(form.getValues());
  //   }
  // }, [profile, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updateData: TUserUpdate = {
      gender: values.gender,
      birth_of_date: values.birth_of_date
        ? values.birth_of_date.toISOString()
        : undefined,
      tiktok: values.tiktok,
      name: values.name,
      facebook: values.facebook,
      phone_number: values.phone_number,
      youtube: values.youtube,
      address: values.address,
      student_code: values.student_code,
      class: values.class,
      department_id: values.department_id,
      description: values.description,
    };

    // console.log('Submitting update data:', updateData);

    mutate(updateData);
  }

  // comment this to other components
  // if (isLoading) {
  //   return <div>Đang tải dữ liệu...</div>;
  // }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-6'
      >
        <FormItem className='col-span-1'>
          <FormLabel>
            Tên đăng nhập <span className='text-red-500'>*</span>
          </FormLabel>
          <FormControl>
            <Input
              type='text'
              value={profile?.data.username ?? ''}
              disabled
              className='bg-gray-100 cursor-not-allowed'
            />
          </FormControl>
        </FormItem>
        <div className='col-span-1'>
          <div className='flex gap-2'>
            <FormField
              control={form.control}
              name='gender'
              render={({ field }) => (
                <FormItem className='w-[50%]'>
                  <FormLabel>
                    Giới tính <span className='text-red-500'>*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value ?? ''}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder='Giới tính'
                          defaultValue={field.value ?? ''}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(USER_GENDER).map((item) => (
                        <SelectItem value={item} key={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='birth_of_date'
              render={({ field }) => (
                <FormItem className='col-span-1 space-y-5'>
                  <FormLabel className='block'>
                    Ngày sinh <span style={{ color: 'red' }}>*</span>
                  </FormLabel>
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
                          selected={
                            typeof field.value === 'string'
                              ? new Date(field.value)
                              : field.value || new Date()
                          }
                          onSelect={field.onChange}
                          toDate={new Date('2009-04-10')}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormItem className='col-span-1'>
          <FormLabel>
            Email <span className='text-red-500'>*</span>
          </FormLabel>
          <FormControl>
            <Input
              type='text'
              value={profile?.data.email ?? ''}
              disabled
              className='bg-gray-100 cursor-not-allowed'
            />
          </FormControl>
        </FormItem>

        <FormField
          control={form.control}
          name='tiktok'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tiktok</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Tiktok'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>
                Tên người dùng <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input type='text' placeholder='Tên người dùng' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='facebook'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Facebook</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Facebook'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone_number'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>
                Số điện thoại <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input type='number' placeholder='Số điện thoại' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='youtube'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Youtube</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Youtube'
                  {...field}
                  value={field.value ?? ''}
                />
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
              <FormLabel>
                Địa chỉ <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Địa chỉ'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Thông tin của bạn</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Nhập thông tin của bạn...'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='col-span-2'>
          <p className='font-bold'>Thông tin của bạn</p>
          <p className='italic'>
            Nếu bạn là sinh viên của trường đại học Sài Gòn
          </p>
        </div>

        <FormField
          control={form.control}
          name='student_code'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>MSSV</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='MSSV'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='class'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Lớp</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Lớp'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='department_id'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Khoa</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value ?? undefined}
                defaultValue={field.value ?? ''}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Khoa' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {departments?.data.map((item: TDepartment) => (
                    <SelectItem key={item.id} value={`${item.id}`}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='col-span-2 flex justify-center'>
          <Button type='submit' disabled={isPending || !form.formState.isValid}>
            Cập nhật
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditProfileForm;
