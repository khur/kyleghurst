import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <img
          src="/kgh.jpeg"
          alt="Kyle Hurst"
          className="w-60 h-60 rounded-full mx-auto border-2 border-slate-900"
        />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
          Software Developer
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
          Passionate about creating elegant solutions to complex problems.
          Specializing in web development and always eager to learn new
          technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
