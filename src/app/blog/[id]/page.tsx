import Image from 'next/image';
import React from 'react'

type Props = {
  params:{
    id:string,
  }
}
async function getData(id:string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
   cache:"no-store"
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }
  return res.json();
}

export async function generateMetadata({params}:{params:{id:string}}){
  const post = await getData(params.id)
  return {
    title: post.title,
    description : post.description
  }
}

const page = async ({params}: Props) => {
  const data = await getData(params.id)
  return (
    <div>
      {
        data.map((ele:any)=>{
          return(
            <Image src={ele.image} key={ele.id} alt='' width={500} height={300}/>
          )
        })
      }
    </div>
  )
}

export default page