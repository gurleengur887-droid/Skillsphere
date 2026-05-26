import Marquee from "react-fast-marquee";
const logos = [
  "/logos/Forbes_logo.png",
  "/logos/hub_logo.png",
  "/logos/msnbc_logo.png",
  "/logos/entrepreneur_logo.png",
];

const Featured = () => {
  return (
    <>
    <section className="relative overflow-hidden bg-[#050816] py-24">

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#D4AF37]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm mb-4">
            Featured In
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Recognized Across
            <span className="text-[#D4AF37]">
              {" "}Leading Platforms
            </span>
          </h2>

        </div>

        {/* Logo Slider */}
        <div className="relative">

          {/* Left Blur */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050816] to-transparent z-20"></div>

          {/* Right Blur */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050816] to-transparent z-20"></div>

          <Marquee
            speed={60}
            gradient={false}
            pauseOnHover={true}
          >

            {logos.map((logo, index) => (
              <div
                key={index}
                className="mx-16 flex items-center justify-center"
              >

                <img
                  src={logo}
                  alt="brand"
                  className="h-14 md:h-16 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500"
                />

              </div>
            ))}

          </Marquee>

        </div>

      </div>

    </section>
    </>
  );
};

export default Featured;