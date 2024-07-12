import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
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
                <About />
                <Skill />
                <Project />
                <Experience />
            </main>
            <Footer />
        </>
    );
}
