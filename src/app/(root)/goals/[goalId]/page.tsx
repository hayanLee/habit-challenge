import { Button } from '@/components/ui/button';

// 나중에 db를 사용하면 period를 params로 넘길 필요 없음

const GoalDetailPage = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const { period } = searchParams;
    const days = Array(Number(period))
        .fill(0)
        .map((_, idx) => idx + 1);

    return (
        <div className='flex flex-col h-full'>
            <div className='px-3.5 flex flex-col'>
                <div>
                    <h3 className='title'>Challenge name</h3>
                    <p>2025 / 01 / 01 ~</p>
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
                    Add Today's Sticker
                </Button>
            </div>
        </div>
    );
};

export default GoalDetailPage;
