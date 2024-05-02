import Image from 'next/image';
import ChatModule from '../components/ChatModule';
import QueryResponse from '@/components/QueryResponse';

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col items-center text-slate-900'>
      <QueryResponse />
      <ChatModule />
    </div>
  );
}
