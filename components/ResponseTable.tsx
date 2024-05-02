'use client';
import Image from 'next/image';
import xIcon from '../assets/x-icon.svg';
import {
  pinToDashboard,
  showChart,
  showFullList,
  showQuery,
} from '@/lib/utils';
import alertSlate600 from '../assets/alert-slate-600.svg';

export default function ResponseTable({ data }: any) {
  const buttonStyles =
    'border border-slate-300 rounded-md text-sm px-4 py-2 mr-4';

  return (
    <div className='border border-slate-300 rounded-2xl bg-white'>
      {data.table}
      <div className='bg-slate-50 border-b border-slate-300 text-slate-600 font-semibold flex justify-between items-center py-2 px-3'>
        <div className='flex items-center '>
          <Image src={alertSlate600} alt='alert slate' className='mr-1.5' />
          Only X rows are shown. View full list for more
        </div>
        <div className='w-[20px] h-auto'>
          <Image src={xIcon} alt='x icon' className='' />
        </div>
      </div>
      <div className='flex p-3'>
        <button className={buttonStyles} onClick={showFullList}>
          Show Full List
        </button>
        <button className={buttonStyles} onClick={showQuery}>
          Show Query
        </button>
        <button className={buttonStyles} onClick={showChart}>
          Show Chart
        </button>
        <button className={buttonStyles} onClick={pinToDashboard}>
          Pin to Dashboard
        </button>
      </div>
    </div>
  );
}
