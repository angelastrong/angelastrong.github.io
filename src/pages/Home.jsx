import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-4">
        Hi, I'm <span className="text-violet-400">Angela Strong</span>
        <span className="cursor-blink"></span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl">
        Software engineer with experience across multiple industries, currently in aerospace 🚀
      </p>
      <div className="flex gap-4">
        <Link
          to="/about"
          className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all violet-glow"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="px-6 py-3 border border-violet-500/30 text-slate-200 rounded-lg hover:border-violet-400/50 hover:bg-violet-500/10 transition-all"
        >
          View Projects
        </Link>
      </div>
    </div>
  )
}

export default Home
