import MotivationCard from '@/components/Card/MotivationCard';
import { PropsWithChildren } from 'react';

const GoalsLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='flex flex-col justify-between h-full'>
            {children}
            <MotivationCard />
        </div>
    );
};

export default GoalsLayout;
