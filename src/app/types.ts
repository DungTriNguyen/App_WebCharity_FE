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
  front_status: string;
  front_status_label: string; // "Đã kết thúc"
  category: {
    id: number;
    name: string | null; // "Người cao tuổi"
    icon: string | null; // SVG string
    status: number;
    projects_count: number;
  };
  user: {
    id: number;
    name: string | null;
    username: string | null;
    email: string | null;
    phone_number: string | null;
    birth_of_date: string | null;
    status: number;
    status_label: string;
    status_badge: string;
    gender: string;
    address: string | null;
    avatar_url: string;
    description: string | null;
    facebook: string | null;
    youtube: string | null;
    tiktok: string | null;
  };
  name: string | null; // "Nhóm 1"
  type: string; // "Quyên góp và tình nguyện"
  background_image: string; // URL
  related_images: string[]; // URL
  content: string | null;
  donation_percent: number | null;
  donations_sum_amount: number;
  donations_sum_amount_formatted: number; // "0đ"
  donation_target: number | 0; // "100000000.0000"
  donations_count: string;
  volunteer_percent: number | null;
  volunteers_without_canceled_count: number;
  volunteer_quantity: number | 0;
  diff_date: string | null; // "Đã kết thúc"
  start_date: string | null; // "19/02/2025 | 12:00"
  end_date: string | null; // "23/02/2025 | 12:00"
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
  phone_number?: string;
  subject?: string;
  content: string;
};

type TApiResponse<T = any> = {
  message: string;
  data?: any[];
  errors?: Record<string, string[]>;
};

type TStatisticData = {
  organization_count: number;
  individual_count: number;
  user_count: number;
  project_count: number;
  donation_count: number;
  total_donation_amount: number;
};

type TSCategotyData = {
  id: number;
  name: string;
  icon: string;
  status: number;
  projects_count: number;
};

type TDonationMedia = {
  id: number;
  model_type: string;
  model_id: number;
  uuid: string | null;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string | null;
  disk: string;
  conversions_disk: string | null;
  size: number;
  manipulations: [null];
  custom_properties: [null];
  generated_conversions: [null];
  responsive_images: [null];
  order_column: number | null;
  created_at: string | null;
  updated_at: string | null;
  preview_url: string;
  original_url: string;
};

type TSDonationData = {
  id: number;
  user: {
    id: number;
    name: string | null;
    username: string | null;
    email: string | null;
    phone_number: string | null;
    birth_of_date: string | null;
    email_verified_at: string | null;
    status: number;
    department_id: number | null;
    class: string | null;
    student_code: string | null;
    gender: string;
    address: string | null;
    description: string | null;
    created_at: string | null;
    updated_at: string | null;
    deleted_at: string | null;
    avatar_url: string;
    media: TDonationMedia[];
  };
  project: {
    id: number;
    category_id: number;
    user_id: number;
    name: string | null;
    donation_target: string | null;
    volunteer_quantity: number | null;
    start_date: string | null;
    end_date: string | null;
    content: string | null;
    status: number;
    type: string;
    created_at: string | null;
    updated_at: string | null;
    front_status: string;
    background_image: string;
    related_images: string;
    media: TDonationMedia[];
  };
  department: {
    id: number;
    code: string | null;
    name: string | null;
    description: string | null;
    status: number;
    created_at: string | null;
    updated_at: string | null;
    thumbnail_url: string;
    media: TDonationMedia[];
  };
  account_number: string | null;
  account_name: string | null;
  code: string | null;
  name: string | null;
  email: string | null;
  phone_number: string | null;
  amount: string;
  is_anonymous: number;
  anonymous_status_label: string;
  anonymous_status_badge: string;
  note: string | null;
  student_code: string | null;
  class: string | null;
  created_at: string;
};

type TSSetting = {
  data: {
    key: string;
    value: string | null;
    image: string;
    images: [string];
  };
};

type TSVolunteer = {
  data: {
    id: number;
    user: {
      id: number;
      name: string;
      username: string;
      email: string;
      phone_number: string | null;
      birth_of_date: string | null;
      status: number;
      status_label: string;
      status_badge: string;
      gender: string;
      address: string | null;
      avatar_url: string;
      description: string | null;
    };
    project: {
      id: number;
      category_id: number;
      user_id: number;
      name: string;
      donation_target: string;
      volunteer_quantity: number;
      start_date: string;
      end_date: string;
      content: string;
      status: number;
      type: string;
      created_at: string;
      updated_at: string;
      background_image: string;
      related_images: [];
      front_status: null;
      media: [];
    };
    department: {
      id: number;
      code: string;
      name: string;
      description: string;
      status: number;
      created_at: string;
      updated_at: string | null;
      thumbnail_url: string;
      media: [];
    };
    name: string;
    email: string;
    phone_number: string | null;
    note: string | null;
    student_code: string;
    class: string;
    status: number;
    status_label: string;
    status_badge: string;
    created_at: string;
  };
};

type TRegister = {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
};

type TUploadImage = {
  name: string;
  base64: string;
};

type TRegisterIndividualForm = {
  name: string;
  birth: Date | string;
  website: string;
  field: string;
  address: string;
  username: string;
  information: string;
  related_images: TUploadImage[] | null;
};

type TRegisterOrganizationForm = {
  name: string;
  birth: Date | string;
  website: string;
  field: string;
  address: string;
  username: string;
  information: string;
  representative_name: string;
  representative_phone_number: string;
  representative_email: string;
  related_images: TUploadImage[] | null;
};

type TUser = {
  address: string;
  avatar_url: string;
  birth_of_date: string;
  description: string | null;
  donations_count: number | null;
  donations_sum_amount: number;
  email: string;
  facebook: string | null;
  gender: string;
  id: number;
  name: string;
  phone_number: string;
  projects_count: number | null;
  projects_donations_count: number;
  projects_donations_sum_amount: number;
  status: number;
  status_badge: string;
  status_label: string;
  tiktok: string | null;
  type: string;
  username: string;
  volunteers_without_canceled_count: number | null;
  youtube: string | null;
};

type TRegisterVolunteerForm = {
  name: string;
  email: string;
  phone_number: string;
  student_code: string;
  class: string;
  department_id: string;
  project_id: number;
};

type TDonateForm = {
  project_id: number;
  account_number: string;
  account_name: string;
  code: string;
  name: string;
  email: string;
  phone_number: string;
  amount: number;
  is_anonymous: boolean;
  note?: string | null;
  department_id: string;
  class: string;
  student_code: string;
};

type TDepartment = {
  description: string;
  id: number;
  name: string;
  status: number;
  status_badge: string;
  status_label: string;
};
