/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './style.scss'
import illustration from '../../../public/illustration.png'
import apps from '../../../public/apps.jpg'
import websites from '../../../public/websites.jpg'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

const Portfolio = (props: Props) => {
  const categoryData=[
    {
      id:1,
      title:"Illustrations",
      image:illustration,
      slug:'/portfolio/illustrations'
    },
    {
      id:2,
      title:"Websites",
      image:websites,
      slug:'/portfolio/websites'
    },
    {id:3,
      title:"Application",
      image:apps,
      slug:'/portfolio/applications'
    }
  ]
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">
        <div className="portfolio-content">
          <div className="portfolio-heading">
            <h1>
              Our Works
            </h1>
          </div>
          <div className="portfolio-work-wrapper">
            <h1 style={{color:"#bbb"}}>Choose a Gallery</h1>
            <div className="portfolio-work-content">
            {
              categoryData.map((ele)=>{
                return(
                  <Link key={ele.id} href={ele.slug}>
                  <div key={ele.id} className="category-wrapper">
                    <div className="category-content">
                     <Image src={ele.image} alt='' className='category-img'/>
                      <p>{ele.title}</p>
                    </div>
                  </div>
                  </Link>               
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio