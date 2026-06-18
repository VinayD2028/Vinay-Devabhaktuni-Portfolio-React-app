import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Calendar } from 'lucide-react';
import GlassSurface from './GlassSurface';
import { profile } from '../data/content';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
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
            <h2 className={styles.title}>Let's Connect</h2>
          </div>
          <p className={styles.desc}>
            Open to Data Engineer, AI Engineer, and Software Developer roles starting {profile.available}.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={styles.links}
          >
            {[
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: Linkedin, label: 'LinkedIn', value: 'vinay-devabhaktuni', href: profile.linkedin },
              { icon: Github, label: 'GitHub', value: 'VinayD2028', href: profile.github },
              { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\D/g,'')}` },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className={styles.contactItem}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlassSurface className={styles.contactIcon}>
                  <Icon size={18} />
                </GlassSurface>
                <div>
                  <div className={styles.contactLabel}>{label}</div>
                  <div className={styles.contactValue}>{value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <GlassSurface className={styles.quickFacts}>
              <div className={styles.qfTitle}>// quick facts</div>
              {[
                { icon: MapPin, label: 'Location', value: 'Anywhere · USA', color: 'var(--color-cyan)' },
                { icon: Calendar, label: 'Available', value: profile.available, color: 'var(--color-white)' },
                { label: 'Work Auth', value: profile.workAuth, color: 'var(--color-green)' },
                { label: 'Target Roles', value: 'Data Eng · AI Eng · SWE', color: 'var(--color-white)' },
                { label: 'Response', value: 'Within 24 hours', color: 'var(--color-green)' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className={styles.qfRow}>
                  <span className={styles.qfLabel}>
                    {Icon && <Icon size={13} style={{ marginRight: 4, verticalAlign: -1 }} />}
                    {label}
                  </span>
                  <span className={styles.qfValue} style={{ color }}>{value}</span>
                </div>
              ))}
            </GlassSurface>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
