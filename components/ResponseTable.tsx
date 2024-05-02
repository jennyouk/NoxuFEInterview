import Image from 'next/image';
import alert from '../assets/alert.svg';

export default function ResponseTable({ data }: any) {
  return (
    <div className='border border-slate-300 rounded-2xl bg-white'>
      {data.table}
      <div className='bg-slate-50 border-b border-slate-300 text-slate-600 font-semibold'>
        <svg
          className='stroke-gray-600'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_789_74)'>
            <path
              d='M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M10 6.66667V10'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M10 13.3333H10.0083'
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
        Only X rows are shown. View full list for more
      </div>
      <div>Buttons</div>
    </div>
  );
}