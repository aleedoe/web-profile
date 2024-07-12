import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'

import Image from 'next/image';

const skills = [
    { title: 'Python', imageSrc: 'icons8-python.svg' },
    { title: 'HTML', imageSrc: 'icons8-html.svg' },
    { title: 'CSS', imageSrc: 'icons8-css.svg' },
    { title: 'JavaScript', imageSrc: 'icons8-javascript.svg' },
    { title: 'PHP', imageSrc: 'icons8-php.svg' },
    { title: 'Git', imageSrc: 'icons8-git.svg' },
    { title: 'MySQL', imageSrc: 'icons8-mysql.svg' },
    { title: 'Laravel', imageSrc: 'icons8-laravel.svg' },
    { title: 'React', imageSrc: 'icons8-react.svg' },
    { title: 'Bootstrap', imageSrc: 'icons8-bootstrap.svg' },
    { title: 'Tailwind', imageSrc: 'icons8-tailwind-css.svg' },
    { title: 'Django', imageSrc: 'icons8-django.svg' },
    { title: 'Flask', imageSrc: 'icons8-flask.svg' },
    { title: 'Next', imageSrc: 'icons8-nextjs.svg' },
]

const Skill = () => {
    return (
        <section className='py-28'>
            <h1 className='text-center text-4xl mb-10 font-bold capitalize'>My Skills</h1>
            <div className='flex justify-center gap-4 flex-wrap'>
                {skills.map((skill, index) => (
                    <Card className="w-36 hover:scale-95 transition-all duration-300" key={index}>
                        <CardHeader className='flex flex-col items-center'>
                            <Image alt={skill.title} src={skill.imageSrc} width={60} height={60} />
                            <CardTitle className='text-lg text-center'>{skill.title}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Skill