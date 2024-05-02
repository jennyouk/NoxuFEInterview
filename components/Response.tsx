import getResponse from '../utils/getResponse';
import Image from 'next/image';
import rightArrow from '../assets/right-arrow.svg';
import logo from '../assets/logo.svg';
import ResponseTable from './ResponseTable';

export default async function Response() {
  const data = await getResponse();

  return (
    <div className='bg-slate-100 w-full h-full p-8 flex flex-col items-center justify-start'>
      <div className='w-[800px] block'>
        {/* Confidence and aid button */}
        <div className='flex'>
          <div className='flex bg-white border rounded-md border-slate-300 text-[#F0671A] font-semibold '>
            <div className='px-2 py-1.5 border-r flex items-center'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <g clip-path='url(#clip0_789_74)'>
                  <path
                    d='M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M10 6.66667V10'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M10 13.3333H10.0083'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_789_74'>
                    <rect width='20' height='20' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              {data.confidence}
            </div>
            <div className='px-3 py-1.5 flex items-center'>
              <a href='' className='flex w-full h-full'>
                Human Help{' '}
                <Image src={rightArrow} alt='right arrow' className='ml-1' />
              </a>
            </div>
          </div>
        </div>

        {/* Response Text with Icon */}
        <div className='py-4 flex'>
          <Image src={logo} alt='Logo' className='mr-4' />
          <div className='flex flex-col '>
            <div className='py-2'>{data.text}</div>
          </div>
        </div>

        {/* table with buttons */}
        <ResponseTable data={data} />
      </div>
    </div>
  );
}
