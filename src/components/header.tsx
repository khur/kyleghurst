import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/75 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/75">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a
          href="/"
          className="text-2xl font-bold text-slate-900 dark:text-white"
        >
          Kyle Hurst
        </a>
        <nav className="hidden space-x-4 md:flex">
          <a
            href="#skills"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Contact
          </a>
        </nav>
        <a
          href="https://www.linkedin.com/in/kyleghurst/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="hidden md:inline-flex">
            Resume
          </Button>
        </a>
      </div>
    </header>
  );
}
