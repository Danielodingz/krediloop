'use client';
import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WaitlistPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalVideoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim() && email.trim()) {
      setShowModal(true);
      // Speed up the video once the modal opens
      setTimeout(() => {
        if (modalVideoRef.current) {
          modalVideoRef.current.playbackRate = 19;
        }
      }, 50);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EBF0FF]">
      <Header />

      {/* Main Content with Background Image */}
      <main
        className="flex-grow pt-[130px] lg:pt-[280px] pb-20 px-4 md:px-8 flex flex-col items-center justify-center bg-center bg-no-repeat relative"
      >
        <div>
          <img className="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="/join-waitlist-background.png" alt="" />
        </div>
        <div className="absolute inset-0 bg-[#EBF0FF]/40 z-0 pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center max-w-[1200px] mx-auto w-full relative z-10">

          {/* Light Container (Left) */}
          <div className="bg-[#E0E7FF] rounded-[18px] w-full max-w-[690px] pt-24 pb-20 px-6 md:px-12 relative z-10 lg:z-10 shadow-sm flex flex-col items-center order-2 lg:order-1">
            <h1 className="text-[35px] md:text-[50px] font-semibold text-black leading-tight tracking-tight text-center mb-4 pb-3">
              You found it early.
            </h1>
            <p className="text-[10px] text-[#191919] leading-[22px] text-center mb-24 max-w-[400px] pb-3">
              We&apos;re onboarding our first members soon. Join the waitlist today, and we&apos;ll let you know as soon as your spot is ready.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[400px]">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white px-5 py-[16px] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#2F5CF0] text-[12px] placeholder-[#838383] transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-white px-5 py-[16px] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#2F5CF0] text-[12px] placeholder-[#838383] transition-all"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white px-5 py-[16px] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#2F5CF0] text-[12px] placeholder-[#838383] transition-all"
                required
              />

              <div className="flex items-center justify-center gap-2 mt-2 mb-2">
                <span className="text-[10px] text-[#514F4F]">By joining, you agree to receive emails from</span>
                <div className="flex items-center border-[1px] border-[#B9C9FF] bg-white rounded-[10000px] px-2 py-1 h-[24px]">
                  <img src="/logo.png" alt="KrediLoop" className="h-[12px] w-auto mr-1.5 object-contain" />
                  <span className="text-[9px] font-semibold text-[#2F5CF0] tracking-[1px]">KrediLoop</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2F5CF0] text-white font-semibold text-[19px] h-[52px] rounded-[12px] hover:bg-blue-700 transition-colors border-2 border-white shadow-sm flex items-center justify-center"
              >
                Get Early Access
              </button>

              <div className="text-center mt-3">
                <span className="text-[12px] text-[#2F5CF0]">Read our <a href="#" className="text-[#2F5CF0] hover:underline">Privacy Policy</a></span>
              </div>
            </form>
          </div>

          {/* Dark Container (Right) */}
          <div className="bg-[#0B163A] rounded-[18px] w-full max-w-[544px] h-[350px] lg:h-[501px] sticky lg:relative top-[110px] lg:top-auto z-0 lg:z-20 shadow-2xl flex flex-col items-center justify-center order-1 lg:order-2 mt-0 lg:mt-[48px] -mb-8 lg:mb-0 lg:-ml-[70px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/dark-container.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </main>

      <Footer />

      {/* ── Success Modal ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal container */}
          <div
            className="relative z-10 w-full md:w-auto md:max-w-[520px] md:mx-4 bg-[#0B163A] overflow-hidden rounded-t-[28px] md:rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.6)] waitlist-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video */}
            <video
              ref={modalVideoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[420px] md:h-[480px] object-cover"
            >
              <source src="/waitlist.mp4" type="video/mp4" />
            </video>

            {/* X close button top-right */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
