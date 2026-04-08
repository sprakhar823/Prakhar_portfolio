import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Achievements } from './components/Achievements'

function App() {
  return (
    <main className="container">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', marginTop: '2rem' }}>
        <p>© {new Date().getFullYear()} Prakhar Singh. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
