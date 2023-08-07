import { NextPageWithLayout } from '../_app';
import ProductDetails from '@/views/ProductDetails/ProductDetails';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IProduct } from '@/config/type';

type PageProps = {
    product: IProduct;
}

const ProductDetailsPage: NextPageWithLayout<PageProps> = ({ product }) => {
    return (
        <main>
            <ProductDetails product={product} />
        </main>
    );
};

export default ProductDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {

    const res = await fetch('https://pc-craft-server.vercel.app/api/v1/products')
    const products = await res.json()

    const paths = products.data.map((product: IProduct) => ({
        params: { productId: product._id },
    }))

    return { paths, fallback: false }
};


export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
    const { params } = context;

    if (!params || !params.productId) {
        return {
            notFound: true,
        };
    }

    // Destructure the 'productId' parameter from 'params'
    const { productId } = params;

    // get specific product
    const resP = await fetch(`https://pc-craft-server.vercel.app/api/v1/products/${productId}`);
    const product = await resP.json();

    return {
        props: {
            product: product.data,
        }
    };
};