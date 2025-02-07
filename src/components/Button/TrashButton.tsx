'use client';

import { deleteSticker } from '@/app/actions';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { HOME } from '@/constant/pathname';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TrashButton = ({ goalId }: { goalId: string }) => {
    const router = useRouter();
    const handleClick = async (goalId: string) => {
        try {
            await deleteSticker(goalId);
            router.replace(HOME);
        } catch (e) {
            console.log('삭제 실패', e);
        }
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Trash2 className='cursor-pointer' />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely Delete?</AlertDialogTitle>
                    <AlertDialogDescription className='text-base'>
                        이 항목을 <span className='text-destructive font-semibold'>삭제</span>하시겠습니까? <br />{' '}
                        삭제된 데이터는 복구할 수 없습니다.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleClick(goalId)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default TrashButton;
