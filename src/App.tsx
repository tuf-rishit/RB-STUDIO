/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioPage } from './components/PortfolioPage';
import { ResumeView } from './components/ResumeView';

function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <BackgroundEffect />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/resume" element={<ResumeView />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
