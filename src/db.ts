export type TechStack = {
  name: string;
  group: "web" | "mobile";
  image: string;
};

export const technologies: Array<TechStack> = [
  {
    name: "JavaScript",
    image: "src/assets/technologies/JavaScript.png",
    group: "web",
  },
  {
    name: "TypeScript",
    image: "src/assets/technologies/TypeScript.png",
    group: "web",
  },
  { name: "React", image: "src/assets/technologies/React.png", group: "web" },
  { name: "Next.js", image: "src/assets/technologies/Next.png", group: "web" },
  {
    name: "React Native",
    image: "src/assets/technologies/React.png",
    group: "mobile",
  },
  {
    name: "Swift",
    image: "src/assets/technologies/Swift.png",
    group: "mobile",
  },
  {
    name: "SwiftUI",
    image: "src/assets/technologies/SwiftUI.png",
    group: "mobile",
  },
];
