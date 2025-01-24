import { HabitType } from '@/app/(root)/page';
import CheckIcon from '@/assets/icons/check-icon.svg';
const Challenge = ({ id, habit }: { id: string; habit: HabitType }) => {
    return (
        <div className='flex gap-3 my-2 items-center'>
            <div className='grow flex gap-2'>
                <div className='w-20 h-20 bg-gray-400'>대표스티커</div>
                <div className='gap-2'>
                    <h4 className='text-lg font-semibold'>{habit.challengeName}</h4>
                    <p className='bg-gray-200 rounded w-fit px-1.5'>{habit.period}일</p>
                </div>
            </div>
            {habit.isFinished && <CheckIcon className='fill-point' />}
        </div>
    );
};

export default Challenge;
