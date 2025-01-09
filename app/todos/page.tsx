
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import { axios } from '@/utils/axios';

import Todos from './todos';

export default async function TodosPage() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get('todos/1'),
      })

    return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <Todos />
    </HydrationBoundary>
    )
}