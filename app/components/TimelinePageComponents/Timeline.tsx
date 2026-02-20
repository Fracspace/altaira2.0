"use client"
import { useEffect, useState, useRef } from 'react'
import { Check, ArrowUp } from 'lucide-react';
import Image from 'next/image'
import ModalMonth from "../ModalMonth/ModalMonth";

const Timeline = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
    const currentYear = new Date().getFullYear().toString();
    const [selectedYear, setSelectedYear] = useState<string | null>(currentYear);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const timelineRef = useRef<HTMLDivElement>(null);
    const monthsRef = useRef<Record<string, HTMLLIElement | null>>({});

    const showModal = (month: string) => {
        setSelectedMonth(month);
        setIsOpen(true)
    }

    const closeModal = () => {
        // setIsOpen(false);
        setSelectedYear(null);
        setSelectedMonth(null);
    }

    const scrollToMonth = (month: string) => {
        setSelectedYear(selectedYear);
        const key = `${selectedYear}-${month}`;
        setTimeout(() => {
            monthsRef.current[key]?.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 200)
    }

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = () => {
        timelineRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    const monthsByYear: Record<string, string[]> = {
        "2025": [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ],

        "2026": [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ],

        // "2027": [
        //     "January", "February", "March", "April",
        //     "May", "June", "July", "August",
        //     "September", "October", "November", "December"
        // ],

        // "2028": [
        //     "January", "February", "March", "April",
        //     "May", "June", "July", "August",
        //     "September", "October", "November", "December"
        // ],
    }
    return (
        <div className='py-10 ml-10 mr-10'>
            <div className='max-w-7xl mx-auto'>
                <div ref={timelineRef} className='flex flex-col items-center max-w-5xl mx-auto text-center justify-center gap-5'>
                    <h2 className='font-inter text-[#AD9273] text-lg xl:text-xl'>DEVELOPMENT JOURNEY</h2>
                    <p className='font-cormorant text-3xl md:text-4xl xl:text-5xl'>Crafting a Destination in the Clouds</p>
                    <p className='font-inter text-lg text-gray-500 dark:text-white max-w-4xl xl:text-xl'>
                        Milestones in creating a destination above the clouds, shaped with intention and built to offer a life where nature and comfort exist in perfect balance. From concept to completion, Altaira is being built with care, precision, and a vision to redefine mountain living.
                    </p>
                </div>
                {/* <div className='flex flex-row items-center justify-center py-10 gap-10 md:gap-20'> */}
                {/* <div
                        onClick={() => setSelectedYear('2025')}
                        className={`text-[#21282c80] font-cormorant text-3xl md:text-4xl xl:text-5xl cursor-pointer font-bold transition-transform hover:scale-105 duration-300 ${selectedYear === '2025' ? 'text-[#AD9273] underline' : ''}`}
                            className={`relative w-full h-[30vh] md:w-[10vw] md:h-[10vw]
                      rounded-md cursor-pointer
                      transition-transform duration-300 hover:scale-105
                      box-border
                      ${selectedYear === '2025'
                                    ? 'border-2 border-white'
                                    : 'border-2 border-transparent'}`}
                    >
                        <Image
                            src="../images/timeline/timelineImg1.webp"
                            alt="timeline img1"
                            fill
                            className="object-cover rounded-md"
                        />
                        2025
                    </div> */}
                {/* <div
                        onClick={() => setSelectedYear('2025')}
                        className={`text-[#21282c80] font-cormorant text-3xl md:text-4xl xl:text-5xl cursor-pointer font-bold transition-transform hover:scale-105 duration-300 ${selectedYear === '2025' ? 'text-[#AD9273] underline' : 'dark:text-white'}`}
                    >
                        2025
                    </div>
                    <div
                        onClick={() => setSelectedYear('2026')}
                        className={`text-[#21282c80] font-cormorant text-3xl md:text-4xl xl:text-5xl cursor-pointer font-bold transition-transform hover:scale-105 duration-300 ${selectedYear === '2026' ? 'text-[#AD9273] underline' : 'dark:text-white'}`}
                    >
                        2026
                    </div>
                    <div
                        onClick={() => setSelectedYear('2027')}
                        className={`text-[#21282c80] font-cormorant text-3xl md:text-4xl xl:text-5xl cursor-pointer font-bold transition-transform hover:scale-105 duration-300 ${selectedYear === '2027' ? 'text-[#AD9273] underline' : 'dark:text-white'}`}
                    >
                        2027
                    </div> */}
                {/* <div
                        onClick={() => setSelectedYear('2028')}
                        className={`text-[#21282c80] font-cormorant text-3xl md:text-4xl xl:text-5xl cursor-pointer font-bold transition-transform hover:scale-105 duration-300 ${selectedYear === '2028' ? 'text-[#AD9273] underline' : 'dark:text-white'}`}
                    > */}
                {/* <Image
                            src="../images/timeline/timelineImg4.webp"
                            alt="timeline img4"
                            fill
                            className="object-cover rounded-md"
                        /> */}
                {/* 2028
                    </div> */}
                {/* </div> */}
                {/* {selectedYear && (
                    <div className='flex items-center justify-center'>
                        <div className="relative bg-[#AD9273]/30 p-5 rounded-md w-full max-w-3xl max-h-[80vh] overflow-y-auto"> */}
                {/* <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-white text-2xl hover:text-[#C6A667] transition"
                                aria-label="Close"
                            >
                                ✕
                            </button> */}
                {/* <button aria-label="Close" onClick={closeModal} className="absolute top-3 right-3 p-2 text-gray-500 rounded-full hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-in-out">
                                <svg xmlns="http://www.w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button> */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
                                {monthsByYear[selectedYear]?.map((month) => {
                                    const isCurrentMonthAndYear = month === new Date().toLocaleString('default', { month: 'long' }) && selectedYear === new Date().getFullYear().toString();
                                    return (
                                        <button
                                            key={month}
                                            className={`text-xl cursor-pointer
              hover:text-[#C6A667] ${isCurrentMonthAndYear ? "text-[#21282C] dark:text-white" : "text-[#21282C]/45 dark:text-white/50"}
              transition-transform hover:scale-105 duration-300
              font-inter py-2 rounded-md`}
                                            onClick={() => scrollToMonth(month)}
                                        >
                                            {month}
                                        </button>
                                    );
                                })}
                            </div> */}
                {/* </div>
                    </div>
                )} */}
                {showScrollButton && (
                    <button
                        onClick={scrollToSection}
                        className="fixed bottom-6 right-6 z-30
      bg-[#244936] text-white p-3 rounded-full
      shadow-lg hover:bg-[#C6A667]
      transition-all duration-300 cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp />
                    </button>
                )}
                <div>
                    <ul className="relative mt-10 max-w-6xl mx-auto">
                        {/* <span className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-[#C6A66799] -translate-x-1/2"></span> */}
                        <span className=" absolute left-[-20] md:left-1/2 top-0 h-full w-[1px] bg-[#C6A66799] -translate-x-1/2"></span>
                        <li ref={(el) => { monthsRef.current["2026-January"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 gap-20 pb-5 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg11.webp"
                                        alt="timeline 1"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timeline1DarkModeImg.webp"
                                        alt="timeline 1"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col p-5 rounded-md border border-[#AD9273]/60 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] w-fit px-2 py-1 xl:text-xl text-white'>Oct 2025</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Land Acquisition Complete</h4>
                                <p className="text-gray-500 dark:text-white xl:text-lg font-inter">
                                    The hilltop site for Altaira was officially acquired, marking the foundation of the project. This secured the location, views, and long-term vision for the destination.
                                </p>
                                {/* <button onClick={() => showModal("Jan")} className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] w-fit cursor-pointer border border-[#AD9273]/60 hover:border-none'>Read More</button> */}
                            </div>
                            <span className="flex items-center justify-center absolute left-[-20] md:left-1/2 top-2 h-4 w-4 bg-[#C6A66799] rounded-full -translate-x-1/2 z-10">
                                <Check size={15} className="text-white" />
                            </span>
                        </li>
                        {isOpen && selectedMonth === "Jan" && <ModalMonth title={selectedMonth!} onClose={closeModal} />}
                        <li ref={(el) => { monthsRef.current["2026-February"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col p-5 rounded-md border border-[#AD9273]/60 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Nov 2025</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Architects Engaged</h4>
                                <p className="text-gray-500 dark:text-white font-inter text-lg">
                                    Inside Project was onboarded as the lead architectural partner to shape Altaira’s masterplan, ensuring a design approach rooted in the landscape and long-term usability.
                                </p>
                                {/* <button onClick={() => showModal("February")} className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button> */}
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg22.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timelineImg22DarkMode.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="flex items-center justify-center absolute left-[-20] md:left-1/2 top-2 h-4 w-4 bg-[#C6A66799] rounded-full -translate-x-1/2 z-10"><Check size={15} className='text-white'/></span>
                        </li>
                        {isOpen && selectedMonth === "February" && <ModalMonth title={selectedMonth!} onClose={closeModal} />}
                        <li ref={(el) => { monthsRef.current["2026-March"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 gap-20 pb-5 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timeline33DarkModeImg.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Dec 2025</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Regulatory applications submitted</h4>
                                <p className="text-gray-500 dark:text-white xl:text-lg font-inter">
                                    Applications were submitted to SLTDA and BOI, initiating the formal approval process required for tourism and investment development in Sri Lanka.
                                </p>
                                {/* <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button> */}
                            </div>
                            <span className="flex items-center justify-center absolute left-[-20] md:left-1/2 top-2 h-4 w-4 bg-[#C6A66799] rounded-full -translate-x-1/2 z-10">
                            <Check size={15} className='text-white'/>
                            </span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2026-April"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Jan 2026</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">SLTDA Site visit conducted</h4>
                                <p className="font-normal xl:text-lg text-gray-500 dark:text-white font-inter">
                                    The SLTDA team conducted an on-site visit to assess the land, access, and development plans - a key step toward regulatory clearance.
                                </p>
                                {/* <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button> */}
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timeline44DarkModeImg.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="flex items-center justify-center absolute left-[-20] md:left-1/2 top-2 h-4 w-4 bg-[#C6A66799] rounded-full -translate-x-1/2 z-10"><Check size={15} className='text-white'/></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2026-May"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 gap-20 pb-5 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <div className="w-full h-full overflow-hidden rounded-full">
                                        <Image
                                            src="../images/timeline/timelineImg11.webp"
                                            alt="timeline 1"
                                            fill
                                            className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                        />
                                        <Image
                                            src="../images/timeline/timeline1DarkModeImg.webp"
                                            alt="timeline 1"
                                            fill
                                            className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Feb 2026</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Unveiling of Altaira</h4>
                                <p className="text-gray-500 dark:text-white xl:text-lg font-inter">
                                    Altaira is scheduled to be officially unveiled on 14 February 2026, when the vision, masterplan, and overall experience will be introduced to early partners, stakeholders, and prospective investors.
                                </p>
                                {/* <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button> */}
                            </div>
                            <span className="flex items-center justify-center absolute left-[-20] md:left-1/2 top-2 h-4 w-4 bg-[#C6A66799] rounded-full -translate-x-1/2 z-10"><Check size={15} className='text-white'/></span>
                        </li>
                         <li ref={(el) => { monthsRef.current["2026-June"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273] p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Feb 2026</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Preliminary Approval</h4>
                                <p className="xl:text-lg text-gray-500 dark:text-white font-inter">
                                    Altaira has successfully achieved preliminary approval, marking an important milestone.
                                </p>
                                {/* <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button> */}
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg22.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timelineImg22DarkMode.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="flex items-center justify-center absolute left-[-20] md:left-1/2 top-2 h-4 w-4 bg-[#C6A66799] rounded-full -translate-x-1/2 z-10"><Check size={15} className='text-white'/></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2026-June"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timeline33DarkModeImg.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col rounded-md border border-[#AD9273] p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Dec 2027</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Altaira Resort - Planned Completion: December 2027</h4>
                                <p className="xl:text-lg text-gray-500 dark:text-white font-inter">
                                    The core resort experience, including hospitality spaces, dining, wellness areas, and shared amenities, is targeted for completion by December 2027 - bringing the first phase of Altaira to life.
                                </p>
                                {/* <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button> */}
                            </div>
                            {/* <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg22.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timelineImg22DarkMode.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div> */}
                            <span className="absolute left-[-20] md:left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2026-July"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            {/* <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timeline33DarkModeImg.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div> */}
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Dec 2028</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Altaira Residences - Planned Completion: December 2028</h4>
                                <p className="text-gray-500 dark:text-white xl:text-lg font-inter">
                                    The private residences and villas are planned for completion by December 2028, following the resort launch, ensuring a well-paced and integrated development.
                                </p>
                                {/* <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button> */}
                            </div>
                              <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block dark:hidden md:h-[30vh]"
                                    />
                                    <Image
                                        src="../images/timeline/timeline44DarkModeImg.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block hidden dark:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className=" absolute left-[-20] md:left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        {/*<li ref={(el) => { monthsRef.current["2026-August"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Aug 2026</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Villas Handover</h4>
                                <p className="font-normal xl:text-lg text-gray-500 dark:text-white font-inter">
                                    Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2026-September"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Sep 2026</p>
                                <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Resort Opening</h4>
                                <p className="text-gray-500 dark:text-white xl:text-lg font-inter">
                                    The mountain resort is completed, offering guests immersive stays above the clouds.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2026-October"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Oct 2026</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Villas Handover</h4>
                                <p className="font-normal xl:text-lg text-gray-500 dark:text-white font-inter">
                                    Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2026-November"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Nov 2026</p>
                                <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Resort Opening</h4>
                                <p className="text-gray-500 dark:text-white xl:text-lg font-inter">
                                    The mountain resort is completed, offering guests immersive stays above the clouds.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2026-December"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Dec 2026</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Villas Handover</h4>
                                <p className="font-normal xl:text-lg text-gray-500 dark:text-white font-inter">
                                    Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li> */}
                    </ul>
                    {/* <ul className="relative mt-10 max-w-6xl mx-auto">
                        <span className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-300 -translate-x-1/2"></span>
                        <li ref={(el) => { monthsRef.current["2027-January"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 gap-20 pb-5 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg11.webp"
                                        alt="timeline 1"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col p-5 rounded-md border border-[#AD9273]/60 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] w-fit px-2 py-1 xl:text-xl text-white'>Jan 2027</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Land Acquisition Complete</h4>
                                <p className="text-gray-500 xl:text-lg font-inter">
                                    26 acres secured in the pristine hilltops of Bulathkohupitiya.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-February"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col p-5 rounded-md border border-[#AD9273]/60 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Feb 2027</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Project Launch</h4>
                                <p className="text-gray-500 font-inter text-lg">
                                    Feb 14 2027, Altaira is unveiled to the world, opening investment participation.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg22.webp"
                                        alt="timeline 2"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-March"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 gap-20 pb-5 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Mar 2027</p>
                                <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Resort Opening</h4>
                                <p className="text-gray-500 xl:text-lg font-inter">
                                    The mountain resort is completed, offering guests immersive stays above the clouds.
                                </p>
                                    <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                                </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-April"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Apr 2027</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Villas Handover</h4>
                                <p className="font-normal xl:text-lg text-gray-500 font-inter">
                                    Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-May"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 gap-20 pb-5 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>May 2027</p>
                                <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Resort Opening</h4>
                                <p className="text-gray-500 xl:text-lg font-inter">
                                    The mountain resort is completed, offering guests immersive stays above the clouds.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-June"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Jun 2027</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Villas Handover</h4>
                                <p className="font-normal xl:text-lg text-gray-500 font-inter">
                                    Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-July"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Jul 2027</p>
                                <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Resort Opening</h4>
                                <p className="text-gray-500 xl:text-lg font-inter">
                                    The mountain resort is completed, offering guests immersive stays above the clouds.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-August"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Aug 2027</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Villas Handover</h4>
                                <p className="font-normal xl:text-lg text-gray-500 font-inter">
                                    Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-September"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Sep 2027</p>
                                <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Resort Opening</h4>
                                <p className="text-gray-500 xl:text-lg font-inter">
                                    The mountain resort is completed, offering guests immersive stays above the clouds.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-October"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Oct 2027</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Villas Handover</h4>
                                <p className="font-normal xl:text-lg text-gray-500 font-inter">
                                    Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-November"] = el }} className="relative grid-cols-1 md:grid grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg33.webp"
                                        alt="timeline 3"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3'>
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Nov 2027</p>
                                <h4 className="text-xl md:text-2xl font-cormorant font-semibold">Resort Opening</h4>
                                <p className="text-gray-500 xl:text-lg font-inter">
                                    The mountain resort is completed, offering guests immersive stays above the clouds.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                        <li ref={(el) => { monthsRef.current["2027-December"] = el }} className="relative grid grid-cols-1 md:grid-cols-2 pb-5 md:gap-20 md:pb-16">
                            <div className="flex flex-col rounded-md border border-[#AD9273]/60 p-5 gap-3">
                                <p className='font-inter rounded-full bg-[#C6A66799] xl:text-xl w-fit px-2 py-1 text-white'>Dec 2027</p>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-cormorant font-semibold">Villas Handover</h4>
                                <p className="font-normal xl:text-lg text-gray-500 font-inter">
                                    Each villa is delivered fully furnished - with plunge pool, view decks & access to Resort.
                                </p>
                                <button className='text-left rounded-md px-6 py-2 hover:scale-105 transition-transform duration-150 ease-in-out hover:shadow-[0_0_8px_rgba(173,146,115,0.2)] hover:border-none border border-[#AD9273]/60 w-fit cursor-pointer'>Read More</button>
                            </div>
                            <div className="group relative">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src="../images/timeline/timelineImg44.webp"
                                        alt="timeline 4"
                                        fill
                                        className="object-contain hidden md:block md:h-[30vh]"
                                    />
                                </div>
                            </div>
                            <span className="hidden md:block absolute left-1/2 top-2 h-4 w-4 bg-[#BFC4BE] rounded-full -translate-x-1/2 z-10"></span>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Timeline