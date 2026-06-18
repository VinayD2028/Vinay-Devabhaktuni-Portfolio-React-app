import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import CategoryRow from './components/CategoryRow';
import DetailModal from './components/DetailModal';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import AIChatWidget from './components/AIChatWidget';
import { categories, featured } from './data/content';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openFeatured = () => {
    const featuredItem = categories[0]?.items.find(i => i.id === featured.id) || categories[0]?.items[0];
    if (featuredItem) setSelectedItem(featuredItem);
  };

  // Only show projects and research in category rows (experience goes to timeline)
  const rowCategories = categories.filter(c => c.id !== 'experience');

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner onOpenFeatured={openFeatured} />
        <AboutSection />

        {/* Projects + Research rows */}
        <div id="projects" style={{ paddingTop: '60px' }}>
          {rowCategories.filter(c => ['featured-projects','more-projects'].includes(c.id)).map(cat => (
            <CategoryRow key={cat.id} category={cat} onCardClick={setSelectedItem} />
          ))}
        </div>

        <section id="research">
          {rowCategories.filter(c => c.id === 'research').map(cat => (
            <CategoryRow key={cat.id} category={cat} onCardClick={setSelectedItem} singleColumn />
          ))}
        </section>

        <SkillsSection />
        <TimelineSection />
        <ContactSection />
      </main>

      <footer style={{
        borderTop: '1px solid var(--glass-border)',
        padding: '2rem 5%',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--color-muted)',
      }}>
        Vinay Devabhaktuni · vinaydevabhaktuni.vercel.app · 2026
      </footer>

      <AIChatWidget />

      <AnimatePresence>
        {selectedItem && (
          <DetailModal
            key={selectedItem.id}
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
