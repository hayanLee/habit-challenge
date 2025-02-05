import { HOME } from '@/constant/pathname';
import Link from 'next/link';
const Header = () => {
    return (
        <header className='text-black text-2xl font-bold px-3 py-4'>
            <Link href={HOME}>Moharu</Link>
        </header>
    );
};

export default Header;
