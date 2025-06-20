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
            Meet Sara’s Assistant 🤖
          </h2>
        </MotionDiv>

        <MotionDiv delayOffset={0.2}>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Hi there! I'm just a cheerful companion, here to brighten your browsing experience ✨
          </p>
        </MotionDiv>

        <MotionDiv delayOffset={0.4}>
          <p className="text-base text-gray-700 dark:text-gray-300">
          Every time you click or move your mouse, I see it! But don’t worry — I’m not being creepy. I’m your friendly helper, just watching from the background. I get excited every time you scroll or click. You explore the site, and I’ll be here, quietly watching and cheering for you. 👀
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
