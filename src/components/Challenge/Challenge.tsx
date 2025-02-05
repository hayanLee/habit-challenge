import { HabitType } from '@/app/(root)/page';
import { cn } from '@/lib/utils';

const categoryColors: Record<string, string> = {
    Health: 'bg-red-300',
    SelfCare: 'bg-blue-300',
    Learning: 'bg-green-300',
    Hobby: 'bg-purple-300',
    Work: 'bg-yellow-300',
    Travel: 'bg-orange-300',
};

const Challenge = ({ habit, hasSucceededToday }: { habit: HabitType; hasSucceededToday?: boolean }) => {
    const progressPercentage = ((habit.progress.length / habit.period) * 100).toFixed(0);

    return (
        <div className={cn('flex items-end gap-2 border rounded-lg p-4', hasSucceededToday && 'bg-point')}>
            <div className='grow flex flex-col gap-4'>
                <div>
                    <h4 className='text-lg font-semibold'>{habit.challengeName}</h4>
                    <p className='rounded text-gray-500 text-sm flex items-center'>{habit.startDay} ~</p>
                </div>
                <span className={cn('text-sm w-fit rounded px-2', categoryColors[habit.category] || 'text-gray-700')}>
                    #{habit.category}
                </span>
            </div>

            <p className='text-4xl font-base'>{progressPercentage}%</p>
        </div>
    );
};

export default Challenge;
