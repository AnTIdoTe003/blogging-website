"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import axios from "axios";

type Props = {};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Dashboard = () => {
  const session = useSession();
  const userName = session.data?.user?.name;
  const [response, setResponse] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/userPosts/${userName}`)
      .then((res) => setResponse(res.data));
  }, [userName]);
  console.log(response);
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-left">
          {response.length !== 0 ? (
            <>
              <div>
                {response.map((ele: any) => {
                  return (
                    <div key={ele.id}>
                      <p>{ele.title}</p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div>
                <p>You dont have any posts yet</p>
              </div>
            </>
          )}
          </div>
          <div className="dashboard-right">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
function async(name: string | null | undefined) {
  throw new Error("Function not implemented.");
}
