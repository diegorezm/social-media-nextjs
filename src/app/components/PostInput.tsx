export default function PostInput({ onSubmit }) {
    
    return (
        <form onSubmit={onSubmit} method="POST">
            <label htmlFor="post"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">What's happening...?</label>
            <div className="flex justify-center relative my-5">
                <input
                    type="text"
                    id="post"
                    className="input block w-1/2  p-4 pl-10 text-sm  rounded-lg  border border-gray-500 text-white focus:outline-none focus: focus:border-gray-300 " placeholder="What's happening...?" required />
                <button
                    type="submit"
                    className="button text-white absolute right-[26%] bottom-2.5 bg-purple-800 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg text-sm px-4 py-2">
                    Post
                </button>
            </div>
        </form>
    )
}