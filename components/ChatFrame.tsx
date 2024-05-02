import React from 'react';
import Answer from './Answer';
import Question from './Question';

export default function ChatFrame() {
  return (
    <div className='h-[calc(100vh-104px)] w-screen border border-b/10'>
      <Question />
      <Answer />
    </div>
  );
}
