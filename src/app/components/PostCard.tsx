import DeleteButton from "@/app/components/deleteButton"
export default function PostCard({ content, author, author_pfp, boolean, onClick }) {
  return (
    <div className="flex space-x-4   bg-[#181926] shadow-lg rounded-lg mx-4 md:mx-auto my-10 max-w-md md:max-w-2xl h-20 group ">


      <div className="flex flex-row items-center">
        <img className="  w-12 h-12 rounded-full object-cover mr-4 my-4 ml-2 shadow" src={author_pfp} alt="avatar" />

        <div>
          <div className="flex items-center">
            <h2 className="font-semibold text-white mt-2 text-2xl">{author}</h2>
          </div>
          <p className="mt-1 text-[#cad3f5] text-lg">{content}</p>
        </div >

        <div className=" hidden px-4  group-hover:block ">
          {boolean && <DeleteButton onClick={onClick} />}
        </div>

      </div>
    </div>
  )


}
