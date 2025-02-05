import { HOME } from '@/constant/pathname';
import dayjs from 'dayjs';
import Link from 'next/link';
const Header = () => {
    const now = dayjs();
    return (
        <header className='text-black text-2xl font-bold px-3 py-4 flex justify-between items-center'>
            <Link href={HOME}>Moharu</Link>
            <span className='text-lg font-normal'>
                {now.format('MM/DD')} {now.format('ddd')}
            </span>
        </header>
    );
};

export default Header;
