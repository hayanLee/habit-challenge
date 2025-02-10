import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const VerticalProfile = () => {
    return (
        <div className='flex flex-col items-center'>
            <Avatar className='w-16 h-16'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col items-center'>
                <p className='text-lg'>username</p>
                <p className='text-gray-500'>랜덤 명언</p>
            </div>
        </div>
    );
};

export default VerticalProfile;
