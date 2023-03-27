import { v4 as uuidv4 } from "uuid";

import BasePage from "@/components/layout/basePage";
import { HeaderProps } from "@/components/layout/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <BasePage headerProps={headerProps} isHome={true}>
      <main className="p-8 flex flex-col items-center">
        <div className="max-w-2xl flex flex-col gap-4">
          {aboutMeItems.map((item, index) => (
            <div key={item.id} className="flex items-center gap-4 text-">
              {index % 2 === 0 ? (
                <Image
                  className="rounded-3xl border-2"
                  alt="profile photo"
                  src={item.image}
                  width={160}
                  height={160}
                />
              ) : (
                <p className={`pb-2 ${item.textTam}`}>{item.item}</p>
              )}
              {index % 2 !== 0 ? (
                <Image
                  className="rounded-3xl border-2"
                  alt="profile photo"
                  src={item.image}
                  width={160}
                  height={160}
                />
              ) : (
                <p className={`pb-2 ${item.textTam}`}>{item.item}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </BasePage>
  );
}

const aboutMeItems = [
  {
    id: uuidv4(),
    item: "Thanks to come here! I'm excited to share a little bit about me!",
    image: "/about/profile.jpg",
    alt: "profile photo",
    textTam: "text-2xl font-semibold",
  },
  {
    id: uuidv4(),
    item: "I'm a 24 years old guy from Brazil, I'm currently studying computer engineering at UFGD.",
    image: "/about/study.jpg",
    alt: "study desk",
    textTam: "text-lg",
  },
  {
    id: uuidv4(),
    item: "I always liked using the computer, starting with games, image and video editing",
    image: "/about/start.jpg",
    alt: "A child starting to climb a ladder",
    textTam: "text-base",
  },
  {
    id: uuidv4(),
    item: "My first contact with programming was in high school, since that time, I don't remember a day that programming wasn't in my thoughts",
    image: "/about/class.jpg",
    alt: "a class of a high school",
    textTam: "text-base",
  },
  {
    id: uuidv4(),
    item: "My current focus is web programming, with react next typescript, now i feel secure with front-end but my goal is to move forward being full-stack",
    image: "/about/code.jpg",
    alt: "a code with web technologies",
    textTam: "text-base",
  },
];

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
