import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const frames = Array.from({ length: 50 }, (_, index) => `/sequence/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`)

const projects = [
  ['01', 'LearnBooster', 'Exam Preparation & Learning Platform', 'React / PHP / MySQL', 'https://mylearnbooster.com/'],
  ['02', 'ExclusiveGrades', 'School Result Management Platform', 'React / REST APIs', 'https://exclusivegrades.com/'],
  ['03', 'Foot-Collect App', 'Telegram football collectibles app', 'React / Node.js', 'https://t.me/FootNftsapp_bot'],
  ['04', 'Ijebu Youth Association', 'Membership & Community Platform', 'JavaScript / PHP', 'https://ijebuyouthassociation.com.ng/'],
  ['05', 'COOSAMERZ', 'Hospitality & Logistics Platform', 'Web Systems / APIs', 'https://coosamerzhospitalitysolutions.com.ng/'],
  ['06', 'Atayese FM', 'Radio & Digital Media Platform', 'React / CMS', 'https://atayesefm.com.ng/'],
  ['07', 'Ijebu Rewa Blog', 'Digital News & Community Platform', 'Web / Editorial', 'https://ijeburewablog.com.ng/'],
  ['08', 'LM Institute', 'Learning and education platform', 'Web / Product Systems', 'https://lminstitute.com.ng/'],
  ['09', 'CLEO Markets', 'Mobile-first market platform', 'React / APIs', 'https://cleomarkets.com/'],
  ['10', 'Mobile App Products', 'Mobile applications published for real users', 'Mobile / Product', 'https://play.google.com/store/apps/'],
]

const stack = [
  ['React', 'react'], ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['PHP', 'php'],
  ['MySQL', 'mysql'], ['Node.js', 'nodejs'], ['HTML', 'html5'], ['CSS', 'css3'], ['Git', 'git'],
  ['GitHub', 'github'], ['REST APIs', 'api'], ['Python', 'python'],
]

const capabilityDetails = {
  Websites: 'Clear, responsive websites that give a brand a useful digital home.',
  'Mobile Applications': 'Focused mobile experiences built around the habits of real users.',
  'ERP Systems': 'Connected workflows that give teams one reliable view of the business.',
  'POS Systems': 'Fast, practical sales tools for day-to-day operations and reporting.',
  'School Management Systems': 'Digital infrastructure for schools, teachers, students and families.',
  'Business Systems': 'Custom software that removes repeated work and makes decisions easier.',
  'Digital Products': 'From first idea to a durable product people can return to.',
}

function MagneticLink({ children, className = '', ...props }) {
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(pointer: coarse)').matches) return undefined
    const move = (event) => {
      const bounds = element.getBoundingClientRect()
      gsap.to(element, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.18, y: (event.clientY - bounds.top - bounds.height / 2) * 0.18, duration: .35, ease: 'power3.out' })
    }
    const reset = () => gsap.to(element, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1, .4)' })
    element.addEventListener('pointermove', move); element.addEventListener('pointerleave', reset)
    return () => { element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', reset) }
  }, [])
  return <a ref={ref} className={className} {...props}>{children}</a>
}

function CommandPalette({ onClose }) {
  const commands = [['Go to work', '#work'], ['Go to about', '#about'], ['Go to experience', '#experience'], ['Open WhatsApp', 'https://wa.me/2349013656460'], ['Download resume', '/femtech-cv.pdf']]
  return <div className="command-backdrop" role="presentation" onClick={onClose}><div className="command-palette" role="dialog" aria-modal="true" aria-label="Quick navigation" onClick={(event) => event.stopPropagation()}><div className="command-top"><span>COMMAND / FEMTECH</span><button onClick={onClose} aria-label="Close command palette">ESC</button></div><p>Navigate the experience</p>{commands.map(([label, href]) => <a href={href} key={label} onClick={onClose}>{label}<span>↗</span></a>)}</div></div>
}

function AvailabilityBadge() {
  return <a className="availability" href="https://wa.me/2349013656460"><i /> AVAILABLE FOR SELECT PROJECTS <span>↗</span></a>
}

