'use client';

import ArchivementSection from '@/components/home-page/archivement-section';
import MissionSection from '@/components/home-page/mission-section';
import PartnerSection from '@/components/home-page/partner-section';
import SocialInfoSection from '@/components/home-page/social-info-section';
import { Separator } from '@/components/ui/separator';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import DonationNotificationBanner from '@/components/home-page/donation-notification-banner';

// phần em chỉnh
import CategoriesProjectsList from '@/components/home-page/categories-projects-list';
import OrganizationProjectSection from '@/components/home-page/organization-project-section';
import IndividualProjectSection from '@/components/home-page/individual-project-section';
import TypeProjects from '@/components/home-page/type-projects';
import React from 'react';

const HomePage = () => {
  const { data } = useSession();

  return (
    <>
      <div className='bg-main-banner h-screen w-full relative'>
        {/* Notification Banner */}
        <div className='absolute left-10 top-10 bg-white h-20 w-1/3 rounded-full overflow-hidden'>
          <DonationNotificationBanner />
        </div>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black opacity-10'></div>
      </div>
      <div className='container 2xl:max-w-[1200px] mx-auto flex flex-col gap-8'>
        <CategoriesProjectsList />
        <Separator />
        <TypeProjects />
        <Separator />
        <OrganizationProjectSection />
        <IndividualProjectSection />
        <Separator />
        <MissionSection />
        <Separator />
        <PartnerSection />
        <Separator />
        <ArchivementSection />
        <Separator />
      </div>
      <SocialInfoSection />
    </>
  );
};

export default HomePage;
