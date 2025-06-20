
import Spline from "@splinetool/react-spline";
import MotionDiv from "../motion-div";

export default function Model() {
    return (
      <MotionDiv delayOffset={0.5}>
    <div className="flex w-full justify-start items-start p-6 gap-8 flex-wrap">
      <div className="w-full md:w-[50%]">
        <Spline scene="https://prod.spline.design/4uKJ4EvweQszYQBt/scene.splinecode" />
      </div>
      <div className="p-6 rounded-xl   w-full md:w-[45%]">
        <p className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Meet Saras Assistant 🤖
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
        Hi there! I'm just a cheerful companion, here to brighten your browsing experience ✨
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
          You don’t need to click or hover — just explore freely. I’ll be part of your experience, always ready in the background.There’s no need to click or hover. Just explore the site freely and enjoy your time. I’ll be right here in the background, quietly adding a sense of life, fun, and friendliness to your journey.        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
        Sometimes, a little visual joy  a small animation, a friendly face is all it takes to make the digital world feel more human..
        </p>
      </div>
            </div>
            </MotionDiv>
  );
}
