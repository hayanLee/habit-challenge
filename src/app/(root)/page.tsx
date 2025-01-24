import Challenge from '@/components/Challenge/Challenge';
import Footer from '@/components/common/Footer';
import Profile from '@/components/Profile/Profile';
import { GOAL_DETAIL } from '@/constant/pathname';
import Link from 'next/link';

const MainPage = () => {
    const arr = Array(6)
        .fill(0)
        .map((_, i) => i + 1);

    return (
        <div className='flex flex-col h-full'>
            <div className='px-3.5'>
                <Profile />
            </div>
            <div className='px-3.5 flex flex-col grow overflow-y-auto scrollbar-hide'>
                <div>
                    <h3 className='title'>Daily Sticker Challenge</h3>
                    <div>
                        {arr.map((value) => (
                            <Link href={GOAL_DETAIL(value)} key={value}>
                                <Challenge id={value} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='border border-dashed mt-3'></div>

                <div>
                    <h3 className='title'>Finished</h3>
                    <div>
                        {arr.map((value) => (
                            <Link href={GOAL_DETAIL(value)} key={`finished-${value}`}>
                                <Challenge id={value} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MainPage;
