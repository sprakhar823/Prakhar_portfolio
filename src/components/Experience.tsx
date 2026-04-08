import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export const Experience = () => {
  return (
    <section>
      <h2 className="section-title">Experience</h2>
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card"
        >
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)'}}>
                Software Development Intern
              </h3>
              <div className="flex items-center gap-2 mt-2 text-sm" style={{ color: 'var(--accent-color)'}}>
                <Briefcase size={16} /> Central Coalfields Limited
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'var(--text-secondary)'}}>July 2025 - Aug 2025</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Ranchi, Jharkhand, India</div>
            </div>
          </div>
          
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li>
              Developed and deployed a full-stack event management platform (CampusConnect) using <strong style={{color:'#fff'}}>Spring Boot, Hibernate, and React.js</strong>, supporting 50+ active users.
            </li>
            <li>
              Designed and implemented RESTful APIs for event registration, user management, and notifications, reducing manual processing time by 70%.
            </li>
            <li>
              Implemented secure authentication and authorization using <strong style={{color:'#fff'}}>Spring Security, JWT, and role-based access control (RBAC)</strong>, ensuring protected access to APIs.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
