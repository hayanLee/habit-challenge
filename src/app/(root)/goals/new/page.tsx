import LeftArrow from '@/assets/icons/arrow-icon.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HOME } from '@/constant/pathname';
import Link from 'next/link';

const CreateGoalPage = () => {
    return (
        <div className='flex flex-col h-full px-3.5'>
            <Link href={HOME}>
                <LeftArrow />
            </Link>
            <div className='flex flex-col grow gap-6'>
                <div>
                    <h3 className='title'>Quick Selection</h3>
                    <div className='grid grid-cols-2 gap-2'>
                        <Button className='p-3 border justify-start' size={'full'} variant={'outline'}>
                            <span className='border rounded-full p-2 bg-gray-200 w-10 h-10 text-center'>🕒</span>
                            <p className='text-base'>
                                <span className='font-semibold'>3 </span>일
                            </p>
                        </Button>
                        <Button className='p-3 border justify-start' size={'full'} variant={'outline'}>
                            <span className='border rounded-full p-2 bg-gray-200 w-10 h-10 text-center'>🗓️</span>
                            <p className='text-base'>
                                <span className='font-semibold'>7 </span>일
                            </p>
                        </Button>
                        <Button className='p-3 border justify-start' size={'full'} variant={'outline'}>
                            <span className='border rounded-full p-2 bg-gray-200 w-10 h-10 text-center'>📆</span>
                            <p className='text-base'>
                                <span className='font-semibold'>14 </span>일
                            </p>
                        </Button>
                        <Button className='p-3 border justify-start' size={'full'} variant={'outline'}>
                            <span className='border rounded-full p-2 bg-gray-200 w-10 h-10 text-center'>📅</span>
                            <p className='text-base'>
                                <span className='font-semibold'>30 </span>일
                            </p>
                        </Button>
                    </div>
                </div>

                <form className='flex flex-col'>
                    <h3 className='title'>New Challenge name</h3>
                    <Input type='text' placeholder='이름을 입력하세요' />
                    <Button size={'lg'} className='text-base mt-5 p-3 mx-auto'>
                        Add New Habit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateGoalPage;
