import React from 'react';
import IndividualForm from '@/components/register/individual-form';

const CreateIndividualAccount = () => {
  return (
    <div className='container mx-auto my-8'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-2xl font-bold'>Thông tin yêu cầu để mở tài khoản cá nhân</h1>
        <IndividualForm />
      </div>
    </div>
  );
};

export default CreateIndividualAccount;
