import { HabitType } from '@/app/(root)/page';

const FinishedChallenge = ({ habit }: { habit: HabitType }) => {
    return (
        <div className='flex gap-3 my-3 items-center'>
            <div className='flex flex-col py-1 gap-2 bg-yellow-100'>
                <h4 className='text-lg font-semibold'>{habit.challengeName}</h4>
            </div>
        </div>
    );
};

export default FinishedChallenge;
