import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineDesktop, AiOutlineLogin } from 'react-icons/ai';
import { allProductsUrl, homeUrl, logiinUrl } from "@/config/constants";
import classNames from 'classnames';
import CategoriesDropdown from "./CategoriesDropdown";
import { FiChevronRight } from 'react-icons/fi'
import { useSession, signOut } from 'next-auth/react';
import Button from "@/components/Button/Button";
import { BiLogOut } from "react-icons/bi";

type Props = {
    setShowSideNav: (showSideNav: boolean) => void;
    showSideNav: boolean;
};

const linkCls = 'text-primary-800 text-[18px] font-medium'

const MobileMenu = ({ setShowSideNav }: Props) => {

    // global
    const router = useRouter();
    const { data: session } = useSession();

    // states
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    //   handler
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <>
            <div className="navbar-backdrop block lg:!hidden fixed inset-0 bg-gray-800 opacity-25"></div>

            <div className="fixed top-0 left-0 bottom-0 w-full bg-[rgba(0,0,0,0.3)] flex justify-end md:justify-start ">
                <nav className="flex flex-col md:w-full w-[285px] h-full py-[40px] bg-white overflow-y-auto relative ">
                    <div className="md:mt-[60px] mt-[30px]">


                        <Link href={homeUrl} className="text-primary px-[40px] font-semibold text-lg flex items-center gap-2 mb-5">
                            <AiOutlineDesktop className='relative top-[1px]' />
                            PC Crafts
                        </Link>


                        <div className="flex flex-col px-[40px] space-y-4">
                            <Link href={homeUrl} className={classNames(linkCls)} onClick={() => setShowSideNav(false)}>Home</Link>
                            <Link href={allProductsUrl} className={classNames(linkCls)} onClick={() => setShowSideNav(false)}>All Products</Link>

                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className={classNames(linkCls, 'flex items-center gap-1')}
                                >
                                    Categories <FiChevronRight />
                                </button>
                                {isDropdownOpen && <CategoriesDropdown setShowSideNav={setShowSideNav} />}
                            </div>
                        </div>

                        <div className="px-[40px] mt-5">
                            <div className={classNames(
                                session?.user?.email && 'hidden'
                            )}>
                                <Button
                                    onClick={() => {
                                        router.push(logiinUrl)
                                        setDropdownOpen(false)
                                    }}
                                    classes="w-full flex justify-center"
                                    text={<div className="flex items-center gap-2"> Login
                                        <AiOutlineLogin className={classNames('relative top-[1px] text-[20px]')} /></div>} >
                                </Button>
                            </div>

                            {session?.user?.email && <>

                                <p className="mb-1.5">{session?.user?.name || session?.user?.email}</p>

                                <Button
                                    onClick={() => {
                                        signOut()
                                    }}
                                    classes="w-full flex justify-center"
                                    text={<div className="flex items-center gap-2"> Logout
                                        <BiLogOut className={classNames('relative top-[1px] text-[20px] rotate-180')} /></div>} >
                                </Button>

                            </>}

                        </div>

                    </div>
                </nav>

                {/* Mobile Close Button */}
                <div
                    className="md:hidden block absolute right-4 top-[15px] cursor-pointer"
                    onClick={() => setShowSideNav(false)}
                >
                    <AiOutlineClose />
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
