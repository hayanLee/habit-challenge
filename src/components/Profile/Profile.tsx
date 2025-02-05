import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MYPAGE } from '@/constant/pathname';
import { ContactRound } from 'lucide-react';
import Link from 'next/link';

const Profile = () => {
    return (
        <div className='flex items-center gap-3 py-5'>
            <Avatar className='w-16 h-16'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className='grow'>
                <p className='text-lg'>username</p>
                <p className='text-gray-500'>랜덤 명언</p>
            </div>

            <Link href={MYPAGE} className='p-4'>
                <ContactRound size={30} />
            </Link>
        </div>
    );
};

export default Profile;
