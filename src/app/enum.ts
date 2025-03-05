export enum CAMPAIGN_TYPE {
  DONATE = 'Quyên góp',
  VOLUNTEER = 'Tình nguyện',
  MULTIPLE = 'Quyên góp và tình nguyện',
}

export enum CAMPAIGN_ROLE {
  ORIGANIZATION = 'tổ chức gây quỹ',
  INDIVIDUAL = 'cá nhân gây quỹ',
}

// Type aliases for the enums
export type TCampaignType = CAMPAIGN_TYPE;
export type TCampaignRole = CAMPAIGN_ROLE;

export enum SETTING_TYPE {
  POLICY = 'policy',
  TERMS = 'terms',
  BANNER = 'banner',
  COMPANION_UNIT = 'companion_unit',
}
