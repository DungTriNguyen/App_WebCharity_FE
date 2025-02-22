import React from 'react';
import vnpayLogo from '../../../public/vnpay-logo.png';
import budPrairieLogo from '../../../public/bud-prairie-logo.png';
import fptLogo from '../../../public/fpt-logo.png';
import viettelMoneyLogo from '../../../public/viettel-money-logo.png';
import comartekLogo from '../../../public/comartek-logo.png';
import Image from 'next/image';

const PartnerSection = () => {
  const partners = [
    {
      name: 'VN Pay',
      logo: vnpayLogo.src,
      link: 'link 1',
    },
    {
      name: 'FPT',
      logo: fptLogo.src,
      link: 'link 2',
    },
    {
      name: 'Viettel Money',
      logo: viettelMoneyLogo.src,
      link: 'link 3',
    },
    {
      name: 'Comartek',
      logo: comartekLogo.src,
      link: 'link 4',
    },
    {
      name: 'Bud Prairie',
      logo: budPrairieLogo.src,
      link: 'link 5',
    },
  ];
  return (
    <div>
      <h3 className='text-3xl font-bold text-center p-4'>Đơn vị đồng hành</h3>
      <p className='text-center'>
        “Tri ân những cá nhân và tổ chức đã có những đóng góp tích cực và to lớn
        trong tất cả các chương trình đã và đang diễn ra”
      </p>
      <ul className='flex justify-around items-center'>
        {partners.map((partner) => (
          <li key={partner.name}>
            <Image
              width={160}
              height={160}
              src={partner.logo}
              alt={partner.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerSection;
