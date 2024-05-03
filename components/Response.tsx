import ResponseTable from './ResponseTable';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import { Data } from '../types/types';
import ResponseConfidence from './ResponseConfidence';

export default function Response({ data }: { data: Data }) {
  return (
    <div className='bg-slate-100 w-full h-[516px] p-8 flex flex-col items-center justify-start'>
      <div className='w-[800px]  block'>
        <ResponseConfidence confidence={data.confidence} />

        {/* Response Body*/}
        <div className='py-4 flex items-start'>
          <Image src={logo} alt='Logo' className='mr-4' />
          <div className='flex flex-col '>
            {/* Response Text */}
            <div className='py-2 mb-2 tracking-[.001em]'>{data.text}</div>

            {/* Response Table with buttons */}
            <ResponseTable table={data.table} />
          </div>
        </div>
      </div>
    </div>
  );
}
