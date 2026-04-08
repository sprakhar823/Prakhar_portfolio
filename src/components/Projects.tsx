import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const GithubIcon = ({ size = 20, style }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.1-.3 6.4-1.5 6.4-6.9a5.1 5.1 0 0 0-1.5-3.6 4.7 4.7 0 0 0 .1-3.5s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a4.7 4.7 0 0 0 .1 3.5A5.1 5.1 0 0 0 3.6 8.9c0 5.4 3.3 6.6 6.4 6.9a4.8 4.8 0 0 0-1 3.26V22"></path>
  </svg>
)

const projectData = [
  {
    title: 'Project A: FinanceApp',
    date: 'March 2026 - April 2026',
    description: 'A full-stack personal finance application enabling efficient management of income, expenses, and transactions with scalable CRUD operations. Implemented secure authentication and a financial analytics dashboard with real-time data aggregation.',
    tech: ['React', 'Vite', 'Spring Boot', 'Java 17', 'Tailwind CSS', 'JWT'],
    image: '/finance_app_preview.png',
    githubUrl: 'https://github.com/sprakhar823/FinanceApp',
    liveUrl: '#'
  },
  {
    title: 'Project B: Graphmind',
    date: 'Feb 2026 - March 2026',
    description: 'Interactive graph visualization platform rendering 598+ nodes and 800+ relationships to model SAP Order-to-Cash (O2C) processes. Integrated an AI-powered natural language query system using Groq (LLaMA 3.3 70B) for dynamic node highlights.',
    tech: ['React', 'TypeScript', 'Vite', 'D3.js', 'Groq LLaMA 3.3', 'Node Inspector'],
    image: '/graphmind_preview.png',
    githubUrl: 'https://github.com/sprakhar823/Graphmind',
    liveUrl: '#'
  },
  {
    title: 'Project C: NodeCanvas',
    date: 'Feb 2026 - March 2026',
    description: 'Visual pipeline builder enabling users to design and manage Directed Acyclic Graphs (DAGs) via an intuitive drag-and-drop interface. Real-time workflow validation via Kahn’s Algorithm on the backend.',
    tech: ['ReactFlow', 'Zustand', 'FastAPI', 'Python', 'Kahn Algorithm'],
    image: '/nodecanvas_preview.png',
    githubUrl: 'https://github.com/sprakhar823/NodeCanvas',
    liveUrl: '#'
  }
]

export const Projects = () => {
  return (
    <section>
      <h2 className="section-title">Featured Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projectData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="glass-card"
            style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}
          >
            <div style={{ height: '200px', width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--glass-border)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div className="flex justify-between items-center mb-2">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{project.title}</h3>
                <div className="flex gap-2 text-slate-400">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                    <GithubIcon size={18} style={{ cursor: 'pointer' }} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live Project">
                    <ExternalLink size={18} style={{ cursor: 'pointer' }} />
                  </a>
                </div>
              </div>
              
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                {project.date}
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
