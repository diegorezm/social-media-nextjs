export default function LoginButton() {
    return (
             <div>
                <a 
                href="/login" 
                className="py-5 px-3"> 
                Login
                </a>
                    
                <a
                href="/signup"
                className="py-3 px-3 bg-[#eed49f] hover:bg-yellow-200 text-[#363a4f] rounded text-semibold">
                Signup
            </a>
            </div>
    );
};