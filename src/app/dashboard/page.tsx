'use client'
import React, {useEffect, useState} from 'react';
import './style.scss';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

type Props = {};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Dashboard: React.FC<Props> = (props) => {
  const [response, setResponse]  = useState([])
  // @ts-ignore
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR<any>('https://jsonplaceholder.typicode.com/posts', fetcher);
  useEffect(()=>{
    setResponse(data)
  },[data])
  const session = useSession()
  console.log(session)
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="dashboard-content">
          {
            response?.map((ele:any)=>{
              return(
                <p key={ele.id}>{ele.title}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
