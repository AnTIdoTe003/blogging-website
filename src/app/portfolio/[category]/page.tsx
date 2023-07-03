'use client'
import React, { useEffect, useState } from 'react'
import { items } from './data'
import {notFound} from 'next/navigation'
type Props = {
  params:{
    category:string
  },
}

type Props1 ={
  cat:any | string
}
const getData = ({cat}:Props1)=>{
  const data = items[cat];
  if (data) {
    return data;
  }

  return notFound();
}
const Category = ({params}: Props) => {
  //@ts-ignore
  const data = getData(params.category);
  
  return (
    <div>
     {
      
     }
    </div>
  )
}

export default Category 