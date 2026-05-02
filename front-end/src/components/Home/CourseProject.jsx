import React from "react";
import P1 from "../../assets/images/home/Project1.png";
import P2 from "../../assets/images/home/Project2.png";
import P3 from "../../assets/images/home/Project3.png";
import P4 from "../../assets/images/home/Project4.png";
import P5 from "../../assets/images/home/Project5.png";
import P6 from "../../assets/images/home/Project6.png";
import P7 from "../../assets/images/home/Project7.png";
import P8 from "../../assets/images/home/Project8.png";
import P9 from "../../assets/images/home/Project9.png";
import P10 from "../../assets/images/home/Project10.png";
import P11 from "../../assets/images/home/Project11.png";
import P12 from "../../assets/images/home/Project12.png";
import P13 from "../../assets/images/home/Project13.png";
import P14 from "../../assets/images/home/Project14.png";

const row1 = [P1, P2, P3, P4, P5, P6, P7];
const row2 = [P8, P9, P10, P11, P12, P13, P14];
const row3 = [P4, P5, P6, P7, P8, P9, P10];

const InfiniteRow = ({ images, direction = "left", rotateY = -12 }) => {
  const tripled = [...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-${images.length} * 296px)); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(calc(-${images.length} * 296px)); }
          100% { transform: translateX(0); }
        }
        .scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className={`scroll-${direction} flex gap-4 w-max`}>
        {tripled.map((img, i) => (
      <div
  key={i}
  className="shrink-0 transition-transform duration-300"
  style={{
    transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(4deg)`,
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform =
      `perspective(1000px) rotateY(${rotateY}deg) rotateX(4deg)`)
  }
>

  {/* 👇 ده البوردر الجراديانت gradient-border */}
  <div className=" p-[2px] rounded-xl shadow-lg">

    {/* 👇 الصورة نفسها */}
    <div className="w-[280px] h-[160px] rounded-xl overflow-hidden">
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>

  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default function CourseProjects() {
  return (
    <div className="bg-white py-20 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-14">
        <h2  className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-4 tracking-tight"
    style={{ fontFamily: "'Lexend', sans-serif" }}>Course Projects</h2>
        <p className="text-black text-2xl md:text-2xl font-semibold max-w-xl mx-auto leading-relaxed">
          This is the level you will reach at the end of the course.
        </p>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-6">
        <InfiniteRow images={row1} direction="left"  rotateY={-12} />
        <InfiniteRow images={row2} direction="right" rotateY={12}  />
        <InfiniteRow images={row3} direction="left"  rotateY={-12} />
      </div>
    </div>
  );
}