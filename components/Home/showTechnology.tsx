"use client";

import { SiTypescript, SiReact, SiNextdotjs, SiTrpc } from "react-icons/si";
import { AiFillDownSquare, AiOutlineDownSquare } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import { iconSize } from "..";

const technology = [
  {
    id: uuidv4(),
    name: "Typescript",
    icon: <SiTypescript className="text-6xl" />,
    description:
      "TypeScript is a programming language that helps us write more structured and error-free code by providing static type checking",
    Url: "https://www.typescriptlang.org/",
  },
  {
    id: uuidv4(),
    name: "React",
    icon: <SiReact className="text-6xl" />,
    description:
      "React is a JavaScript library used for building user interfaces. It allows us to create reusable UI components and helps with managing the state of an application.",
    Url: "https://reactjs.org/",
  },
  {
    id: uuidv4(),
    name: "Next.js",
    icon: <SiNextdotjs className="text-6xl" />,
    description:
      "Next.js is a framework for building react Server component. It provides a streamlined development experience and optimized performance with focus on less js on client.",
    Url: "https://nextjs.org/",
  },
  {
    id: uuidv4(),
    name: "tRPC",
    icon: <SiTrpc className="text-6xl" />,
    description:
      "tRPC is a TypeScript-based framework for building RPC (remote procedure call) APIs. It helps with defining and generating type-safe API contracts, handling error responses, and making it easier to write backend code that communicates with frontend applications",
    Url: "https://trpc.io/",
  },
];

export default function ShowTechnology() {
  const [toggleDescription, setToggleDescription] = useState<
    string | undefined
  >();

  const actualDescription = technology.find(
    (tech) => tech.id === toggleDescription
  );
  function showDescription(id: string) {
    if (toggleDescription !== undefined && toggleDescription === id) {
      setToggleDescription(undefined);
    } else {
      setToggleDescription(id);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <article className="p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-center py-4">
            Base technology
          </h2>
          <div className="flex flex-col ">
            <div className="flex gap-6 justify-center">
              {technology.map((tech) => (
                <div
                  key={tech.id}
                  className="flex flex-col items-center justify-center"
                >
                  <Link href={tech.Url} className="flex flex-col items-center">
                    {tech.icon}
                    <p>{tech.name}</p>
                  </Link>
                  <button
                    className="pd-6"
                    onClick={() => showDescription(tech.id)}
                  >
                    {toggleDescription === tech.id ? (
                      <AiFillDownSquare size={iconSize - 15} />
                    ) : (
                      <AiOutlineDownSquare size={iconSize - 15} />
                    )}
                  </button>
                </div>
              ))}
            </div>
            {toggleDescription && (
              <div className="border-2 p-4 rounded-xl mt-4 max-w-2xl">
                <p>{actualDescription?.description}</p>
              </div>
            )}
          </div>
        </div>
      </article>
      <article className="p-6 max-w-lg font-medium text-justify text-xl">
        <p>
          I use these technologies to help me write better quality code, build
          user interfaces more efficiently, improve the applications
          performance, and simplify the process of building APIs.
        </p>
      </article>
      <article className="py-2">
        <h2 className="text-4xl font-bold text-center py-4">Motivations</h2>
        <div className="flex flex-col items-center sm:flex-row max-w-xl">
          <Image
            className="m-2 border-2 sm:hidden rounded-3xl"
            alt="building image mobile"
            src="/building/mobile.jpg"
            width={400}
            height={225}
          />
          <Image
            className="m-2 hidden sm:block rounded-3xl border-2"
            alt="building image desktop"
            src="/building/desktop.jpg"
            width={225}
            height={400}
          />
          <p className="p-6 max-w-lg font-medium text-justify text-xl">
            {`Like a building, a website is made up of many different parts. The base determines the strength of the building. The same goes for a website. I use these technologies because they are the best in their field and will scale with the project needs.`}
          </p>
        </div>
      </article>
    </section>
  );
}
