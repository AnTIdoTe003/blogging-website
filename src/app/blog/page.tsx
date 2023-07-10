'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import './style.scss'
import Link from "next/link";
import axios from "axios";
type Props = {};
const Blog =  (props: Props) => {
  const [data, setData]= useState([])
  useEffect(()=>{
      const getPosts = async()=>{
        try{
            const res = await axios.get('/api/posts')
            setData(res.data)
        }catch(error){
          console.log(error)
        }
      }
      getPosts()
  },[])
  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <div className="blog-content">
          {
            data.map((ele:any)=>{
              return(
                <>
                <Link key={ele.id} href={`/blog/${ele.title}`}>
                <div  className="blog-data-wrapper">
                  <div className="blog-text">
                    <h1>{ele.title}</h1>
                    <h4>{ele.description}</h4>
                  </div>
                  <div className="blog-image">
                    <Image src={ele.image} alt='' width={500} height={300} className="blog-img"/>
                  </div>
                </div>
                </Link> 
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;
