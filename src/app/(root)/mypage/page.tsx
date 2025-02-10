import VerticalProfile from '@/components/Profile/VerticalProfile';
import { Button } from '@/components/ui/button';
const MyPage = () => {
    return (
        <div className='flex flex-col h-full gap-4 py-4'>
            <VerticalProfile />
            <Button>프로필수정</Button>

            <div className='grid grid-cols-3'>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-bold'>10</p>
                    <p className='text-lg'>Ongoing</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-bold'>10</p>
                    <p className='text-lg'>Total</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-bold'>10</p>
                    <p className='text-lg'>Finished</p>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
