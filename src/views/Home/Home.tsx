
import React from 'react'
import Banner from './components/Banner'
import FeaturedProducts from './components/FeaturedProducts'
import FeaturedCategories from './components/FeaturedCategories'
import { ICategory, IProduct } from '@/config/type'

interface Props {
    products: IProduct[];
    categories: ICategory[];
}

const Home = ({ products, categories }: Props) => {
    return (
        <>
            <Banner />
            <FeaturedProducts products={products} />
            <FeaturedCategories categories={categories} />
        </>
    )
}

export default Home