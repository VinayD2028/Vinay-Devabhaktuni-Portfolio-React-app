import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import GlassSurface from './GlassSurface';
import { profile } from '../data/content';
import styles from './Navbar.module.css';

// Smooth scroll helper — offsets for fixed navbar
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

const NAV_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Research',   id: 'research' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education',  id: 'education' },
  { label: 'Contact',    id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest(`.${styles.resumeWrap}`)) setResumeOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <motion.header
      className={styles.navbar}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassSurface
        className={`${styles.inner} ${scrolled ? styles.scrolled : ''}`}
        style={{ borderRadius: 0 }}
      >
        <button className={styles.logo} onClick={() => scrollTo('hero')}>
          <span className={styles.logoMono}>VD</span>
          <span className={styles.logoSep}>&gt;</span>
          <span className={styles.logoCursor}>_</span>
        </button>

        <nav className={styles.links} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              className={styles.link}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={profile.github} target="_blank" rel="noreferrer" className={styles.iconBtn} aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.iconBtn} aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className={styles.iconBtn} aria-label="Email">
            <Mail size={18} />
          </a>
          <div className={styles.resumeWrap}>
            <button
              className={styles.resumeBtn}
              onClick={() => setResumeOpen(v => !v)}
              aria-expanded={resumeOpen}
            >
              Resume <ChevronDown size={14} />
            </button>
            {resumeOpen && (
              <motion.div
                className={styles.resumeDropdown}
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.18 }}
              >
                <GlassSurface heavy className={styles.dropdownInner}>
                  <a href={profile.resumeDE} download className={styles.dropdownItem}>
                    <span className={styles.dropdownIcon} style={{ color: 'var(--color-cyan)' }}>DE</span>
                    <div>
                      <div className={styles.dropdownTitle}>Data Engineer</div>
                      <div className={styles.dropdownSub}>AWS · PySpark · Redshift</div>
                    </div>
                    <Download size={13} />
                  </a>
                  <a href={profile.resumeSWE} download className={styles.dropdownItem}>
                    <span className={styles.dropdownIcon} style={{ color: 'var(--color-purple)' }}>SWE</span>
                    <div>
                      <div className={styles.dropdownTitle}>Software Developer</div>
                      <div className={styles.dropdownSub}>Java · Angular · Spring Boot</div>
                    </div>
                    <Download size={13} />
                  </a>
                </GlassSurface>
              </motion.div>
            )}
          </div>
        </div>
      </GlassSurface>
    </motion.header>
  );
}
