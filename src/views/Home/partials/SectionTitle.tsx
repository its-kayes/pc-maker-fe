import React from 'react'

type Props = {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <div className='f-center'>
            <h2 className='lg:text-[32px] text-[28px] font-semibold text-primary border-b border-primary border-dashed'>{title}</h2>
        </div>
    )
}

export default SectionTitle