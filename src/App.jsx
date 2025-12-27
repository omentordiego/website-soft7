import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Automation from './components/Automation';
import AdvancedAI from './components/AdvancedAI';
import Process from './components/Process';
import Team from './components/Team';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

const Home = () => (
  <>
    <Hero />
    <Benefits />
    <Automation />
    <AdvancedAI />
    <Process />
    <Team />
    <FAQ />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
