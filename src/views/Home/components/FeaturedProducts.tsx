import React from 'react'
import SectionTitle from '../partials/SectionTitle'
import { IProduct } from '@/config/type';
import ProductCard from '../partials/ProductCard';

interface Props {
    products: IProduct[];
}

const FeaturedProducts = ({ products }: Props) => {

    // filtering data
    const featuredProducts = products.filter((item: IProduct) => item.isFeatured === true)

    return (
        <div className='my-[50px]'>
            <SectionTitle title='Featured Products' />

            <div className="container mt-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

                    {featuredProducts.slice(0, 6).map((item: IProduct, index: number) => <ProductCard
                        key={`products${index}`}
                        data={item}
                    />)}

                </div>
            </div>

        </div>
    )
}

export default FeaturedProducts;