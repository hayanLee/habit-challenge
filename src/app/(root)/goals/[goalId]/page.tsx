import { Button } from '@/components/ui/button';

const GoalDetailPage = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='px-3.5 flex flex-col'>
                <div>
                    <h3 className='title'>Challenge name</h3>
                    <p>2025 / 01 / 01 ~</p>
                </div>

                <div className='mx-10 mt-7 mb-24'>
                    <div className='grid grid-cols-5 gap-3.5'>
                        <div className='day'> 1</div>
                        <div className='day'> 2</div>
                        <div className='day'> 3</div>
                        <div className='day'> 4</div>
                        <div className='day'> 5</div>
                        <div className='day'> 6</div>
                        <div className='day'> 7</div>
                        <div className='day'> 8</div>
                        <div className='day'> 9</div>
                        <div className='day'> 10</div>
                        <div className='day'> 11</div>
                        <div className='day'> 12</div>
                        <div className='day'> 13</div>
                        <div className='day'> 14</div>
                    </div>
                </div>

                <Button size={'lg'} className='mx-auto'>
                    Add Today's Sticker
                </Button>
            </div>
        </div>
    );
};

export default GoalDetailPage;
