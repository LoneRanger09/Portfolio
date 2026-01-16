import { motion } from 'motion/react';
import { Code2, Smartphone, Cpu, Heart, Sparkles } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      emoji: '🎨',
      title: 'Web Development',
      description: 'Building responsive web apps with modern frameworks',
      color: 'from-pink-300 to-rose-300'
    },
    {
      icon: Smartphone,
      emoji: '📱',
      title: 'Mobile Apps',
      description: 'Creating Android apps that work seamlessly',
      color: 'from-purple-300 to-violet-300'
    },
    {
      icon: Cpu,
      emoji: '🤖',
      title: 'IoT Projects',
      description: 'Connecting hardware with smart software solutions',
      color: 'from-blue-300 to-cyan-300'
    },
    {
      icon: Heart,
      emoji: '💖',
      title: 'Problem Solver',
      description: 'Turning ideas into working systems',
      color: 'from-pink-300 to-purple-300'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 transition-colors relative overflow-hidden">
      {/* Cute background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 right-20 w-32 h-32 bg-pink-200 dark:bg-pink-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200 dark:bg-purple-400/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-pink-400 dark:text-pink-300 mx-auto" fill="currentColor" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            About Me 🌸
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto mb-12 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative p-10 rounded-[2rem] bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-3 border-pink-200 dark:border-pink-300/30 shadow-2xl shadow-pink-200/50 dark:shadow-pink-500/20">
            {/* Cute corner decorations */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white fill-white" />
            </div>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
              I'm a <span className="font-bold text-pink-500 dark:text-pink-400">passionate developer</span> who makes web apps, Android apps, and IoT projects. 
              I love building cute things that solve real problems and learning by doing 💕 
              <br /><br />
              I'm a <span className="font-bold text-purple-500 dark:text-purple-400">hands-on learner</span> who loves building real projects, 
              working with web, mobile, and hardware. I enjoy fixing bugs, making things prettier, and turning ideas into real systems! ✨
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="relative p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-pink-200 dark:border-pink-300/20 hover:border-pink-300 dark:hover:border-pink-300/40 transition-all shadow-xl hover:shadow-2xl shadow-pink-200/30 dark:shadow-pink-500/10 h-full">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} dark:opacity-90 rounded-2xl mb-4 shadow-lg`}
                >
                  <span className="text-3xl">{item.emoji}</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                
                {/* Cute sparkle decoration */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  className="absolute top-4 right-4 opacity-40"
                >
                  <Sparkles className="w-4 h-4 text-pink-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
