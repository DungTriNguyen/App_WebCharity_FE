'use client';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { useParams } from 'next/navigation';
import { useRegisterVolunteerMutation } from '@/hooks/use-volunteer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useDepartmentQuery } from '@/hooks/use-department';

const RegisterVolunteerForm = () => {
  const params = useParams();
  const projectId = params?.id || 0;

  const { mutate } = useRegisterVolunteerMutation();
  const { data } = useDepartmentQuery();

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
    // incognito: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone_number: '',
      student_code: '',
      class: '',
      department_id: '',
      // incognito: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await mutate({ ...values, project_id: +projectId });
  };

  console.log(data);

  return (
    <Card className=''>
      <CardHeader>
        <CardTitle>Thông tin ủng hộ</CardTitle>
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
                  <FormLabel>Họ và tên</FormLabel>
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
                  <FormLabel>Email</FormLabel>
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
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Điện thoại' {...field} />
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
                <FormItem className='col-span-2'>
                  <FormLabel>MSSV</FormLabel>
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
                  <FormLabel>Lớp</FormLabel>
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
                    </FormControl>
                    <SelectContent>
                      {data?.data.map((item: TDepartment) => (
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
              disabled={!form.formState.isValid}
            >
              Tham gia
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterVolunteerForm;
