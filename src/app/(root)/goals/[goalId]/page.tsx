import getImageArray from '@/utils/getImageArray';
import path from 'path';
import StickerDrawer from './_components/StickerDrawer';

type GoalDetailProps = {
    params: { goalId: string };
    searchParams: { [key: string]: string | undefined };
};

const GoalDetailPage = async ({ params }: GoalDetailProps) => {
    const { goalId } = params;

    const data = await fetch(`http://localhost:8000/challenges/${goalId}`);
    const res = await data.json();
    const { challengeName, startDay, endDay, period } = res;

    // 스티커 경로
    const directoryPath = path.join(process.cwd(), 'public/assets/stickers', `${'rabbit'}`);
    // 모든 스티커를 담은 배열로 가져오기
    const images = getImageArray(directoryPath, 'dog');

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
                        {Array.from({ length: period }, (_, idx) => idx + 1).map((day) => (
                            <div className='day' key={day}>
                                {day}
                            </div>
                        ))}
                    </div>
                </div>

                <StickerDrawer images={images} />
            </div>
        </div>
    );
};

export default GoalDetailPage;
