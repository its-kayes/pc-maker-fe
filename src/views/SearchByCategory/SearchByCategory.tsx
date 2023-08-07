import { IProduct } from '@/config/type';
import React from 'react'
import SectionTitle from '../Home/partials/SectionTitle';
import ProductCard from '../Home/partials/ProductCard';

type PageProps = {
    products: IProduct[];
    search: string | undefined;
}

const SearchByCategory = ({ products, search }: PageProps) => {
    return (
        <div className='my-[50px]'>
            <SectionTitle title={`Product By ${search}`} />

            <div className="container mt-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

                    {!products.length ? <div className='flex items-center justify-center h-[150px]'>No Product available</div> : products.map((item: IProduct, index: number) => <ProductCard
                        key={`products${index}`}
                        data={item}
                    />)}

                </div>
            </div>

        </div>
    )
}

export default SearchByCategory