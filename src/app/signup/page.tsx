"use client";

import Image from 'next/image';
import icon from '../asset/login_icon.png';

import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { toastStyle, toastStyleError } from '@/style/toastStyle';


export default function signupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/signup", user);
      toast.success("Signup concluded!", toastStyle);
      router.push("/home");
    } catch (error: any) {
      console.log("Signup failed!", error);
      toast.error(error.message, toastStyleError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center my-10">

      <div className="flex flex-col mr-10 ml-20">
        <h1 className="mx-10 text-4xl text-[#8bd5ca]  font-semibold ">Sign up,</h1>
        <h1 className="mx-10 text-4xl text-[#8bd5ca]  font-semibold ">join our team!</h1>
        <Image
          src={icon}
          width={400}
          height={450}
          alt="Picture of the author"
          className="my-2 drop-shadow-lg"
        />
      </div>

      <div className="flex flex-col items-center justify-center bg-[#181926] m-auto shadow-black w-2/5 h-fit rounded-lg overflow-auto">
        <h1 className="text-[#8bd5ca] text-2xl m-2">{loading ? "Loading.." : "Signup"}</h1>
        <hr />
        <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
        <input
          className="rounded-lg border border-gray-500  text-white p-2 mb-4 focus:outline-none focus:border-gray-300"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
          required
        />
        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
        <input
          className="rounded-lg border border-gray-500 text-white p-2 mb-4  focus:outline-none focus:border-gray-300 "
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
          required
        />
        <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
        <input
          className="rounded-lg border border-gray-500 text-white p-2 mb-4 focus:outline-none focus:border-gray-300 "
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          required
        />

        <button
          onClick={onSignup}
          className="m-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">
          Signup
        </button>
        <a href="/login" className="m-2">Visit login here</a>

      </div>
    </div>
  )
}
