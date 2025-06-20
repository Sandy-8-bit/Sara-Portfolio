import MotionDiv from "../components/motion-div";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-cards";

type Work = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
};

const worksData: Work[] = [
  {
    title: "E-Commerce Website",
    description: "A modern and responsive e-commerce platform for browsing, filtering, and purchasing products",
    image: "./Wearin.png",
    buttonText: "Sign up",
  },
  {
    title: "Doctors Appoinment Booking",
    description: "A user-friendly platform for booking appointments with doctors",
    image: "./Doctor.png",
    buttonText: "Explore",
  },
  {
    title: "Attendance Management ",
    description: "A secure and efficient system for managing student attendance and attendance records",
    image: "./Attend.png",
    buttonText: "Discover",
  },
];

export function ThreeDCardGrid() {
  return (
    <div className="p-8" id="works">
      <MotionDiv delayOffset={0.3}>
        <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">
          My Works
        </h2>
      </MotionDiv>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {worksData.map((work, index) => (
          <MotionDiv key={index} delayOffset={index * 0.8}>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
                <CardItem
                  translateZ={50}
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {work.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ={60}
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {work.description}
                </CardItem>
                <CardItem translateZ={100} className="w-full mt-4">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
