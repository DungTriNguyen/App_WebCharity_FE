import ArchivementSection from '@/components/home-page/ArchivementSection';
import EndedProjectSection from '@/components/home-page/EndedProjectSection';
import HighlighProjectSection from '@/components/home-page/HighlighProjectSection';
import MissionSection from '@/components/home-page/MissionSection';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className='bg-main-banner h-screen w-full'>HomePage</div>
      <div className='container mx-auto flex flex-col gap-8'>
        <MissionSection />
        <Separator />
        <HighlighProjectSection />
        <Separator />
        <ArchivementSection />
        <Separator />
        <EndedProjectSection />
      </div>
    </div>
  );
};

export default HomePage;
