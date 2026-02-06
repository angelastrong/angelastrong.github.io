function About() {
  const experience = [
    {
      company: 'Slingshot Aerospace',
      role: 'Software Engineer',
      period: '2026 - Present',
      description: '',
    },
    {
      company: 'UKG (Ultimate Kronos Group)',
      role: 'Software Engineer',
      period: '2020 - 2024',
      description: 'Led the development and launch of major projects for cloud-based workforce management. Built full-stack applications using Java/Kotlin, Spring Boot, Angular, and implemented distributed event-driven systems with Kafka and RabbitMQ.',
    },
    {
      company: 'Vista Entertainment Solutions',
      role: 'Software Developer',
      period: '2016 - 2020',
      description: 'Developed and maintained web applications for cinema time-keeping systems using Angular and C#/.NET. Built integrations for Point of Sale and payment systems with third-party APIs.',
    },
    {
      company: 'Vista Entertainment Solutions',
      role: 'Application Consultant',
      period: '2014 - 2016',
      description: 'Configured loyalty programs and online gift stores for cinemas, including custom SQL queries and API consultation with third-party developers.',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-50 mb-8">About Me</h1>

      <section className="mb-12">
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          I've been coding ever since I was a child, playing around with HTML and CSS to make silly pet pages for my Neopets or creating a website to host icons I would make for AIM (RIP).
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          Now I'm a full stack software engineer who went from supporting and building software in the entertainment industry, to the workforce management industry, and to now aerospace, which always felt like a dream way too far up in the stars. 
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          When I'm not coding, I have a plethora of hobbies that I enjoy, from cooking to reading to writing to gaming. I've always been a creative person and I love to explore all sorts of activities and tastes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-50 mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div
              key={index}
              className="border-l-4 border-violet-500 pl-4 py-2"
            >
              <h3 className="text-xl font-semibold text-slate-100">{job.role}</h3>
              <p className="text-violet-400 font-medium">{job.company}</p>
              <p className="text-sm text-slate-500 mb-2">{job.period}</p>
              <p className="text-slate-300">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
