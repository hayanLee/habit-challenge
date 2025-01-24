import { PropsWithChildren } from 'react';

const GoalsLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div className='my-5'>{children}</div>
            <p className='text-lg text-center mb-10'>랜덤 격려/명언/조언</p>
        </div>
    );
};

export default GoalsLayout;
