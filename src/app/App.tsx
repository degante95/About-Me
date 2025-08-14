import { Navbar } from "@components/layout";
import { About, Connect, Hero, Projects, Tech } from "@/sections";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Connect />
      </main>
    </>
  );
}
