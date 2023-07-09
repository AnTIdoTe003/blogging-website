import Image from "next/image";
import React from "react";
import './style.scss'
import Link from "next/link";
type Props = {};
async function getData() {
  const res = await fetch("/api/posts", {
   cache:"no-store"
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }
  return res.json();
}
const Blog = async (props: Props) => {
  const data = await getData();
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
