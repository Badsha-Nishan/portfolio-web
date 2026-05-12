import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import CustomCursor from "../components/sections/CustomCursor";
import LoadingScreen from "../components/sections/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen w-11/12 mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <CustomCursor />
      <LoadingScreen />
    </main>
  );
}
