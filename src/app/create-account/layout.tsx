import React from 'react';

const CreateAccountLayout = ({ children }: { children: React.ReactNode }) => {
  const title = '';
  return (
    <>
      <div className='bg-contact-banner h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-35'></div>
        <div className='absolute'>{title}</div>
      </div>
      {children}
    </>
  );
};

export default CreateAccountLayout;
