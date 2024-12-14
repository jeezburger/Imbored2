import React from 'react'
import logo from '/src/assets/logo.png'
import betterLogo1 from '/src/assets/betterLogo1.png'
import { navItems } from '../constants'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto text-sm flex justify-between items-center">
                <div className="flex items-center">
                    <img className="h-10 w-10 mr-2" src={betterLogo1} alt="logo" />
                    <span className="text-xl tracking-light">goli</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href='#' className='py-2 px-3 border rounded-md'>
                        Sign In
                    </a>
                    <a className='bg-gradient-to-r from-green-300 to-green-700 px-2 py-2 rounded-md'>
                        Create
                    </a>
                </div>
                <div className="lg:hidden flex flex-col justify-end">
                    <button onClick={toggleDrawer}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((items, index) => (
                                <li key={index} className='py-4 px-4'>
                                    <a href={index.href}>(index.label)</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-2">
                            <a href='#' className='py-2 px-3 border rounded-md'>
                                Sign In
                            </a>
                            <a href='#' className='py-2 px-3 border rounded-md bg-gradient-to-r from-green-200 to-green-700'>
                                Create
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
