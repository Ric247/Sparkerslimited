import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────────────────────
   Brand logo — drawn inline as SVG so it always renders without
   needing an external file. A hexagonal C-mark in Sparkers red,
   followed by the wordmark.
   ───────────────────────────────────────────────────────────── */
function SparkersLogo({ size = 40, showText = true, muted = false }) {
  const color = muted ? '#9ca3af' : '#ef4444'
  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* Filled hexagonal C — outer hex with an inner hex-shaped void
            that opens to the right, forming the "C" silhouette. */}
        <path
          d="M 50 6
             L 89.5 28
             L 89.5 40
             L 72 40
             L 50 27
             L 28 40
             L 28 60
             L 50 73
             L 72 60
             L 89.5 60
             L 89.5 72
             L 50 94
             L 10.5 72
             L 10.5 28 Z"
          fill={color}
        />
        {/* The small inner tab that floats in the C-opening */}
        <rect x="54" y="46" width="22" height="8" fill={color} />
      </svg>
      {showText && (
        <span
          className={`font-extrabold whitespace-nowrap ${
            muted
              ? 'text-slate-500 text-xs tracking-[0.18em]'
              : 'text-white text-sm md:text-base tracking-[0.16em]'
          }`}
        >
          SPARKERS <span className="font-light opacity-70">LIMITED</span>
        </span>
      )}
    </div>
  )
}

/* ─── Service catalog ─────────────────────────────────────── */
const services = [
  {
    title: 'Networking Infrastructure',
    desc: 'High-availability enterprise networks — designed, deployed, and tuned for the workloads you actually run.',
    icon: '🌐',
  },
  {
    title: 'Enterprise Equipment Supply',
    desc: 'Certified hardware sourced directly from leading vendors, with warranty support and clear delivery timelines.',
    icon: '🖥️',
  },
  {
    title: 'Structured Cabling',
    desc: 'Standards-compliant cabling for offices, campuses, and data centers — built to grow with your business.',
    icon: '🔌',
  },
  {
    title: 'Data Center Installations',
    desc: 'Full-lifecycle data center builds: rack design, power, cooling, cabling, and commissioning under one team.',
    icon: '🏗️',
  },
  {
    title: 'Server Management',
    desc: 'Hands-on administration, monitoring, and tuning so your servers stay fast, secure, and predictable.',
    icon: '⚙️',
  },
  {
    title: 'Security Solutions',
    desc: 'Physical and cyber security in one stack — CCTV, access control, firewalls, and policy hardening.',
    icon: '🔒',
  },
  {
    title: 'Office IT Setup',
    desc: 'Turnkey IT for new offices: workstations, Wi-Fi, telephony, printing, and day-one user onboarding.',
    icon: '💼',
  },
  {
    title: 'IT Support & Maintenance',
    desc: 'Responsive helpdesk and on-site engineers that resolve issues before they reach your customers.',
    icon: '🛠️',
  },
]

/* ─── How we work ─────────────────────────────────────────── */
const process = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We map your environment, goals, and constraints before recommending anything.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'A clear architecture with vendor choices, costs, and timelines — no surprises later.',
  },
  {
    step: '03',
    title: 'Deploy',
    desc: 'Our engineers execute on schedule, document everything, and keep your team in the loop.',
  },
  {
    step: '04',
    title: 'Support',
    desc: 'After go-live we monitor, maintain, and evolve the system so it keeps paying off.',
  },
]

