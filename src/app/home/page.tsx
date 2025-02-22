'use client';

import ArchivementSection from '@/components/home-page/archivement-section';
// import EndedProjectSection from '@/components/home-page/ended-project-section';
// import HighlighProjectSection from '@/components/home-page/highligh-project-section';
import MissionSection from '@/components/home-page/mission-section';
import PartnerSection from '@/components/home-page/partner-section';
import SocialInfoSection from '@/components/home-page/social-info-section';
import { Separator } from '@/components/ui/separator';
import { useSession } from 'next-auth/react';

// phần em chỉnh
import CategoriesProjectsList from '@/components/home-page/categories-projects-list';
import OrganizationProjectSection from '@/components/home-page/organization-project-section';
import IndividualProjectSection from '@/components/home-page/individual-project-section';
import TypeProjects from '@/components/home-page/type-projects';
import React from 'react';

const HomePage = () => {
  const { data } = useSession();
  console.log(data);

  return (
    <>
      <div className='bg-main-banner h-screen w-full relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black opacity-10'></div>
      </div>
      {/* <div className='container 2xl:max-w-[1200px] mx-auto flex flex-col gap-8'>
        <MissionSection />
        <Separator />
        <HighlighProjectSection />
        <Separator />
        <ArchivementSection />
        <Separator />
        <PartnerSection />
        <Separator />
        <EndedProjectSection />
        <Separator />
      </div>
      <SocialInfoSection /> */}
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
