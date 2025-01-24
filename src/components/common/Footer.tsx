const Footer = () => {
    return (
        <div className='w-full shadow-md flex justify-around bg-background drop-shadow-2xl'>
            <div className='flex flex-col items-center p-1.5'>
                <p className='text-lg'>➕</p>
                <p>Add</p>
            </div>
            <div className='flex flex-col items-center p-1.5'>
                <p className='text-lg'>👻</p>
                <p>Stickers</p>
            </div>
        </div>
    );
};

export default Footer;
