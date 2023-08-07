import { bdtSymbol, starCustomStyle } from '@/config/constants';
import { IProduct } from '@/config/type';
import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react'
// @ts-ignore
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import ProductKeyFeatures from './partials/ProductKeyFeatures';
import ArcodionBtn from './components/ArcodionBtn';
import ProductReview from './partials/ProductReview';

type Props = {
    product: IProduct;
}

const ProductDetails = ({ product }: Props) => {

    // states
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div className='container'>
            <div className="grid lg:grid-cols-2 gap-5 items-start justify-center py-12">

                <div className=" flex items-center justify-center">
                    <Image src={product.image} alt={product.name} width={100} height={100} layout='responsive' className='!w-[400px]' />
                </div>

                <div className="col-span-1 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-4">

                        <p className="text-sm leading-none text-gray-600">
                            {product.category}

                            <span className={classNames(
                                'ml-2 p-1 text-white rounded-md',
                                product.status === 'In Stock' ? 'bg-success' : 'bg-error'
                            )}>
                                {product.status}
                            </span>
                        </p>

                        <h1 className="lg:text-2xl md:text-xl text-[18px] font-semibold lg:leading-6 leading-7 text-gray-800 mt-5 flex items-center gap-2">
                            <span className='w-[70%]'>{product.name}</span>
                            <span>  <Rating style={{ maxWidth: 100, position: 'relative', top: '1px' }} value={product.averageRating} readOnly={true} itemStyles={starCustomStyle} /></span>
                        </h1>

                        <h3 className='mt-3 text-[22px] font-semibold'>{bdtSymbol} {product.price}</h3>
                    </div>

                    <div>
                        <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">{product.description}</p>

                        <div className='flex items-center gap-2 mt-7'>
                            <p className="text-base leading-4  text-gray-600 ">
                                Individual Rating:
                            </p>
                            <Rating style={{ maxWidth: 100 }} value={product.individualRating} readOnly={true} itemStyles={starCustomStyle} />
                        </div>

                    </div>

                    <div>
                        <div className="border-t border-b py-4 mt-7 border-gray-200">
                            <ArcodionBtn setShow={setShow} show={show} title='Key Features' />

                            <div className={"pt-4 text-base leading-normal mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                                <ProductKeyFeatures product={product} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="border-b py-4 border-gray-200">
                            <ArcodionBtn setShow={setShow2} show={show2} title='Reviews' />
                            <div className={"pt-4 text-base leading-normal mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                                <ProductReview product={product} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails