import FinishedChallenge from '@/components/Challenge/FinishedChallenge';
import { GOAL_DETAIL } from '@/constant/pathname';
import Link from 'next/link';
import { HabitType } from '../page';

const StickersPage = async () => {
    const res = await fetch(`http://localhost:8000/challenges`);
    const data = await res.json();
    const finishedGoals = data.filter((d: HabitType) => d.isFinished);

    return (
        <div className='flex flex-col h-full px-3.5'>
            <h1 className='title'>Milestone</h1>
            <div>
                {finishedGoals.map((habit: HabitType) => (
                    <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                        <FinishedChallenge habit={habit} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StickersPage;
