"use client"
import Image from 'next/image'
import timelineImg11 from "../../../public/images/timeline/timelineImg11.webp"
import timelineImg22 from "../../../public/images/timeline/timelineImg22.webp"
import timelineImg33 from "../../../public/images/timeline/timelineImg33.webp"
import timelineImg44 from "../../../public/images/timeline/timelineImg44.webp"

const Timeline = () => {
    return (
        <div className='p-10'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h2 className='font-inter text-[#AD9273]'>DEVELOPMENT JOURNEY</h2>
                <p className='font-cormorant font-bold text-2xl md:text-4xl'>Crafting a Destination in the Clouds</p>
                <p className='font-inter text-gray-500 max-w-4xl font-normal'>
                    Milestones in creating a destination above the clouds, shaped with intention and built to offer a life where nature and comfort exist in perfect balance. From concept to completion, Altaira is being built with care, precision, and a vision to redefine mountain living.
                </p>
            </div>
            <div>
                <div>
                    <h2 className='text-xl md:text-2xl mb-2 font-montserrat text-white text-center'>Crafting a Destination in the Clouds</h2>
                    <p className='text-lg md:text-xl font-poppins text-white text-center'>From concept to completion, Altaira is being built with care, precision, and a vision to redefine mountain living.</p>
                </div>
                <ul className="relative max-w-6xl mx-auto">
                    <span className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-300 -translate-x-1/2"></span>
                    {/* <li className="relative grid grid-cols-1 md:grid-cols-2 gap-20 pb-16">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-xl font-montserrat md:text-2xl font-semibold text-[#C6A667]">Project Launch</h4>
                            <p className="text-lg font-poppins md:text-xl text-white">
                                Feb 14 2026, Altaira is unveiled to the world, opening villa reservations and investment participation.
                            </p>  
                        </div>
                        <div className="relative">
                            <div className="w-full h-full overflow-hidden rounded-full">
                                <Image
                                    src={timelineImg11}
                                    alt="timeline 1"
                                    // fill
                                    className="object-cover md:h-[30vh]"
                                />
                            </div>
                        </div>
                        <span className="absolute left-1/2 top-0 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                    </li> */}
                    <li className="relative grid-cols-1 md:grid grid-cols-2 gap-20 pb-16">
                        <div className="relative">
                            <div className="w-full h-full overflow-hidden rounded-full">
                                <Image
                                    src={timelineImg11}
                                    alt="timeline 1"
                                    // fill
                                    className="object-contain md:h-[30vh]"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col p-5 rounded-md border border-[#AD9273] p-5 gap-3'>
                            <p className='font-inter rounded-full bg-[#C6A66799] w-fit px-2 py-1 text-white'>Q1 2026</p>
                            <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Land Acquisition Complete</h4>
                            <p className="text-gray-500 font-inter">
                                26 acres secured in the pristine hilltops of Bulathkohupitiya.
                            </p>
                        </div>
                        <span className="absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                    </li>

                    <li className="relative grid grid-cols-1 md:grid-cols-2 gap-20 pb-16">
                        <div className="flex flex-col p-5 rounded-md border border-[#AD9273] gap-3">
                            <p className='font-inter rounded-full bg-[#C6A66799] w-fit px-2 py-1 text-white'>Q2 2026</p>
                            <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Project Launch</h4>
                            <p className="text-gray-500 font-inter">
                                Feb 14 2026, Altaira is unveiled to the world, opening investment participation.
                            </p>
                        </div>
                        <div className="group relative">
                            <div className="w-full h-full overflow-hidden rounded-full">
                                <Image
                                    src={timelineImg22}
                                    alt="timeline 2"
                                    // fill
                                    className="object-contain md:h-[30vh]"
                                />
                            </div>
                        </div>
                        <span className="absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                    </li>

                    <li className="relative grid-cols-1 md:grid grid-cols-2 gap-20">
                        <div className="relative">
                            <div className="w-full h-full overflow-hidden rounded-full">
                                <Image
                                    src={timelineImg33}
                                    alt="timeline 3"
                                    // fill
                                    className="object-contain md:h-[30vh]"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col rounded-md border border-[#AD9273] p-5 gap-3'>
                            <p className='font-inter rounded-full bg-[#C6A66799] w-fit px-2 py-1 text-white'>Q3 2027</p>
                            <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Resort Opening</h4>
                            <p className="text-gray-500 font-inter">
                                The mountain resort is completed, offering guests immersive stays above the clouds.
                            </p>
                        </div>
                        <span className="absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                    </li>
                    <li className="relative grid grid-cols-1 mt-10 md:grid-cols-2 gap-20 pb-16">
                        <div className="flex flex-col rounded-md border border-[#AD9273] p-5 gap-3">
                            <p className='font-inter rounded-full bg-[#C6A66799] w-fit px-2 py-1 text-white'>Q4 2028</p>
                            <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Villas Handover</h4>
                            <p className="font-normal text-gray-500 font-inter">
                                Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                            </p>
                        </div>
                        <div className="group relative">
                            <div className="w-full h-full overflow-hidden rounded-full">
                                <Image
                                    src={timelineImg44}
                                    alt="timeline 4"
                                    // fill
                                    className="object-contain md:h-[30vh]"
                                />
                            </div>
                        </div>
                        <span className="absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Timeline