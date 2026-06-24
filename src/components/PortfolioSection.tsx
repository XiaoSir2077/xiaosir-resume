import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Video, Layout, ArrowUpRight, CheckCircle2, Copy, Sparkles, AlertCircle, FileSpreadsheet, Eye } from 'lucide-react';
import { resumeData, PortfolioItem } from '../data/resumeData';
import BorderGlow from './BorderGlow';

export default function PortfolioSection() {
  const portfolioItems = resumeData.portfolio;
  const [activeFilter, setActiveFilter] = useState<'all' | 'solution' | 'video' | 'design'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const getCatIcon = (cat: string) => {
    switch (cat) {
      case 'solution':
        return <FileText className="w-5 h-5 text-orange-400" />;
      case 'video':
        return <Video className="w-5 h-5 text-amber-400" />;
      case 'design':
        return <Layout className="w-5 h-5 text-rose-400" />;
      default:
        return <FileSpreadsheet className="w-5 h-5 text-slate-400" />;
    }
  };

  const getCatBadge = (cat: string) => {
    switch (cat) {
      case 'solution':
        return <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono">方案设计 PDF / PPT</span>;
      case 'video':
        return <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono">内容创作 / 影视视频</span>;
      case 'design':
        return <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono">视觉传达 / 活动物料</span>;
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 relative border-t border-slate-900 bg-slate-950/20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                PORTFOLIO
              </div>
              <h2 className="text-3xl font-bold font-display text-white">作品集</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-sm font-sans md:text-right">
              集成日常编写的高质量对外营销方案、AIGC 影视视频作品，以及现场沙龙的整体物料设计。
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
            {(['all', 'solution', 'video', 'design'] as const).map((filter) => {
              const label = {
                all: '全部作品 (' + portfolioItems.length + ')',
                solution: '方案设计 (' + portfolioItems.filter(i => i.category === 'solution').length + ')',
                video: '内容作品 (' + portfolioItems.filter(i => i.category === 'video').length + ')',
                design: '海报物料 (' + portfolioItems.filter(i => i.category === 'design').length + ')',
              }[filter];

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-medium border transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-slate-900 border-slate-700 text-white shadow-md'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedItem(item)}
                >
                  <BorderGlow
                    backgroundColor="rgba(15, 23, 42, 0.4)"
                    borderRadius={16}
                    className="h-full"
                  >
                    <div className="p-5 md:p-6 flex flex-col justify-between h-full space-y-4 min-h-[220px]">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-center justify-center">
                            {getCatIcon(item.category)}
                          </div>
                          {getCatBadge(item.category)}
                        </div>

                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-white group-hover:text-orange-300 transition duration-300 leading-snug">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-xs font-mono text-amber-400/90 font-medium">{item.subtitle}</p>
                          )}
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                        {item.metrics ? (
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400">
                            📊 {item.metrics}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-500 font-mono">
                            点击卡片阅读详情
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-400 group-hover:text-orange-300 transition duration-200">
                          查看详情
                          <Eye className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Portfolio Item Detail Slide-Over / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Top gradient strip */}
              <div className="h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              >
                ✕
              </button>

              <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {getCatIcon(selectedItem.category)}
                    {getCatBadge(selectedItem.category)}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.subtitle && (
                    <p className="text-xs font-mono text-amber-400 font-semibold">{selectedItem.subtitle}</p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">成果描述</h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Specific details per category */}
                {selectedItem.category === 'solution' && selectedItem.outline && (
                  <div className="space-y-3 bg-slate-950/50 border border-slate-800/80 p-5 rounded-xl">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800/80 pb-2">
                      <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                      核心大纲与技术要点 (Document Outline)
                    </h4>
                    <div className="space-y-2.5 pt-1.5">
                      {selectedItem.outline.map((out, idx) => (
                        <div key={idx} className="flex gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <span className="text-orange-400 font-mono font-bold shrink-0">CH.{idx + 1}</span>
                          <p className="font-medium">{out}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedItem.category === 'video' && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      {selectedItem.platform && (
                        <div className="p-3 rounded-lg bg-slate-950/30 border border-slate-800/60">
                          <p className="text-[10px] text-slate-500 font-mono">发布平台</p>
                          <p className="text-xs text-slate-300 font-semibold mt-0.5">{selectedItem.platform}</p>
                        </div>
                      )}
                      {selectedItem.metrics && (
                        <div className="p-3 rounded-lg bg-slate-950/30 border border-slate-800/60">
                          <p className="text-[10px] text-slate-500 font-mono">流量成果指标</p>
                          <p className="text-xs text-amber-400 font-bold mt-0.5">{selectedItem.metrics}</p>
                        </div>
                      )}
                    </div>

                    {selectedItem.link && (
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-left">
                          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">抖音微电影视频链接</p>
                          <p className="text-xs text-slate-400 font-medium">可复制或直接点击跳转抖音查看真实作品</p>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto shrink-0">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(selectedItem.link || '');
                              alert('链接已复制到剪贴板！');
                            }}
                            className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs flex items-center justify-center gap-1 transition"
                          >
                            复制链接
                          </button>
                          <a
                            href={selectedItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs flex items-center justify-center gap-1 transition shadow-md"
                          >
                            跳转播放
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Additional Warning / Disclaimer for confidentiality */}
                {selectedItem.category === 'solution' && (
                  <div className="flex gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 text-[11px] text-slate-400 font-medium">
                    <AlertCircle className="w-4 h-4 text-slate-500 shrink-0" />
                    注：出于商业保密考虑，上述 PDF/PPT 方案的详细内容无法直接完全展示。如有面试或审查需求，可在面试环节由本人现场进行讲解或经脱敏处理后提供参考。
                  </div>
                )}
              </div>

              {/* Footer action */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/60 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
