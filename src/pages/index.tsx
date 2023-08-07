import Home from '@/views/Home/Home';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/Layout/Layout';
import type { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { ICategory, IProduct } from '@/config/type';

type PageProps = {
  products: IProduct[];
  categories: ICategory[];
}

const HomePage: NextPageWithLayout<PageProps> = ({ products, categories }) => {
  return (
    <main>
      <Home products={products} categories={categories} />
    </main>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<{
  products: IProduct[]
}> = async () => {

  // products data fetching
  const resP = await fetch('https://pc-craft-server.vercel.app/api/v1/products')
  const products = await resP.json();

  // categories data fetching
  const resC = await fetch('https://pc-craft-server.vercel.app/api/v1/categories')
  const categories = await resC.json();

  return {
    props: {
      products: products.data,
      categories: categories.data,
    }
  }
}