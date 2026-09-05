import { HeroSection } from "./components/HeroSection/HeroSection";
import { InfoSection } from "./components/InfoSection/InfoSection";
import { Playground } from "./components/Playground/Playground";

function App() {
  return (
    <main className="app">
      <HeroSection />
      <InfoSection />
      <Playground />
    </main>
  );
}

export default App;
