import React from 'react'
import SectionTitle from '../partials/SectionTitle'
import CategoryCard from '../partials/CategoryCard'
import { ICategory } from '@/config/type'

type Props = {
    categories: ICategory[];
}

const FeaturedCategories = ({ categories }: Props) => {

    // filtering data
    const featuredCategories = categories.filter((item: ICategory) => item.isFeatured === true);

    return (
        <div className='my-[50px]'>
            <SectionTitle title='Featured Caregories' />

            <div className="container mt-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

                    {featuredCategories.slice(0, 6).map((item: ICategory, index: number) => <CategoryCard
                        key={item._id}
                        data={item}
                        index={index}
                    />)}

                </div>
            </div>

        </div>
    )
}

export default FeaturedCategories