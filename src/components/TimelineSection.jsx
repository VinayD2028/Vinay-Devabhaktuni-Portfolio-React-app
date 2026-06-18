import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GlassSurface from './GlassSurface';
import { categories, education } from '../data/content';
import styles from './TimelineSection.module.css';

const EXPERIENCE_ITEMS = categories.find(c => c.id === 'experience')?.items || [];

/* ── Expandable work card ── */
function WorkCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const accent = item.accentColor || '#FFB800';
  return (
    <motion.div
      className={styles.entry}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <div className={styles.dotWrap}>
        <div className={styles.dot} style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />
      </div>
      <GlassSurface className={styles.card}>
        <div className={styles.accentBar} style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        <div className={styles.cardTop}>
          <div className={styles.cardMeta}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardSub} style={{ color: accent }}>{item.subtitle}</p>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
          <button className={styles.expandBtn} onClick={() => setExpanded(v => !v)} aria-label={expanded ? 'Collapse' : 'Expand'}>
            {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
        <div className={styles.tags}>
          {item.tags?.slice(0, 6).map(tag => (
            <span key={tag} className={styles.tag} style={{ borderColor: `${accent}33`, color: accent, background: `${accent}11` }}>{tag}</span>
          ))}
        </div>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.detailDivider} />
            {(item.longDescription || item.description).split('\n').map((line, i) =>
              line.trim() === '' ? <br key={i} /> : <p key={i} className={styles.detailLine}>{line}</p>
            )}
          </motion.div>
        )}
      </GlassSurface>
    </motion.div>
  );
}

/* ── Education card ── */
function EduCard({ edu, index }) {
  const [expanded, setExpanded] = useState(false);
  const accent = '#00C8F0';
  return (
    <motion.div
      className={styles.entry}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      <div className={styles.dotWrap}>
        <div className={styles.dot} style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />
      </div>
      <GlassSurface className={styles.card}>
        <div className={styles.accentBar} style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        <div className={styles.cardTop}>
          <div className={styles.cardMeta}>
            <h3 className={styles.cardTitle}>{edu.degree}</h3>
            <p className={styles.cardSub} style={{ color: accent }}>{edu.school} · {edu.period}</p>
            <p className={styles.cardDesc}>{edu.location}{edu.note ? ' · ' + edu.note : ''}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className={styles.gpaBadge} style={{ color: accent, borderColor: `${accent}44` }}>
              <div className={styles.gpaValue}>{edu.gpa}</div>
              <div className={styles.gpaLabel}>GPA</div>
            </div>
            <button className={styles.expandBtn} onClick={() => setExpanded(v => !v)} aria-label={expanded ? 'Collapse' : 'Expand'}>
              {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>
        </div>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.detailDivider} />
            <div className={styles.certLabel}>Certificates & Courses</div>
            <div className={styles.certTags}>
              {edu.certs.map(c => (
                <span key={c} className={styles.certTag}>{c}</span>
              ))}
            </div>
          </motion.div>
        )}
      </GlassSurface>
    </motion.div>
  );
}

/* ── Shared section wrapper ── */
function TimelineBlock({ id, accentColor, title, count, lineColor, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.rowHeader}>
            <span className={styles.rowAccent} style={{ background: accentColor }} />
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.rowCount}>{count}</span>
          </div>
          <p className={styles.desc}>Newest first</p>
        </motion.div>
        <div className={styles.timeline}>
          <div className={styles.line} style={{ background: lineColor }} />
          {children}
        </div>
      </div>
    </section>
  );
}

export function ExperienceTimeline() {
  return (
    <TimelineBlock
      id="experience"
      accentColor="#FFB800"
      title="Experience"
      count={`${EXPERIENCE_ITEMS.length} roles`}
      lineColor="linear-gradient(to bottom, #FFB800, rgba(255,184,0,0.1))"
    >
      {EXPERIENCE_ITEMS.map((item, i) => <WorkCard key={item.id} item={item} index={i} />)}
    </TimelineBlock>
  );
}

export function EducationTimeline() {
  return (
    <TimelineBlock
      id="education"
      accentColor="#00C8F0"
      title="Education"
      count={`${education.length} degrees`}
      lineColor="linear-gradient(to bottom, #00C8F0, rgba(0,200,240,0.1))"
    >
      {education.map((edu, i) => <EduCard key={edu.degree} edu={edu} index={i} />)}
    </TimelineBlock>
  );
}

export default function TimelineSection() {
  return (
    <>
      <ExperienceTimeline />
      <EducationTimeline />
    </>
  );
}
