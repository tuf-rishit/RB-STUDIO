import { motion } from 'motion/react';
import { ArrowLeft, Printer, Mail, Phone, MapPin, ExternalLink, Award, BookOpen, Briefcase } from 'lucide-react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants/data';
import { Link } from 'react-router-dom';

export const ResumeView = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-32 min-h-screen bg-bg-dark">
      {/* Navigation & Controls */}
      <div className="max-w-4xl mx-auto px-6 mb-12 flex items-center justify-between no-print">
        <Link to="/" className="inline-flex items-center gap-2 text-accent-pink font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="px-6 py-2 rounded-lg glass border-border-thin text-[12px] font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:border-accent-purple/50 transition-all text-white"
        >
          <Printer size={16} /> Print Resume
        </motion.button>
      </div>

      {/* Resume Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 pb-32"
      >
        <div className="glass p-12 md:p-16 rounded-[40px] border-border-thin shadow-2xl relative overflow-hidden print:p-0 print:shadow-none print:glass-none print:bg-white print:text-black">
          {/* Decorative background glow for screen - hidden when printing */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/5 blur-[100px] -z-10 no-print" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-pink/5 blur-[100px] -z-10 no-print" />

          {/* Header */}
          <header className="mb-16 border-b border-white/10 pb-12 print:border-black/20">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 print:text-black uppercase tracking-tighter">
              Rishit <span className="accent-text print:text-black">Beotra</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-4 text-text-muted font-medium text-sm print:text-black/70">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent-pink print:text-black" />
                <span>rishit.beotra.cd23@ggits.net</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent-purple print:text-black" />
                <span>+91 87198 03373</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent-cyan print:text-black" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink size={16} className="text-accent-blue print:text-black" />
                <a href="https://linkedin.com/in/rishit-beotra-a28524346" className="hover:text-white transition-colors print:hover:text-black">linkedin.com/in/rishit-beotra-a28524346</a>
              </div>
            </div>
          </header>

          {/* Experience Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="text-accent-purple print:text-black" size={24} />
              <h2 className="text-2xl font-black text-white print:text-black uppercase tracking-wider">Experience</h2>
            </div>
            <div className="space-y-10">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-white/10 print:border-black/20">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent-pink print:bg-black" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-lg font-bold text-white print:text-black">{exp.role}</h3>
                    <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest print:text-black/60">{exp.duration}</span>
                  </div>
                  <p className="text-sm font-bold text-text-muted mb-4 print:text-black/80">{exp.company}</p>
                  <p className="text-sm text-text-muted leading-relaxed print:text-black/70">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="text-accent-pink print:text-black" size={24} />
              <h2 className="text-2xl font-black text-white print:text-black uppercase tracking-wider">Education</h2>
            </div>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border-border-thin print:border-black/20 print:glass-none print:p-0 print:bg-transparent">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white print:text-black">{edu.degree}</h3>
                    <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest print:text-black/60">{edu.year}</span>
                  </div>
                  <p className="text-sm text-text-muted font-medium mb-1 print:text-black/80">{edu.institution}</p>
                  <p className="text-sm font-bold text-accent-pink print:text-black">{edu.score}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <Award className="text-accent-cyan print:text-black" size={24} />
              <h2 className="text-2xl font-black text-white print:text-black uppercase tracking-wider">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-text-muted font-medium print:text-black/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                  {cert}
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>

      {/* Style for printing */}
      <style>{`
        @media print {
          body { background-color: white !important; }
          .no-print { display: none !important; }
          .accent-text { 
            color: black !important;
            background: none !important;
            -webkit-text-fill-color: initial !important;
          }
        }
      `}</style>
    </div>
  );
};
