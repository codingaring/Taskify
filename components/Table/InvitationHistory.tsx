'use client';
import { MouseEvent, useEffect, useState } from 'react';
import TableLayout from './TableLayout';
import { getInvitations } from '@/utils/api/getInvitations';
import PageNationButton from '../PageNation/PageNationButton';

const mockData = [
  {
    email: 'test@codeit.com',
  },
  {
    email: 'sksms2104@naver.com',
  },
  {
    email: 'yukyoung@naver.com',
  },
];
// api에서 데이터를 받아와서 띄워줘야 함

const InvitationHistory = () => {
  const [invitations, setInvitations] = useState([]);
  const [pageNation, setPageNation] = useState({
    currentPage: 1,
    totalPage: 1,
  });

  const apiQuery = {
    showCount: 5,
    dashboardId: 5946,
  };

  const handleInvitations = async () => {
    try {
      const { invitations, totalCount } = await getInvitations({
        currentPage: pageNation.currentPage,
        showCount: apiQuery.showCount,
        dashboardId: apiQuery.dashboardId,
      });
      setPageNation(prevState => ({
        ...prevState,
        totalPage: Math.ceil(totalCount / apiQuery.showCount),
      }));
      setInvitations(invitations);
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleCurrentPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === 'plus') {
      if (pageNation.currentPage < pageNation.totalPage) {
        setPageNation(prevState => ({
          ...prevState,
          currentPage: pageNation.currentPage++,
        }));
      }
    } else {
      if (pageNation.currentPage > 1) {
        setPageNation(prevState => ({
          ...prevState,
          currentPage: pageNation.currentPage--,
        }));
      }
    }
  };

  useEffect(() => {
    handleInvitations();
  }, [pageNation.currentPage]);

  const InvitationList = invitations.map(invitation => (
    <div className='flex justify-between border-solid border-b-[1px] py-4 last:border-none'>
      <div className='flex gap-3 items-center'>
        <p className='text-base text-tp-black_700 ml-7'>{invitation.invitee.email}</p>
      </div>
      <button type='button' className='border border-solid border-tp-gray_700 rounded-lg py-2 px-6 mr-7'>
        버튼대체
      </button>
    </div>
  ));

  return (
    <TableLayout
      title='초대 내역'
      tableContent={InvitationList}
      headerContent={
        <PageNationButton
          totalPage={pageNation.totalPage}
          currentPage={pageNation.currentPage}
          handleCurrentPage={handleCurrentPage}
        />
      }
    />
  );
};

export default InvitationHistory;
