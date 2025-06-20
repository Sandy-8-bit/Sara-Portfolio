import Contact from "../src/sections/contact";
import About from "../src/sections/about";
import Hero from "../src/sections/hero";
import Skills from "../src/sections/skills";
import { ThreeDCardGrid } from "./sections/Works";
import Model from "./components/ui/Spline";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ThreeDCardGrid />
      <Model/>
      <Contact />

    </>
  );
}
