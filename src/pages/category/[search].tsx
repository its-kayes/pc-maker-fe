import { NextPageWithLayout } from '../_app';
import { GetStaticPaths, GetStaticProps } from 'next';
import SearchByCategory from '@/views/SearchByCategory/SearchByCategory';
import { IProduct } from '@/config/type';

type PageProps = {
    products: IProduct[];
    search?: any;
}

const CategoryBasePage: NextPageWithLayout<PageProps> = ({ products, search }) => {

    return (
        <main>
            <SearchByCategory products={products} search={search} />
        </main>
    );
};

export default CategoryBasePage;

export const getStaticPaths: GetStaticPaths = async () => {

    const res = await fetch('https://pc-craft-server.vercel.app/api/v1/products')
    const products = await res.json()

    const paths = products.data.map((product: IProduct) => ({
        params: { search: product.categorySlug },
    }))

    return { paths, fallback: false }
};


export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
    const { params } = context;

    if (!params || !params.search) {
        return {
            notFound: true,
        };
    }

    // Destructure the 'search' parameter from 'params'
    const { search } = params;

    // Now you can use the 'search' parameter to fetch products based on the categorySlug
    const resP = await fetch(`https://pc-craft-server.vercel.app/api/v1/products?categorySlug=${search}`);
    const products = await resP.json();

    return {
        props: {
            products: products.data,
            search: search ? search : '',
        }
    };
};
