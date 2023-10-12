import { useSession, signIn, signOut } from 'next-auth/react';
import { Inter } from 'next/font/google';
import { FcGoogle } from 'react-icons/fc';
import Nav from './Nav';

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      // <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}></main>
      <div className='bg-blue-900 w-screen h-screen flex items-center '>
        <div className='text-center w-full' >
          <button onClick={() => signIn('google')} className='bg-white py-2 px-4 rounded-md' > <div className='flex gap-1' > <span className='pt-1' ><FcGoogle /> </span> <span>Login with Google</span> </div> </button>
        </div>
      </div>
    );
  }
  return (
    <div className='bg-blue-900 min-h-screen flex gap-2 text-white' >
      <Nav/>
      <div className='bg-white text-black rounded-lg flex-grow m-2 p-2' >{children}</div>
    </div>
  );
}
