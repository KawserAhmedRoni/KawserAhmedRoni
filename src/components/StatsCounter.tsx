import { motion } from 'motion/react';
import { Calendar, Briefcase, Award, TrendingUp } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      id: 'stat-exp',
      label: 'Years Industry Exp',
      value: '8+',
      desc: 'Expertise across full-stack JavaScript, Next.js, and system scalability.',
      icon: Calendar,
      color: 'from-cyber-blue to-cyan-500',
      accentColor: 'text-cyber-blue',
      borderColor: 'border-cyber-blue/25'
    },
    {
      id: 'stat-projects',
      label: 'Delivered Projects',
      value: '90+',
      desc: 'Production applications designed, coded, and successfully deployed.',
      icon: Award,
      color: 'from-cyber-emerald to-green-500',
      accentColor: 'text-cyber-emerald',
      borderColor: 'border-cyber-emerald/25'
    },
    {
      id: 'stat-tenure',
      label: 'MediaSoft Core Dev',
      value: '5 Years',
      desc: 'Specializing in Enterprise-grade E-commerce, complex WMS, and retail POS suites.',
      icon: Briefcase,
      color: 'from-cyber-violet to-purple-500',
      accentColor: 'text-cyber-violet',
      borderColor: 'border-cyber-violet/25'
    }
  ];

  return (
    <section 
      id="stats" 
      className="py-12 px-4 sm:px-8 border-y border-cyber-gray-900 bg-cyber-gray-950/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="stats-counter-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-cyber-gray-950 border ${stat.borderColor} rounded-lg p-6 overflow-hidden group hover:glow-border-blue transition-all duration-300`}
                id={stat.id}
              >
                {/* Visual pulse line on card header */}
                <div className={`absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r ${stat.color} group-hover:w-full transition-all duration-500`} />

                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{stat.label}</p>
                    <div className="flex items-baseline space-x-1">
                      <h3 className={`text-4xl sm:text-5xl font-bold font-sans tracking-tight text-white`}>
                        {stat.value}
                      </h3>
                      <TrendingUp className={`w-4 h-4 ${stat.accentColor} animate-pulse`} />
                    </div>
                    <p className="text-xs font-sans text-gray-400 font-light leading-relaxed">{stat.desc}</p>
                  </div>

                  <div className={`p-3 bg-cyber-gray-900 border border-cyber-gray-800 rounded-md ${stat.accentColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Cyber accent coordinates in card corner */}
                <div className="absolute bottom-2 right-3 opacity-20 font-mono text-[9px] text-gray-600">
                  REF_LOC: [0x{index * 12}F]
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
