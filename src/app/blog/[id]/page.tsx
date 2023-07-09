'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import './style.scss'
import Head from 'next/head';
import axios from 'axios';
type Props = {
  params:{
    id:string,
  }
}


const UserBlog = ({params}: Props) => {
  const [data, setData] = useState([])
  useEffect(()=>{
    const getUserData = async()=>{
        try{
          const {data}= await axios.get(`/api/posts/${params.id}`)
          console.log(data)
          setData(data)
        }catch(error){
          console.log(error)
        }
    }
    getUserData()
    
  },[params.id])
  return (
      <>
      {
        data.map((ele:any)=>{
          return(
            <div key={ele._id} className="blog-user-wrapper">
              <div className="blog-user-container">
                <div className="blog-user-content">
                  <div className="blog-user-top">
                    <div className="blog-user-top-data">
                      <h1>{ele.title}</h1>
                      <h3>{ele.content}</h3>
                      <p>Author :- {ele.name}</p>
                    </div>
                    <div className="blog-user-left-img">
                      <Image src={ele.image} width={400} height={300} alt='' className='blog-user-image'/>
                    </div>
                  </div>
                  <div className="blog-user-bottom">
                    <div className="blog-user-post">
                      <p>{ele.description}</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>

          )
        })
      }
      </>
    
  )
}

export default UserBlog


