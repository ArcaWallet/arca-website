import { Hero } from "@/components/Hero";
import { WhyArca } from "@/components/WhyArca";
import { ProductScroll } from "@/components/ProductScroll";
import { Stats } from "@/components/Stats";
import { BalanceTracking } from "@/components/BalanceTracking";
import { Proximity } from "@/components/Proximity";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyArca />
      <ProductScroll />
      <Stats />
      <BalanceTracking />
      <Proximity />
      <Pricing />
      <Footer />
    </>
  );
}
