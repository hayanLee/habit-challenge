import TrashButton from '@/components/Button/TrashButton';
import getImageArray from '@/utils/getImageArray';
import dayjs from 'dayjs';
import Image from 'next/image';
import path from 'path';
import StickerDrawer from './_components/StickerDrawer';

type GoalDetailProps = {
    params: { goalId: string };
    searchParams: { [key: string]: string | undefined };
};

// 스티커 경로
const directoryPath = path.join(process.cwd(), 'public/assets/stickers', `${'dog'}`);
// 모든 스티커를 담은 배열로 가져오기
const images = getImageArray(directoryPath, 'dog');

const GoalDetailPage = async ({ params }: GoalDetailProps) => {
    const { goalId } = params;
    const data = await fetch(`http://localhost:8000/challenges/${goalId}`);
    if (!data.ok) return;
    const res = await data.json();

    const { challengeName, startDay, endDay, period, progress, isFinished } = res;

    const today = dayjs().format('YYYY/MM/DD');
    const todaySticker = progress[progress.length - 1]?.date === today;

    const periodArr = Array.from({ length: period }, (_, idx) => {
        const progressItem = progress[idx];

        return progressItem ? (
            <div className='day !bg-white relative border-point border-2' key={progressItem.date}>
                <Image src={progressItem.sticker} alt='' fill className='object-contain' />
            </div>
        ) : (
            <div key={idx} className='day'>
                {idx + 1}
            </div>
        );
    });

    return (
        <div className='flex flex-col gap-3 bg-blue h-full'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl font-semibold'>{challengeName}</h3>
                    <p className='text-gray-500'>
                        {startDay} ~ {isFinished && endDay}
                    </p>
                </div>
                <TrashButton goalId={goalId} />
            </div>

            <div className='overflow-y-auto p-3 '>
                <div className='grid grid-cols-5 gap-3.5'>{periodArr}</div>
            </div>

            {!isFinished && <StickerDrawer images={images} goalId={goalId} disabled={todaySticker} />}
        </div>
    );
};

export default GoalDetailPage;
