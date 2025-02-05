import ChallengeCard from '@/components/Card/ChallengeCard';
import { GOAL_DETAIL } from '@/constant/pathname';
import Link from 'next/link';
import { HabitType } from '../page';

const StickersPage = async () => {
    const res = await fetch(`http://localhost:8000/challenges`);
    const data = await res.json();
    const finishedGoals = data.filter((d: HabitType) => d.isFinished);

    return (
        <div className='flex flex-col h-full'>
            <h1 className='title text-center my-3'>🏆 Milestone 🏆</h1>
            <p>
                이만큼 해냈어요! 작은 도전들이 모여 더 큰 변화를 만들어갑니다. <br />
                다음 목표도 도전해볼까요?
            </p>
            <div className='overflow-y-auto scrollbar-hide'>
                {finishedGoals.map((habit: HabitType) => (
                    <Link href={GOAL_DETAIL(habit.id)} key={habit.id}>
                        <ChallengeCard habit={habit} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StickersPage;