function WhatsAppFloat() {
  return <a className="whatsapp-float" href="https://wa.me/2349013656460" aria-label="Chat with Babafemi on WhatsApp" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43Zm-8.44 18.3h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.88-9.87 2.63 0 5.1 1.03 6.96 2.89a9.83 9.83 0 0 1 2.89 6.97c0 5.45-4.43 9.88-9.86 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.86 8.86 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.56-.35Z" /></svg><span>CHAT</span></a>
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => { const update = () => setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)); window.addEventListener('scroll', update, { passive: true }); update(); return () => window.removeEventListener('scroll', update) }, [])
  return <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleY(${progress})` }} /></div>
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const update = () => setVisible(window.scrollY > window.innerHeight * .45); window.addEventListener('scroll', update, { passive: true }); update(); return () => window.removeEventListener('scroll', update) }, [])
  return visible ? <a className="back-to-top" href="#home">BACK TO TOP ↑</a> : null
}

function useSequence(canvasRef, sectionRef) {
  const imagesRef = useRef([])
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return undefined
    const context = canvas.getContext('2d')
    const images = frames.map((src, index) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = src
      return image
    })
    imagesRef.current = images

    const draw = (index) => {
      const image = images[index]
      if (!image?.complete || !image.naturalWidth) return
      const ratio = window.devicePixelRatio || 1
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight)
      const x = (width - image.naturalWidth * scale) / 2
      const y = (height - image.naturalHeight * scale) / 2
      context.clearRect(0, 0, width, height)
      context.drawImage(image, x, y, image.naturalWidth * scale, image.naturalHeight * scale)
      frameRef.current = index
    }

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=2600',
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => draw(Math.min(frames.length - 1, Math.floor(self.progress * frames.length))),
    })
    const resize = () => draw(frameRef.current)
    window.addEventListener('resize', resize)
    const ready = window.setInterval(() => draw(frameRef.current), 120)
    draw(0)
    return () => {
      trigger.kill()
      window.removeEventListener('resize', resize)
      window.clearInterval(ready)
    }
  }, [canvasRef, sectionRef])

}

function Logo() {
  return <a className="logo" href="#home" aria-label="FemTech home"><span>&lt;&gt;</span> FemTech</a>
}

function Navigation() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const items = document.querySelectorAll('.nav-link')
    gsap.fromTo(items, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, delay: 0.4 })
  }, [])
  return <>
    <header className={`nav ${open ? 'nav-open' : ''}`}>
      <Logo />
      <nav className="desktop-links" aria-label="Main navigation">
        <a className="nav-link" href="#work">Work</a><a className="nav-link" href="#about">About</a><a className="nav-link" href="#experience">Experience</a>
      </nav>
      <MagneticLink className="talk-link" href="#contact">Let’s Talk <span>↗</span></MagneticLink>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}><span /><span /></button>
    </header>
    <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
      {['Home', 'Work', 'About', 'Experience', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}<span>↗</span></a>)}
    </div>
  </>
}

function CodeRain() {
  const canvas = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 700) return undefined
    const element = canvas.current
    const context = element.getContext('2d')
    let animationFrame
    let columns = []
    const glyphs = '<>/={}[]();:01constreturnReactPHPJSAPI'
    const resize = () => {
      element.width = window.innerWidth
      element.height = window.innerHeight
      columns = Array.from({ length: Math.floor(window.innerWidth / 44) }, (_, index) => ({ x: index * 44, y: Math.random() * window.innerHeight, speed: 0.15 + Math.random() * 0.3 }))
    }
    const render = () => {
      context.fillStyle = 'rgba(5, 5, 5, .14)'
      context.fillRect(0, 0, element.width, element.height)
      context.font = '11px JetBrains Mono, monospace'
      columns.forEach((column) => { context.fillStyle = 'rgba(117, 145, 178, .12)'; context.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], column.x, column.y); column.y += column.speed; if (column.y > element.height) column.y = -20 })
      animationFrame = requestAnimationFrame(render)
    }
    resize(); render(); window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animationFrame); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas className="code-rain" ref={canvas} aria-hidden="true" />
}

function Hero() {
  const section = useRef(null); const canvas = useRef(null); useSequence(canvas, section)
  useEffect(() => { gsap.fromTo('.hero-copy > *', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.14, delay: 0.3, ease: 'power3.out' }) }, [])
  return <section className="hero-sequence" ref={section} id="home"><canvas className="sequence-canvas" ref={canvas} /><div className="hero-shade" /><div className="hero-copy"><p className="eyebrow">OLAWUNI BABAFEMI DAVID <span>— TECHNOLOGY BUILDER</span></p><h1>I BUILD<br /><em>DIGITAL</em><br />SYSTEMS<span className="period">.</span></h1><p className="hero-role">FULL-STACK DEVELOPER <span>·</span> CTO <span>·</span> FOUNDER</p><MagneticLink className="hero-cta" href="https://wa.me/2349013656460">CHAT ON WHATSAPP <span>↗</span></MagneticLink></div><div className="hero-meta"><span>SCROLL TO EXPLORE</span><i /></div></section>
}

function About() {
  return <section className="about section-grid" id="about"><div className="section-label"><span>02</span><span>IDENTITY</span></div><div className="about-visual"><img src="/image/femtech.jpg" alt="Olawuni Babafemi David, aka FemTech" /><span className="signature">BDO</span></div><div className="about-copy"><p className="eyebrow">ABOUT ME</p><h2>I BUILD DIGITAL<br /><em>PRODUCTS</em> THAT<br />SOLVE REAL<br />PROBLEMS.</h2><p className="body-copy">I’m Olawuni Babafemi David, aka FemTech: a full-stack developer, CTO and technology builder. I build websites, mobile apps, ERP and POS platforms, school management systems, business systems and digital products that make complex work feel clear.</p><MagneticLink className="resume-link" href="/femtech-cv.pdf" download>DOWNLOAD RESUME <span>↓</span></MagneticLink><div className="identity-meta"><span><b>NIGERIA</b> BASED IN</span><span><b>GLOBAL</b> WORKING WITH</span><span><b>24—48H</b> RESPONSE TIME</span></div></div></section>
}

function Capabilities() {
  const items = ['Websites', 'Mobile Applications', 'ERP Systems', 'POS Systems', 'School Management Systems', 'Business Systems', 'Digital Products']
  const [active, setActive] = useState('Websites')
  return <section className="capabilities section-grid"><div className="section-label"><span>03</span><span>CAPABILITIES</span></div><div className="capability-intro"><p className="eyebrow">WHAT I BUILD</p><p className="body-copy">Useful technology has a point of view. These are the spaces where I turn that point of view into working systems.</p><div className="capability-detail"><span>SELECTED / {active.toUpperCase()}</span><p>{capabilityDetails[active]}</p></div></div><div className="capability-list">{items.map((item, index) => <a href="#contact" className={active === item ? 'is-active' : ''} onMouseEnter={() => setActive(item)} onFocus={() => setActive(item)} key={item}><span className="cap-number">0{index + 1}</span><span>{item}</span><b>↗</b></a>)}</div></section>
}

function Projects() {
  const [preview, setPreview] = useState(null)
  return <section className="projects" id="work"><div className="projects-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>BUILT FOR<br /><em>REAL LIFE.</em></h2></div><p className="project-note">A live gallery of platforms, apps and systems built for people, schools, communities and businesses.</p></div><div className="project-gallery">{projects.map(([number, title, description, technologies, link]) => <a className="gallery-item" href={link} target="_blank" rel="noreferrer" onMouseEnter={() => setPreview({ title, description, technologies })} onMouseLeave={() => setPreview(null)} onFocus={() => setPreview({ title, description, technologies })} key={title}><span className="gallery-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="gallery-tech">{technologies}</span><span className="gallery-open">OPEN <b>↗</b></span></a>)}</div>{preview && <div className="project-preview"><span>OPEN CASE</span><strong>{preview.title}</strong><small>{preview.technologies}</small><p>{preview.description}</p></div>}</section>
}

function Experience() {
  const roles = [['2022 — NOW', 'FULL-STACK DEVELOPER / FOUNDER', 'Olawuni Technologies'], ['2023 — NOW', 'CTO / BACKEND ENGINEER', 'Foot-Collect App'], ['2021 — 2023', 'ICT ENGINEER', 'Atayese FM'], ['2019 — 2021', 'COMPUTER TEACHER', 'TenderMinds Private School']]
  return <section className="experience section-grid" id="experience"><div className="section-label"><span>04</span><span>BACKGROUND</span></div><div className="experience-main"><p className="eyebrow">EXPERIENCE</p><h2>THE WORK<br /><em>BEHIND</em> THE WORK.</h2><div className="timeline">{roles.map(([date, role, company]) => <div className="timeline-row" key={role}><span>{date}</span><div><h3>{role}</h3><p>{company}</p></div><b>↗</b></div>)}</div></div></section>
}

function Stack() {
  return <section className="stack-section"><div className="stack-head"><p className="eyebrow">THE STACK</p><h2>TOOLS FOR<br /><em>BUILDING.</em></h2><p className="body-copy">A pragmatic stack chosen for shipping durable products, mobile apps and business systems, not collecting badges.</p></div><div className="stack-cloud">{stack.map(([name, icon], index) => <a className="stack-logo" href="#contact" style={{ '--delay': `${index * 70}ms` }} key={name}><img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`} alt="" onError={(event) => { event.currentTarget.style.display = 'none' }} /><span>{name}</span></a>)}</div></section>
}

