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

const EditProfileForm = () => {
  const { data: profile } = useGetUserProfileQuery();
  const { mutate, isPending } = useUpdateUserProfileMutation();
  const { data } = useDepartmentQuery();

  const formSchema = z.object({
    name: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),

    phone_number: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    email: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),

    address: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    birth_of_date: z.string().optional().nullable(),

    student_code: z.string().optional().nullable(),
    class: z.string().optional().nullable(),
    department_id: z.string().optional().nullable(),
    facebook: z.string().optional().nullable(),
    youtube: z.string().optional().nullable(),
    tiktok: z.string().optional().nullable(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      address: '',
      birth_of_date: '',
      email: '',
      phone_number: '',
      facebook: '',
      gender: '',
      name: '',
      tiktok: '',
      youtube: '',
      student_code: '',
      class: '',
      department_id: '',
    },
    values: profile?.data,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    mutate(values as TUser);
    // submit here
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-6'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>
                Tên người dùng <span style={{ color: 'red' }}>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className=' '
                  placeholder='Tên người dùng'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Giới tính</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value ?? ''}
                value={field.value ?? undefined}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Giới tính' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['Nam', 'Nữ'].map((item) => (
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
          name='phone_number'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>
                Điện thoại<span style={{ color: 'red' }}>*</span>
              </FormLabel>
              <FormControl>
                <Input type='text' placeholder='Điện thoại' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name='email'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>
                Email<span style={{ color: 'red' }}>*</span>
              </FormLabel>
              <FormControl>
                <Input type='text' placeholder='Email' {...field} />
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
          name='birth_of_date'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Ngày sinh</FormLabel>
              <FormControl>
                <Input
                  type='date'
                  placeholder='Ngày sinh'
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
              <FormLabel>Địa chỉ</FormLabel>
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
                defaultValue={field.value ?? ''}
                value={field.value ?? undefined}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Khoa' />
                  </SelectTrigger>
                  {/* <Input
                  type='text'
                  placeholder='Khoa'
                  {...field}
                  value={field.value ?? ''}
                /> */}
                </FormControl>
                <SelectContent>
                  {data?.data.map((item: TDepartment) => (
                    <SelectItem value={`${item.id}`} key={`${item.id}`}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
                <FormMessage />
              </Select>
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
