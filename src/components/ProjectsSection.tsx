import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, FileText, Code, Gamepad2, ArrowUpRight, CheckCircle2, ChevronRight, Activity, Users, Settings } from 'lucide-react';
import { resumeData, ProjectExperience } from '../data/resumeData';
import BorderGlow from './BorderGlow';

export default function ProjectsSection() {
  const projects = resumeData.projectExperience;
  const [selectedProjId, setSelectedProjId] = useState<string>(projects[0].id);

  const getProjIcon = (id: string) => {
    switch (id) {
      case 'zopia-growth':
        return <Film className="w-5 h-5 text-orange-400" />;
      case 'ai-resume':
        return <FileText className="w-5 h-5 text-amber-400" />;
      case 'ai-game':
        return <Gamepad2 className="w-5 h-5 text-rose-400" />;
      case 'ai-video':
        return <Film className="w-5 h-5 text-orange-400" />;
      default:
        return <Code className="w-5 h-5 text-orange-400" />;
    }
  };

  const getProjColor = (id: string) => {
    switch (id) {
      case 'zopia-growth':
        return 'border-orange-500/20 hover:border-orange-500/50 text-orange-400 bg-orange-500/5';
      case 'ai-resume':
        return 'border-amber-500/20 hover:border-amber-500/50 text-amber-400 bg-amber-500/5';
      case 'ai-game':
        return 'border-red-500/20 hover:border-red-500/50 text-red-400 bg-red-500/5';
      case 'ai-video':
        return 'border-orange-500/20 hover:border-orange-500/50 text-orange-400 bg-orange-500/5';
      default:
        return 'border-orange-500/20 hover:border-orange-500/50 text-orange-400 bg-orange-500/5';
    }
  };

  const selectedProj = projects.find(p => p.id === selectedProjId) || projects[0];

  return (
    <section id="projects" className="py-16 md:py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                PROJECTS
              </div>
              <h2 className="text-3xl font-bold font-display text-white">项目经历</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-sm font-sans md:text-right">
              主导并推动 AI 影视运营、AI 编程航海以及微型产品验证，注重实效与敏捷交付。
            </p>
          </div>

          {/* Bento-style Explorer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav Cards (Quick Selector) */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 px-1 mb-2">选择项目进行深度拆解</p>
              {projects.map((proj) => {
                const isSelected = proj.id === selectedProjId;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProjId(proj.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex flex-col space-y-2 relative overflow-hidden ${
                      isSelected
                        ? 'bg-slate-900 border-slate-700/80 shadow-lg'
                        : 'bg-slate-900/30 border-slate-800/60 hover:bg-slate-900/50 hover:border-slate-800'
                    }`}
                  >
                    {/* Active left indicator strip */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500" />
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getProjIcon(proj.id)}
                        <span className="text-xs font-semibold text-slate-400 font-mono">
                          {proj.category}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">{proj.period}</span>
                    </div>

                    <h3 className="text-sm md:text-base font-bold text-white tracking-tight flex items-center justify-between">
                      {proj.title}
                      <ChevronRight className={`w-4 h-4 transition duration-300 ${isSelected ? 'translate-x-1 text-orange-400' : 'text-slate-600'}`} />
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Inspector */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProj.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <BorderGlow
                    backgroundColor="rgba(15, 23, 42, 0.5)"
                    borderRadius={16}
                    className="w-full"
                  >
                    <div className="p-6 md:p-8 space-y-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                        <div className="space-y-1">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/20 text-xs font-medium text-orange-400">
                            {selectedProj.role}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            {selectedProj.title}
                          </h3>
                        </div>
                        <span className="text-xs font-mono text-slate-500 shrink-0 bg-slate-900 border border-slate-800 px-2 py-1 rounded-md self-start sm:self-center">
                          {selectedProj.period}
                        </span>
                      </div>

                      {/* Background */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">背景描述</h4>
                        <p className="text-sm text-slate-300 leading-relaxed font-sans font-medium">
                          {selectedProj.background}
                        </p>
                      </div>

                      {/* Work Timeline / SOP */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">核心工作与落地步骤 (SOP)</h4>
                        <div className="space-y-3">
                          {selectedProj.coreWork.map((work, idx) => (
                            <div key={idx} className="flex gap-3 text-sm text-slate-300">
                              <span className="text-orange-400 font-mono font-bold mt-0.5 select-none shrink-0">{idx + 1}.</span>
                              <p className="leading-relaxed">{work}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Outcomes */}
                      <div className="space-y-3 border-t border-slate-800/50 pt-5">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                          量化成果 (Metrics & Deliverables)
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProj.outcomes.map((out, idx) => {
                            const formattedText = out.replace(
                              /(3600\+|90\+|143万|300\+|20\+|5万元|80%|400\+)/g,
                              '<span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold">$1</span>'
                            );
                            return (
                              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/60 flex gap-2.5">
                                <span className="text-orange-500 font-bold shrink-0">✓</span>
                                <p className="text-xs text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedText }} />
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Custom Embeds / Actions for Specific Projects */}
                      {selectedProj.id === 'ai-game' && (
                        <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                              <Gamepad2 className="w-5 h-5 animate-bounce" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">K12教育 AI 游戏 Demo</p>
                              <p className="text-xs text-slate-300 font-medium">您可以直接点击链接体验部署在云端的产品验证原型</p>
                            </div>
                          </div>
                          <a
                            href="https://weiandya.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs flex items-center gap-1.5 shadow-lg transition duration-300 shrink-0 self-stretch sm:self-center justify-center"
                          >
                            体验游戏
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}

                      {selectedProj.id === 'ai-video' && (
                        <div className="mt-4 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                          <div className="flex items-center gap-3 mb-2">
                            <Activity className="w-4 h-4 text-orange-400 animate-pulse" />
                            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">AIGC 影视制作工具栈</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-2 rounded bg-slate-950/60 text-center border border-slate-800">
                              <p className="text-[10px] text-slate-500">剧本/世界观</p>
                              <p className="text-xs text-slate-300 font-bold mt-0.5">GPT 5.5 thinking</p>
                            </div>
                            <div className="p-2 rounded bg-slate-950/60 text-center border border-slate-800">
                              <p className="text-[10px] text-slate-500">视频生成模型</p>
                              <p className="text-xs text-slate-300 font-bold mt-0.5">Seedance 2.0</p>
                            </div>
                            <div className="p-2 rounded bg-slate-950/60 text-center border border-slate-800">
                              <p className="text-[10px] text-slate-500">图片/角色一致性</p>
                              <p className="text-xs text-slate-300 font-bold mt-0.5">GPT Image 2.0</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </BorderGlow>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
