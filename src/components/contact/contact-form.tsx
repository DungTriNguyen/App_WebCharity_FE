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
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState<TContactFormData>({
    name: '',
    email: '',
    phone_number: '',
    subject: '',
    content: '',
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { mutate, status } = usePostContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Xóa lỗi khi người dùng nhập lại dữ liệu
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage(null);

    mutate(formData, {
      onSuccess: (response) => {
        if (response.data?.status) {
          setSuccessMessage('Gửi liên hệ thành công.');
          toast.success('Gửi liên hệ thành công.');

          // Reset form sau khi gửi thành công
          setFormData({
            name: '',
            email: '',
            phone_number: '',
            subject: '',
            content: '',
          });
        }
      },
      onError: (error: any) => {
        const errorResponse = error.response?.data;

        if (errorResponse?.errors) {
          setErrors(errorResponse.errors); // Cập nhật lỗi từ server
        }

        toast.error(
          errorResponse?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại!'
        );
      },
    });
  };

  return (
    <Card className='p-8'>
      <CardHeader>
        <CardTitle className='text-3xl'>Liên hệ</CardTitle>
        <CardDescription>
          Nếu bạn có câu hỏi cần giải đáp, hãy điền vào biểu mẫu bên dưới. Chúng
          tôi sẽ liên hệ lại trong thời gian sớm nhất.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {successMessage && (
          <div className='mb-4 p-4 bg-green-100 text-green-700 rounded'>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          {[
            { label: 'Họ và tên', name: 'name', type: 'text', required: true },
            { label: 'Email', name: 'email', type: 'email', required: true },
            {
              label: 'Số điện thoại',
              name: 'phone_number',
              type: 'tel',
              required: false,
            },
            { label: 'Chủ đề', name: 'subject', type: 'text', required: true },
          ].map(({ label, name, type, required }) => (
            <div key={name}>
              <Label>
                {label} {required && <span className='text-red-500'>*</span>}
              </Label>
              <Input
                name={name}
                type={type}
                value={formData[name as keyof TContactFormData]}
                onChange={handleChange}
                placeholder={`Nhập ${label.toLowerCase()}`}
              />
              {errors[name] && (
                <p className='text-red-500 text-sm mt-1'>{errors[name][0]}</p>
              )}
            </div>
          ))}

          <div>
            <Label>
              Nội dung <span className='text-red-500'>*</span>
            </Label>
            <Textarea
              name='content'
              value={formData.content}
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
