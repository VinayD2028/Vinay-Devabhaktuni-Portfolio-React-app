import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import styles from './CategoryRow.module.css';

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const staggerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// singleColumn=true → 1 column (research, skills-style)
// default → 2 columns, all cards shown, no pagination
export default function CategoryRow({ category, onCardClick, singleColumn = false }) {
  return (
    <motion.div
      className={styles.row}
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className={styles.rowHeader}>
        <span className={styles.rowAccent} style={{ background: category.accent }} />
        <h2 className={styles.rowTitle}>{category.title}</h2>
        <span className={styles.rowCount}>{category.items.length}</span>
      </div>

      <motion.div
        className={singleColumn ? styles.gridSingle : styles.grid}
        variants={staggerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {category.items.map((item) => (
          <motion.div key={item.id} variants={cardVariants} style={{ display: 'flex', flexDirection: 'column' }}>
            <Card item={item} layoutId={`card-${item.id}`} onClick={() => onCardClick(item)} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
