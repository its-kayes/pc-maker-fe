import { BsBookHalf, BsTelephoneForward } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import { AiOutlineDesktop, AiOutlineMail } from 'react-icons/ai';
import LinkGrid from './components/LinkGrid';
import { footerLinks, homeUrl } from '../../../config/constants';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-primary-200 text-center text-primary-700 lg:text-left mt-10">
            <div className='container'>

                <div className="mx-6 pb-0 md:pb-10 py-10 text-center md:text-left">

                    <div className="grid-1 grid gap-8 md:grid-cols-2 xll:grid-cols-4">

                        <div className="">
                            <h6 className="mb-4 flex gap-1 items-center justify-center font-semibold uppercase md:justify-start">
                                <AiOutlineDesktop className='relative top-[1px] text-[24px]' />
                                PC Crafts
                            </h6>
                            <p className='text-primary-900'>
                                Customization is the name of the game. You will find a vast array of top-tier components from leading manufacturers worldwide, allowing customers to build their dream PC from scratch.
                            </p>
                        </div>

                        {/* Products section */}
                        <LinkGrid title='Go to view' links={footerLinks.slice(0, 3)} />
                        <LinkGrid title='Useful links' links={footerLinks.slice(3, 6)} />

                        {/* Contact section */}
                        <div className=''>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Contact
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start gap-1 text-primary-900">
                                <CiLocationArrow1 />
                                Rajshahi, Dhaka, Bangladesh
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start gap-1 text-primary-900">
                                <AiOutlineMail />
                                pccrafts@gmail.com
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start gap-1 text-primary-900">
                                <BsTelephoneForward />
                                +8801689201370
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright section */}
                <div className="p-6 text-center">
                    <span>
                        © 2023 Copyright:{' '}
                        <Link
                            className="font-semibold text-primary"
                            href={homeUrl}
                        >
                            PC Crafts
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;