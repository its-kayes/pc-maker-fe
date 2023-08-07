import { homeUrl } from '@/config/constants';
import { NextPageWithLayout } from '../_app';
import Login from '@/views/Auth/Login';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LoginPage: NextPageWithLayout = () => {

    // global
    const router = useRouter();
    const { data: session } = useSession();

    // checking is logged
    useEffect(() => {
        if (session?.user?.email) {
            router.push(homeUrl)
        }
    }, [session?.user?.email, router]);

    // if logged
    if (session?.user?.email) return <div className='flex justify-center items-center h-[150px]'>Loading...</div>

    return (
        <main>
            <Login />
        </main>
    );
};

export default LoginPage;