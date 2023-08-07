import { starCustomStyle } from '@/config/constants';
import { IProduct, IReview } from '@/config/type';
import Image from 'next/image';
import React from 'react'
// @ts-ignore
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

type Props = {
    product: IProduct;
}

const ProductReview = ({ product }: Props) => {
    return (
        <div>

            {product.reviews.map((data: IReview, index: number) => (
                <div className="relative mx-auto w-full mb-3" key={`rating${index}`}>
                    <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                        <div className="shadow p-4 rounded-lg bg-white">
                            <div className="mt-4 grid grid-cols-6 items-center">

                                <div className='rounded-full border-2 border-primary-300 w-max'>
                                    <Image src={data.image ? data.image : '/av.jpg'} width={40} height={30} alt={data.user} className='rounded-full ' />
                                </div>


                                <div className='col-span-5'>
                                    <h2 className="font-medium text-base md:text-lg text-gray-800 flex items-center gap-2 ">
                                        {data.user}
                                        <span> <Rating style={{ maxWidth: 100, position: 'relative', top: '-1px' }} value={product.individualRating} readOnly={true} itemStyles={starCustomStyle} /></span>
                                    </h2>
                                    <p className="mt-1 text-sm text-gray-800">
                                        {data.comment}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default ProductReview