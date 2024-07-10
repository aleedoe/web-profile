"use client";

import React from 'react';
import Image from 'next/image';

import { Button } from './ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

import { motion, Variants } from "framer-motion";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

import { websiteProfile } from './ProjectContents';


type Project = {
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
};

interface ProjectSectionProps {
    title: string;
    projects: Project[];
};



const cardVariants: Variants = {
    offscreen: {
        y: 200
    },
    onscreen: (index: number) => ({
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
            delay: index * 0.1
        }
    })
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => {
    return (
        <div className='flex flex-col'>
            <h2 className='mb-6 text-2xl font-semibold'>{title}</h2>
            <div className='flex flex-row flex-wrap items-center justify-center md:justify-around lg:justify-center gap-4'>
                {projects.map((project, index) => (
                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={index}
                        key={index}
                    >
                        <motion.div variants={cardVariants} custom={index}>
                            <Card className="w-[320px] hover:drop-shadow-xl hover:scale-105 transition-all duration-300">
                                <Image className='h-48 object-cover rounded-t-lg' alt='' src={project.img} width={350} height={0} />
                                <CardHeader>
                                    <CardTitle className='text-xl custom-card-title'>{project.title}</CardTitle>
                                    <CardDescription className='custom-card-description'>{project.des}</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-between">
                                    <div className="flex items-center">
                                        {project.iconLists.slice(0, 4).map((icon, iconIndex) => (
                                            <div
                                                key={iconIndex}
                                                className="border border-slate-100 rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * iconIndex + 2}px)`,
                                                }}
                                            >
                                                {iconIndex === 3 && project.iconLists.length > 4 ? (
                                                    <HiDotsHorizontal />
                                                ) : (
                                                    <Image src={icon} alt="icon" className="p-2" width={50} height={0} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant={"outline"} className='hover:bg-cyan-50/50'>Live Demo <GoArrowUpRight className='ml-1' size={15} /></Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Project = () => {
    return (
        <section className='py-28'>
            <h1 className='text-center text-4xl mb-10 font-bold capitalize'>
                Some Project that have <span className='text-cyan-500'>been made</span>
            </h1>
            <div className='flex flex-col gap-10'>
                <ProjectSection title="Website Profiles" projects={websiteProfile} />
                <ProjectSection title="Website Blogs" projects={websiteProfile} />
                <ProjectSection title="Website Commercial" projects={websiteProfile} />
                <ProjectSection title="Website Social Media" projects={websiteProfile} />
            </div>
        </section>
    )
}

export default Project;
