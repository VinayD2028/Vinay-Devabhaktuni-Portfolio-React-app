import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import GlassSurface from './GlassSurface';
import styles from './DetailModal.module.css';

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 40 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }
  },
  exit: {
    opacity: 0, scale: 0.92, y: 20,
    transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] }
  },
};

export default function DetailModal({ item, onClose }) {
  const closeRef = useRef(null);
  const prevFocus = useRef(null);

  // Focus trap + restore
  useEffect(() => {
    prevFocus.current = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
      prevFocus.current?.focus();
    };
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className={styles.root}>
        {/* Backdrop */}
        <motion.div
          className={styles.backdrop}
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <motion.div
          className={styles.modalWrap}
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <GlassSurface heavy className={styles.modal}>
              {/* Accent top bar */}
              <div
                className={styles.accentBar}
                style={{ background: `linear-gradient(90deg, ${item.accentColor || 'var(--color-cyan)'}, transparent)` }}
              />

              {/* Header */}
              <div className={styles.header}>
                <div>
                  <span className={styles.subtitle} style={{ color: item.accentColor || 'var(--color-cyan)' }}>
                    {item.subtitle}
                  </span>
                  <h2 className={styles.title}>{item.title}</h2>
                  {item.impact && (
                    <p className={styles.impact}>
                      <span style={{ color: item.accentColor || 'var(--color-cyan)' }}>↑</span> {item.impact}
                    </p>
                  )}
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={onClose}
                  ref={closeRef}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Stats (for research items) */}
              {item.stats && (
                <div className={styles.stats}>
                  {item.stats.map(s => (
                    <div key={s.label} className={styles.stat}>
                      <div className={styles.statValue} style={{ color: item.accentColor || 'var(--color-cyan)' }}>
                        {s.value}
                      </div>
                      <div className={styles.statLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className={styles.body}>
                {(item.longDescription || item.description).split('\n').map((line, i) => (
                  line.trim() === '' ? <br key={i} /> :
                  <p key={i} className={styles.desc} style={{ marginBottom: '8px' }}>{line}</p>
                ))}
              </div>

              {/* Tags */}
              <div className={styles.tags}>
                {item.tags?.map(tag => (
                  <span
                    key={tag}
                    className={styles.tag}
                    style={{
                      borderColor: `${item.accentColor}33` || 'rgba(0,200,240,0.2)',
                      color: item.accentColor || 'var(--color-cyan)',
                      background: `${item.accentColor}11` || 'rgba(0,200,240,0.07)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer links */}
              {(item.github || item.live) && (
                <div className={styles.footer}>
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noreferrer" className={styles.footerBtn}>
                      <Github size={16} /> View on GitHub
                    </a>
                  )}
                  {item.live && (
                    <a href={item.live} target="_blank" rel="noreferrer" className={`${styles.footerBtn} ${styles.footerBtnPrimary}`}
                      style={{ background: item.accentColor || 'var(--color-cyan)', color: 'var(--color-bg)' }}>
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </GlassSurface>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
