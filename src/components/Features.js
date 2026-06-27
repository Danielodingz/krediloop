export default function Features() {
  return (
    <section className="bg-[#0B163A] py-12 px-6 relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-1 { animation: float 6s ease-in-out infinite; }
        .animate-float-2 { animation: float 7s ease-in-out infinite 1s; }
        .animate-float-3 { animation: float 6.5s ease-in-out infinite 2s; }
        .animate-float-4 { animation: float 8s ease-in-out infinite 0.5s; }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end gap-16 pb-12 lg:pb-5">

        {/* Text Side */}
        <div className="flex-1 text-white z-10 w-full relative">
          <h2 className="text-[25px] md:text-[54px] font-semibold leading-tight text-white mb-6">
            Group Savings.<br />
            Credit History.<br />
            <span className="text-[#8B9DD7]">Progress.</span>
          </h2>

          {/* Mobile-only feature cards grid */}
          <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden relative z-20 mb-20">
            <img src="/personal-savings.png" alt="Personal Savings" className="w-full h-auto object-contain drop-shadow-xl rounded-xl" />
            <img src="/start-group.png" alt="Start Group" className="w-full h-auto object-contain drop-shadow-xl rounded-xl" />
            <img src="/request-loan.png" alt="Request for Loan" className="w-full h-auto object-contain drop-shadow-xl rounded-xl" />
            <img src="/group-savings.png" alt="Group Savings" className="w-full h-auto object-contain drop-shadow-xl rounded-xl" />
          </div>

          {/* Mobile-only Main Character */}
          <div className="lg:hidden absolute -bottom-[120px] -left-[40px] w-[250px] z-10">
            <img
              src="/main-illustration.png"
              alt="Main Character Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Illustration Side - Desktop Only */}
        <div className="hidden lg:flex flex-1 relative items-center justify-center min-h-[600px] w-full z-10">

          {/* Main Character Illustration */}
          <div className="absolute -bottom-[120px] left-1 -translate-x-1/2 w-full max-w-[500px] flex justify-center z-10">
            <img
              src="/main-illustration.png"
              alt="Main Character Illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Box 1: Personal Savings */}
          <div className="absolute top-[30%] left-[-350px] z-20 animate-float-1">
            <img
              src="/personal-savings.png"
              alt="Personal Savings"
              className="w-44 h-44 object-contain drop-shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            />
          </div>

          {/* Box 2: Start Group */}
          <div className="absolute top-[0%] left-[220px] -translate-x-1/2 z-20 animate-float-2">
            <img
              src="/start-group.png"
              alt="Start Group"
              className="w-40 h-40 md:w-45 md:h-45 object-contain drop-shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            />
          </div>

          {/* Box 3: Medal */}
          <div className="absolute top-[-48px] right-[5%] z-20">
            <img
              src="/medal.png"
              alt="Medal"
              className="w-24 h-24 object-contain drop-shadow-xl"
            />
          </div>

          {/* Box 4: Request for Loan */}
          <div className="absolute top-[30%] right-0 z-20 animate-float-3">
            <img
              src="/request-loan.png"
              alt="Request for Loan"
              className="w-60 h-60 object-contain drop-shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            />
          </div>

          {/* Box 5: Group Savings */}
          <div className="absolute bottom-[1%] right-[5%] z-20 animate-float-4">
            <img
              src="/group-savings.png"
              alt="Group Savings"
              className="w-44 h-44 object-contain drop-shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            />
          </div>

        </div>
      </div>
    </section>

  );
}
