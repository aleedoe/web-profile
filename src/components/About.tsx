"use client";

import React from 'react';
import { motion } from "framer-motion";

import { Card, CardDescription, CardTitle } from './ui/card';

import { LuCalendarClock } from "react-icons/lu";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { IoSchoolOutline } from "react-icons/io5";


type cardContentType = {
    title: string;
    description: string;
    icon: JSX.Element;
};

const cardContent: cardContentType[] = [
    {
        title: "Time Experience",
        description: "Has been studying web programming for 1 year",
        icon: <LuCalendarClock className='mr-0 mb-2 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4 size-10 md:size-12 lg:size-14' color='#06b6d4' />,
    },
    {
        title: "Sosial Interaction",
        description: "Able to interact and mingle with everyone",
        icon: <LiaPeopleCarrySolid className='mr-0 mb-2 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4 size-10 md:size-12 lg:size-14' color='#06b6d4' />,
    },
    {
        title: "Study",
        description: "Currently studying at Universitas Teknologi Yogyakarta",
        icon: <IoSchoolOutline className='mr-0 mb-2 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4 size-10 md:size-14 lg:size-16' color='#06b6d4' />,
    },
];

const About = () => {
    return (
        <section className='flex justify-center items-center lg:flex-row md:flex-wrap md:flex-row flex-col gap-4 mb-16'>
            {cardContent.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                        duration: 1.5
                        // ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <Card className="w-[310px] md:w-[340px] lg:w-[350px]">
                        <div className='p-4 flex flex-col md:flex-row lg:flex-row items-center justify-center'>
                            {card.icon}
                            <div className='flex flex-col gap-1 text-center md:text-start lg:text-start'>
                                <CardTitle className='text-lg md:text-xl lg:text-2xl'>{card.title}</CardTitle>
                                <CardDescription className='text-sm md:text-base lg:text-base'>{card.description}</CardDescription>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </section>
    );
};

export default About;
