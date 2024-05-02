import React from 'react';
import QuestionBtn from './QuestionBtn';

export default function ChatModule() {
  const questions = [
    'Suggest question 1',
    'Suggest question 2',
    'Suggest question 3',
  ];

  return (
    <div className='bg-white flex flex-col justify-start items-center w-[800px] h-[144px] '>
      <div className='flex justify-left h-[40px] w-full mt-4 '>
        {questions.map((question, index) => (
          <QuestionBtn key={index} buttonText={question} />
        ))}
      </div>
      <div className='flex justify-center w-full h-[40px] mt-4'>
        <div className='flex w-full justify-between'>
          <div>chat bar</div>
          <button className='outline outline-1 outline-red-600 text-red-600 rounded-md px-4 py-2'>
            End Chat
          </button>
        </div>
      </div>
    </div>
  );
}
