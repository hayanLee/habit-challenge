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

    const data = await fetch('http://localhost:8000/challenges');
    const res = await data.json();

    console.log(res.filter((h: HabitType) => h.progress.at(-1)?.date !== now.format('YYYY/MM/DD')));
    return (
        <div className='flex flex-col h-full'>
            <div className='px-3.5'>
                <Profile />
            </div>

            <div className='px-3.5 flex flex-col grow overflow-y-auto scrollbar-hide'>
                <div>
                    <h3 className='title'>
                        Daily Challenge <span className='text-orange-400'>({res.length})</span>
                    </h3>
                    <div>
                        {/* 미완료 
                        period > progress.length 
                        */}

                        {res
                            .filter((habit: HabitType) => habit.progress.at(-1)?.date !== now.format('YYYY/MM/DD'))
                            .map((habit: HabitType) => (
                                <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                                    <Challenge id={habit.id} habit={habit} />
                                </Link>
                            ))}
                    </div>
                </div>

                <div className='border border-dashed my-3'></div>

                <div>
                    <div>
                        {/* 완료 */}
                        {res
                            .filter((habit: HabitType) => habit.progress.at(-1)?.date === now.format('YYYY/MM/DD'))
                            .map((habit: HabitType) => (
                                <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                                    <Challenge id={habit.id} habit={habit} hasSucceededToday={true} />
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
