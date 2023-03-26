import { SiTypescript, SiReact, SiNextdotjs, SiTrpc } from "react-icons/si";

const technology = [
  {
    id: 1,
    name: "Typescript",
    icon: <SiTypescript className="text-6xl" />,
    description:
      "TypeScript is a programming language that helps us write more structured and error-free code by providing static type checking",
  },
  {
    id: 2,
    name: "React",
    icon: <SiReact className="text-6xl" />,
    description:
      "React is a JavaScript library used for building user interfaces. It allows us to create reusable UI components and helps with managing the state of an application.",
  },
  {
    id: 3,
    name: "Next.js",
    icon: <SiNextdotjs className="text-6xl" />,
    description:
      "Next.js is a framework for building react Server component. It provides a streamlined development experience and optimized performance with focus on less js on client.",
  },
  {
    id: 4,
    name: "trpc",
    icon: <SiTrpc className="text-6xl" />,
    description:
      "trpc is a TypeScript-based framework for building RPC (remote procedure call) APIs. It helps with defining and generating type-safe API contracts, handling error responses, and making it easier to write backend code that communicates with frontend applications",
  },
];

export default function ShowTechnology() {
  return (
    <section className="flex flex-col items-center justify-center">
      <article className="p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Base technology</h2>
          <div className="flex gap-4 justify-center">
            {technology.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center justify-center"
              >
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <article className="p-4 max-w-lg font-medium text-justify">
        <p>
          In summary, i use these technologies to help me write better quality
          code, build user interfaces more efficiently, improve the applications
          performance, and simplify the process of building APIs.
        </p>
      </article>
    </section>
  );
}
