import heroWebp from "../../assets/images/home/Hero.webp";
import Adobe from "../../assets/images/home/Adobe.webp";

export default function Hero() {
  return (
    <div className="p-px -mt-[1px] rounded-b-[120px] gradient-border">
      <section className="relative w-full min-h-screen flex items-center overflow-hidden rounded-b-[119px] bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroWebp}
            alt="hero"
            className="w-full h-full object-contain object-right"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl ml-12 px-10 w-full">
          <div className="max-w-2xl">
            {/* Heading */}
            <h2
              style={{ fontFamily: "Lexend" }}
              className="text-[64px] font-semibold leading-tight drop-shadow-lg"
            >
              <span className="gradient-text">Don't Just</span>
              <br />
              <span className="text-black">Learn Design</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mt-4 font-medium gradient-text-hero">
              Master the Business of Design
            </p>

            {/* Icons Section */}
            <div className="mt-6 ml-1 flex items-center gap-4 p-3 rounded-xl w-fit">
              <img
                src={Adobe}
                alt="Adobe"
                className="w-54.75 h-36.5 object-contain"
              />
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
