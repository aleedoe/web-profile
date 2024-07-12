import React from 'react';

interface ListItemProps {
    date: string;
    title: string;
    description: string;
}

const ListItem: React.FC<ListItemProps> = ({ date, title, description }) => (
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
    </li>
);

const Experience = () => {
    return (
        <section id="experience" className="py-28 flex flex-col justify-center items-center w-full">
            <h1 className="text-center text-4xl mb-10 font-bold capitalize">My Experience</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <ListItem
                    date="February 2022"
                    title="Application UI code in Tailwind CSS"
                    description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
                />
                <ListItem
                    date="18 Mei - 2 Juni 2024"
                    title="Bootcamp Front-End & Back-End Festika 2024"
                    description="In Back-End Bootcamp, I learned Express.js from basic to advanced in 5 intensive sessions. The material covered middleware, testing, security, and structured API development. In Front-End Bootcamp, I learned React.js, including functional components, state management, API calls with Axios, authentication, and unit testing."
                />
                <ListItem
                    date="9 Juni 2024"
                    title="Workshop Full stack Web Developer Festika 2024"
                    description="This workshop focuses on web development with React.js and Express.js, using a case study-based approach for rapid understanding in one intensive day."
                />
            </ol>
        </section>
    );
};

export default Experience;
