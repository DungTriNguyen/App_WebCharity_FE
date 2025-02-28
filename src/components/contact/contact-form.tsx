import React from 'react';
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

const ContactForm = () => {
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
        <form className='flex flex-col gap-6'>
          <div>
            <Label>
              Họ và tên <span className='text-red-500'>*</span>
            </Label>
            <Input placeholder='Nhập họ tên' />
          </div>

          <div>
            <Label>
              Email <span className='text-red-500'>*</span>
            </Label>
            <Input placeholder='Nhập email' />
          </div>
          <div>
            <Label>
              Số điện thoại <span className='text-red-500'>*</span>
            </Label>
            <Input placeholder='Nhập số điện thoại' type='number' />
          </div>

          <div>
            <Label>
              Chủ đề <span className='text-red-500'>*</span>
            </Label>
            <Input placeholder='Nhập chủ đề' />
          </div>

          <div>
            <Label>
              Nội dung <span className='text-red-500'>*</span>
            </Label>
            <Textarea
              placeholder='Nhập nội dung'
              className='min-h-[250px] overflow-y-auto'
            />
          </div>
          <div>
            <Button type='submit'>Gửi</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
