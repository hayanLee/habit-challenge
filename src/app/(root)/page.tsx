import Challenge from '@/components/Challenge/Challenge';
import Footer from '@/components/common/Footer';
import Profile from '@/components/Profile/Profile';
import { GOAL_DETAIL } from '@/constant/pathname';
import Link from 'next/link';

export type HabitType = {
    id: string;
    period: number;
    challengeName: string;
    isFinished: boolean;
    startDay: string;
    endDay: string;
};

const MainPage = async () => {
    const data = await fetch('http://localhost:8000/challenges');
    const res = await data.json();
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
                        {res
                            .filter((habit: HabitType) => !habit.isFinished)
                            .map((habit: HabitType) => (
                                <Link
                                    href={{
                                        pathname: GOAL_DETAIL(habit.id),
                                        query: { period: habit.period },
                                    }}
                                    key={habit.id}
                                >
                                    <Challenge id={habit.id} habit={habit} />
                                </Link>
                            ))}
                    </div>
                </div>

                <div className='border border-dashed my-3'></div>

                <div>
                    <div>
                        {res
                            .filter((habit: HabitType) => habit.isFinished)
                            .map((habit: HabitType) => (
                                <Link
                                    href={{
                                        pathname: GOAL_DETAIL(habit.id),
                                        query: { period: habit.period },
                                    }}
                                    key={habit.id}
                                >
                                    <Challenge id={habit.id} habit={habit} />
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
