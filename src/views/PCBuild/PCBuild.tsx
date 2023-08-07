import { ICategory } from '@/config/type'
import React from 'react'
import SectionTitle from '../Home/partials/SectionTitle';
import CatItemCard from './components/CatItemCard';
import Button from '@/components/Button/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '@/hooks/helpers';
import { clearPCBuild } from '@/redux/features/pcBuild/pcBuildSlice';
import { bdtSymbol } from '@/config/constants';

interface Props {
    categories: ICategory[];
}

const PCBuild = ({ categories }: Props) => {

    // global
    const dispatch = useAppDispatch();
    const buildItems = useAppSelector((state) => state.pcBuild);

    // handler
    const handleCompleteBuild = () => dispatch(clearPCBuild());

    return (
        <div>
            <div className='my-[50px]'>
                <SectionTitle title='Choose Your PC Parts' />

                <div className="container mt-9">

                    <div className='flex flex-col md:flex-row md:gap-5 justify-between items-center'>
                        <p className='text-error text-[18px] font-medium mb-2 md:mb-0'>
                            This button will be disabled unless the user adds at least 5-6 of the mentioned components
                        </p>

                        <Button
                            text={<div className='flex items-center gap-2'>Complete Build <AiOutlineArrowRight className='relative top-[1px]' /></div>}
                            disabled={buildItems.length < 6}
                            type='button'
                            onClick={handleCompleteBuild}
                            classes=''
                        />
                    </div>

                    <div className='flex items-center justify-between mt-6 md:mt-4'>
                        <p className='font-semibold'>Total items selected: <span className='text-primary-300 font-bold'>{buildItems.length}</span></p>
                        <p className='font-semibold'>Total: <span className='text-primary-300 font-bold'>
                            <span> {bdtSymbol}</span>
                            {buildItems.reduce((acc, item) => acc + item.price, 0)}</span></p>
                    </div>

                    <div className="flex flex-col gap-y-5 mt-9">
                        {categories.map((item: ICategory, index: number) => <CatItemCard
                            key={`catItemCard${index}`}
                            data={item}
                            buildItems={buildItems}
                        />)}
                    </div>

                </div>

            </div>
        </div >
    )
}

export default PCBuild