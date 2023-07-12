"use client";
import React, { useState } from "react";
import "./style.scss";
import { FcGoogle } from "react-icons/fc";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });
  const session = useSession();
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", {
      email,
      password,
    });
  };
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-content">
          <form className="form" onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              type="email"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <button
            onClick={() => {
              signIn("google");
            }}
            className="google-btn"
          >
            <FcGoogle /> Login with Google
          </button>
          <Link href={"/dashboard/register"}>
            <h4>Don &#39; t have an acount? Register here</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
