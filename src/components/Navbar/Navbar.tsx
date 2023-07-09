'use client'
import Link from 'next/link'
import Toggle from "react-toggle"
import React, {useContext} from 'react'
import './style.scss'
import {CiDark, CiLight} from 'react-icons/ci'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { ThemeContext } from '@/context/ThemeContext'
import { signOut, useSession } from "next-auth/react";
type Props = {}

const Navbar = (props: Props) => {
  const session = useSession()
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
    },
    {
      id:6,
      title:'Dashboard',
      slug: (session.status === "authenticated") ? 'dashboard' : 'dashboard/login'
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
          
          {session.status === "authenticated" ? (
            // @ts-ignore
          <button className='nav-btn' onClick={signOut}>
            Logout
          </button>
        ):
        <Link href={'/dashboard/login'}>
        <button className='nav-btn' >
        Login
      </button>
        </Link>
      }
         <DarkModeToggle/>
        </div>
        
      </div>
    </div>
   </div>
    </nav>
  )
}

export default Navbar