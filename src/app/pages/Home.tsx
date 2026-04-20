import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Showcase } from "../components/Showcase";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <Services />
      <Showcase />
      <Testimonials />
      <CTA />
    </div>
  );
}