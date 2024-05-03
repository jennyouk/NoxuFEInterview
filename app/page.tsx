import ChatModule from '../components/ChatModule';
import QueryResponse from '@/components/QueryResponse';

export default function Home() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-[1100px] h-[620px+144px] block text-slate-900 border border-slate-300'>
        <QueryResponse />
        <ChatModule />
      </div>
    </div>
  );
}
