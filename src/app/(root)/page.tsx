import ChallengeCard from '@/components/Card/ChallengeCard';
import Profile from '@/components/Profile/Profile';
import { GOAL_DETAIL } from '@/constant/pathname';
import dayjs from 'dayjs';
import Link from 'next/link';

export type HabitType = {
    id: string;
    period: number;
    challengeName: string;
    isFinished: boolean;
    startDay: string;
    endDay: string;
    category: string;
    progress: { date: string; sticker: string }[];
};

const MainPage = async () => {
    const now = dayjs();
    const res = await fetch('http://localhost:8000/challenges');
    const data = await res.json();
    const filteredData = data.filter((d: HabitType) => !d.isFinished);
    const uncompletedData = filteredData.filter(
        (habit: HabitType) => habit.progress.at(-1)?.date !== now.format('YYYY/MM/DD')
    );
    const completedData = filteredData.filter(
        (habit: HabitType) => habit.progress.at(-1)?.date === now.format('YYYY/MM/DD')
    );

    return (
        <div className='flex flex-col h-full'>
            <Profile />

            <h3 className='title'>
                Goals <span className='text-point'>({uncompletedData.length})</span>
            </h3>
            <div className='flex flex-col grow overflow-y-auto scrollbar-hide gap-2 my-3'>
                {uncompletedData.map((habit: HabitType) => (
                    <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                        <ChallengeCard habit={habit} />
                    </Link>
                ))}

                <div className='border border-dashed my-3'></div>

                {completedData.map((habit: HabitType) => (
                    <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                        <ChallengeCard habit={habit} hasSucceededToday={true} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
