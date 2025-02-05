import { HabitType } from '@/app/(root)/page';
import { cn } from '@/lib/utils';
const Challenge = ({ habit, hasSucceededToday }: { habit: HabitType; hasSucceededToday?: boolean }) => {
    const progressPercentage = ((habit.progress.length / habit.period) * 100).toFixed(0);

    return (
        <div className={cn('flex flex-col gap-2 my-3 border rounded-md p-2', hasSucceededToday && 'bg-point')}>
            <h4 className='text-lg font-semibold'>{habit.challengeName}</h4>
            <div className='flex justify-between'>
                <p className='rounded text-gray-500 text-sm flex items-center'>{habit.startDay} ~</p>
                <p className='text-lg font-semibold'>{progressPercentage}%</p>
            </div>
        </div>
    );
};

export default Challenge;
