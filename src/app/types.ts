// import { CAMPAIGN_ROLE, CAMPAIGN_TYPE } from './enum';

type TCampaignDetail = {
  unit: string;
  current: number;
  total: number;
  label: string;
  count: number;
};

type TCampaign = {
  id: number;
  is_organization: boolean;
  is_individual: boolean;
  front_status: number;
  front_status_label: string; // "Đã kết thúc"
  category: {
    id: number;
    name: string; // "Người cao tuổi"
    icon: string; // SVG string
    status: number;
    projects_count: number | null;
  };
  name: string; // "Nhóm 1"
  type: string; // "Quyên góp và tình nguyện"
  background_image: string; // URL
  donation_percent: number;
  donations_sum_amount: string | null;
  donations_sum_amount_formatted: string; // "0đ"
  donation_target: string; // "100000000.0000"
  donations_count: number;
  volunteer_percent: number;
  volunteers_without_canceled_count: number;
  volunteer_quantity: number;
  diff_date: string; // "Đã kết thúc"
  start_date: string; // "19/02/2025 | 12:00"
  end_date: string; // "23/02/2025 | 12:00"
};

type TDonatedData = {
  id: string;
  supporter: string;
  amount: string;
  updatedAt: string;
};

type TContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type TStatisticData = {
  organization_count: number;
  individual_count: number;
  user_count: number;
  project_count: number;
  donation_count: number;
  total_donation_amount: number;
};

type TSCategotyData = {};
