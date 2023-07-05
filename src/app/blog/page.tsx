import Image from "next/image";
import React from "react";
import './style.scss'
import Link from "next/link";
type Props = {};
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
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
                <div key={ele.id} className="blog-data-wrapper">
                  <div className="blog-text">
                    <h1>{ele.title}</h1>
                    <h4>{ele.description}</h4>
                  </div>
                  <div className="blog-image">
                    <Link href={`/blog/${ele.title}`}>
                    <Image src={ele.image} alt='' width={500} height={300}/>
                      </Link> 
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;
