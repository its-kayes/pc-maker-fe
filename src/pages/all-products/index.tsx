import Home from '@/views/Home/Home';
import { GetStaticProps } from 'next';
import { IProduct } from '@/config/type';
import { NextPageWithLayout } from '../_app';
import AllProducts from '@/views/AllProducts/AllProducts';

type PageProps = {
    products: IProduct[];
}

const AllProductsPage: NextPageWithLayout<PageProps> = ({ products }) => {
    return (
        <main>
            <AllProducts products={products} />
        </main>
    );
};

export default AllProductsPage;

export const getStaticProps: GetStaticProps<{
    products: IProduct[]
}> = async () => {

    // products data fetching
    const resP = await fetch('https://pc-craft-server.vercel.app/api/v1/products')
    const products = await resP.json();

    return {
        props: {
            products: products.data,
        }
    }
}