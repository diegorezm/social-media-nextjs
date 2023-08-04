import React from 'react'
export default function Input({ onInput, onClick }) {
  return (
    <div className='z-10 absolute flex'>
      <div className="rounded-lg bg-[#181926] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <div className="p-6 flex flex-col space-y-2 text-[#cad3f5]">
          <h1 className='text-lg'>Link for the image:</h1>
          <input className='bg-[#24273a] rounded' type="text" onInput={onInput} />
          <button
            onClick={onClick}
            type="button"
            className="m-2 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">
            Change
          </button>
        </div>
      </div>
    </div>
  )
}
