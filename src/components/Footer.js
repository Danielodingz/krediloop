import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B163A] text-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Center CTA Block — desktop needs top margin to clear the absolute logo bar */}
        <div className="flex flex-col items-center text-center w-full max-w-2xl md:mt-[68px] z-10 px-4">

          {/* Medal video — absolute, centered above the text */}
          <video
            src="/medal-footer.webm"
            autoPlay
            loop
            muted
            playsInline
            /* To adjust the video up/down on mobile, change top-[0px] (e.g., top-[-20px] to move up) */
            className="relative top-[-70px] md:absolute md:top-[-5px] z-20 w-[120px] md:w-[197px] h-auto md:h-[280px] object-contain pointer-events-none"
          />

          {/* Top Info / Logo + Social — below video on mobile, absolute row on desktop */}
          {/* To adjust the gap between the video and the social icons on mobile, change mt-[10px] (e.g. mt-[-20px] to move closer) */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start mt-[10px] md:mt-0 md:absolute md:top-16 md:left-6 md:right-6 lg:px-12 pointer-events-none">

            {/* Logo Left */}
            <div className="hidden md:flex items-center space-x-4 pointer-events-auto mb-6 md:mb-0">
              <img src="/logo-footer.png" alt="KrediLoop Logo" className="w-12 h-12 md:w-15 md:h-15 object-contain" />
              <span className="text-[20px] md:text-[23px] font-semibold tracking-wide">KrediLoop</span>
            </div>

            {/* Social Links Right */}
            <div className="pointer-events-auto flex flex-col items-center md:items-end md:mr-12 lg:mr-16">
              <span className="text-sm font-semibold mb-3 md:mb-4">Contact us</span>
              <div className="flex space-x-2 md:space-x-3">
                {[
                  { name: 'Twitter', icon: '/twitter.svg' },
                  { name: 'LinkedIn', icon: '/linkedin.svg' },
                  { name: 'Email', icon: '/email.svg' },
                  { name: 'WhatsApp', icon: '/whatsapp.svg' },
                ].map((social) => (
                  <a key={social.name} href="#" className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] flex items-center justify-center transition-all duration-300 md:hover:scale-110 md:hover:-translate-y-1 md:hover:opacity-80">
                    <img src={social.icon} alt={social.name} className="w-full h-full object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* To adjust the gap between the video and this heading on DESKTOP, change md:pt-[250px] (larger number = more gap) */}
          <h2
            className="text-[24px] md:text-[52px] text-[#C1CEFA] font-semibold mt-[20px] md:mt-0 md:pt-[280px]"
            style={{ marginBottom: '14px' }}
          >
            Join the Future of Saving
          </h2>

          <p
            className="text-gray-300 text-[13px] md:text-[15px] font-normal max-w-xs md:max-w-md mx-auto"
            style={{ marginBottom: '34px' }}
          >
            Create groups, track contributions, and reach your goals faster. Start your journey to financial freedom with KrediLoop today.
          </p>

          <Link href="/waitlist" className="bg-white inline-block text-center !text-[#2F5CF0] border-2 border-[#2F5CF0] px-6 md:px-8 py-3 rounded-[12px] text-[15px] md:text-[19px] font-semibold tracking-wide transition-all duration-300 md:hover:scale-105 md:hover:-translate-y-1 md:hover:shadow-[0_10px_25px_rgba(47,92,240,0.35)] md:hover:bg-blue-50">
            Join Waitlist
          </Link>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="mt-16 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} KrediLoop. All rights reserved.
      </div>
    </footer>
  );
}
