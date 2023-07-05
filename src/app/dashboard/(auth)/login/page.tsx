'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <button onClick={()=>signIn("google")}>Login with google</button>
    </div>
  )
}

export default page