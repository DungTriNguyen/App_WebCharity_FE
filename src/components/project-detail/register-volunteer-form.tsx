'use client';
import { useDepartmentQuery } from '@/hooks/use-department';
import { useRegisterVolunteerMutation } from '@/hooks/use-volunteer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
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
import { useGetUserProfileQuery } from '@/hooks/use-profile';
import { useSession } from 'next-auth/react';

const RegisterVolunteerForm = () => {
  const params = useParams();
  const projectId = params?.id || 0;
  const { mutate, isPending } = useRegisterVolunteerMutation();
  const { data: departments } = useDepartmentQuery();
  const { data: userProfile, isLoading: isLoadingProfile } =
    useGetUserProfileQuery();
  const { data: session } = useSession();

  const formSchema = z.object({
    name: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    email: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    phone_number: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    student_code: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    class: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    department_id: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: userProfile?.data?.name || '',
      email: userProfile?.data?.email || '',
      phone_number: userProfile?.data?.phone_number || '',
      student_code: userProfile?.data?.student_code || '',
      class: userProfile?.data?.class || '',
      department_id: userProfile?.data?.department_id?.toString() || '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!session?.user?.detail?.id) {
      console.error('User ID not found in session');
      return;
    }

    try {
      await mutate({
        ...values,
        project_id: +projectId,
        user_id: session.user.detail.id,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isLoadingProfile) {
    return <div>Loading profile...</div>;
  }

  return (
    <Card className=''>
      <CardHeader>
        <CardTitle>Thông tin tham gia tình nguyện</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='grid grid-cols-2 gap-4'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>
                    Họ và tên <span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Họ và tên' {...field} />
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
                    Email <span className='text-red-500'>*</span>
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
              name='phone_number'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>
                    Số điện thoại <span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type='number' placeholder='Điện thoại' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='col-span-2'>
              <p className='font-bold'>Thông tin của bạn</p>
              <p className='italic'>
                Vui lòng điền thông tin sinh viên để được tham gia vào dự án
              </p>
            </div>
            <FormField
              control={form.control}
              name='student_code'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>
                    MSSV <span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='MSSV' {...field} />
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
                  <FormLabel>
                    Lớp <span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Lớp' {...field} />
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
                  <FormLabel>
                    Khoa <span className='text-red-500'>*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value ?? ''}
                    value={field.value ?? ''}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Khoa' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departments?.data.map((item: TDepartment) => (
                        <SelectItem value={`${item.id}`} key={`${item.id}`}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Button
              type='submit'
              className='col-span-2'
              disabled={!form.formState.isValid || isPending}
            >
              {isPending ? 'Đang xử lý...' : 'Tham gia'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterVolunteerForm;
