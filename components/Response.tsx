import { getResponse } from '../lib/utils';
import Image from 'next/image';
import rightArrow from '../assets/right-arrow.svg';
import logo from '../assets/logo.svg';
import ResponseTable from './ResponseTable';
import alertOrange from '../assets/alert-orange.svg';

export default async function Response() {
  const data = await getResponse();

  return (
    <div className='bg-slate-100 w-full h-[516px] p-8 flex flex-col items-center justify-start'>
      <div className='w-[800px]  block'>
        {/* Confidence and aid block */}
        <div className='flex'>
          <div className='flex bg-white border rounded-md border-slate-300 text-[#F0671A] font-semibold text-base '>
            {/* Confidence Level */}
            <div className='px-2 py-1.5 pr-3 border-r flex items-center'>
              <Image src={alertOrange} alt='alert orange' className='mr-1.5' />
              {data.confidence}
            </div>
            <div className='px-2 py-1.5 pl-3 flex items-center'>
              <a href='' className='flex w-full h-full items-center'>
                Human Help{' '}
                <Image
                  src={rightArrow}
                  alt='right arrow'
                  className='ml-1.5 h-[20px] w-auto'
                />
              </a>
            </div>
          </div>
        </div>

        {/* Response Text with Icon */}
        <div className='py-3 flex items-start'>
          <Image src={logo} alt='Logo' className='mr-4' />
          <div className='flex flex-col '>
            <div className='py-2'>{data.text}</div>

            {/* table with buttons */}
            <ResponseTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
