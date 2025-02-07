'use server';

import dayjs from 'dayjs';
import { revalidatePath } from 'next/cache';

export async function submitSticker(sticker: string, goalId: string) {
    // 서버에서 sticker 처리하기 (예: DB에 저장)
    try {
        const now = dayjs();

        // 해당 아이디 데이터 가져오기
        const getRes = await fetch(`http://localhost:8000/challenges/${goalId}`);
        if (!getRes.ok) throw new Error(`fail to get : ${getRes.statusText}`);

        const challenge = await getRes.json();

        // 새로운 progress 배열
        const updatedProgress = [...challenge.progress, { date: now.format('YYYY/MM/DD'), sticker }];
        const isLastProcess = updatedProgress.length === challenge.period;

        // 업데이트 하기
        const patchRes = await fetch(`http://localhost:8000/challenges/${goalId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                progress: updatedProgress,
                isFinished: isLastProcess,
                endDay: now.format('YYYY/MM/DD'),
            }),
        });
        if (!patchRes.ok) throw new Error(`Failed to update: ${patchRes.statusText}`);
        revalidatePath(`http://localhost:8000/challenges/${goalId}`);
        console.log('업데이트 성공:');
    } catch (e) {
        console.error('업데이트 실패:', e);
    }
}

export async function deleteSticker(goalId: string) {
    try {
        const getRes = await fetch(`http://localhost:8000/challenges/${goalId}`);
        if (!getRes.ok) throw new Error(`fail to get : ${getRes.statusText}`);

        const delteRes = await fetch(`http://localhost:8000/challenges/${goalId}`, {
            method: 'DELETE',
        });

        if (!delteRes.ok) throw new Error(`Failed to delete: ${delteRes.statusText}`);
        revalidatePath(`http://localhost:8000/challenges`);
        console.log('삭제 성공');
    } catch (e) {
        console.error('삭제 실패:', e);
    }
}
