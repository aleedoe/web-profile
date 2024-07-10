import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
    return (
        <>
            <Header />
            <main className="container mx-auto pt-12">
                <Hero />
                <About/>
                <Skill/>
                <Project/>
            </main>
        </>
    );
}
