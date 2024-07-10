import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="py-16">
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10">
                        <p className="tracking-widest text-center max-w-80">
                            Dynamic future with Programing
                        </p>
                    </div>
                    <TextGenerateEffect
                        words="building digital solutions with modern websites"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Alie, a Fullstack Web Developer in Indonesia.
                    </p>
                    <Button variant={"outline"} className="mt-4 hover:bg-cyan-50/50 hover:scale-[1.1] transition-all duration-200">
                        Vist My Portfolio <FaArrowRightLong className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;