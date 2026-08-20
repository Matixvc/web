import MeshGradientBackground from "@/components/MeshGradientBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MeshGradientBackground />
      <Navigation />
      <Hero />
      <BentoGrid />
      <Testimonials />
      <Footer />
    </main>
  );
}
