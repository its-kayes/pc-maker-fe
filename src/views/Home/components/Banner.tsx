import Image from 'next/image'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div>
            <Image
                src='/banner.webp'
                width={100}
                height={80}
                alt='ok'
                className='!h-[80%]'
                layout='responsive'
            />
        </div>
    )
}

export default Banner