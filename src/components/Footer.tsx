import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
    return (
        <section className='py-12 flex flex-col md:flex-row lg:flex-row justify-between items-center px-8 flex-wrap gap-3'>
            <h1 className='font-bold'>© 2023 Webzet.dev All Rights Reserved.</h1>
            <div className='flex gap-4 flex-row'>
                <Link href="https://www.facebook.com/mushyafa.ali.12/" target="_blank">
                    <FaFacebook size={30} />
                </Link>
                <Link href="https://www.facebook.com/mushyafa.ali.12/" target="_blank">
                    <FaLinkedin size={30} />
                </Link>
                <Link href="https://www.facebook.com/mushyafa.ali.12/" target="_blank">
                    <RiInstagramFill size={30} />
                </Link>
                <Link href="https://www.facebook.com/mushyafa.ali.12/" target="_blank">
                    <FaGithub size={30} />
                </Link>
            </div>
        </section>
    )
}

export default Footer