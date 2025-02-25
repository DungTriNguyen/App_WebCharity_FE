type TCampaignDetail = {
  unit: string;
  current: number;
  total: number;
  label: string;
  count: number;
};

type TCampaign = {
  id: number;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  timeLeft: number;
  details: TCampaignDetail[];
};

type TDonatedData = {
  id: string;
  supporter: string;
  amount: string;
  updatedAt: string;
};
