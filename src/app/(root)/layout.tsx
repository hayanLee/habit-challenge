import Header from '@/components/common/Header';
import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='w-full h-dvh bg-blue-300'>
            <div className='max-w-md h-full bg-background flex flex-col'>
                <Header />
                <main className='flex-grow min-h-0'>{children}</main>
            </div>
        </div>
    );
};

export default MainLayout;
