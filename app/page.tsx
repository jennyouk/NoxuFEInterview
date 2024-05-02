import Image from 'next/image';
import ChatModule from '../components/ChatModule';
import ChatFrame from '@/components/ChatFrame';

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <ChatFrame />

      <ChatModule />
    </div>
  );
}
