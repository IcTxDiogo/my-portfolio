import Link from "next/link";
import { Work } from "./showWork";

interface WorkSquareProps {
  work: Work;
  className?: string;
}

export default function WorkSquare({ work, className }: WorkSquareProps) {
  return (
    <>
      <Link
        href={work.url}
        key={work.id}
        className={`bg-gray-500 rounded-xl hover:bg-gray-600 ${className}`}
      >
        <h3 className="border-b-2 py-2 px-4">{work.name}</h3>
        <p className="px-4 py-2">{work.description}</p>
      </Link>
    </>
  );
}
