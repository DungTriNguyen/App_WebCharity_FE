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
        <form className='flex flex-col gap-4'>
          <div>
            <Label>Họ và tên</Label>
            <Input placeholder='họ tên' />
          </div>

          <div>
            <Label>Email</Label>
            <Input placeholder='email' />
          </div>
          <div>
            <Label>Số điện thoại</Label>
            <Input placeholder='điện thoại' />
          </div>

          <div>
            <Label>Chủ đề</Label>
            <Input placeholder='chủ đề' />
          </div>

          <div>
            <Label>Nội dung</Label>
            <Textarea placeholder='nội dung' />
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
