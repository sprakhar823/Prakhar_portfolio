import { motion } from 'framer-motion'
import { Award, GraduationCap, Users } from 'lucide-react'

export const Achievements = () => {
  return (
    <section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Education & Positions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Education</h2>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div className="flex items-center gap-3 mb-2" style={{ color: 'var(--accent-color)' }}>
                <GraduationCap size={20} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>B.Tech., ECE</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Birla Institute of Technology, Mesra (Patna)</p>
              <div className="flex justify-between items-center mt-3 text-sm" style={{ color: '#94a3b8' }}>
                <span>CGPA: 6.50</span>
                <span>2022 - 2026</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Leadership</h2>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li className="flex gap-3">
                  <Users size={16} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem' }}>Supervisor, Literary Club, BITP</h4>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Nov 2023 - May 2025</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users size={16} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem' }}>Event Coordinator, Technika, BITP</h4>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Nov 2024 - Dec 2024</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Achievements</h2>
          <div className="glass-card flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <Award size={20} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#fff', fontSize: '1rem' }}>Level 2: Adobe India Hackathon</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>August 2025 - September 2025</p>
              </div>
            </div>
            
            <div style={{ height: '1px', background: 'var(--glass-border)' }}></div>
            
            <div className="flex gap-3 items-start">
              <Award size={20} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#fff', fontSize: '1rem' }}>Level 1: Flipkart GRiD 6.0</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Robotics Challenge</p>
              </div>
            </div>
            
            <div style={{ height: '1px', background: 'var(--glass-border)' }}></div>
            
            <div className="flex gap-3 items-start">
              <Award size={20} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#fff', fontSize: '1rem' }}>Level 1: Flipkart GRiD 6.0</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Software Development Track</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
