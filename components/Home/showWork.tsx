import { v4 as uuidv4 } from "uuid";
import WorkSquare from "./workSquare";

export default function ShowWork() {
  return (
    <>
      {worksItems.map((workItem) => (
        <div key={workItem.id} className="pb-5">
          <h2 className="font-bold text-2xl pb-2">{workItem.name}</h2>
          <div className="grid grid-cols-6 gap-4 max-w-4xl">
            {workItem.work.map((item) => (
              <WorkSquare
                key={item.id}
                work={item}
                className="col-span-6 sm:col-span-3 lg:col-span-2"
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

const fullStack = [
  {
    id: uuidv4(),
    name: "Challenge 1",
    description:
      "loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "/projects/challenge1",
    image: "/images/challenge1.png",
  },
  {
    id: uuidv4(),
    name: "Challenge 2",
    description:
      "loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "/projects/challenge2",
    image: "/images/challenge2.png",
  },
  {
    id: uuidv4(),
    name: "Challenge 3",
    description:
      "loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "/projects/challenge3",
    image: "/images/challenge3.png",
  },
];

const frontEnd = [
  {
    id: uuidv4(),
    name: "Challenge 1",
    description:
      "loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "/projects/challenge1",
    image: "/images/challenge1.png",
  },
  {
    id: uuidv4(),
    name: "Challenge 2",
    description:
      "loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "/projects/challenge2",
    image: "/images/challenge2.png",
  },
  {
    id: uuidv4(),
    name: "Challenge 3",
    description:
      "loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "/projects/challenge3",
    image: "/images/challenge3.png",
  },
];

const worksItems = [
  { id: uuidv4(), name: "Full-Stack", work: fullStack },
  { id: uuidv4(), name: "Front-End", work: frontEnd },
];

export type Work = {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
};
