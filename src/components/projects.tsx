import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Punks Provenance",
    description:
      "See the provenance of your Punks and the beautiful stories they tell.",
    image: "/provenance.png",
    demoLink: "https://punks.junkdrawer.wtf/",
    codeLink: "",
  },
  {
    title: "PunkVerse",
    description:
      "A social network for Punks. See the amazing punkverse and connect with other punks.ƒ",
    image: "/punkverse.png",
    demoLink: "https://punkverse.junkdrawer.wtf/",
    codeLink: "",
  },
  {
    title: "How to, Boomer!",
    description:
      "A toolset for the boomer generation and help them communicate with their gen Z & millennial children.",
    image: "/howtoboomer.png",
    demoLink: "https://howtoboomer.com/",
    codeLink: "https://github.com/khur/howtoboomer",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center text-slate-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </Button>
                {project.codeLink && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
