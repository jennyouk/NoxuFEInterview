import Image from 'next/image';
import rightArrow from '../assets/right-arrow.svg';
import alertOrange from '../assets/alert-orange.svg';

export default function ResponseConfidence({
  confidence,
}: {
  confidence: string;
}) {
  return (
    <div className='flex'>
      <div className='flex bg-white border rounded-md border-slate-300 text-[#F0671A] font-semibold text-base h-[36px] w-[296px] px-2'>
        {/* Confidence Level */}
        <div className=' py-1.5 pr-3 border-r flex items-center text-nowrap'>
          <Image src={alertOrange} alt='alert orange' className='mr-1.5' />
          {confidence}
        </div>
        <div className=' py-1.5 pl-3 flex items-center'>
          <button className='flex w-full h-full items-center text-nowrap'>
            Human Help{' '}
            <Image
              src={rightArrow}
              alt='right arrow'
              className='ml-1.5 h-[20px] w-auto'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
