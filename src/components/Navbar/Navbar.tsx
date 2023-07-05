'use client'
import Link from 'next/link'
import Toggle from "react-toggle"
import React, {useContext} from 'react'
import './style.scss'
import {CiDark, CiLight} from 'react-icons/ci'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { ThemeContext } from '@/context/ThemeContext'
type Props = {}

const Navbar = (props: Props) => {
  const{mode} = useContext(ThemeContext)
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
   <div className='nav-wrapper'>
    <div className="nav-container">
      <div className="nav-content">
        {/* Left Logo */}
        <div className='nav-left'>
         
         <Link className='nav-left-link' href={'/'}>theEngineerGuy</Link>
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
         <DarkModeToggle/>
        </div>
        
      </div>
    </div>
   </div>
    </nav>
  )
}

export default Navbar