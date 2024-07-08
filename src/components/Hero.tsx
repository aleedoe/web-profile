import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
    return (
        <div className="py-16">
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs font-semibold text-center text-cyan-500 max-w-80">
                        Dynamic future with Programing
                    </p>
                    <TextGenerateEffect
                        words="building digital solutions with modern websites"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Alie, a Fullstack Web Developer in Indonesia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;