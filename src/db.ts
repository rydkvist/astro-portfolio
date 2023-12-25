export type TechStack = {
  name: string;
  group: "web" | "mobile";
  image: string;
};

export const technologies: Array<TechStack> = [
  {
    name: "JavaScript",
    image: "/images/technologies/JavaScript.png",
    group: "web",
  },
  {
    name: "TypeScript",
    image: "/images/technologies/TypeScript.png",
    group: "web",
  },
  {
    name: "React",
    image: "/images/technologies/React.png",
    group: "web",
  },
  {
    name: "Next.js",
    image: "/images/technologies/Next.png",
    group: "web",
  },
  {
    name: "React Native",
    image: "/images/technologies/React.png",
    group: "mobile",
  },
  {
    name: "Swift",
    image: "/images/technologies/Swift.png",
    group: "mobile",
  },
  {
    name: "SwiftUI",
    image: "/images/technologies/SwiftUI.png",
    group: "mobile",
  },
];
