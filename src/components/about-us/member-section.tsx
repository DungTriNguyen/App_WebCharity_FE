import Image from 'next/image';
import React from 'react';
import memberImg from '../../../public/member.png';

const MemberSection = () => {
  return (
    <div className='container mx-auto my-8 grid grid-cols-2 gap-2'>
      <div className='col-span-1'>
        <Image
          width={500}
          height={600}
          src={memberImg.src}
          alt=''
          className='mx-auto'
        />
      </div>
      <div className='col-span-1 flex flex-col justify-center items-start gap-4'>
        <h5>Tổ chức của chúng tôi</h5>
        <h3 className='text-4xl font-bold'>Đội ngũ làm nên thay đổi</h3>
        <p>
          Gặp gỡ Đội ngũ Lãnh đạo, cấp Quản lý và nhân viên nhiệt huyết và tận
          tâm của chúng tôi, những người đang làm việc chăm chỉ và thông minh
          hàng ngày để mang lại tương lai tốt đẹp hơn cho trẻ em và phụ nữ trên
          khắp Việt Nam.Gặp gỡ Đội ngũ Lãnh đạo, cấp Quản lý và nhân viên nhiệt
          huyết và tận tâm của chúng tôi, những người đang làm việc chăm chỉ và
          thông minh hàng ngày để mang lại tương lai tốt đẹp hơn cho trẻ em và
          phụ nữ trên khắp Việt Nam.
        </p>
      </div>
    </div>
  );
};

export default MemberSection;
