'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { usePostContactMutation } from '@/hooks/use-contact';
import { TContactFormData } from '@/app/types';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState<TContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { mutate, status } = usePostContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error when user starts typing
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage(null);

    mutate(formData, {
      onSuccess: (response) => {
        if (response.data?.status) {
          setSuccessMessage(response.message || 'Thêm mới liên hệ thành công.');
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        }
      },
      onError: (error: any) => {
        const errorResponse = error.response?.data;
        if (errorResponse?.errors) {
          setErrors(errorResponse.errors);
        }
      },
    });
  };

  return (
    <Card className='p-8'>
      <CardHeader>
        <CardTitle className='text-3xl'>Liên hệ</CardTitle>
        <CardDescription>
          Nếu bạn có câu hỏi cần giải đáp, chúng tôi rất sẵn lòng trò chuyện
          cùng bạn. Hãy điền vào biểu mẫu bên dưới, chúng tôi sẽ liên hệ lại
          trong thời gian sớm nhất.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {successMessage && (
          <div className='mb-4 p-4 bg-green-100 text-green-700 rounded'>
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div>
            <Label>
              Họ và tên <span className='text-red-500'>*</span>
            </Label>
            <Input
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Nhập họ tên'
            />
            {errors.name && (
              <p className='text-red-500 text-sm mt-1'>{errors.name[0]}</p>
            )}
          </div>

          <div>
            <Label>
              Email <span className='text-red-500'>*</span>
            </Label>
            <Input
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Nhập email'
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email[0]}</p>
            )}
          </div>

          <div>
            <Label>
              Số điện thoại <span className='text-red-500'>*</span>
            </Label>
            <Input
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Nhập số điện thoại'
              type='tel'
            />
            {errors.phone_number && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.phone_number[0]}
              </p>
            )}
          </div>

          <div>
            <Label>
              Chủ đề <span className='text-red-500'>*</span>
            </Label>
            <Input
              name='subject'
              value={formData.subject || ''}
              onChange={handleChange}
              placeholder='Nhập chủ đề'
            />
            {errors.subject && (
              <p className='text-red-500 text-sm mt-1'>{errors.subject[0]}</p>
            )}
          </div>

          <div>
            <Label>
              Nội dung <span className='text-red-500'>*</span>
            </Label>
            <Textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Nhập nội dung'
              className='min-h-[250px] overflow-y-auto'
            />
            {errors.content && (
              <p className='text-red-500 text-sm mt-1'>{errors.content[0]}</p>
            )}
          </div>

          <div>
            <Button type='submit' disabled={status === 'pending'}>
              {status === 'pending' ? 'Đang gửi...' : 'Gửi'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
