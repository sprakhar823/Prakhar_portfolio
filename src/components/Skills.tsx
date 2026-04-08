import { motion } from 'framer-motion'
import { Code2, Database } from 'lucide-react'

export const Skills = () => {
  return (
    <section>
      <h2 className="section-title">Skills & Capabilities</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <div className="flex items-center gap-3 mb-4" style={{ color: 'var(--accent-color)' }}>
            <Code2 size={24} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Programming</h3>
          </div>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Java', 'Python', 'TypeScript', 'JavaScript', 'HTML/CSS'].map(skill => (
              <span key={skill} className="badge">{skill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card"
        >
          <div className="flex items-center gap-3 mb-4" style={{ color: '#8b5cf6' }}>
            <Database size={24} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Technologies & CS</h3>
          </div>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Spring Boot', 'React', 'Vite', 'FastAPI', 'Hibernate', 'OOPs', 'SQL', 'D3.js', 'Tailwind CSS'].map(skill => (
              <span key={skill} className="badge" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#c4b5fd', borderColor: 'rgba(139, 92, 246, 0.2)' }}>{skill}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
