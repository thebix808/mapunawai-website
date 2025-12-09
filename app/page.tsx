import Hero from "@/components/Hero";
import ImpactStatement from "@/components/ImpactStatement";
import Programs from "@/components/Programs";
import ImpactStats from "@/components/ImpactStats";
import CommunityStories from "@/components/CommunityStories";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactStatement />
      <Programs />
      <ImpactStats />
      <CommunityStories />
      <CTABanner />
      <Footer />
    </main>
  );
}
