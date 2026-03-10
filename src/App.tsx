/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Database, 
  Layout, 
  Terminal,
  ChevronRight,
  Sparkles,
  Cpu,
  Globe,
  ArrowUpRight,
  FileText
} from 'lucide-react';
import { cvData } from './data';
import avatar from './avatar.jpg';

function Section({ title, icon: Icon, children, id }: { title: string, icon: any, children: React.ReactNode, id: string }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-24"
    >
      <div className="flex items-center gap-4 mb-10 group">
        <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
          <Icon className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
        <div className="h-px flex-grow bg-slate-200 ml-4"></div>
      </div>
      {children}
    </motion.section>
  );
}

function SkillBadge({ name }: { name: string; key?: React.Key }) {
  return (
    <motion.span 
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 bg-white text-slate-700 rounded-xl text-sm font-semibold border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-default"
    >
      {name}
    </motion.span>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-mesh selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <nav className="glass rounded-full px-6 py-3 flex justify-between items-center shadow-indigo-500/10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-200">
              <img src={avatar} alt={cvData.name} className="w-full h-full object-cover" />
            </div>
            <span className="font-bold tracking-tighter hidden sm:block">{cvData.name}</span>
          </motion.div>
          
          <div className="flex gap-4 md:gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-32">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0"
              >
                <img 
                  src={avatar} 
                  alt={cvData.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest border border-indigo-100"
              >
                <Sparkles className="w-3 h-3" />
                Available for new projects
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9] text-slate-900">
              Crafting <span className="text-gradient">Future</span> <br />
              Web <span className="italic font-light text-slate-400">Solutions.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Hi, I'm <span className="text-indigo-600 font-bold">Sang</span>. 
              A {cvData.title} at {cvData.education.school} who loves turning complex problems into 
              <span className="text-slate-900 font-medium"> elegant, high-performance</span> web applications.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cvData.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${cvData.contact.email}`}
                className="flex items-center gap-3 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-bold border border-slate-200 shadow-sm hover:border-indigo-200 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://${cvData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-bold border border-slate-200 shadow-sm hover:border-indigo-200 transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Skills - Bento Grid Style */}
        <Section title="Technical Arsenal" icon={Terminal} id="skills">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 glass p-8 rounded-[2rem] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Layout className="w-5 h-5" /></div>
                  <h3 className="font-bold text-lg">Frontend & Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[...cvData.skills.web, ...cvData.skills.frameworks, ...cvData.skills.other].map(s => (
                    <SkillBadge key={s} name={s} />
                  ))}
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-[2rem] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Database className="w-5 h-5" /></div>
                  <h3 className="font-bold text-lg">Data & Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[...cvData.skills.languages, ...cvData.skills.databases].map(s => (
                    <SkillBadge key={s} name={s} />
                  ))}
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>
          </div>
        </Section>

        {/* Projects - Featured Card */}
        <Section title="Featured Projects" icon={Briefcase} id="projects">
          {cvData.projects.map(project => (
            <motion.div 
              key={project.name}
              whileHover={{ y: -10 }}
              className="relative group rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">Full Stack</span>
                    <span className="px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">E-Commerce</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{project.name}</h3>
                  <p className="text-indigo-100 text-lg mb-10 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-10">
                    {['React', 'Node.js', 'SQLite', 'Tailwind'].map(tag => (
                      <span key={tag} className="text-sm font-bold text-white/70 border border-white/20 px-4 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a 
                    whileHover={{ x: 10 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold shadow-xl transition-all"
                  >
                    View Case Study
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden transform lg:rotate-3 group-hover:rotate-0 transition-transform duration-700">
                    <img 
                      src="https://picsum.photos/seed/shoe/800/600" 
                      alt="Project Preview" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-2xl hidden md:block">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                    <p className="text-indigo-600 font-bold">Live & Deployed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Section>

        {/* Education & Experience - Split View */}
        <div className="grid md:grid-cols-2 gap-12">
          <Section title="Education" icon={GraduationCap} id="education">
            <div className="glass p-8 rounded-[2.5rem] relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{cvData.education.school}</h3>
                  <p className="text-indigo-600 font-bold">{cvData.education.degree}</p>
                </div>
                <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full border border-indigo-100">
                  {cvData.education.period}
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-8 font-medium">GPA: {cvData.education.gpa}</p>
              
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Specialization</p>
                <div className="flex flex-wrap gap-2">
                  {cvData.education.coursework.slice(0, 4).map(course => (
                    <span key={course} className="text-sm text-slate-600 bg-white px-3 py-1 rounded-lg border border-slate-100 shadow-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section title="Experience" icon={Briefcase} id="experience">
            <div className="glass p-8 rounded-[2.5rem] relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{cvData.experience[0].title}</h3>
                  <p className="text-indigo-600 font-bold">Academic Projects</p>
                </div>
                <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full border border-indigo-100">
                  {cvData.experience[0].period}
                </span>
              </div>
              <ul className="space-y-4">
                {cvData.experience[0].highlights.map((h, i) => (
                  <li key={i} className="text-slate-600 text-sm flex items-start gap-3 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>

        {/* Contact Footer */}
        <footer id="contact" className="mt-40 relative">
          <div className="glass rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 bg-indigo-600 rounded-3xl mx-auto mb-10 flex items-center justify-center text-white shadow-2xl shadow-indigo-200"
              >
                <Mail className="w-10 h-10" />
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-slate-900">
                Let's build something <br />
                <span className="text-gradient">extraordinary.</span>
              </h2>
              
              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href={cvData.contact.resume} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass px-8 py-4 rounded-2xl flex items-center gap-3 font-bold text-slate-700 hover:text-indigo-600 transition-all"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href={`mailto:${cvData.contact.email}`} 
                  className="glass px-8 py-4 rounded-2xl flex items-center gap-3 font-bold text-slate-700 hover:text-indigo-600 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  {cvData.contact.email}
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href={`https://${cvData.contact.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass px-8 py-4 rounded-2xl flex items-center gap-3 font-bold text-slate-700 hover:text-indigo-600 transition-all"
                >
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </motion.a>
              </div>
              
              <div className="flex justify-center gap-10 text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">
                <span>Design Focused</span>
                <span>Performance Driven</span>
                <span>User Centric</span>
              </div>
            </div>
            
            {/* Background decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} {cvData.name} — Crafted with Passion
            </p>
          </div>
        </footer>
      </main>
      
      {/* Custom Cursor or other effects could go here */}
    </div>
  );
}
