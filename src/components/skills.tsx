import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "TypeScript", icon: "🌐" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🐍" },
  { name: "PostgreSQL", icon: "🗃️" },
  { name: "Git", icon: "🔀" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-center text-slate-900 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-4xl">{skill.icon}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg font-semibold">
                  {skill.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
