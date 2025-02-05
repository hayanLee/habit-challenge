import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
const MyPage = () => {
    return (
        <div className='px-3.5'>
            <div className='flex flex-col items-center'>
                <Avatar className='w-16 h-16'>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3>닉네임</h3>
                <p>한줄 설명</p>
                <Button>프로필수정</Button>
            </div>

            <div className='grid grid-cols-3'>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-bold'>10</p>
                    <p className='text-lg'>Total</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-bold'>10</p>
                    <p className='text-lg'>Finished</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-bold'>10</p>
                    <p className='text-lg'>Ongoing</p>
                </div>
            </div>

            <div className='border rounded-md'>
                <p>테마 설정</p>
            </div>
        </div>
    );
};

export default MyPage;
