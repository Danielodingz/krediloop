'use client';

import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WaitlistSuccessPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    // Speed up the video to match the original waitlist modal behaviour
    const timer = setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.playbackRate = 3;
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    // Redirect to home page when closed
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EBF0FF]">
      <Header />

      <main className="flex-grow flex items-center justify-center relative">
        {/* We keep the main container empty since the modal is the only content on this page */}
      </main>

      <Footer />

      {/* Modal overlay - always visible on this page once mounted */}
      {mounted && (
        <div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal container */}
          <div
            className="relative z-10 w-full md:w-auto md:max-w-[520px] md:mx-4 bg-[#0B163A] overflow-hidden rounded-t-[28px] md:rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
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

            {/* Success text overlay at the bottom of the video */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-16 bg-gradient-to-t from-[#0B163A] via-[#0B163A]/80 to-transparent">
              <h2 className="text-white text-[22px] font-semibold leading-snug mb-2">
                You&apos;re on the waitlist! 🎉
              </h2>
              <p className="text-white/80 text-[13px] leading-[22px] mb-1">
                Thanks for joining KrediLoop.
              </p>
              <p className="text-white/60 text-[12px] leading-[20px] mb-3">
                We&apos;ve sent a confirmation email to your inbox. You&apos;ll be among the first to know when we launch.
              </p>
              
              {/* Spam Notice */}
              <div className="bg-[#2F5CF0]/20 border border-[#2F5CF0]/30 rounded-lg p-3 backdrop-blur-sm inline-block">
                <p className="text-white/90 text-[11px] leading-[16px] font-medium flex gap-2">
                  <span className="text-[14px]">⚠️</span>
                  <span>
                    Don&apos;t see the email? Please check your <strong className="text-white">spam or junk folder</strong> and mark it as &quot;Not Spam&quot;.
                  </span>
                </p>
              </div>
            </div>

            {/* X close button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
