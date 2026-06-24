import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, ShieldAlert, Cpu, Share2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function AboutSection() {
  const { title, paragraphs } = resumeData.selfEvaluation;

  // We can derive core values from the self-evaluation text to make it extremely visually engaging!
  const pillars = [
    {
      icon: Cpu,
      title: "AI 场景转化力",
      desc: "擅长将复杂 AI 能力转化为用户能够理解、使用和传播的产品内容与解决方案。",
      color: "from-orange-500 to-amber-500 bg-orange-500/10 text-orange-400"
    },
    {
      icon: Share2,
      title: "全链路运营覆盖",
      desc: "涉足 AI Agent、AI 教育、AI 影视，精通内容运营、用户运营、活动运营与产品推广。",
      color: "from-amber-500 to-red-500 bg-amber-500/10 text-amber-400"
    },
    {
      icon: Zap,
      title: "极强 Owner 意识",
      desc: "在小团队环境中具备较强 Owner 意识，独立推动项目从分析、设计到交付落地，沉淀 SOP 与工作流。",
      color: "from-red-500 to-orange-500 bg-red-500/10 text-red-400"
    },
    {
      icon: Award,
      title: "长期价值与交付",
      desc: "关注长期价值与高质量交付，确保内容真实解决问题、高度可复用，并为业务创造长期价值。",
      color: "from-orange-500 to-rose-500 bg-orange-500/10 text-orange-400"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative border-t border-slate-900 bg-slate-950/20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Side title */}
          <div className="md:w-1/3 md:sticky md:top-24 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              PROFILE
            </div>
            <h2 className="text-3xl font-bold font-display text-white">{title}</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              连接产品、用户与业务之间的桥梁。以 Owner 意识推动 AI 应用的最佳运营落地。
            </p>
          </div>

          {/* Right main paragraphs */}
          <div className="md:w-2/3 space-y-8">
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm shadow-xl space-y-6">
              {paragraphs.map((p, index) => (
                <p key={index} className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 flex flex-col space-y-3 hover:border-slate-700/80 transition"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-slate-100">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
