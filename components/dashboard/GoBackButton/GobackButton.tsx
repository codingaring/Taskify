import Image from 'next/image';
import { ArrowForwardIcon } from 'constant/importImage';

const GobackButton = () => {
  return (
    <button type='button' className='text-base text-tp-black_700 flex gap-1.5 items-center mb-6'>
      <div className='w-5 h-5 relative'>
        <Image fill src={ArrowForwardIcon} alt='뒤로 가기 버튼' />
      </div>
      돌아가기
    </button>
  );
};

export default GobackButton;
