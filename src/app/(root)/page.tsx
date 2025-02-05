import Challenge from '@/components/Challenge/Challenge';
import Footer from '@/components/common/Footer';
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
    progress: { date: string; isSuccess: boolean; sticker: string }[];
};

const MainPage = async () => {
    const now = dayjs();

    const res = await fetch('http://localhost:8000/challenges');
    const data = await res.json();
    const filteredData = data.filter((d: HabitType) => !d.isFinished);

    return (
        <div className='flex flex-col h-full'>
            <div className='px-3.5'>
                <Profile />
            </div>

            <h3 className='title px-3.5 '>
                Daily Challenge <span className='text-orange-400'>({filteredData.length})</span>
            </h3>
            <div className='px-3.5 flex flex-col grow overflow-y-auto scrollbar-hide'>
                <div>
                    {/* 미완료 
                        period > progress.length 
                        */}
                    {filteredData
                        .filter((habit: HabitType) => habit.progress.at(-1)?.date !== now.format('YYYY/MM/DD'))
                        .map((habit: HabitType) => (
                            <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                                <Challenge habit={habit} />
                            </Link>
                        ))}
                </div>

                <div className='border border-dashed my-3'></div>

                <div>
                    <div>
                        {/* 완료 */}
                        {filteredData
                            .filter((habit: HabitType) => habit.progress.at(-1)?.date === now.format('YYYY/MM/DD'))
                            .map((habit: HabitType) => (
                                <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                                    <Challenge habit={habit} hasSucceededToday={true} />
                                </Link>
                            ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MainPage;
