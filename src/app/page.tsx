'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { BentoFeaturesSection } from '@/components/BentoFeaturesSection';
import { CapabilityWheeler } from '@/components/CapabilityWheeler';
import { SelectedWorkSection } from '@/components/SelectedWorkSection';
import { ProcessSection } from '@/components/ProcessSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  const [prefilledNote, setPrefilledNote] = useState('');

  const handleAskSubmit = (query: string) => {
    setPrefilledNote(query);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" className="ref-main-flow">
      {/* 01. Hero with 3D Chrome Star, Dual Pill CTAs & Logos */}
      <HeroSection onAskSubmit={handleAskSubmit} />

      {/* 02. Bento Grid Features Section (2x2 Dashboard, Chart, Connect, Rank Cards) */}
      <BentoFeaturesSection />

      {/* 03. Interactive Capability Wheeler Section */}
      <CapabilityWheeler />

      {/* 04. Selected Client Work (REXU Featured + Compact Case Studies) */}
      <SelectedWorkSection />

      {/* 04. 6-Stage Engineering Delivery Process */}
      <ProcessSection />

      {/* 05. Achievements Section (3D Isometric Floating Glass Stat Cards) */}
      <AchievementsSection />



      {/* 07. Two-Column Accordion FAQ Section */}
      <FAQSection />

      {/* 08. Contact & Project Dossier Form */}
      <ContactSection prefilledNote={prefilledNote} />
    </main>
  );
}
