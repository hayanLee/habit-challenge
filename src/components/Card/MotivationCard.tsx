'use client';
import { useEffect, useState } from 'react';

const habitQuotes = [
    {
        quote: '우리는 반복적으로 하는 것이 바로 우리 자신이다. 따라서 탁월함은 행동이 아니라 습관이다.',
        author: '아리스토텔레스',
    },
    {
        quote: '성공은 하루아침에 이루어지지 않는다. 매일 조금씩 반복되는 작은 습관들이 결국 큰 변화를 만든다.',
        author: '존 맥스웰',
    },
    {
        quote: '당신의 미래는 오늘 당신이 반복하는 습관에 의해 결정된다.',
        author: '브라이언 트레이시',
    },
    {
        quote: '작은 습관의 힘을 과소평가하지 마라. 그것들이 쌓여서 인생을 바꾼다.',
        author: '제임스 클리어',
    },
    {
        quote: '좋은 습관을 만들지 않으면 나쁜 습관이 당신을 지배할 것이다.',
        author: '로빈 샤르마',
    },
    {
        quote: '성공한 사람과 실패한 사람의 차이는 하루하루 작은 습관에서 나온다.',
        author: '스티븐 코비',
    },
    {
        quote: '자신이 원하는 사람이 되고 싶다면, 그에 맞는 습관을 가져라.',
        author: '찰스 두히그',
    },
    {
        quote: '오늘의 행동이 내일의 습관이 된다.',
        author: '마하트마 간디',
    },
    {
        quote: '노력하지 않는 자는 아무것도 얻지 못한다. 작은 습관도 노력이 없으면 만들어지지 않는다.',
        author: '벤자민 프랭클린',
    },
    {
        quote: '당신이 가진 습관이 결국 당신을 만든다. 좋은 습관을 선택하라.',
        author: '오그 만디노',
    },
];

const getRandomQuote = (prevQuote: { quote: string; author: string }) => {
    let newQuote;
    do {
        newQuote = habitQuotes[Math.floor(Math.random() * habitQuotes.length)];
    } while (newQuote.quote === prevQuote.quote);

    return newQuote;
};

const MotivationCard = () => {
    const [randomQuote, setRandomQuote] = useState(habitQuotes[0]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setRandomQuote((prev) => getRandomQuote(prev));
        }, 3000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className='flex flex-col items-center text-sm text-gray-500 my-4'>
            <p className='text-center'>{randomQuote.quote}</p>
            <p>- {randomQuote.author}</p>
        </div>
    );
};

export default MotivationCard;
