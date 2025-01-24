import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
    return (
        <div className='flex items-center gap-3 py-5'>
            <Avatar className='w-16 h-16'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
                <p className='text-lg'>user name</p>
                <p className='text-gray-500'>다짐 한줄</p>
            </div>
        </div>
    );
};

export default Profile;