function Statement() { return <section className="statement"><span className="statement-index">05 / PRINCIPLE</span><h2>I DON’T JUST<br /><em>BUILD WEBSITES.</em><br /><strong>I BUILD SYSTEMS.</strong></h2></section> }

function Contact() { return <section className="contact" id="contact"><div><p className="eyebrow">HAVE A SYSTEM TO BUILD?</p><h2>LET’S<br /><em>BUILD IT.</em></h2></div><div className="contact-side"><p>Bring the hard problem.<br />We’ll make it usable.</p><MagneticLink className="contact-cta" href="https://wa.me/2349013656460">START A PROJECT <span>↗</span></MagneticLink><div className="contact-links"><a href="https://wa.me/2349013656460">WhatsApp</a><a href="mailto:babafemiolawuni@gmail.com">Email</a><a href="https://github.com/Babafemi-Olawuni-1">GitHub</a><a href="https://www.facebook.com/babafemidavidolawuni">Facebook</a><a href="https://www.linkedin.com/in/olawuni-babafemi-4b850129/">LinkedIn</a><a href="https://www.instagram.com/femtech.technologies">Instagram</a></div></div></section> }

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  useEffect(() => { const openPalette = (event) => { if ((event.key === '/' || (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey))) && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); setPaletteOpen(true) } if (event.key === 'Escape') setPaletteOpen(false) }; window.addEventListener('keydown', openPalette); return () => window.removeEventListener('keydown', openPalette) }, [])
  useEffect(() => { const sections = gsap.utils.toArray('main > section:not(.hero-sequence)'); sections.forEach((section) => gsap.fromTo(section, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 88%', once: true } })) }, [])
  useEffect(() => { const lenis = new Lenis({ duration: 1.1, smoothWheel: true }); const raf = (time) => { lenis.raf(time); ScrollTrigger.update(); requestAnimationFrame(raf) }; const frame = requestAnimationFrame(raf); return () => { cancelAnimationFrame(frame); lenis.destroy() } }, [])
  return <><CodeRain /><ScrollProgress /><AvailabilityBadge /><WhatsAppFloat /><BackToTop /><Navigation /><main><Hero /><About /><Capabilities /><Projects /><Experience /><Stack /><Statement /><Contact /></main><footer><div><Logo /></div><a className="footer-portfolio" href="https://olawunibabafemi.netlify.app/" target="_blank" rel="noreferrer">VIEW LIVE PORTFOLIO ↗</a><span>© 2026 Babafemi David Olawuni</span></footer>{paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}</>
}

createRoot(document.getElementById('root')).render(<App />)