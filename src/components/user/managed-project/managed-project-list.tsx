import { Card } from '@/components/ui/card';
import React from 'react';

const ManagedProjectList = () => {
  const project: TCampaign[] = [
    {
      id: 55,
      is_organization: true,
      is_individual: false,
      front_status: '1',
      front_status_label: '\u0110ang th\u1ef1c hi\u1ec7n',
      category: {
        id: 7,
        name: 'Thi\u00ean tai',
        icon: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="custom-svg" style="width: 40px; height: 40px;"><g clip-path="url(#clip0_15764_80528)"><path d="M25.375 16.722V5.25C25.375 2.83777 23.4122 0.875 21 0.875C19.1534 0.875 17.5786 2.02899 16.9377 3.65039C15.4663 2.98816 13.871 2.625 12.25 2.625C6.29376 2.625 1.40137 7.22858 0.922424 13.0635C0.921143 13.0848 0.910034 13.1032 0.910034 13.125C0.910034 13.1382 0.91687 13.1489 0.917297 13.1617C0.897217 13.4395 0.875 13.7172 0.875 14C0.875 17.3458 2.33575 20.3493 4.64246 22.4326C4.68475 22.4825 4.7326 22.5223 4.7843 22.5616C6.78467 24.3077 9.39215 25.375 12.25 25.375C13.583 25.375 14.8788 25.1345 16.12 24.6863C17.2394 26.1641 19.0073 27.125 21 27.125C24.3774 27.125 27.125 24.3774 27.125 21C27.125 19.4017 26.4918 17.8644 25.375 16.722ZM16.625 13.9974C15.5458 13.1904 14.875 11.9039 14.875 10.5C14.875 10.0168 14.4832 9.625 14 9.625H12.25C11.7676 9.625 11.375 9.23236 11.375 8.75C11.375 8.26764 11.7676 7.875 12.25 7.875H16.625V13.9974ZM2.625 14H5.25C5.73236 14 6.125 14.3926 6.125 14.875V16.625C6.125 17.1082 6.51678 17.5 7 17.5H8.75C9.20929 17.5 9.66003 17.6871 9.98645 18.0135C10.3129 18.34 10.5 18.7907 10.5 19.25C10.5 20.2151 9.71515 21 8.75 21H5.66443C3.79822 19.2436 2.625 16.7587 2.625 14ZM12.25 23.625C10.8273 23.625 9.48016 23.3063 8.26379 22.75H8.75C10.6799 22.75 12.25 21.1799 12.25 19.25C12.25 18.3301 11.8762 17.4282 11.2238 16.7762C10.5718 16.1238 9.66986 15.75 8.75 15.75H7.875V14.875C7.875 13.4275 6.69751 12.25 5.25 12.25H2.79205C3.61835 7.77673 7.54089 4.375 12.25 4.375C13.7736 4.375 15.2706 4.75439 16.625 5.44269V6.125H12.25C10.8025 6.125 9.625 7.30249 9.625 8.75C9.625 10.1975 10.8025 11.375 12.25 11.375H13.1874C13.4788 13.4001 14.7737 15.1459 16.625 16.0183V16.722C15.5082 17.8644 14.875 19.4017 14.875 21C14.875 21.7532 15.0181 22.4719 15.2681 23.1388C14.2965 23.4588 13.2856 23.625 12.25 23.625ZM21 25.375C18.5878 25.375 16.625 23.4122 16.625 21C16.625 19.7644 17.1569 18.5784 18.0845 17.7461C18.2695 17.5803 18.375 17.3436 18.375 17.095V5.25C18.375 3.80249 19.5525 2.625 21 2.625C22.4475 2.625 23.625 3.80249 23.625 5.25V17.095C23.625 17.3436 23.7305 17.5803 23.9155 17.7461C24.8431 18.5784 25.375 19.7644 25.375 21C25.375 23.4122 23.4122 25.375 21 25.375ZM21.875 18.5361V5.25C21.875 4.76678 21.4832 4.375 21 4.375C20.5168 4.375 20.125 4.76678 20.125 5.25V18.5361C19.1086 18.8988 18.375 19.861 18.375 21C18.375 22.4475 19.5525 23.625 21 23.625C22.4475 23.625 23.625 22.4475 23.625 21C23.625 19.861 22.8914 18.8988 21.875 18.5361ZM21 21.875C20.5176 21.875 20.125 21.4824 20.125 21C20.125 20.5176 20.5176 20.125 21 20.125C21.4824 20.125 21.875 20.5176 21.875 21C21.875 21.4824 21.4824 21.875 21 21.875Z" fill="#0BAEFF"></path></g><defs><clipPath id="clip0_15764_80528"><rect width="28" height="28" fill="#FF9D2E"></rect></clipPath></defs></svg>',
        status: 1,
        projects_count: 0,
      },
      user: {
        id: 6,
        name: 't\u1ed5 ch\u1ee9c SGU',
        username: 'nguyentridung23032003',
        email: 'nguyentridung23032003@gmail.com',
        phone_number: '0923324491',
        birth_of_date: '2003-03-12T17:00:00.000000Z',
        status: 1,
        status_label: 'Ho\u1ea1t \u0111\u1ed9ng',
        status_badge: 'success',
        gender: 'Nam',
        address:
          '330/13/18 \u00c2u D\u01b0\u01a1ng L\u00e2n, p3, qu\u1eadn 8, TP HCM',
        avatar_url:
          'https://kltnctsv.io.vn/build/assets/avatar-default-24da207c.svg',
        description: null,
      },
      name: 'X\u00e2y nh\u00e0 sau thi\u00ean tai',
      type: 'T\u00ecnh nguy\u1ec7n',
      background_image:
        'https://kltnctsv.io.vn/storage/292/f38b506b-68c8-4eb9-8806-b900b324e164.jpg',
      related_images: [
        'https://kltnctsv.io.vn/storage/293/6cf89610-f179-4932-8782-a0e78198b960.jpg',
        'https://kltnctsv.io.vn/storage/294/40ed60c2-63e8-4200-aa02-8217c10c88d8.jpg',
        'https://kltnctsv.io.vn/storage/295/90a22314-a357-4cfc-beaa-b9322d33e492.jpg',
        'https://kltnctsv.io.vn/storage/296/267306b6-fae3-487f-b0dc-c7dd31223e94.jpg',
        'https://kltnctsv.io.vn/storage/297/1249544e-e55f-4fa2-98d8-dab0a4473871.jpg',
        'https://kltnctsv.io.vn/storage/298/b3d6559a-7422-4800-8f1e-587b690d8bff.jpg',
      ],
      content:
        '<p><strong>B\u1ea3o V\u1ec7 M\u00f4i Tr\u01b0\u1eddng \u2013 Tr\u00e1ch Nhi\u1ec7m C\u1ee7a M\u1ed7i Ch\u00fang Ta</strong></p><p>M\u00f4i tr\u01b0\u1eddng l\u00e0 ng\u00f4i nh\u00e0 chung c\u1ee7a t\u1ea5t c\u1ea3 ch\u00fang ta, nh\u01b0ng hi\u1ec7n nay n\u00f3 \u0111ang b\u1ecb \u0111e d\u1ecda b\u1edfi \u00f4 nhi\u1ec5m, r\u00e1c th\u1ea3i v\u00e0 bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu. \u0110\u1ec3 b\u1ea3o v\u1ec7 h\u00e0nh tinh xanh, m\u1ed7i ng\u01b0\u1eddi c\u1ea7n c\u00f3 \u00fd th\u1ee9c h\u00e0nh \u0111\u1ed9ng t\u1eeb nh\u1eefng \u0111i\u1ec1u nh\u1ecf nh\u1ea5t: h\u1ea1n ch\u1ebf s\u1eed d\u1ee5ng t\u00fai ni l\u00f4ng, ti\u1ebft ki\u1ec7m n\u01b0\u1edbc, tr\u1ed3ng th\u00eam c\u00e2y xanh v\u00e0 ph\u00e2n lo\u1ea1i r\u00e1c \u0111\u00fang c\u00e1ch. Nh\u1eefng vi\u1ec7c l\u00e0m n\u00e0y kh\u00f4ng ch\u1ec9 gi\u00fap c\u1ea3i thi\u1ec7n m\u00f4i tr\u01b0\u1eddng s\u1ed1ng m\u00e0 c\u00f2n b\u1ea3o v\u1ec7 s\u1ee9c kh\u1ecfe c\u1ee7a ch\u00ednh ch\u00fang ta v\u00e0 th\u1ebf h\u1ec7 t\u01b0\u01a1ng lai.</p><p>H\u00e3y c\u00f9ng nhau chung tay v\u00ec m\u1ed9t tr\u00e1i \u0111\u1ea5t xanh, s\u1ea1ch v\u00e0 b\u1ec1n v\u1eefng! \ud83c\udf31\ud83c\udf0d\u267b\ufe0f<br>&nbsp;</p><figure class="image"><img style="aspect-ratio:960/672;" src="https://kltnctsv.io.vn/api/v1/image?file_url=public%2Fmedia%2F2025%2F03%2F06%2F1249544e-e55f-4fa2-98d8-dab0a4473871_1741264053.jpg" width="960" height="672"></figure>',
      donation_percent: 0,
      donations_sum_amount: 0,
      donation_target: 0,
      donations_count: '0',
      volunteer_percent: 0,
      volunteers_without_canceled_count: 0,
      volunteer_quantity: 50,
      diff_date: 'C\u00f2n 285 ng\u00e0y',
      start_date: '2025-03-21T05:00:00.000000Z',
      end_date: '2025-12-31T05:00:00.000000Z',
      donations_sum_amount_formatted: 0,
    },
  ];
  return <Card className='p-4'>ManagedProjectList</Card>;
};

export default ManagedProjectList;
