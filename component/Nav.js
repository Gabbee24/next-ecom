import Link from "next/link";
import {HiOutlineAcademicCap} from 'react-icons/hi';
import {CiHome} from 'react-icons/ci';
import {LiaCogSolid} from 'react-icons/lia';
import {CiLogout} from 'react-icons/ci';
import {TbBrandProducthunt} from 'react-icons/tb';
import { useRouter } from "next/router";

const Nav = () => {
 
  const {pathname} = useRouter();

  return (
    <aside className="text-white p-4 mt-3 bg-blue-900" >
      <Link href='/' className="flex gap-1 mb-3" >
        <span className="pt-1" > <HiOutlineAcademicCap/> </span>
        <span >COK academy</span>
      </Link>
      <nav className="mt-3" >
        <Link href='/' className={pathname === '/' ? 'flex gap-1 bg-white text-black' : 'flex gap-1' } >
          <span className="pt-1" ><CiHome/></span>
          <span>Dashboard</span>
        </Link>
        <Link href='/products' className={pathname.includes('/products') ? 'flex gap-1 bg-white text-black ' : 'flex gap-1' } >
          <span className="pt-1" ><TbBrandProducthunt/></span>
          <span>Products</span>
        </Link>
        <Link href='/orders' className={pathname.includes('/orders') ? 'flex gap-1 bg-white text-black ' : 'flex gap-1' } >
          <span className="pt-1" ><CiHome/></span>
          <span>Orders</span>
        </Link>
        
        <Link href='/settings' className={pathname.includes('/settings') ? 'flex gap-1 bg-white text-black ' : 'flex gap-1' } >
          <span className="pt-1" ><LiaCogSolid/></span>
          <span>Settings</span>
        </Link>
        <Link href='/logout' className={pathname.includes('/logout') ? 'flex gap-1 bg-white text-black ' : 'flex gap-1' } >
          <span className="pt-1" ><CiLogout/></span>
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  )
}

export default Nav