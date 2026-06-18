import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import GlassSurface from './GlassSurface';
import { aiKnowledge } from '../data/content';
import styles from './AIChatWidget.module.css';

const SUGGESTIONS = [
  "What's Vinay's PySpark experience?",
  "Tell me about the LLM hallucination research",
  "Is Vinay authorized to work in the US?",
  "What AWS services has he worked with?",
  "When is Vinay available to start?",
];

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hi! I'm Vinay's portfolio AI. Ask me about his skills, projects, research, or work authorization — I'll answer from his actual resume and work.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, messages]);

  const sendMessage = async (text) => {
    const q = text || input.trim();
    if (!q || loading) return;
    setInput('');

    const userMsg = { role: 'user', text: q };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    const newHistory = [...history, { role: 'user', content: q }];

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory, system: aiKnowledge }),
      });

      // Safe JSON parse — handle empty or non-JSON responses
      let data;
      const text = await resp.text();
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Server returned invalid response (status ${resp.status}). Check that ANTHROPIC_API_KEY is set in Vercel env vars and redeploy.`);
      }

      if (!resp.ok || data.error) {
        const errMsg = typeof data.error === 'string' ? data.error
          : data.error?.message || `Server error ${resp.status}`;
        throw new Error(errMsg);
      }

      const answer = data.content?.[0]?.text || "Sorry, I couldn't get a response right now.";
      setHistory([...newHistory, { role: 'assistant', content: answer }]);
      setMessages(prev => [...prev, { role: 'ai', text: answer }]);
    } catch (e) {
      setMessages(prev => [...prev, {
        role: 'ai',
        text: `${e.message}`,
        error: true,
      }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        className={styles.fab}
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Close AI chat' : 'Open AI chat'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className={styles.fabLabel}>Ask AI</span>}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <GlassSurface heavy className={styles.panelInner}>
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.headerInfo}>
                  <div className={styles.avatarDot}><Bot size={14} /></div>
                  <div>
                    <div className={styles.headerTitle}>Vinay's Portfolio AI</div>
                    <div className={styles.headerStatus}>● online · powered by Claude</div>
                  </div>
                </div>
                <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
                  <X size={16} />
                </button>
              </div>

              {/* Suggestions */}
              {messages.length === 1 && (
                <div className={styles.suggestions}>
                  {SUGGESTIONS.map(s => (
                    <button key={s} className={styles.suggestion} onClick={() => sendMessage(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Messages */}
              <div className={styles.messages}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`${styles.msg} ${msg.role === 'user' ? styles.msgUser : styles.msgAi}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={styles.msgIcon}>
                      {msg.role === 'ai' ? <Bot size={13} /> : <User size={13} />}
                    </div>
                    <div className={`${styles.bubble} ${msg.error ? styles.bubbleError : ''}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className={`${styles.msg} ${styles.msgAi}`}>
                    <div className={styles.msgIcon}><Bot size={13} /></div>
                    <div className={styles.bubble}>
                      <div className={styles.thinking}>
                        <span /><span /><span />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className={styles.inputRow}>
                <input
                  ref={inputRef}
                  className={styles.input}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about Vinay..."
                  disabled={loading}
                />
                <button
                  className={styles.sendBtn}
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  aria-label="Send"
                >
                  <Send size={16} />
                </button>
              </div>

              <div className={styles.disclaimer}>
                Answers sourced from Vinay's verified resume & projects
              </div>
            </GlassSurface>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
