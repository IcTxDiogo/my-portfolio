import { v4 as uuidv4 } from "uuid";

import { HeaderProps } from "@/components/layout/header";
import ShowTechnology from "@/components/Home/showTechnology";
import BasePage from "@/components/layout/basePage";

export default function Home() {
  return (
    <BasePage headerProps={headerProps} isHome={true}>
      <main className="flex flex-col justify-center items-center">
        <section
          className=" w-full"
          style={{
            backgroundImage: "url('/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-center text-center bg-black/30 p-2 ">
            <h1 className="font-bold text-6xl py-16 ">{`Hi I'm Diogo`}</h1>
            <p className="text-lg font-bold max-w-md my-4">
              {`A full-stack lover and a passionate about technology, I'm currently developing my skills with study and projects.`}
            </p>
            <button className="bg-gray-500 p-2 hover:bg-gray-600 rounded-xl mt-4">
              Projects
            </button>
          </div>
        </section>
        <ShowTechnology />
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
