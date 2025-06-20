import Spline from "@splinetool/react-spline";
import MotionDiv from "../motion-div";

export default function Model() {
  return (
    <div className="flex w-full justify-start items-start p-6 gap-8 flex-wrap">
      {/* Spline 3D model */}
          <div className="w-full md:w-[50%]">
          <MotionDiv delayOffset={0.0}>
                  <Spline scene="https://prod.spline.design/4uKJ4EvweQszYQBt/scene.splinecode" />
                  </MotionDiv>
      </div>

      {/* Text content using MotionDiv for animation */}
      <div className="p-6 rounded-xl w-full md:w-[45%] space-y-4">
        <MotionDiv delayOffset={0.0}>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Meet Saras Assistant 🤖
          </h2>
        </MotionDiv>

        <MotionDiv delayOffset={0.2}>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Hi there! I'm just a cheerful companion, here to brighten your browsing experience ✨
          </p>
        </MotionDiv>

        <MotionDiv delayOffset={0.4}>
          <p className="text-base text-gray-700 dark:text-gray-300">
            You don’t need to click or hover — just explore freely. I’ll be part of your experience,
            always ready in the background. There’s no need to click or hover. Just explore the site
            freely and enjoy your time. I’ll be right here in the background, quietly adding a sense
            of life, fun, and friendliness to your journey.
          </p>
        </MotionDiv>

        <MotionDiv delayOffset={0.6}>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Sometimes, a little visual joy — a small animation, a friendly face — is all it takes to
            make the digital world feel more human.
          </p>
        </MotionDiv>
      </div>
    </div>
  );
}
