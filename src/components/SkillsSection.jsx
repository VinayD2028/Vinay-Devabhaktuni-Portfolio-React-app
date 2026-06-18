import React from 'react';
import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface';
import { skills } from '../data/content';
import styles from './SkillsSection.module.css';

const ACCENT_COLORS = ['var(--color-cyan)', 'var(--color-amber)', 'var(--color-purple)', 'var(--color-green)'];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={styles.header}
        >
          <div className={styles.rowHeader}>
            <span className={styles.rowAccent} style={{ background: 'var(--color-cyan)' }} />
            <h2 className={styles.title}>Skills</h2>
            <span className={styles.rowCount}>{Object.keys(skills).length} groups</span>
          </div>
          <p className={styles.desc}>Built through 2 years industry, graduate research, and 20+ projects.</p>
        </motion.div>

        <div className={styles.grid}>
          {Object.entries(skills).map(([group, items], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: gi * 0.08 }}
            >
              <GlassSurface className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardAccent} style={{ background: ACCENT_COLORS[gi % 4] }} />
                  <span className={styles.cardTitle} style={{ color: ACCENT_COLORS[gi % 4] }}>{group}</span>
                </div>
                <div className={styles.pills}>
                  {items.map(skill => (
                    <span
                      key={skill}
                      className={styles.pill}
                      style={{
                        borderColor: `${ACCENT_COLORS[gi % 4]}33`,
                        color: ACCENT_COLORS[gi % 4],
                        background: `${ACCENT_COLORS[gi % 4]}0D`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassSurface>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
