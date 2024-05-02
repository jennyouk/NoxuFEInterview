'use client';

import Image from 'next/image';
import chatIcon from '../assets/chat-icon.svg';
import sendIcon from '../assets/send.svg';
import dropdownIcon from '../assets/dropdown.svg';

export default function ChatModule() {
  const questions = [
    'Suggest question 1',
    'Suggest question 2',
    'Suggest question 3',
  ];

  return (
    <div className='bg-white flex flex-col justify-start items-center w-full h-[144px] border-t border-slate-300 box-border'>
      {/* Suggested questions buttons */}
      <div className='flex justify-left h-[40px]  mt-4 w-[800px]'>
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => {}}
            className='border border-slate-300 rounded-md text-sm px-4 py-2 mr-4'
          >
            {question}
          </button>
        ))}
      </div>

      {/* Chat bar and send button */}
      <div className='flex justify-between w-[800px] h-[40px] mt-4 items-center'>
        {/* Chat bar */}
        <div className='w-[690px] h-full border border-slate-300 rounded-md flex font-light text-base'>
          <button className='w-[140px] h-full border-r border-slate-300 flex items-center justify-between px-3 py-2 font-light'>
            <Image src={chatIcon} alt='chat' />
            Chat
            <Image src={dropdownIcon} alt='dropdown' color='CBD5E1' />
          </button>

          {/* Text Input  */}
          <div className='flex w-full items-center justify-between px-3 py-2 '>
            <input
              className='w-[calc(100%-24px)] h-[16px] outline-none'
              placeholder='Start a new chat'
            ></input>
            <Image src={sendIcon} alt='send' color='#94A3B8' />
          </div>
        </div>

        {/* Send button */}
        <button className='outline outline-1 outline-red-600 text-red-600 rounded-md text-sm px-4 py-2 font-medium tracking-tight'>
          End Chat
        </button>
      </div>
    </div>
  );
}
