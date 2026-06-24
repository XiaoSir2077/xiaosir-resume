import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Film, Share2, PenTool, Figma, Code, Compass } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import BorderGlow from './BorderGlow';

export default function SkillsSection() {
  const { title, categories } = resumeData.skills;
  const [activeTab, setActiveTab] = useState<string>(categories[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-skills':
        return <Cpu className="w-5 h-5 text-orange-400" />;
      case 'content-skills':
        return <Share2 className="w-5 h-5 text-amber-400" />;
      case 'product-skills':
        return <Figma className="w-5 h-5 text-rose-400" />;
      default:
        return <Compass className="w-5 h-5 text-slate-400" />;
    }
  };

  const getSubTitle = (id: string) => {
    switch (id) {
      case 'ai-skills':
        return "大模型、Prompt、Vibe Coding 与 AI 视频流";
      case 'content-skills':
        return "全渠道策划、教程输出与视频编导剪辑";
      case 'product-skills':
        return "Figma、物料宣发设计与高保真 Demo 搭建";
      default:
        return "";
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                STACK
              </div>
              <h2 className="text-3xl font-bold font-display text-white">{title}</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-sm font-sans md:text-right">
              熟练打通 AI 工具链，将生成式 AI 潜力融入日常内容运营与产品表达。
            </p>
          </div>

          {/* Desktop & Mobile Interactive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Category selection */}
            <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 gap-3 border-b md:border-b-0 md:border-l border-slate-800/80 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative py-3 px-4 text-left font-medium text-sm transition rounded-xl md:rounded-l-none md:rounded-r-xl border border-transparent whitespace-nowrap flex items-center gap-3 w-full shrink-0 ${
                      isActive
                        ? 'bg-slate-900/80 text-white border-slate-800 border-l-2 border-l-orange-500 md:border-l-4 md:-ml-[2px]'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                    }`}
                  >
                    {getIcon(cat.id)}
                    <span className="font-semibold">{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Category content display */}
            <div className="md:col-span-8 min-h-[300px]">
              <AnimatePresence mode="wait">
                {categories.map((cat) => {
                  if (cat.id !== activeTab) return null;
                  return (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BorderGlow
                        backgroundColor="rgba(15, 23, 42, 0.4)"
                        borderRadius={16}
                        className="w-full"
                      >
                        <div className="p-6 md:p-8 space-y-6">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                              {cat.title}
                              <span className="text-xs font-normal text-slate-500 font-mono">({cat.items.length}项核心)</span>
                            </h3>
                            <p className="text-xs text-slate-400 font-mono">{getSubTitle(cat.id)}</p>
                          </div>

                          {/* Detailed Skill Points list */}
                          <div className="space-y-4 pt-2">
                            {cat.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="group p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition duration-300 flex gap-4"
                              >
                                <div className="w-6 h-6 rounded-lg bg-slate-800 text-xs font-bold text-orange-400 flex items-center justify-center font-mono shrink-0 select-none group-hover:bg-orange-500/10 group-hover:text-orange-300 transition">
                                  0{idx + 1}
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed font-sans font-medium self-center">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </BorderGlow>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
