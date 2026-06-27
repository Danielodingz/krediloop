import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AppSection from '@/components/AppSection';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AppSection />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
