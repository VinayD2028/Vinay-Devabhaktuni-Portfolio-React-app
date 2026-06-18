import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info, Github, ArrowRight } from 'lucide-react';
import { profile, featured } from '../data/content';
import profilePhoto from '../assets/IMG_2802.jpeg';
import styles from './HeroBanner.module.css';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroBanner({ onOpenFeatured }) {
  const nodes = ['S3', 'Glue', 'Redshift', 'Athena', 'Lambda', 'API'];

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      {/* Background */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGradient} />
        <div className={styles.bgGrid} />
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
        <div className={styles.bgOrb3} />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
        >
          <div className={styles.photoRing}>
            <img src={profilePhoto} alt={profile.name} className={styles.photo} />
          </div>
          <div className={styles.statusDot} aria-label="Available" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={itemVariants} className={styles.eyebrow}>
            // software &amp; data engineer · ai researcher
          </motion.p>
          <motion.h1 variants={itemVariants} className={styles.name}>
            Vinay<br /><span className={styles.nameAccent}>Devabhaktuni</span>
          </motion.h1>
          <motion.p variants={itemVariants} className={styles.tagline}>
            {profile.about[0]}
          </motion.p>
          <motion.div variants={itemVariants} className={styles.badges}>
            <span className={styles.badge}><span className={styles.dot} />{profile.workAuth}</span>
            <span className={styles.badge}>MS CS · UNCC · 3.9 GPA</span>
            <span className={styles.badge}>Available {profile.available}</span>
          </motion.div>
          <motion.div variants={itemVariants} className={styles.actions}>
            <button className={styles.btnPrimary} onClick={onOpenFeatured}>
              <Play size={16} fill="currentColor" /> View Featured Project
            </button>
            <a href="#projects" className={styles.btnGhost}><Info size={16} /> Explore Work</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={styles.btnGhost}>
              <Github size={16} /> GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom strip — pipeline left, billboard right — NO overlap with content */}
      <motion.div
        className={styles.bottomStrip}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        aria-hidden="true"
      >
      {/* Billboard left */}
        <div className={styles.stripLeft}>
          <span className={styles.billboardLabel}>Featured</span>
          <span className={styles.billboardTitle}>{featured.title}</span>
          <ArrowRight size={16} className={styles.billboardArrow} />
        </div>

        <div className={styles.stripSep} />

        {/* Pipeline right */}
        <div className={styles.stripRight}>
          <span className={styles.pipelineLabel}>// pipeline</span>
          {nodes.map((node, i) => (
            <React.Fragment key={node}>
              <motion.div
                className={styles.pipeNode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.1 + i * 0.08 }}
              >
                {node}
              </motion.div>
              {i < nodes.length - 1 && (
                <div className={styles.pipeArrow}>
                  <div className={styles.pipeParticle} style={{ animationDelay: `${i * 0.42}s` }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
