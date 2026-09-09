import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, NavLink, Link, useNavigate, useLocation} from 'react-router-dom';
import './styles.css';

const profile = {
  name:'EDDALA NITHIN', role:'Java Full Stack Developer', location:'Chittoor, AP – 517422',
  email:'nithinreddyeddala@gmail.com', linkedin:'https://www.linkedin.com/in/eddala-nithin-66ba84249', github:'https://github.com/eddalanithin'
};

const projects = {
  electrocart:{
    number:'01', title:'ElectroCart', kicker:'E-COMMERCE WEB APPLICATION', stack:['Java','JSP','HTML','CSS','MySQL','Tomcat'], status:'LIVE · GITHUB COMING SOON',
    summary:'An electronic-products e-commerce platform built as a practical full-stack web application.',
    description:[
      'ElectroCart is a customer-facing e-commerce website focused on browsing, searching, filtering, and purchasing electronic products.',
      'The frontend uses HTML and CSS, while JSP and Java provide the application-side functionality and dynamic pages.',
      'MySQL is used for persistent product, user, cart, wishlist, order, and related application data.',
      'The application includes authentication, product cart, wishlist, checkout and payment-related functionality.',
      'Apache Tomcat is used as the server environment, giving the project a complete Java web-application workflow from interface to database.'
    ],
    details:['Authentication','Product browsing','Cart','Wishlist','Checkout & payments','MySQL persistence','Apache Tomcat']
  },
  farming:{
    number:'02', title:'Smart Precision Farming', kicker:'IOT · SOILLESS AGRICULTURE', stack:['Python','Embedded C','Arduino Mega','NodeMCU','ThingSpeak'], status:'COLLEGE PROJECT',
    summary:'An IoT-enabled automation system for monitoring and managing soilless agriculture.',
    description:[
      'The system automates key parts of soilless agriculture to reduce manual intervention and improve environmental management.',
      'Sensors are integrated for real-time monitoring of pH, TDS, temperature, and humidity.',
      'A Python-based plant disease detection module was developed using image processing and achieved 90.67% accuracy.',
      'ThingSpeak provides a cloud dashboard for live data visualization and remote monitoring of the growing environment.',
      'An automated nutrient dosing and control system was designed to help optimize plant growth and maintain required conditions.'
    ],
    details:['Real-time sensing','pH & TDS monitoring','Temperature & humidity','Disease detection','ThingSpeak dashboard','Automated nutrient dosing']
  }
};

