import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import AdditionalFeatures from '../components/Home/AdditionalFeatures';

export default function Home() {
  return (
    <div className="px-4 py-8">
      <Hero />
      <Features />
    </div>
  );
}