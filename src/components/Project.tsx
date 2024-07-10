import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'

import { HiDotsHorizontal } from "react-icons/hi";

interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
}

const contentWebsiteProfile: Project[] = [
    {
        id: 1,
        title: "AI Image SaaS - Canva Application (2022) amd Tailwind CSS and React.js",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/project-1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    }, {
        id: 1,
        title: "AI Image SaaS - Canva Application (2022) amd Tailwind CSS and React.js",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/project-1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    }, {
        id: 1,
        title: "AI Image SaaS - Canva Application (2022) amd Tailwind CSS and React.js",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/project-1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    }, {
        id: 1,
        title: "AI Image SaaS - Canva Application (2022) amd Tailwind CSS and React.js",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/project-1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    }, {
        id: 1,
        title: "AI Image SaaS - Canva Application (2022) amd Tailwind CSS and React.js",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/project-1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
        link: "/ui.aiimg.com",
    }, {
        id: 1,
        title: "AI Image SaaS - Canva Application (2022) amd Tailwind CSS and React.js",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/project-1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "/ui.aiimg.com",
    },
];

const Project = () => {
    return (
        <section className='py-28'>
            <h1 className='text-center text-4xl mb-10 font-bold capitalize'>Project that have <span className='text-cyan-500'>been made</span></h1>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <h2 className='mb-6 text-2xl font-semibold'>Website Profiles</h2>
                    <div className='flex flex-row flex-wrap items-center justify-center gap-4'>
                        {contentWebsiteProfile.map((project, index) => (
                            <Card className="w-[320px]" key={index}>
                                <Image className='h-48 object-cover rounded-t-lg' alt='' src={project.img} width={350} height={0} />
                                <CardHeader>
                                    <CardTitle className='text-xl custom-card-title'>{project.title}</CardTitle>
                                    <CardDescription className='custom-card-description'>{project.des}</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-between">
                                    <div className="flex items-center">
                                        {project.iconLists.slice(0, 4).map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border border-slate-100 rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * index + 2}px)`,
                                                }}
                                            >
                                                {index === 3 && project.iconLists.length > 4 ? (
                                                    <HiDotsHorizontal />
                                                ) : (
                                                    <Image src={icon} alt="icon5" className="p-2" width={50} height={0}/>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant={"outline"}>Live Demo</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2>Website Blogs</h2>
                </div>
                <div className='flex flex-col'>
                    <h2>Website Commercial</h2>
                </div>
                <div className='flex flex-col'>
                    <h2>Website Social Media</h2>
                </div>
            </div>
        </section>
    )
}

export default Project