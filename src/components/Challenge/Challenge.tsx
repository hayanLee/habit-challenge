const Challenge = ({ id }: { id: number }) => {
    return (
        <div className='flex gap-3 py-2'>
            <div className='w-20 h-20 bg-gray-400'></div>
            <div className='gap-2'>
                <h4 className='text-lg font-semibold'>challenge name</h4>
                <p className='bg-gray-200 rounded w-fit px-1.5'>2025 / 01 / 03 ~</p>
                <div className='flex'>
                    <p>Today :</p>
                    <p>😃</p>
                </div>
            </div>
        </div>
    );
};

export default Challenge;
