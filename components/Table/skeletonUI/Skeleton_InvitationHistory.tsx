import PageNationButton from '@/components/PageNation/PageNationButton';
import SingleButton from '@/components/common/button/SingleButton';
import TableLayout from '@/components/Table/TableLayout';

const Skeleton_InvitationHistory = () => {
  const InvitationList = (
    <>
      <div className='text-sm text-tp-gray_800 mt-6 -mb-1 tb:-mb-2.5 pc:-mb-1 ml-7  pc:my-3 pc:h-auto h-10'>이메일</div>
      <div className='flex justify-between border-solid border-b-[1px] pc:py-[1.125rem] last:border-none py-4'>
        <div className='flex gap-3 items-center'>
          <p className='text-base text-tp-black_700 ml-7 whitespace-nowrap text-ellipsis overflow-hidden pc:w-[28rem] tb:w-[23rem] w-[9rem]'>
            email
          </p>
        </div>
        <div className='pr-7'>
          <SingleButton type='button' colorType='white' onClick={() => {}}>
            취소
          </SingleButton>
        </div>
      </div>
    </>
  );
  const invitationHeader = (
    <div className='flex gap-2.5 items-self relative'>
      <PageNationButton totalPage={1} currentPage={1} handleCurrentPage={() => {}} />
      <div className='tb:static absolute top-[3.2rem] right-0'>
        <SingleButton colorType='violet' type='button' onClick={() => {}}>
          <div className='flex items-center gap-2.5 py-1'>
            <img src='/images/icon/plus.svg' alt='초대하기 아이콘' />
            <p>초대</p>
          </div>
        </SingleButton>
      </div>
    </div>
  );

  return (
    <>
      <TableLayout title='초대 내역' headerContent={invitationHeader} tableContent={InvitationList} />
    </>
  );
};

export default Skeleton_InvitationHistory;
