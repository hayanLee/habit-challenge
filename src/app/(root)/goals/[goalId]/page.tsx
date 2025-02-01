import { Button } from '@/components/ui/button';

// 나중에 db를 사용하면 period를 params로 넘길 필요 없음

const GoalDetailPage = async ({
    params,
    searchParams,
}: {
    params: { goalId: string };
    searchParams: { [key: string]: string | undefined };
}) => {
    const { goalId } = params;
    const { period } = searchParams;
    const days = Array(Number(period))
        .fill(0)
        .map((_, idx) => idx + 1);

    const data = await fetch(`http://localhost:8000/challenges/${goalId}`);
    const res = await data.json();

    const { challengeName, startDay, endDay } = res;

    return (
        <div className='flex flex-col h-full'>
            <div className='px-3.5 flex flex-col'>
                <div>
                    <h3 className='title'>{challengeName}</h3>
                    <p>
                        {startDay} ~ {endDay}
                    </p>
                </div>

                <div className='mx-10 mt-7 mb-24'>
                    <div className='grid grid-cols-5 gap-3.5'>
                        {days.map((day) => (
                            <div className='day' key={day}>
                                {day}
                            </div>
                        ))}
                    </div>
                </div>

                <Button size={'lg'} className='mx-auto'>
                    Add Today&apos;s Sticker
                </Button>
            </div>
        </div>
    );
};

export default GoalDetailPage;
