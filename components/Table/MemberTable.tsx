'use client';

import Image from 'next/image';
import TableLayout from './TableLayout';
import { MouseEvent, useEffect, useState } from 'react';
import { getDashBoardMembers } from '@/utils/api/getDashBoardMembers';
import PageNationButton from '../PageNation/PageNationButton';
import { deleteDashBoardMember } from '@/utils/api/deleteDashBoardMember';
import { usePageNation } from '@/hooks/usePageNation';
import { DEFAULTPROFILEIMAGE } from 'constant/importImage';
import SingleButton from '../common/button/SingleButton';

const MemberTable = ({ dashboardId }: { dashboardId: number }) => {
  const { pageNation, setPageNation, handleCurrentPage } = usePageNation();
  const [members, setMembers] = useState(null);
  const showCount = 5;

  const handleLoadMembers = async () => {
    try {
      const { members, totalCount } = await getDashBoardMembers({
        currentPage: pageNation.currentPage,
        showCount: showCount,
        dashboardId: dashboardId,
      });
      setPageNation(prevState => ({
        ...prevState,
        totalPage: Math.ceil(totalCount / showCount),
      }));
      setMembers(members);
    } catch (error: any) {
      alert(error);
    }
  };

  const handleDeleteMember = async (event: MouseEvent<HTMLButtonElement>) => {
    const memberId = event.currentTarget.id;

    try {
      await deleteDashBoardMember({ memberId });
      alert('삭제되었습니다.');
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    handleLoadMembers();
  }, [pageNation.currentPage]);

  const MemberList = (
    <>
      <div className='text-sm text-tp-gray_800 ml-7 -mb-2.5 my-3'>이름</div>
      {members &&
        members.map(member => {
          return (
            <div key={member.id} className='flex justify-between border-solid border-b-[1px] py-4 last:border-none'>
              <div className='flex gap-3 items-center ml-7'>
                {member.profileImageUrl ? (
                  <img
                    src={member.profileImageUrl}
                    alt='프로필이미지'
                    className='w-[2.375rem] h-[2.375rem] relative rounded-full overflow-hidden'
                  />
                ) : (
                  <div className='w-[2.375rem] h-[2.375rem] relative rounded-full overflow-hidden'>
                    <Image fill src={DEFAULTPROFILEIMAGE} alt='프로필 이미지' />
                  </div>
                )}
                <p className='text-base text-tp-black_700 whitespace-nowrap text-ellipsis overflow-hidden pc:w-[26rem] tb:w-[23rem] mb:w-[7.5rem] '>
                  {member.nickname}
                </p>
              </div>
              <div className='pr-7'>
                <SingleButton
                  type='button'
                  onClick={handleDeleteMember}
                  colorType='white'
                  id={member.id}
                  buttonText='삭제'
                />
              </div>
            </div>
          );
        })}
    </>
  );

  return (
    <TableLayout
      title='구성원'
      headerContent={
        <PageNationButton
          totalPage={pageNation.totalPage}
          currentPage={pageNation.currentPage}
          handleCurrentPage={handleCurrentPage}
        />
      }
      tableContent={MemberList}
    />
  );
};

export default MemberTable;
