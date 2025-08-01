'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"
import './navigation.css';

function Navigation() {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <Link href="/" className="nav-link">
                    Home
                </Link>
            </li>
            <li className="nav-li">
                <Link href="/about" className="nav-link">
                    About
                </Link>
            </li>
            <li className="nav-li">
                <Link href="/work" className="nav-link">
                    Work
                </Link>
            </li>
            <li className="nav-li">
                <Link href="/contact" className="nav-link">
                    Contact
                </Link>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='fixed inset-x-0 z-20 backdrop-blur-lg bg-primary/40 '>
            <div className="mx-auto max-w-7xl ">
                <div className="w-full flex items-center justify-between px-2 sm:px-0">
                    <Link href={'/'}
                        className='text-xl font-bold text-neutral-400 hover:text-white'>Raghav</Link>
                    <button onClick={() => setOpen(!isOpen)}
                        className=' flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden '>
                        {/* yaha per ak svg formate ka image use karna hai jis se text color use hiaga  */}
                        <Image
                            src={isOpen ? "/menu.png" : "/close.png"}
                            alt="toggle"
                            width={isOpen ? 40 : 30}
                            height={isOpen ? 40 : 30}
                        />
                    </button>
                    <nav className=' hidden sm:flex '>
                        <Navigation />
                    </nav>
                </div>
            </div>
            <div className="block overflow-hidden text-center sm:hidden ">
                <nav className='pb-5'>
                    <Navigation />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
