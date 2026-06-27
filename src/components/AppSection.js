export default function AppSection() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-[24px] md:text-[54px] font-semibold mb-[30px] leading-tight">
        Download the <span className="text-[#2F5CF0]">KrediLoop</span> App
      </h2>

      <p className="text-[#514F4F] max-w-2xl text-[9px] md:text-[15px] font-normal leading-relaxed mb-[62px]">
        From traditional Ajo savings groups to modern digital finance, KrediLoop helps communities save, grow, and access credit together anytime, anywhere.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 mt-16">
        <button className="flex items-center justify-center space-x-2 md:space-x-3 bg-black text-white w-[155px] h-[54px] md:w-[185px] md:h-[59px] rounded-[12px] transition-all duration-300 md:hover:scale-105 md:hover:-translate-y-1 md:hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] md:hover:bg-gray-900">
          <img src="/apple.svg" alt="Apple icon" className="w-5 h-5 md:w-8 md:h-8" />
          <span className="text-[15px] md:text-[19px] font-semibold leading-none">App Store</span>
        </button>

        <button className="flex items-center justify-center space-x-2 md:space-x-3 bg-black text-white w-[155px] h-[54px] md:w-[185px] md:h-[59px] rounded-[12px] transition-all duration-300 md:hover:scale-105 md:hover:-translate-y-1 md:hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] md:hover:bg-gray-900 relative">
          <img src="/google.svg" alt="Google Play icon" className="w-4 h-4 md:w-8 md:h-8" />
          <span className="text-[15px] md:text-[19px] font-semibold leading-none">Google Play</span>
        </button>
      </div>

      <span className="text-sm text-gray-500 font-medium mb-16">Coming Soon</span>

      <div className="relative w-full max-w-md mt-3 mx-auto">
        {/* Background glow or drop shadow could go here */}
        <img
          src="/iphone_mockup.png"
          alt="Krediloop App Interface"
          className="w-full h-auto drop-shadow-2xl relative z-10"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-8 bg-[#0B163A]/20 blur-xl rounded-[100%]" />
      </div>
    </section>
  );
}
