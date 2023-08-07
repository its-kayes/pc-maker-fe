import { allProductsUrl, homeUrl, logiinUrl, pcBuildUrl } from '@/config/constants';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import CategoriesDropdown from './components/CategoriesDropdown';
import { AiOutlineDesktop, AiOutlineMenu, AiOutlineClose, AiOutlineLogin } from 'react-icons/ai';
import classNames from 'classnames';
import MobileMenu from './components/MobileMenu';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"
import { BsChevronDown } from 'react-icons/bs';
import ProfileDropdown from './components/ProfileDropdown';

const linkCls = 'text-white hover:text-primary-100 trans'

const Header: React.FC = () => {

    // globals
    const router = useRouter();
    const { data: session } = useSession();

    // states
    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // dropdown close
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // handler
    const toggleMenuDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event: any) => {
        // @ts-ignore
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="bg-secondary-300 py-3">
            <div className="container">
                <div className="flex items-center justify-between">

                    <Link href={homeUrl} className="text-white font-semibold text-lg flex items-center gap-2 uppercase">
                        <AiOutlineDesktop className='relative top-[1px] text-[24px]' />
                        PC Crafts
                    </Link>

                    <div className="hidden md:flex md:items-center space-x-10">

                        <Link href={homeUrl} className={classNames(linkCls)} onClick={() => setDropdownOpen(false)}>Home</Link>
                        <Link href={allProductsUrl} className={classNames(linkCls)} onClick={() => setDropdownOpen(false)}>All Products</Link>

                        <div className="relative">
                            <button onClick={toggleDropdown} className={classNames(linkCls)}>Categories</button>
                            {isDropdownOpen && <CategoriesDropdown setDropdownOpen={setDropdownOpen} />}
                        </div>

                        <Link href={logiinUrl} className={classNames(linkCls, 'flex gap-2 items-center group', session?.user?.email && 'hidden')} onClick={() => setDropdownOpen(false)}>
                            Login
                            <AiOutlineLogin className={classNames(linkCls, 'relative top-[1px] text-[20px] group-hover:text-primary-100')} />
                        </Link>


                        {/* profile dropdown after login */}
                        {session?.user?.email && <div className="inline-block relative cursor-pointer" ref={dropdownRef}>
                            <div className="text-primary-100 hover:text-white trans flex items-center gap-2" onClick={toggleMenuDropdown}>
                                {session.user.name || session.user.email} <BsChevronDown className='relative top-[1px]' />
                            </div>
                            {isOpen && <ProfileDropdown />}
                        </div>}

                        <div>
                            <button
                                type='button'
                                className={classNames(
                                    linkCls, 'bg-primary-700 py-1.5 px-5 rounded-md'
                                )}
                                onClick={() => router.push(pcBuildUrl)}
                            >
                                PC Builder
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu (hamburger) */}
                    <div className="md:hidden relative top-[3px]">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white focus:outline-none"
                        >
                            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </button>
                    </div>

                </div>
            </div>


            {/* mobile navbar menu */}
            <div
                className={`navbar-menu relative md:z-[99] z-[999] lg:hidden ${isMobileMenuOpen ? "block" : "hidden"
                    }`}
            >
                <MobileMenu
                    setShowSideNav={setMobileMenuOpen}
                    showSideNav={isMobileMenuOpen}
                />
            </div>
        </nav>
    );
};

export default Header;