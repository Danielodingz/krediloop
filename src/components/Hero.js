import RotatingWord from './RotatingWord';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-44 pb-0 min-h-[100vh] md:h-[972px] flex flex-col items-center overflow-hidden bg-black">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center mt-6 md:mt-12 w-full px-4 md:px-6 gap-3 md:gap-4">

        {/* Main Title */}
        <h1 className="text-[28px] sm:text-[28px] md:text-[62px] font-semibold text-center text-black tracking-tight leading-tight mb-6 md:mb-[80px] whitespace-nowrap md:whitespace-normal">
          Digitizing the future of <RotatingWord />
        </h1>

        {/* Flag Pill */}
        <div className="flex items-center justify-center px-3 md:px-5 h-[30px] md:h-[36px] bg-white rounded-[24px] shadow-sm mb-5 md:mb-8 border border-gray-100">
          <img src="/country's.png" alt="Country Flags" className="h-[14px] md:h-[22px] w-auto mr-1.5 object-contain flex-shrink-0" />
          <span className="text-[12px] sm:text-[12px] md:text-[15px] font-normal text-[#514F4F] whitespace-nowrap leading-none">
            Modernizing Africa's Savings and Credit System
          </span>
        </div>

        {/* Waitlist Button */}
        <button className="bg-[#2F5CF0] text-white flex items-center justify-center w-[148px] h-[54px] md:w-[174px] md:h-[54px] text-[15px] md:text-[19px] rounded-xl font-semibold tracking-wide border-2 border-white shadow-[0_8px_16px_rgba(47,92,240,0.3)] transition-all duration-300 md:hover:scale-110 md:hover:-translate-y-1 md:hover:shadow-[0_12px_28px_rgba(47,92,240,0.55)] mb-8 md:mb-16">
          Join Waitlist
        </button>

      </div>

      {/* Hero Image */}
      <div className="relative z-10 w-full max-w-4xl mt-auto pt-4 md:pt-8 flex justify-center px-0 md:px-0">
        {/* Mobile image */}
        <img
          src="/hero-image-mobile.png"
          alt="People using Krediloop"
          className="w-[170%] h-auto drop-shadow-2xl md:hidden"
        />
        {/* Desktop image */}
        <img
          src="/hero-image.png"
          alt="People using Krediloop"
          className="w-full h-auto drop-shadow-2xl hidden md:block"
        />
      </div>
    </section>
  );
}
