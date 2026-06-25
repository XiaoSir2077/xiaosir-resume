import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function FeishuDocsBanner() {
  const feishuUrl = "https://e00a1ij39o7.feishu.cn/wiki/VgkQwlulFiJffskH8IccCC4Hnye?from=from_copylink";

  return (
    <section className="py-8 md:py-12 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <BorderGlow
          backgroundColor="rgba(15, 23, 42, 0.45)"
          borderRadius={16}
          className="w-full"
          colors={['#ea580c', '#f59e0b', '#f97316']}
          fillOpacity={0.1}
        >
          <div className="p-6 md:p-8 relative overflow-hidden group">
            {/* Soft Ambient glow */}
            <div className="absolute -right-24 -top-24 w-80 h-80 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-500" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-center sm:text-left">
              
              {/* Core Title */}
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-orange-500 shrink-0 hidden xs:block" />
                <h3 className="text-lg md:text-xl font-medium font-display text-slate-100 tracking-tight">
                  更详细内容，请移步 <span className="text-orange-400 font-semibold">飞书云文档</span>
                </h3>
              </div>

              {/* Action Button */}
              <div className="w-full sm:w-auto shrink-0">
                <motion.a
                  href={feishuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-medium text-xs md:text-sm tracking-wide transition-all shadow-md shadow-orange-500/5 cursor-pointer group/btn"
                >
                  <span>立即阅读</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </motion.a>
              </div>

            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
