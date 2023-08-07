import { IProduct } from '@/config/type';
import React from 'react'
import SectionTitle from '../Home/partials/SectionTitle';
import ProductCard from '../Home/partials/ProductCard';

type Props = {
    products: IProduct[];
}

const AllProducts = ({ products }: Props) => {
    return (
        <div className='my-[50px]'>
            <SectionTitle title='All Products' />

            <div className="container mt-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

                    {products.map((item: IProduct, index: number) => <ProductCard
                        key={`allproducts${index}`}
                        data={item}
                    />)}

                </div>
            </div>

        </div>
    )
}

export default AllProducts