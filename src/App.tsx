import { Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import WorkPage from '@/pages/WorkPage'
import ContactPage from '@/pages/ContactPage'
import CommsAcademyCaseStudy from '@/pages/CommsAcademyCaseStudy'
import CaboodleCaseStudy from '@/pages/CaboodleCaseStudy'
function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="relative flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/case-study/comms-academy" element={<CommsAcademyCaseStudy />} />
            <Route path="/case-study/caboodle" element={<CaboodleCaseStudy />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
