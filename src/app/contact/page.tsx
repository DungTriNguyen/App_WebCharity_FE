import ContactForm from '@/components/contact/contact-form';
import OfficeInfo from '@/components/contact/office-info';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <div className='bg-contact-banner h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-35'></div>
        <div className='absolute'>LIÊN HỆ GÓP Ý - PHẢN HỒI</div>
      </div>
      <div className='grid grid-cols-2 gap-8 container 2xl:max-w-[1200px] mx-auto my-8'>
        <OfficeInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
