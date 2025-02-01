'use client';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import Image from 'next/image';

/*
 
 
 */
const StickerDrawer = ({ images }: { images: string[] }) => {
    return (
        <Drawer>
            <DrawerTrigger>
                <Button size={'lg'} className='mx-auto'>
                    Add Today&apos;s Sticker
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='max-h-[80vh]'>
                    <DrawerHeader>
                        <DrawerTitle>Choose one Sticker</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>

                    <div className='rounded-md max-w-md mx-auto p-4 max-h-[50vh] overflow-y-auto scrollbar-hide'>
                        <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
                            {images.map((image) => (
                                <div
                                    key={image}
                                    className='bg-white rounded-full relative aspect-square flex justify-center items-center'
                                >
                                    <Image
                                        src={image}
                                        alt='dog-sticker'
                                        fill
                                        className='cursor-pointer object-contain scale-90'
                                        sizes='(max-width: 640px) 25vw, (max-width: 1024px) 33vw, 25vw'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <DrawerFooter>
                        <Button size={'lg'}>Submit</Button>
                        <DrawerClose>
                            <Button size={'lg'} variant={'outline'} className='w-full'>
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default StickerDrawer;
