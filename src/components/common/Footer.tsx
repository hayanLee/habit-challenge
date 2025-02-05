import { GOALS_NEW, HOME, MILESTONE } from '@/constant/pathname';
import { CirclePlus, House, LibraryBig } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full py-4 bg-white'>
            <div className='flex justify-around items-center'>
                <Link href={GOALS_NEW}>
                    <CirclePlus size={30} strokeWidth={2} />
                </Link>
                <Link href={HOME}>
                    <House size={30} strokeWidth={2} />
                </Link>
                <Link href={MILESTONE}>
                    <LibraryBig size={30} strokeWidth={2} />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
