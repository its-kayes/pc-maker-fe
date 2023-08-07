import { NextPageWithLayout } from '../_app';
import PCBuild from '@/views/PCBuild/PCBuild';
import { GetServerSideProps } from 'next';
import { ICategory } from '@/config/type';

type PageProps = {
    categories: ICategory[];
}

const PcBuildPage: NextPageWithLayout<PageProps> = ({ categories }) => {
    return (
        <main>
            <PCBuild categories={categories} />
        </main>
    );
};

export default PcBuildPage;

export const getServerSideProps: GetServerSideProps<{
    categories: ICategory[]
}> = async () => {
    const resCat = await fetch('https://pc-craft-server.vercel.app/api/v1/categories')
    const categories = await resCat.json()
    return {
        props: {
            categories: categories.data
        }
    }
}
