import { HabitType } from '@/app/(root)/page';

const FinishedChallenge = ({ habit }: { habit: HabitType }) => {
    return (
        <div className='flex flex-col gap-2 my-3 border rounded-md p-2 bg-gliter animate-glitter  '>
            <h4 className='text-lg font-semibold'>{habit.challengeName}</h4>
            <div className='flex justify-between'>
                <p className='rounded text-gray-500 text-sm flex items-center'>
                    {habit.startDay} ~ {habit.endDay}
                </p>
                <p className='text-lg font-semibold'></p>
            </div>
        </div>
    );
};

export default FinishedChallenge;
