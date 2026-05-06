import Img2 from "../../assets/images/about/About Image1.webp"
import Img1 from "../../assets/images/about/About Image2.webp"
import GoldButton from './../common/GoldButton';
export default function VisionSection() {
  return (
    <section className="py-15 px-6 ">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title Badge */}

        <GoldButton className="text-black text-5xl font-bold">
             Our vision
        </GoldButton>

        {/* Heading */}
        <h2 className="text-2xl gradient-text-black-v2 block md:text-4xl font-semibold max-w-xl mx-auto mt-10 mb-14 tracking-tighter leading-snug">
          Bridging the gap between mastering the tool and mastering the business
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-2 items-center">

          {/* Left Image */}
          <div className="rounded-[40px] overflow-hidden border md:h-[650px] border-red-400">
            <img
              src={Img1}
              alt="Designer working"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-center space-y-4">
            <p className="font-semibold text-3xl font-[lexend] gradient-text-black-v2 tracking-tighter ">
              While the world is preoccupied with teaching how to use software, our vision is focused on cultivating an elite group that understands the purpose of design.
            </p>

            <p className="font-semibold text-3xl font-[lexend] tracking-tighter gradient-text-black-v2 ">
              We aspire to be the bridge that allows Arab designers to move from haphazard learning to the professionalism of global agencies.
            </p>
          </div>

          {/* Right Image */}
          <div className="rounded-[40px] overflow-hidden border md:h-[650px] border-pink-500">
            <img
              src={Img2}
              alt="Woman working"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}