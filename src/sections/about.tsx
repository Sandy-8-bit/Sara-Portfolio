import CoolPortraitCard from "../components/cool-portrait-card";
import MotionDiv from "../components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center text-2xl font-extrabold md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4 text-md">
          <MotionDiv delayOffset={0.4}>
            <p>
            Hello! I'm Sara Poustina, a passionate and self-driven Full-Stack Developer based in Coimbatore, Tamil Nadu, India.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
            I specialize in building responsive, scalable, and high-performance web applications using modern technologies like TypeScript, React, Node.js, and MongoDB. I thrive on working across the entire stack — from designing clean and intuitive user interfaces to developing robust backend systems and REST APIs. My development style emphasizes clean code architecture, performance optimization, and writing reusable, maintainable components.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
            I'm constantly exploring new tools, frameworks, and best practices in web development, and I take a keen interest in topics like component-driven development, design patterns, deployment automation, and DevOps. I'm comfortable working with version control systems like Git, and I have experience with tools like Docker and CI/CD pipelines to streamline development workflows.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/Sara1.png"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/Sara1.png"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
