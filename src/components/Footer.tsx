import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <section className='py-12 flex flex-col md:flex-row lg:flex-row justify-between items-center px-8 flex-wrap gap-3'>
            <h1 className='font-bold'>© 2023 Webzet.dev All Rights Reserved.</h1>
            <div className='flex gap-4 flex-row'>
                <FaFacebook size={30}/>
                <FaGithub size={30}/>
                <RiInstagramFill size={30}/>
                <FaLinkedin size={30}/>
            </div>
        </section>
    )
}

export default Footer