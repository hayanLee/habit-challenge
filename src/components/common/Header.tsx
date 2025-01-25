import MypageIcon from '@/assets/icons/mypage-icon.svg';
import { HOME, MYPAGE } from '@/constant/pathname';
import Link from 'next/link';
const Header = () => {
    return (
        <header className='text-point shadow-md text-xl font-bold px-3 py-4 flex justify-between'>
            <Link href={HOME} className='hover:text-orange-400'>
                Habit Challenge
            </Link>
            <Link href={MYPAGE}>
                <MypageIcon className='stroke-point hover:stroke-orange-400' />
            </Link>
        </header>
    );
};

export default Header;
