import HistoryDonationVolunteerTable from '@/components/user/history-donation-volunteer/HistoryDonationVolunteerTable';
import SummaryHistoryUser from '@/components/user/history-donation-volunteer/SummaryHistoryUser';
import React from 'react';

const DonateHistoryPage = () => {
  return (
    <div>
      <SummaryHistoryUser />
      <HistoryDonationVolunteerTable />
    </div>
  );
};

export default DonateHistoryPage;
