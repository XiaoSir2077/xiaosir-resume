import React from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import BorderGlow from './BorderGlow';

export default function ExperienceSection() {
  const experiences = resumeData.workExperience;

  return (
    <section id="experience" className="py-16 md:py-24 relative border-t border-slate-900 bg-slate-950/20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                CAREER
              </div>
              <h2 className="text-3xl font-bold font-display text-white">工作经历</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-sm font-sans md:text-right">
              深耕 AI 企业服务、AI 教育与 AI 影视平台运营，在极速迭代的创业生态中创造实效。
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-slate-800/80 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-slate-950 border-2 border-orange-500 group-hover:border-amber-400 transition-colors duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:bg-amber-400 animate-ping absolute" />
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:bg-amber-400 relative" />
                </span>

                <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between mb-4">
                  <div>
                    {/* Date badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800/80 text-xs font-mono text-slate-400 mb-2">
                      <Calendar className="w-3 h-3 text-orange-400" />
                      {exp.period}
                    </div>
                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition duration-300 flex items-center gap-2 flex-wrap">
                      {exp.company}
                      <span className="text-sm font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                        {exp.role}
                      </span>
                    </h3>
                    {/* Sub description */}
                    <p className="text-xs font-mono text-amber-400 mt-1 font-medium">{exp.description}</p>
                  </div>
                </div>

                {/* Core Outcomes List */}
                <BorderGlow
                  backgroundColor="rgba(15, 23, 42, 0.4)"
                  borderRadius={16}
                  className="w-full"
                >
                  <div className="p-5 md:p-6 space-y-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-2">
                      <Award className="w-3.5 h-3.5 text-orange-400" />
                      核心成果与职责
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((hl, hlIdx) => {
                        // Highlight numbers/metrics if they exist in text
                        const formattedText = hl.replace(
                          /(五位数|1000|1300\+|2|3600\+|90\+|20\+|120\+|300\+|5万|143万)/g,
                          '<span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold">$1</span>'
                        );

                        return (
                          <li key={hlIdx} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                            <span className="text-orange-500 font-bold select-none shrink-0 mt-0.5">▪</span>
                            <span dangerouslySetInnerHTML={{ __html: formattedText }} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </BorderGlow>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
