"use client";
import { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";
import axios from "axios";

export default function Navbar() {
  const [isUser, setIsUser] = useState(false);
  const checkUser = async () => {
    try {
      return await axios.get('/api/users/isLoggedin')
        .then(response => {
          const data = response.data.data;
          data ? setIsUser(true) : setIsUser(false)
        });
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    checkUser()
  }, []);


  return (
    <nav className="bg-[#363a4f] text-[#cad3f5]">
      <div className="w-screen mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex  py-2 px-2 text-gray-700 text-2xl">
                <svg className="w-7 h-7 mr-1 text-[#8aadf4]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <span className="text-[#cad3f5] text-normal">Webiste!</span>
              </a>

            </div>
            <a href="/home" className="py-2 px-2 text-2xl">home</a>

          </div>

          <div className="flex space-x-1 mr-2">
            <div>
              {isUser && <ProfileButton />}
              {!isUser && <LoginButton />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
