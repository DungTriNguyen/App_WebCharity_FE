import ArchivementSection from '@/components/home-page/archivement-section';
import EndedProjectSection from '@/components/home-page/ended-project-section';
import HighlighProjectSection from '@/components/home-page/highligh-project-section';
import MissionSection from '@/components/home-page/mission-section';
import PartnerSection from '@/components/home-page/partner-section';
import SocialInfoSection from '@/components/home-page/social-info-section';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className='bg-main-banner h-screen w-full'></div>
      <div className='container mx-auto flex flex-col gap-8'>
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
      <SocialInfoSection />
    </>
  );
};

export default HomePage;
