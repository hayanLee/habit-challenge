import Challenge from '@/components/Challenge/Challenge';
import Footer from '@/components/common/Footer';
import Profile from '@/components/Profile/Profile';

const MainPage = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='px-3.5 flex flex-col grow'>
                <Profile />

                <div>
                    <h3 className='text-xl font-semibold'>Daily Sticker Challenge</h3>
                    <div>
                        <Challenge />
                        <Challenge />
                        <Challenge />
                    </div>
                </div>

                <div className='border border-dashed my-5'></div>

                <div>
                    <h3 className='text-xl font-semibold'>Finished</h3>
                    <div>
                        <Challenge />
                        <Challenge />
                        <Challenge />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MainPage;
