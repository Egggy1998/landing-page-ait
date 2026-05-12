/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Scholarship from "./components/Scholarship";
import Benefits from "./components/Benefits";
import ProgramStructure from "./components/ProgramStructure";
import Rankings from "./components/Rankings";
import Faculty from "./components/Faculty";
import Testimonials from "./components/Testimonials";
import AdmissionInfo from "./components/AdmissionInfo";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-slate-900 selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Scholarship />
        <Benefits />
        <ProgramStructure />
        <Rankings />
        <Faculty />
        <Testimonials />
        <AdmissionInfo />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

