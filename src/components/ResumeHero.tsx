import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Calendar, Clock, Sparkles, Check, Copy } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import SplitText from './SplitText';

export default function ResumeHero() {
  const { name, phone, email, role, availability } = resumeData.personalInfo;
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyText = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 overflow-hidden md:pt-32 md:pb-24">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[200px] h-[200px] bg-amber-500/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <SplitText
                text="HI, I'M"
                tag="span"
                className="text-white"
                delay={60}
                duration={0.7}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="center"
              />
              <SplitText
                text={name}
                tag="span"
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-rose-400"
                delay={80}
                duration={0.8}
                ease="power4.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="center"
              />
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl font-sans text-slate-300 font-medium max-w-2xl mx-auto">
              <SplitText
                text={role}
                tag="span"
                className="text-slate-300 font-medium"
                delay={30}
                duration={0.6}
                ease="power2.out"
                splitType="chars"
                from={{ opacity: 0, y: 15 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="center"
              />
            </div>
          </div>

          {/* Interactive Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl text-left"
          >
            {/* Contact Card */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-lg flex flex-col justify-between space-y-4 hover:border-slate-700 transition duration-300">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-slate-800/50 pb-2">💬 联络通道</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-mono">微信 / 手机</p>
                      <p className="text-sm font-semibold text-slate-200 font-mono">{phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText(phone, 'phone')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                    title="复制手机号/微信号"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-mono">电子邮件</p>
                      <p className="text-sm font-semibold text-slate-200 font-mono">{email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText(email, 'email')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                    title="复制邮箱地址"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-lg flex flex-col justify-between space-y-4 hover:border-slate-700 transition duration-300">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-slate-800/50 pb-2">⌛ 实习投入度</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-800/30 border border-slate-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-[10px] text-slate-400">出勤模式</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">{availability.location}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/30 border border-slate-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-[10px] text-slate-400">每周时间</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">{availability.schedule}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/30 border border-slate-800/50 col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-[10px] text-slate-400">稳定周期</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">{availability.duration}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