function Arrow(){return <span className="arrow">↗</span>}
function Layout({children}){
  const [open,setOpen]=useState(false);
  const location=useLocation();
  const close=()=>setOpen(false);
  const nav=[['/','Home'],['/about','About'],['/what-i-do','What I Do'],['/skills','Skills'],['/projects','Projects'],['/education','Education'],['/contact','Contact']];
  return <div className="app">
    <header className="nav-wrap"><nav className="nav shell">
      <Link className="brand" to="/" onClick={close}><span className="brand-mark">N</span><span>{profile.name}</span></Link>
      <button className="menu" onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation"><span/><span/></button>
      <div className={`nav-links ${open?'open':''}`}>{nav.map(([to,label])=><NavLink key={to} to={to} onClick={close} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}</div>
      <Link className="nav-cta" to="/contact" onClick={close}>Let’s Connect <Arrow/></Link>
    </nav></header>
    <main key={location.pathname} className="page-enter">{children}</main>
    <footer className="footer"><div className="shell footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">N</span><span>{profile.name}</span></div><p>Java Full Stack Developer</p></div><div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${profile.email}`}>Email</a></div><div className="copyright">© 2026 EDDALA NITHIN</div></div></footer>
  </div>
}

function Shell({eyebrow,title,children,accent}){return <section className="section shell"><div className="eyebrow">{eyebrow}</div><h1 className="page-title">{title} {accent&&<span>{accent}</span>}</h1>{children}</section>}
function Home(){return <>
  <section className="hero shell"><div className="hero-copy"><div className="eyebrow">JAVA FULL STACK DEVELOPER · CHITTOOR, AP</div><h1>Hi, I’m <span>EDDALA NITHIN</span><br/>Java Full Stack Developer.</h1><p className="hero-lede">I turn ideas into practical, user-focused web applications using Java, SQL and modern web technologies.</p><div className="actions"><Link className="btn primary" to="/projects">View My Projects <Arrow/></Link><a className="btn ghost" href="/EDDALA_NITHIN_Resume.pdf" download>Download Resume <Arrow/></a></div><div className="hero-meta"><span>OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES</span><span className="dot"/> <span>{profile.location}</span></div></div><HeroVisual/></section>
  <section className="signal-band"><div className="shell signal-inner"><span>BUILDING · LEARNING · SHIPPING</span><span>JAVA / SQL / WEB</span><span>2026</span></div></section>
</>}
function HeroVisual(){return <div className="hero-visual" aria-hidden="true"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/><div className="node node-center"><span>JAVA</span><b>↗</b></div><div className="node node-one">SQL</div><div className="node node-two">WEB</div><div className="node node-three">FULL<br/>STACK</div><div className="line line-one"/><div className="line line-two"/><div className="line line-three"/><div className="status"><i/>SYSTEM READY</div></div>}

function About(){return <Shell eyebrow="ABOUT / 01" title={<>Building toward <span>real software</span>.</>}><div className="about-grid"><div className="about-lead"><p>I’m an Electronics and Communication Engineering graduate building my career in software development, with a focus on Java Full Stack development.</p><p>My foundation includes Core Java, Object-Oriented Programming, SQL and HTML, with hands-on experience creating web and IoT solutions through academic and personal projects.</p></div><div className="about-panel"><div className="panel-label">PROFILE SIGNAL</div><div className="stat"><strong>8.78</strong><span>B.Tech CGPA</span></div><div className="stat"><strong>2</strong><span>Featured projects</span></div><div className="stat"><strong>Java</strong><span>Primary development focus</span></div></div></div></Shell>}

const what=[['01','Java Development','Core Java, OOP and backend development.'],['02','Full-Stack Development','Building web applications using frontend and Java technologies.'],['03','Database Development','SQL and MySQL database design and operations.'],['04','Web Application Development','Creating functional, user-focused web applications.'],['05','Problem Solving','Applying programming fundamentals to practical problems.']];
function WhatIDo(){return <Shell eyebrow="CAPABILITIES / 02" title={<>What I <span>do</span>.</>}><div className="feature-grid">{what.map(([n,t,d])=><article className="feature" key={n}><div className="feature-num">{n}</div><h2>{t}</h2><p>{d}</p><Arrow/></article>)}</div></Shell>}

const skillGroups=[['Java Development',['Core Java','OOP','JDBC','Servlets','JSP']],['Database',['SQL','MySQL','DML','DQL','DDL','CRUD']],['Frontend',['HTML','CSS']],['Tools & Development',['Git','GitHub','IntelliJ IDEA','VS Code','Apache Tomcat','MySQL Workbench']],['Other Knowledge',['Python Basics','AI/ML','Networking Fundamentals','OSI Model','TCP/IP']]];
function Skills(){return <Shell eyebrow="STACK / 03" title={<>Tools for <span>building</span>.</>}><div className="skills-grid">{skillGroups.map(([title,tags])=><article className="skill-card" key={title}><div className="card-kicker">{title}</div><div className="tag-list">{tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div><div className="learning"><div><span className="card-kicker">CURRENTLY LEARNING</span><h2>Java · SQL · JavaScript · Full-Stack Development</h2></div><span className="learning-pulse">● ACTIVE</span></div></Shell>}

function Projects(){return <Shell eyebrow="WORK / 04" title={<>Selected <span>projects</span>.</>}><div className="project-list"><ProjectCard data={projects.electrocart}/><ProjectCard data={projects.farming}/></div></Shell>}
function ProjectCard({data}){const slug=data===projects.electrocart?'electrocart':'smart-precision-farming';return <article className="project-card"><div className="project-index">{data.number}</div><div className="project-main"><div className="card-kicker">{data.kicker}</div><h2>{data.title}</h2><p>{data.summary}</p><div className="tag-list">{data.stack.map(t=><span key={t}>{t}</span>)}</div><div className="project-actions"><Link className="btn primary small" to={`/projects/${slug}`}>View Project <Arrow/></Link>{data.title==='ElectroCart'?<span className="project-status">{data.status}</span>:<span className="project-status violet">{data.status}</span>}</div></div><div className="project-art"><div className="art-grid"/><div className="art-code">{data.title==='ElectroCart'?<>CART<br/>WISHLIST<br/>CHECKOUT<br/>PAYMENT</>:<>SENSORS<br/>THINGSPK<br/>AI / ML<br/>CONTROL</>}</div></div></article>}

function ProjectDetail({slug}){const data=slug==='electrocart'?projects.electrocart:projects.farming; return <Shell eyebrow={`PROJECT / ${data.number}`} title={<>{data.title} <span>in detail</span>.</>}><div className="detail-head"><div><div className="card-kicker">{data.kicker}</div><p className="detail-summary">{data.summary}</p></div><div className="detail-status">{data.status}</div></div><div className="detail-grid"><article className="detail-copy"><h2>Project overview</h2>{data.description.map((p,i)=><p key={i}>{p}</p>)}</article><aside className="detail-panel"><div className="card-kicker">TECHNICAL SIGNALS</div>{data.details.map(d=><div className="detail-row" key={d}><span>{d}</span><Arrow/></div>)}<div className="tag-list detail-tags">{data.stack.map(t=><span key={t}>{t}</span>)}</div></aside></div><div className="detail-actions"><Link className="btn ghost" to="/projects">← Back to Projects</Link>{data.title==='ElectroCart'&&<span className="btn disabled">GitHub · Coming Soon</span>}</div></Shell>}

function Education(){const edu=[['2023 – 2026','Bachelor of Technology','Electronics and Communication Engineering','Annamacharya Institute of Technology and Sciences, Rajampet','CGPA 8.78'],['2020 – 2023','Diploma','Electronics and Communication Engineering','Government Polytechnic, Pillaripattu, Puttur','CGPA 9.04'],['2019 – 2020','Secondary School','10th','Sri Chaitanya School, Chittoor','CGPA 9.8']];return <Shell eyebrow="EDUCATION / 05" title={<>The path so <span>far</span>.</>}><div className="timeline">{edu.map((e,i)=><article className="timeline-item" key={e[0]}><div className="timeline-dot">0{i+1}</div><div className="timeline-year">{e[0]}</div><div className="timeline-content"><div className="card-kicker">{e[1]}</div><h2>{e[2]}</h2><p>{e[3]}</p><span className="grade">{e[4]}</span></div></article>)}</div></Shell>}

function Contact(){const [sent,setSent]=useState(false); return <Shell eyebrow="CONTACT / 06" title={<>Let’s make something <span>useful</span>.</>}><div className="contact-grid"><div className="contact-copy"><p>Have a project, opportunity, or conversation in mind? I’d be glad to connect.</p><div className="contact-list"><a href={`mailto:${profile.email}`}><span>Email</span>{profile.email}<Arrow/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>eddala-nithin-66ba84249<Arrow/></a><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span>eddalanithin<Arrow/></a></div></div><form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Message<textarea required rows="5" placeholder="Tell me what you’re working on…"/></label><button className="btn primary" type="submit">{sent?'Message Ready':'Send Message'} <Arrow/></button>{sent&&<p className="form-note">The form is ready to connect to a backend/email service when you deploy it.</p>}</form></div></Shell>}

function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/what-i-do" element={<WhatIDo/>}/><Route path="/skills" element={<Skills/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectRoute/>}/><Route path="/education" element={<Education/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></Layout>}
function ProjectRoute(){const {pathname}=useLocation();return <ProjectDetail slug={pathname.includes('electrocart')?'electrocart':'smart-precision-farming'}/>}

createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
