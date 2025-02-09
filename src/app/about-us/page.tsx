'use client';
import React from 'react';
import SummarySection from '@/components/about-us/summary-section';
import MemberSection from '@/components/about-us/member-section';
import FounderSection from '@/components/about-us/founder-section';

const AboutUsPage = () => {
  return (
    <>
      <div className='bg-about-us-banner h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold'>
        VỀ CHÚNG TÔI
      </div>
      <SummarySection />
      <MemberSection />
      <FounderSection />
    </>
  );
};

export default AboutUsPage;
