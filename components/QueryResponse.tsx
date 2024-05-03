import Response from './Response';
import QueryText from './Query';
import { getResponse } from '../lib/utils';
import { Data } from '../types/types';


export default async function QueryResponse() {
  const lastQuery = 'List my top 10 accounts';
  const data: Data = await getResponse(lastQuery);

  return (
    <div className='w-full flex flex-col items-center justify-start font-light'>
      <QueryText query={lastQuery} />
      <Response data={data} />
    </div>
  );
}
