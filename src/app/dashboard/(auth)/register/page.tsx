'use client'
import React, { useState } from "react";
import './style.scss'
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
type Props = {};

const Register = (props: Props) => {
const [error, setError] = useState(false)
const [formData, setFormData] = useState<any>({
  name:"",
  email:"",
  password:""
})
const router = useRouter()

const handleSubmit =async(e:any)=>{
  e.preventDefault()
  try{
      const res =  await axios.post('/api/auth/register',JSON.stringify(formData))
      if(res.status === 202){
        alert(res.data)
      }
      res.status === 200 && router.push("/dashboard/login?success=Account has been created");
  }catch(error){
    console.log(error)
  }
}

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="register-content">
          <form className="form" onSubmit={handleSubmit}>
            <input onChange={(e)=>{setFormData({...formData, name:e.target.value})}} type="text" placeholder="name" required />
            <input onChange={(e)=>{setFormData({...formData, email:e.target.value})}} type="email" placeholder="Email" required />
            <input onChange={(e)=>{setFormData({...formData, password:e.target.value})}} type="password" placeholder="Password" required />
            <button type="submit">Submit</button>
          </form>
          <Link href={'/dashboard/login'}>Login with and Exisiting Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
