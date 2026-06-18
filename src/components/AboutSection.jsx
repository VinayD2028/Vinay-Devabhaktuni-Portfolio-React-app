import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import GlassSurface from './GlassSurface';
import { profile } from '../data/content';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={styles.header}
        >
          <div className={styles.rowHeader}>
            <span className={styles.rowAccent} />
            <h2 className={styles.title}>Who I Am</h2>
          </div>
        </motion.div>

        {/* All cards in a single column */}
        <div className={styles.stack}>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassSurface className={styles.bioCard}>
              <div className={styles.photoRow}>
                <div className={styles.photoThumb}>
                  <img src={profile.photo} alt={profile.name} className={styles.photo} />
                </div>
                <div>
                  <div className={styles.bioName}>{profile.name}</div>
                  <div className={styles.bioTitle}>{profile.title}</div>
                  <div className={styles.bioLocation}>📍 {profile.location}</div>
                </div>
              </div>
              <div className={styles.bioText}>
                {profile.about.map((para, i) => (
                  <p key={i} className={i === 2 ? styles.bioQuote : styles.bioPara}>
                    {i === 2 ? `"${para}"` : para}
                  </p>
                ))}
              </div>
              <div className={styles.socialRow}>
                <a href={profile.github} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Github size={15} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a href={`mailto:${profile.email}`} className={styles.socialLink}>
                  <Mail size={15} /> Email
                </a>
              </div>
            </GlassSurface>
          </motion.div>

          {/* Currently building + credentials in a 2-col row */}
          <div className={styles.twoCol}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              <GlassSurface className={styles.miniCard}>
                <div className={styles.cardLabel}>🔭 Currently Building</div>
                <div className={styles.buildingList}>
                  {profile.currentlyBuilding.map((item, i) => (
                    <div key={i} className={styles.buildingItem}>
                      <span>{item.icon}</span>
                      <span className={styles.buildingText}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </GlassSurface>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <GlassSurface className={styles.miniCard}>
                <div className={styles.cardLabel}>🏆 Credentials</div>
                {[
                  { label: 'IEEE Co-author', value: 'Trust Engineering for LLM Code', color: 'var(--color-purple)' },
                  { label: 'AWS Certified', value: 'Academy Data Engineering', color: 'var(--color-amber)' },
                  { label: 'MS CS', value: 'UNC Charlotte · GPA 3.9/4.0', color: 'var(--color-cyan)' },
                  { label: 'Industry', value: '2+ yrs · Cognizant', color: 'var(--color-green)' },
                ].map(({ label, value, color }) => (
                  <div key={label} className={styles.credRow}>
                    <span className={styles.credDot} style={{ background: color }} />
                    <div>
                      <div className={styles.credLabel}>{label}</div>
                      <div className={styles.credValue}>{value}</div>
                    </div>
                  </div>
                ))}
              </GlassSurface>
            </motion.div>
          </div>

          {/* Open to work */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <GlassSurface className={styles.openCard}>
              <div className={styles.openTitle}>🤝 Open to opportunities</div>
              <div className={styles.openList}>
                {['Backend / Full-stack development','Data pipeline architecture','ML model deployment','Technical problem-solving'].map(item => (
                  <span key={item} className={styles.openTag}>{item}</span>
                ))}
              </div>
              <a href={`mailto:${profile.email}`} className={styles.openCta}>
                Let's work together <ExternalLink size={13} />
              </a>
            </GlassSurface>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
