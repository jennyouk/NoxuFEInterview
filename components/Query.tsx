import React from 'react';
import Image from 'next/image';
import avatar from '../assets/jenny.png';

interface QueryTextProps {
  query: string;
}

export default function QueryText({ query }: QueryTextProps) {
  return (
    <div className='w-full h-[104px] flex items-center justify-center'>
      <div className='w-[800px] flex items-center justify-start'>
        <Image
          src={avatar}
          alt='avatar'
          width={40}
          height={40}
          className='rounded-full mr-4'
        />

        {query}
      </div>
    </div>
  );
}
