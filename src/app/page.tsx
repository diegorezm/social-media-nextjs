import Image from 'next/image';
import model1 from '@/app/asset/model1.png';
import model2 from '@/app/asset/model2.png';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center my-5'>
        <h1 className='text-bold text-4xl mr-10 border-none '>Have fun with us!</h1>
      </div>
      <div className='content flex justify-center'>
        <Image
          src={model1}
          width={400}
          height={450}
          alt="Picture of the author"
          className="m-4 drop-shadow-lg"
        />
        <p className='my-10 font-semibold h-3/5 w-2/5'> Click  <a className='text-purple-300'  href="/home">here</a>  to visit your home page! </p>
      </div>

    <div className='flex justify-center'>
      <p>Don´t have an account yet? <a href="/signup" className='text-purple-300'>sign up here</a>!</p>
    </div>


    </div>
  )
}
