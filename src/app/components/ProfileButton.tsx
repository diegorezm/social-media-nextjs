"use client";
import axios from "axios";
import { useEffect, useState } from "react";
export default function ProfileBtton() {
  const [pfp, setPfp] = useState({
    profilePic: "",
  })
  const getUser = async () => {
    const response = await axios.get('/api/users/me');
    const reqBody = response.data;
    console.log(reqBody)
    setPfp(reqBody.data.profilePic);
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
    <div className="relative inline-flex items-center justify-center w-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        <a href="/profile">
          <img src={pfp} alt="ProfilePic" />
        </a>
      </span>
    </div>
  );
};