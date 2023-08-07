import Button from '@/components/Button/Button';
import { ICategory, IProduct } from '@/config/type'
import { useRouter } from 'next/router';
import React from 'react'
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';
import { BsJournalArrowUp } from 'react-icons/bs';
import classNames from 'classnames';
import { bdtSymbol } from '@/config/constants';
import { useAppDispatch } from '@/hooks/helpers';
import { removeFromPCBuild } from '@/redux/features/pcBuild/pcBuildSlice';

type Props = {
    data: ICategory;
    buildItems: IProduct[];
}

const CatItemCard = ({ data, buildItems }: Props) => {

    // globals
    const router = useRouter();
    const dispatch = useAppDispatch();

    // Filter buildItems that match the categorySlug of the data
    const matchingBuildItems = buildItems?.filter((item) => item.categorySlug === data.slug);

    return (
        <div className="relative cursor-default">
            <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div className="shadow p-4 rounded-lg bg-white">

                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="font-medium text-[18px] md:text-lg text-gray-600 flex items-center gap-2.5">
                                <BsJournalArrowUp className='text-[22px] text-primary' /> {data.name}
                            </h2>
                        </div>

                        <Button
                            text={<div className='flex items-center gap-2'>Choose <AiOutlineArrowRight className='relative top-[1px]' /></div>}
                            onClick={() => router.push(`category/${data.slug}`)}
                            type='button'
                        />
                    </div>

                    {/* Display matching buildItems */}

                    <div className={classNames(matchingBuildItems.length && 'mt-4')}>
                        {matchingBuildItems?.map((item: IProduct, index: number) => (
                            <div key={`buildP${index}`} className={classNames('pl-1 md:pl-10', index < matchingBuildItems.length - 1 && 'mb-3')}>

                                <div className='border p-2 md:pl-4 flex justify-between items-center rounded-md'>
                                    <div>
                                        <h2 className=' font-medium text-gray-600'>{item.name}</h2>
                                        <p className='font-semibold'> <span className='text-[20px]'>{bdtSymbol}</span> {item.price}</p>
                                    </div>

                                    <button
                                        className='pr-4 text-[22px] text-primary hover:text-primary-300 trans'
                                        type='button'
                                        onClick={() => {
                                            dispatch(removeFromPCBuild(item._id as string))
                                        }}
                                    >
                                        <AiOutlineClose />
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CatItemCard