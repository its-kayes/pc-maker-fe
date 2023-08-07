import { ICategory } from '@/config/type'
import React from 'react'
import { HiOutlineCpuChip } from 'react-icons/hi2'
import { BsMotherboard } from 'react-icons/bs'
import { MdPanoramaHorizontal } from 'react-icons/md'
import { ImPower } from 'react-icons/im'
import { FiMonitor } from 'react-icons/fi'
import { CgPullClear } from 'react-icons/cg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '@/components/Button/Button'

type Props = {
    data: ICategory;
    index: number;
}

const CategoryCard = ({ data, index }: Props) => {

    const router = useRouter();

    return (
        <Link href={`category/${data.slug}`} className="bg-white shadow-2xl rounded-b-3xl p-4 pb-6">

            <div className="flex items-center gap-3  bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                <div className=" text-[32px]">
                    {index === 0 && <HiOutlineCpuChip />}
                    {index === 1 && <BsMotherboard />}
                    {index === 2 && <MdPanoramaHorizontal />}
                    {index === 3 && <ImPower />}
                    {index === 4 && <FiMonitor />}
                    {index === 5 && <CgPullClear />}
                </div>
                <div className="">
                    <p className="text-primary-700 font-bold lg:text-sm">{data.name}</p>
                </div>

            </div>

            <Button
                classes='mt-6 w-full !rounded-2xl'
                text='Click to view'
                onClick={() => router.push(`category/${data.slug}`)}
            />

        </Link>
    )
}

export default CategoryCard