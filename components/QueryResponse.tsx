import Response from './Response';
import QueryText from './Query';

export default function QueryResponse() {
  const lastQuery = 'List my top 10 accounts';

  return (
    <div className='h-[calc(100vh-144px)] w-screen flex flex-col items-center justify-start font-light'>
      <QueryText query={lastQuery} />
      <Response />
    </div>
  );
}
