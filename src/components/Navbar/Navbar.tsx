'use client'
import Link from 'next/link'
import React from 'react'
import './style.scss'
type Props = {}

const Navbar = (props: Props) => {
  const navLinks =[
    {
      id:1,
      title:'Home',
      slug:'/'
    },
    {
      id:2,
      title:'Portfolio',
      slug:'/portfolio'
    },
    {
      id:3,
      title:'Blog',
      slug:'/blog'
    },
    {
      id:4,
      title:'About',
      slug:'/about'
    },
    {
      id:5,
      title:'Contact',
      slug:'/contact'
    }
  ]
  return (
    <nav>
   <div className="nav-wrapper">
    <div className="nav-container">
      <div className="nav-content">
        {/* Left Logo */}
        <div className='nav-left'>
          <Link href={'/'}>theEngineerGuy</Link>
        </div>
        {/* Right Nav Menu */}
        <div className='nav-right'>
          {
            navLinks.map((ele)=>{
              return(
                <Link key={ele.id} href={ele.slug}>{ele.title}</Link>
              )
            })
          }
          <button className='nav-btn' onClick={()=>{console.log('Logged Out')}}>Logout</button>
        </div>
        
      </div>
    </div>
   </div>
    </nav>
  )
}

export default Navbar