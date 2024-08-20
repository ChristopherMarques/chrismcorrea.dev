import { AboutMe } from "@/components/AboutMe";
import Experience from "@/components/Experience/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";


export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <Header />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
