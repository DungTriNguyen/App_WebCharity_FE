'use client';
import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { usePostContactMutation } from '@/hooks/use-contact';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

const ContactForm = () => {
  const { mutate, isSuccess, isPending, error } = usePostContactMutation();
  const formSchema = z.object({
    name: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    email: z
      .string()
      .min(1, {
        message: 'Thông tin không được trống',
      })
      .email({ message: 'Không đúng định dạnh email' }),
    phone_number: z
      .string()
      .min(1, {
        message: 'Thông tin không được trống',
      })
      .max(11, {
        message: 'Số điện thoại không được quá 11 ký tự',
      })
      .regex(
        new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
        {
          message: 'Không đúng định dạng số điện thoại',
        }
      ),
    subject: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    content: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone_number: '',
      subject: '',
      content: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    mutate(values);
    // submit here
  }

  useEffect(() => {
    if (isSuccess) {
      form.reset();
    }
  }, [isSuccess, form]);

  return (
    <div>
      <Card className=''>
        <CardHeader>
          <CardTitle className='text-3xl'>Liên hệ</CardTitle>
          <CardDescription>
            Nếu bạn có câu hỏi cần giải đáp, hãy điền vào biểu mẫu bên dưới.
            Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='grid grid-cols-1 gap-4'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='col-span-1'>
                    <FormLabel>Họ và tên</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        className=' '
                        placeholder='Tên'
                        {...field}
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
                    <FormLabel>Điện thoại</FormLabel>
                    <Input type='text' placeholder='Điện thoại' {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='subject'
                render={({ field }) => (
                  <FormItem className='col-span-1'>
                    <FormLabel>Chủ đề</FormLabel>
                    <FormControl>
                      <Input type='text' placeholder='facebook' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                  <FormItem className='col-span-1'>
                    <FormLabel>Nội dung</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Nội dung' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='col-span-1 flex justify-center'>
                <Button
                  type='submit'
                  disabled={isPending || !form.formState.isValid}
                >
                  Cập nhật
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
