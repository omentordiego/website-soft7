import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Automation from './components/Automation';
import AdvancedAI from './components/AdvancedAI';
import Process from './components/Process';
import Team from './components/Team';
import FAQ from './components/FAQ';

function App() {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Automation />
      <AdvancedAI />
      <Process />
      <Team />
      <FAQ />
    </Layout>
  );
}

export default App;
