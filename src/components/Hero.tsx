import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.1-.3 6.4-1.5 6.4-6.9a5.1 5.1 0 0 0-1.5-3.6 4.7 4.7 0 0 0 .1-3.5s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a4.7 4.7 0 0 0 .1 3.5A5.1 5.1 0 0 0 3.6 8.9c0 5.4 3.3 6.6 6.4 6.9a4.8 4.8 0 0 0-1 3.26V22"></path>
  </svg>
)

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
          Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Prakhar Singh</span>
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Software Development Intern | ECE @ BIT Mesra
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--text-secondary)' }}>
          Passionate about building scalable backend systems, interactive frontend visualizations, and learning new technologies to solve complex problems.
        </p>
        
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/sprakhar823" target="_blank" rel="noreferrer" className="flex items-center gap-2" style={{ padding: '0.8rem 1.5rem', background: 'var(--glass-bg)', borderRadius: '999px', border: '1px solid var(--glass-border)' }}>
            <GithubIcon size={20} />
            GitHub
          </a>
          <a href="https://linkedin.com/in//prakhar-singh-564012285/" target="_blank" rel="noreferrer" className="flex items-center gap-2" style={{ padding: '0.8rem 1.5rem', background: 'var(--accent-color)', color: '#fff', borderRadius: '999px' }}>
            <LinkedinIcon size={20} />
            LinkedIn
          </a>
          <a href="mailto:sprakhar823@gmail.com" className="flex items-center gap-2" style={{ padding: '0.8rem 1.5rem', background: 'var(--glass-bg)', borderRadius: '999px', border: '1px solid var(--glass-border)' }}>
            <Mail size={20} />
            Email
          </a>
        </div>
      </motion.div>
    </section>
  )
}
