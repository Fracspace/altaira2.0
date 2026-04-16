import React from 'react'
import Image from 'next/image'
import yurt from "../../../public/images/yurt/yurt.webp"

const YurtHero = () => {
    return (
        <div className='min-h-screen w-full'>
            <div className='relative'>
                <Image src={yurt} alt="Yurt" className='object-cover h-full w-full' />
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-cormorant text-white font-bold text-5xl'>Own a share in Altaira's Hilltop Yurts</h2>
                        <em className='font-inter text-white text-lg'>Choose from two exclusive yurt investment options offering premium stays and resort-backed returns.</em>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YurtHero