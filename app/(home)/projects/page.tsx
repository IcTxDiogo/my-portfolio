import { v4 as uuidv4 } from "uuid";

import BasePage from "@/components/layout/basePage";
import { HeaderProps } from "@/components/layout/header";
import ShowWork from "@/components/Home/showWork";

export default function ProjectsPage() {
  return (
    <BasePage headerProps={headerProps} isHome={true}>
      <main className="flex flex-col shadow-2xl justify-center items-center">
        <div
          className="w-full max-w-4xl rounded-b-2xl"
          style={{
            backgroundImage: "url('/projects.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-6 pt-6 bg-black/40 rounded-b-2xl">
            <h2 className="text-xl font-bold pb-5">
              This is my projects page, here you can see my challenges
            </h2>
            <h3 className=" text-lg font-medium pb-3">
              I divide them in two parts
            </h3>
            <div className="flex flex-col gap-2 pb-4">
              {category.map((item) => (
                <div key={item.id} className="">
                  <h4 className="text-gray-400 font-medium ">{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6">
          <ShowWork />
        </div>
      </main>
    </BasePage>
  );
}

const headerProps: HeaderProps = {
  pageTitle: "Diogo França dos Santos",
  NavItems: [
    {
      id: uuidv4(),
      label: "Home",
      url: "/",
    },
    {
      id: uuidv4(),
      label: "Projects",
      url: "/projects",
    },
    {
      id: uuidv4(),
      label: "About",
      url: "/about",
    },
  ],
};

const category = [
  {
    id: uuidv4(),
    name: "Full-stack challenges",
    description:
      "Items in this category is full-stack pages with more interaction and sync items",
  },
  {
    id: uuidv4(),
    name: "Front-end challenges",
    description:
      "Items in this category is more front-end page with less interaction",
  },
];
