import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Links from './pages/Links'

function AppContent() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col starfield text-slate-200 transition-colors duration-300 ${!isDark ? 'light-mode' : ''}`}>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
