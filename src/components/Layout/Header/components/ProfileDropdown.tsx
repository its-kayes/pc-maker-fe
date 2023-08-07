import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from "next-auth/react"

type Props = {}

const ProfileDropdown = (props: Props) => {
    return (
        <div className="absolute top-8 right-0 bg-white py-2 shadow-lg w-[142px] rounded-md">

            <button
                type='button'
                onClick={() => signOut()}
                className='text-primary-700 w-full trans flex items-center gap-2 hover:bg-primary-400 hover:text-white py-1 px-2'
            >
                <BiLogOut className='relative top-[1px]' /> Logout
            </button>

        </div>
    )
}

export default ProfileDropdown