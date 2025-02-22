import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import redCrossLogo from '../../../public/red-cross-logo.png';
import { Badge } from '../ui/badge';
import FacebookIcon from '../icons/facebook-icon';
import Link from 'next/link';
import GmailIcon from '../icons/gmail-icon';
import TelephoneIcon from '../icons/telephone-icon';

const ProjectContact = () => {
  return (
    <Card className='p-6 flex flex-col gap-2'>
      <h4>Thông tin tổ chức / cá nhân vận động chiến dịch </h4>
      <div className='flex gap-2 items-center'>
        <Image alt='' width={48} height={48} src={redCrossLogo.src} />
        <div>
          <p>Hội chữ thập đỏ Việt Nam</p>
          <Badge className='rounded-full'>Tổ chức</Badge>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <FacebookIcon width='36' height='36' />
        <Link href={'https://facebook.com'}>Facebook...</Link>
      </div>
      <div className='flex gap-2 items-center'>
        <GmailIcon />
        <Link href={'https://gmail.com'}>Gmail...</Link>
      </div>
      <div className='flex gap-2 items-center'>
        <TelephoneIcon />
        <Link href={'https://gmail.com'}>123456789</Link>
      </div>
    </Card>
  );
};

export default ProjectContact;
