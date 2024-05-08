'use client';

import Link from 'next/link';

import ChangePassword from '@/components/MyDashBoard Page/accountMenu/ChangePassword';
import EditProfile from '@/components/MyDashBoard Page/accountMenu/EditProfile';
import GobackButton from '@/components/dashboard/GoBackButton/GobackButton';

const AccountMenu = () => {
  return (
    <div className='ml-4 mt-5 pb-7'>
      <Link href='/boardid'>
        <GobackButton />
      </Link>
      <div className='flex flex-col gap-5'>
        <EditProfile />
        <ChangePassword />
      </div>
    </div>
  );
};

export default AccountMenu;
