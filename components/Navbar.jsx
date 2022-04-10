import React from 'react';
import Link from 'next/link';
import { BsFillHandbagFill } from 'react-icons/bs';

const Navbar = () => {
	return (
		<nav className="flex bg-black text-white w-full justify-between items-center py-4 px-16">
			<Link href="/" passHref>
				<a>
					<h2 className='font-["Pacifico"]'>Online Shop</h2>
				</a>
			</Link>
			<Link href="/cart" passHref className="">
				<div className="relative w-[50px] cursor-pointer">
					<BsFillHandbagFill className="w-8 h-8 m-2 text-blue-600" />{' '}
					<div className="absolute top-[-10px] right-0 rounded-full bg-green-600 text-white text-sm w-5 h-5  pl-[6px]">
						3
					</div>
				</div>
			</Link>
		</nav>
	);
};

export default Navbar;
