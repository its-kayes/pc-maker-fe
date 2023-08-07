import { catDropdownItems } from '@/config/constants'
import { ICategory } from '@/config/type'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

const linkCls = 'block text-gray-500 hover:bg-primary-200 hover:text-white py-1 px-2'

interface Props {
    setShowSideNav?: (showSideNav: boolean) => void;
    setDropdownOpen?: (isDropdownOpen: boolean) => void;
}

const CategoriesDropdown = ({ setShowSideNav, setDropdownOpen }: Props) => {
    return (
        <div className="absolute top-8 right-0 bg-white py-2 shadow-lg w-[142px] rounded-md z-[999]">
            {catDropdownItems.map((item: ICategory) => <Link
                key={item._id}
                href={`/category/${item.slug}`}
                title={item.name}
                className={classNames(linkCls, 'truncate ')}
                onClick={() => {
                    setDropdownOpen?.(false);
                    setShowSideNav?.(false);
                }}
            >
                {item.name}
            </Link>)}
        </div>
    )
}

export default CategoriesDropdown