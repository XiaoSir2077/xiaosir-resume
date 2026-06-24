import React from 'react';
import { resumeData } from '../data/resumeData';
import BorderGlow from './BorderGlow';

export default function ContactSection() {
  const { phone, email, role, availability } = resumeData.personalInfo;
  const edu = resumeData.education;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="contact-and-education" className="bg-slate-950 text-slate-100 relative">
      {/* 1. Education Section (matching Image 2 exactly) */}
      <section id="education-section" className="py-16 border-t border-slate-900/80">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-10 text-xs md:text-sm">
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-[#ea580c] font-bold">06</span>
              <span className="w-10 h-[1px] bg-[#ea580c]/60" />
              <span className="text-slate-300 font-sans tracking-widest">教育经历</span>
            </div>
            <div className="text-slate-600 font-mono tracking-widest">
              / EDUCATION
            </div>
          </div>

          {/* Education Box */}
          <BorderGlow
            backgroundColor="#020617"
            borderRadius={16}
            className="w-full"
          >
            <div className="p-6 md:p-10 flex flex-col justify-between overflow-hidden group relative">
              {/* Ambient radial glow inside */}
              <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Column: Uni Info */}
                <div className="md:col-span-8 space-y-6">
                  <span className="text-xs font-mono text-slate-600 block">
                    01 / 01
                  </span>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-white">
                      {edu.school}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-[#ea580c]">
                      专业就读情况：{edu.degree}{edu.major}
                    </p>
                  </div>
                </div>

                {/* Right Column: Graduation Year Display */}
                <div className="md:col-span-4 text-left md:text-right flex flex-col md:items-end justify-center self-stretch py-2">
                  <div className="text-6xl md:text-8xl font-serif italic font-bold text-[#ea580c] leading-none tracking-tighter">
                    2026
                  </div>
                  <div className="text-[10px] md:text-xs font-mono tracking-widest text-slate-500 uppercase mt-2">
                    GRADUATE
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    / {edu.period}
                  </div>
                </div>
              </div>

              {/* Bottom Meta Bar */}
              <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] md:text-xs font-mono text-slate-500 tracking-wider relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ea580c]">◆</span>
                  <span>BUSINESS ENGLISH</span>
                </div>
                <div>
                  / BACHELOR'S DEGREE
                </div>
                <div className="text-[#ea580c] font-bold">
                  -----+&rarr;
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* 2. Footer Section (matching Image 3 exactly) */}
      <footer id="footer-section" className="bg-slate-950 border-t border-slate-900 pt-16 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          
          {/* Huge THANKS banner */}
          <div className="mb-14">
            <h2 className="font-serif italic font-bold text-7xl sm:text-8xl md:text-[11rem] text-[#ea580c] leading-none tracking-tight select-none">
              THANKS.
            </h2>
          </div>

          {/* Three-column Info Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 border-t border-slate-900 pt-8">
            {/* Column 1: Contact */}
            <div className="space-y-4">
              <h4 className="text-xs md:text-sm font-mono tracking-wider text-slate-400 flex items-center gap-2">
                <span className="text-[#ea580c]">◆</span> CONTACT
              </h4>
              <div className="space-y-2 text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
                <p className="flex items-center gap-2">
                  <span>💬</span> 微信 / 手机：<span className="font-mono">{phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📮</span> 邮箱：
                  <a 
                    href={`mailto:${email}`} 
                    className="underline hover:text-[#ea580c] transition font-mono decoration-slate-700 decoration-1"
                  >
                    {email}
                  </a>
                </p>
              </div>
            </div>

            {/* Column 2: Role */}
            <div className="space-y-4">
              <h4 className="text-xs md:text-sm font-mono tracking-wider text-slate-400 flex items-center gap-2">
                <span className="text-[#ea580c]">◆</span> ROLE
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {role}
              </p>
            </div>

            {/* Column 3: Availability */}
            <div className="space-y-4">
              <h4 className="text-xs md:text-sm font-mono tracking-wider text-slate-400 flex items-center gap-2">
                <span className="text-[#ea580c]">◆</span> AVAILABILITY
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                {availability.location} | {availability.schedule} | {availability.duration}
              </p>
            </div>
          </div>

          {/* Bottom Copyright and Meta Details */}
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] md:text-xs font-mono text-slate-500 tracking-wider">
            <div>
              &copy; 2026 &bull; XIAO YU XUAN / PERSONAL RESUME
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#ea580c]">&bull;</span> DESIGNED & BUILT WITH CARE
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span>ISSUE № 01</span>
              
              {/* Back to Top Arrow Box */}
              <button
                onClick={scrollToTop}
                className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-4 py-3 text-xs font-bold tracking-widest flex items-center gap-1.5 transition active:scale-95 shadow-lg shadow-orange-500/10 cursor-pointer rounded-sm"
              >
                <span>&uarr;</span> TOP
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
