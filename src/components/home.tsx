import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Products from "@/components/products";
import EarlierProjects from "@/components/earlier-projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Products />
        <EarlierProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
