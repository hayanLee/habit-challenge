'use client';
import LeftArrow from '@/assets/icons/arrow-icon.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HOME } from '@/constant/pathname';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';

const PERIODS = [
    { period: 3, icon: '🕒' },
    { period: 7, icon: '📆' },
    { period: 14, icon: '📅' },
    { period: 30, icon: '🗓️' },
];

const CreateGoalPage = () => {
    const [period, setPeriod] = useState<number | null>(null);
    const [alertMsg, setAlertMsg] = useState<boolean>(false);

    const handlePeriodClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPeriod(Number(e.currentTarget.value));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!period) {
            setAlertMsg(true);
            return;
        }
        const formData = new FormData(e.currentTarget);

        fetch('http://localhost:8000/challenges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                period,
                challengeName: formData.get('challengeName'),
                isFinished: false,
            }),
        })
            .then((res) => console.log(res))
            .catch((err: Error) => console.log(err));
    };

    return (
        <div className='flex flex-col h-full px-3.5'>
            <Link href={HOME}>
                <LeftArrow />
            </Link>
            <div className='flex flex-col grow gap-5'>
                <div>
                    <h3 className='title'>Quick Selection</h3>
                    <div className='grid grid-cols-2 gap-2'>
                        {PERIODS.map((value) => (
                            <Button
                                key={value.period}
                                className={cn('p-3 border justify-start', period === value.period && 'bg-point')}
                                size={'full'}
                                variant={'outline'}
                                value={value.period}
                                onClick={handlePeriodClick}
                            >
                                <span className='border rounded-full p-2 bg-gray-200 w-10 h-10 text-center'>
                                    {value.icon}
                                </span>
                                <p className='text-base'>
                                    <span className='font-semibold'>{value.period}</span>일
                                </p>
                            </Button>
                        ))}
                    </div>
                    <span className={cn('text-point font-medium invisible', alertMsg && 'visible')}>
                        기간을 선택해주세요!
                    </span>
                </div>

                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <h3 className='title'>New Challenge name</h3>
                    <Input type='text' defaultValue='' placeholder='이름을 입력하세요' name='challengeName' required />
                    <Button type='submit' size={'lg'} className='text-base mt-5 p-3 mx-auto'>
                        Add New Habit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateGoalPage;
