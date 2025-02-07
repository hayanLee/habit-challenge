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

            {!data.length && (
                <div className='text-center font-semibold text-lg text-gray-400'>새로운 챌린지를 시작해보세요 !</div>
            )}

            <div className='flex flex-col grow overflow-y-auto scrollbar-hide gap-2 my-3'>
                {uncompletedData.map((habit: HabitType) => (
                    <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                        <ChallengeCard habit={habit} />
                    </Link>
                ))}

                <div className='flex items-center my-3'>
                    <div className='flex-1 border-t border-dashed border-gray-300'></div>
                    <span className='mx-4 font-semibold'>오늘의 한 걸음</span>
                    <div className='flex-1 border-t border-dashed border-gray-300'></div>
                </div>

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
