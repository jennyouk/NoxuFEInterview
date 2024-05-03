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
import updown from '../assets/dropdown.svg';

interface ResponseTableProps {
  table: (string | number)[][];
}

export default function ResponseTable({ table }: ResponseTableProps) {
  const buttonStyles =
    'border border-slate-300 rounded-md px-4 py-2 mr-4 font-medium text-slate-900 text-sm border-box';

  const tableHeaderStyles =
    'text-slate-500 text-base pl-4 py-2 font-normal flex items-center overflow-hidden text-nowrap h-[40px] border-box';

  const rowData = [];
  for (let i = 1; i < table.length; i++) {
    for (let j = 0; j < table[0].length; j++) {
      rowData.push(
        <div key={''+i+j} className='text-slate-900 text-base w-[574px] h-[40px] pl-4 py-2 font-light flex items-center border-t border-box'>
          <p className='overflow-hidden text-nowrap text-ellipsis'>
            {table[i][j].toString()}
          </p>
        </div>
      );
    }
  }

  return (
    <div className='border border-slate-300 rounded-xl bg-white w-[744px] h-[344px]'>
      {/* Table Grid */}
      <div className='grid grid-cols-[48px_220px_82.67px_82.67px_99px_82.67px_129px] '>
        {/* Table Headers */}
        {table[0].map((heading: any, idx: number) => (
          <div key={idx} className={tableHeaderStyles}>
            {heading && <div className='mr-3'>{heading.toString()}</div>}
            <button >
              <Image src={updown} alt='sort' />
            </button>
          </div>
        ))}

        {rowData}
      </div>

      {/* Alert dialog */}
      <div className='bg-slate-50 border-b border-slate-300 text-slate-600 font-semibold flex justify-between items-center py-2 px-3 border-t border-box h-[40px]'>
        <div className='flex items-center '>
          <Image src={alertSlate600} alt='alert slate' className='mr-1.5' />
          Only X rows are shown. View full list for more
        </div>
        <div className='w-[20px] h-auto'>
          <Image src={xIcon} alt='x icon' className='' />
        </div>
      </div>

      {/* Row of buttons */}
      <div className='flex p-3 h-[64px]'>
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
