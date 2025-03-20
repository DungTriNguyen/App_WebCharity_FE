'use client';
import { USER_ROLES } from '@/app/enum';
import UserTab from '@/components/user/user-tab';
import { useSession } from 'next-auth/react';
import React from 'react';

const ProfilePage = () => {
  const session = useSession();
  console.log(session);

  // mock user role
  // const userRole: USER_ROLES = USER_ROLES.USER as USER_ROLES;
  const userRole: USER_ROLES = USER_ROLES.INDIVIDUAL as USER_ROLES;
  // const userRole: USER_ROLES = USER_ROLES.ORIGANIZATION as USER_ROLES;

  return (
    <div>
      <UserTab role={userRole} />
    </div>
  );
};

export default ProfilePage;
