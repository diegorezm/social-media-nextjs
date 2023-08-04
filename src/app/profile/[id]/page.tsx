"use client";
import { toastStyle, toastStyleError } from "@/style/toastStyle";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Input from "@/app/components/Input";
export default function UserProfile({ params }: any) {

  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    profilePic: ""
  });

  const changepfp = async () => {
    try {
      await axios.post('/api/users/profilepic', userData);
      toast.success("Success!", toastStyle);
      localStorage.setItem("pfp", `${userData.profilePic}`);
      location.reload();

    } catch (error: any) {
      console.log(error.message);
      toast.error("Couldn't change the profile pic.", toastStyleError)

    }
  }
  const showHide = () => {
    if (showInput) setShowInput(false)
    if (!showInput) setShowInput(true)
  }

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success("Logout successful!", toastStyle);
      localStorage.removeItem("pfp");
      router.push('/login');
      location.reload();
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message, toastStyleError);
    }
  }


  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get('/api/users/me');
      setUserData(res.data.data);
    }
    getUserData();
  }, []);

  return (
    <div className="flex justify-center">
      <section className="flex font-medium items-center justify-center h-screen">
        <section className="w-64 mx-auto bg-[#1e2030] rounded-2xl px-8 py-6 mb-28 shadow-lg">
          <div className="mt-6 w-fit mx-auto">
            <img src={userData.profilePic} onClick={showHide} className="rounded-full w-28  cursor-pointer  hover:scale-110" alt="profile picture" />
          </div>
          {!showInput ? null : <Input onInput={(e: any) => setUserData({ ...userData, profilePic: e.target.value })} onClick={changepfp} />}
          <div className="flex  flex-col ">
            <div className="mt-8">
              <h2 className="text-white font-bold text-2xl tracking-wide">{userData.username}</h2>
            </div>
            <p className="text-emerald-400 font-semibold mt-2.5" >
              {userData.email}
            </p>
          </div>

          <div className="flex justify-center py-5">
            <button
              onClick={logout}
              className="bg-[#ed8796] w-20 h-10 rounded text-[#1e2030] hover:bg-red-400"
            >
              Logout
            </button>
          </div>
        </section>

      </section>
    </div>
  )
}
