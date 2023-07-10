"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import axios from "axios";
import Image from "next/image";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
type Props = {};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Dashboard = () => {
  const router = useRouter()
  const session = useSession();
  const userName = session.data?.user?.name;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
    name: "",
  });
  const [response, setResponse] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    axios
      .get(`/api/userPosts/${userName}`)
      .then((res) => setResponse(res.data));
  }, [userName]);
  const deletePost = async (id: any) => {
    const res = await axios.delete(`/api/userPosts/${id}`);
    if (res.status === 200) {
    }
  };

  const updatePost = async(id:any)=>{
    const res = await axios.put(`/api/userPosts/${id}`, JSON.stringify(formData))
    if (res.status === 200) {
      toast.success("Updated Post Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
    }

  const createPost = async () => {
    const res = await axios.post("/api/userPosts", JSON.stringify(formData));
    if (res.status === 200) {
      toast.success("Created Post Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "500px",
      background:"black",
      borderRadius:"10px"
    },
  };
  return (
    <>
    {
      (session.status === "authenticated")?  <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-left">
            {response.length !== 0 ? (
              <>
                <div>
                  {response.map((ele: any) => {
                    return (
                      <div key={ele._id}>
                        <p>{ele.title}</p>
                        <Image
                          src={ele.image}
                          alt=""
                          width={250}
                          height={200}
                        />
                        <div className="dashboard-button-rack">
                        <button onClick={openModal}>Edit</button>
                        <button onClick={() => deletePost(ele._id)}>
                          Delete
                        </button>
                        </div>
                        <Modal
                          style={customStyles}
                          isOpen={isOpen}
                          onRequestClose={closeModal}
                        >
                          <div className="dashboard-right">
                            <form action="">
                              <input
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    title: e.target.value,
                                  })
                                }
                                type="text"
                                name=""
                                id=""
                                placeholder="Title"
                              />
                              <input
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    content: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder="Short Content"
                              />
                              <input
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    description: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder="The Blog"
                              />
                              <input
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    image: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder="Image Url"
                              />
                              <input
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder="Username"
                              />
                              <button onClick={()=>updatePost(ele._id)}>Update</button>
                            </form>
                          </div>
                        </Modal>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"450px"}}>
                  <p>You dont have any posts yet</p>
                </div>
              </>
            )}
          </div>
          <div className="dashboard-right">
            <form action="">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                type="text"
                name=""
                id=""
                placeholder="Title"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                type="text"
                placeholder="Short Content"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                type="text"
                placeholder="The Blog"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                type="text"
                placeholder="Image Url"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                placeholder="Username"
              />
              <button onClick={createPost}>Create</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    : router?.push('/dashboard/login')
    }
   
    </>
    
  );
};

export default Dashboard;
function async(name: string | null | undefined) {
  throw new Error("Function not implemented.");
}
