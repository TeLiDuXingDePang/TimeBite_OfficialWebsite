import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Solutions from './components/sections/Solutions';
import Technology from './components/sections/Technology';
import About from './components/sections/About';
import DevelopTools from './components/sections/DevelopTools';
import CTA from './components/sections/CTA';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import DataSecurity from './pages/legal/DataSecurity';
import CookiePolicy from './pages/legal/CookiePolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Layout>
              <Hero />
              <About />
              <DevelopTools />
              <Features />
              <Solutions />
              <Technology />
              <CTA />
            </Layout>
          </div>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/data-security" element={<DataSecurity />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
