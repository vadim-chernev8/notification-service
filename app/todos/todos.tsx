'use client'
import { useQuery } from '@tanstack/react-query';
import { axios } from '@/utils/axios';
import Dropdown from '@/components/Dropdown';

export default function Todos() {

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => axios.get('todos/1'),
  })

  console.log(data)
  return <div><Dropdown /></div>
}