export default function SparkersLimitedWebsite() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Services', 'Process', 'Contact']

  return (
    <div
      className="min-h-screen bg-[#07080a] text-white"
      style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif" }}
    >
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07080a]/90 backdrop-blur-md shadow-[0_2px_24px_rgba(220,38,38,0.08)] border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" aria-label="Sparkers Limited home">
            <SparkersLogo size={40} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 shadow-[0_8px_24px_-8px_rgba(220,38,38,0.6)]"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
            />
            <div
              className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <div
              className="w-6 h-0.5 bg-white transition-all duration-300"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#07080a]/98 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-white text-sm font-medium py-1 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors text-center mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(220,38,38,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Ambient red glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[420px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0a0c0f] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/20 rounded-full px-4 py-1.5 text-red-400 text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Enterprise Technology Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Infrastructure your
            <br />
            business can <span className="text-red-500">rely on.</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Sparkers Limited designs, supplies, and supports the networks, servers,
            and security systems that keep modern organizations running — across
            Nigeria, Canada, Liberia, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 text-sm shadow-[0_12px_32px_-12px_rgba(220,38,38,0.8)] hover:shadow-[0_16px_40px_-12px_rgba(220,38,38,0.9)]"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-white/10 hover:border-red-500/40 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 text-sm"
            >
              Talk to an Engineer
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 mt-20 w-full max-w-4xl mx-auto grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {[
            { value: '10+', label: 'Years of Experience' },
            { value: '3+', label: 'Countries Served' },
            { value: '500+', label: 'Projects Delivered' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0d0f12] px-6 py-6 text-center">
              <div className="text-3xl font-black text-red-500 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 bg-[#0a0c0f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-500 uppercase tracking-[0.25em] text-xs font-bold mb-4">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                A technology partner built for serious workloads.
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-5">
                Sparkers Limited is an enterprise technology company specializing in
                networking, structured cabling, data center deployments, equipment
                supply, and secure IT integration.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Whether you're outfitting a single office or rolling out infrastructure
                across multiple sites, our engineers plan it, build it, and stand
                behind it — so your team can stay focused on the work that matters.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: '🏢',
                  title: 'Enterprise Focus',
                  desc: 'Built for offices, institutions, and data centers of every scale.',
                },
                {
                  icon: '🌍',
                  title: 'Global Reach',
                  desc: 'Active across Nigeria, Canada, Liberia — and growing.',
                },
                {
                  icon: '🔐',
                  title: 'Security-First',
                  desc: 'Every deployment hardened for security and compliance from day one.',
                },
                {
                  icon: '⚡',
                  title: 'Rapid Delivery',
                  desc: 'Disciplined project execution without cutting corners on quality.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0d0f12] border border-white/5 rounded-2xl p-5 hover:border-red-500/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="py-28 px-6 bg-[#07080a] border-t border-white/[0.04]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.25em] text-xs font-bold mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-black">Enterprise IT, end to end.</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Eight tightly integrated services so you can source design, hardware,
              installation, and support from a single partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#0d0f12] border border-white/5 rounded-2xl p-6 hover:border-red-500/30 hover:bg-[#10101a] hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-600/0 group-hover:bg-red-600/10 rounded-full blur-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="text-3xl mb-5">{service.icon}</div>
                  <div className="w-6 h-px bg-red-600/60 mb-4 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-bold text-base mb-3 leading-snug">{service.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="process"
        className="py-28 px-6 bg-[#0a0c0f] border-t border-white/[0.04]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.25em] text-xs font-bold mb-4">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black">A clear path from idea to uptime.</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              We keep the process simple, the timeline honest, and the documentation
              thorough — so there are no surprises after handover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step) => (
              <div
                key={step.step}
                className="bg-[#0d0f12] border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-colors duration-300"
              >
                <div className="text-red-500 font-mono text-xs tracking-widest mb-3">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-28 px-6 bg-[#07080a] border-t border-white/[0.04]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-500 uppercase tracking-[0.25em] text-xs font-bold mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black">Let's build your infrastructure.</h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Tell us about your environment and what you're trying to achieve — we'll
              come back with a clear plan, timeline, and quote.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Email card — spans 2 cols */}
            <div className="md:col-span-2 bg-[#0d0f12] border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 text-lg">
                  ✉️
                </div>
                <h3 className="font-bold text-lg">Email Us</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:info@sparkerslimited.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 rounded-full bg-red-600/60 group-hover:bg-red-500 transition-colors flex-shrink-0" />
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    info@sparkerslimited.com
                  </span>
                  <span className="text-slate-600 text-xs ml-1">General enquiries</span>
                </a>
                <a
                  href="mailto:support@sparkerslimited.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 rounded-full bg-red-600/60 group-hover:bg-red-500 transition-colors flex-shrink-0" />
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    support@sparkerslimited.com
                  </span>
                  <span className="text-slate-600 text-xs ml-1">Existing clients</span>
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="bg-[#0d0f12] border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 text-lg">
                  📍
                </div>
                <h3 className="font-bold text-lg">Visit Us</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Platinum Plaza
                <br />
                Abuja, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#07080a] border-t border-white/[0.04] px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <SparkersLogo size={28} muted />
          <p className="text-slate-600 text-xs text-center order-3 md:order-2">
            © {new Date().getFullYear()} Sparkers Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-600 order-2 md:order-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-slate-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
