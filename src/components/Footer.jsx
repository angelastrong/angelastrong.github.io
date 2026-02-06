function Footer() {
  return (
    <footer className="bg-cosmic/60 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Angela Strong. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
