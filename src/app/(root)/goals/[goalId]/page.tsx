import getImageArray from '@/utils/getImageArray';
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
    const res = await data.json();
    const { challengeName, startDay, endDay, period, progress } = res;

    const periodArr = Array.from({ length: period }, (_, idx) => {
        const progressItem = progress[idx];

        return progressItem ? (
            <div className='day !bg-white relative border-point border-2 overflow-hidden' key={progressItem.date}>
                <Image src={progressItem.sticker} alt='' fill className='object-contain' />
            </div>
        ) : (
            <div key={idx} className='day'>
                {idx + 1} {/* 1일부터 시작하도록 수정 */}
            </div>
        );
    });

    return (
        <div className='flex flex-col h-full'>
            <div className='px-3.5 flex flex-col'>
                <div>
                    <h3 className='title'>{challengeName}</h3>
                    <p>
                        {startDay} ~ {endDay}
                    </p>
                </div>

                <div className='mx-5 mt-7 mb-24'>
                    <div className='grid grid-cols-5 gap-3.5'>
                        {/*
                         * 완료된 날에는 스티커
                         * 미완료된 날에는 날짜
                         */}
                        {periodArr}
                    </div>
                </div>

                <StickerDrawer images={images} goalId={goalId} />
            </div>
        </div>
    );
};

export default GoalDetailPage;
