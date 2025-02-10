'use client';
import React from 'react';
import SummarySection from '@/components/about-us/summary-section';
import MemberSection from '@/components/about-us/member-section';
import FounderSection from '@/components/about-us/founder-section';
import MoreDetailSection from '@/components/about-us/more-detail-section';
import FollowSection from '@/components/about-us/follow-section';

const AboutUsPage = () => {
  return (
    <>
      <div className='bg-about-us-banner h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-35'></div>
        <div className='absolute'>VỀ CHÚNG TÔI</div>
      </div>
      <SummarySection />
      <MemberSection />
      <FounderSection />
      <MoreDetailSection />
      <div className='bg-gray-300'>
        <FollowSection />
      </div>
    </>
  );
};

export default AboutUsPage;
