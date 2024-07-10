import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'

import Image from 'next/image';


interface SkillCardProps {
    imageSrc: string;
    title: string;
}

const skills = [
    { title: 'Python', imageSrc: 'icons8-python.svg' },
    { title: 'HTML', imageSrc: 'icons8-html.svg' },
    { title: 'JavaScript', imageSrc: 'icons8-javascript.svg' },
]

const SkillCard: React.FC<SkillCardProps> = ({ imageSrc, title }) => {
    return (
        <Card className="w-auto">
            <CardHeader className='flex flex-col items-center'>
                <Image alt={title} src={imageSrc} width={60} height={60} />
                <CardTitle className='text-lg text-center'>{title}</CardTitle>
            </CardHeader>
        </Card>
    )
}

const Skill = () => {
    return (
        <section className='py-28'>
            <h1 className='text-center text-4xl mb-10 font-bold capitalize'>My Skills</h1>
            <div className='flex justify-center gap-4 flex-wrap'>
                {skills.map((skill, index) => (
                    <SkillCard key={index} title={skill.title} imageSrc={skill.imageSrc} />
                ))}
            </div>
        </section>
    )
}

export default Skill