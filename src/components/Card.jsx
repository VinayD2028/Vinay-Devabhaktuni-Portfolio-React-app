import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import styles from './Card.module.css';

export default function Card({ item, onClick, layoutId }) {
  return (
    <motion.article
      className={styles.card}
      layoutId={layoutId}
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${item.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      style={{ '--accent': item.accentColor || 'var(--color-cyan)' }}
    >
      {/* Gradient background */}
      <div
        className={styles.cardBg}
        style={{ background: item.gradient || 'linear-gradient(135deg, #0A1628 0%, #060D1F 100%)' }}
      />

      {/* Glass overlay */}
      <div className={styles.cardGlass} />

      {/* Top highlight bar */}
      <div className={styles.accentBar} style={{ background: item.accentColor || 'var(--color-cyan)' }} />

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTier}>{item.subtitle}</span>
          <div className={styles.cardActions}>
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className={styles.cardAction}
                onClick={e => e.stopPropagation()}
                aria-label="GitHub repository"
              >
                <Github size={14} />
              </a>
            )}
            {item.live && (
              <a
                href={item.live}
                target="_blank"
                rel="noreferrer"
                className={styles.cardAction}
                onClick={e => e.stopPropagation()}
                aria-label="Live demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.description}</p>

        {item.impact && (
          <div className={styles.cardImpact}>
            <span style={{ color: item.accentColor || 'var(--color-cyan)' }}>↑</span> {item.impact}
          </div>
        )}

        <div className={styles.cardTags}>
          {item.tags?.slice(0, 4).map(tag => (
            <span key={tag} className={styles.cardTag} style={{
              borderColor: `${item.accentColor}33` || 'rgba(0,200,240,0.2)',
              color: item.accentColor || 'var(--color-cyan)',
              background: `${item.accentColor}11` || 'rgba(0,200,240,0.07)',
            }}>
              {tag}
            </span>
          ))}
          {item.tags?.length > 4 && (
            <span className={styles.cardTagMore}>+{item.tags.length - 4}</span>
          )}
        </div>

        <div className={styles.cardCta}>
          <span>View details</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.article>
  );
}
