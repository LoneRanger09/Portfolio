import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Globe, Heart, Sparkles, Star } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    { 
      icon: Mail, 
      emoji: '💌',
      label: 'Email', 
      href: 'mailto:arnavkumar1530@gmail.com',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30'
    },
    { 
      icon: Github, 
      emoji: '🐙',
      label: 'GitHub', 
      href: 'https://github.com/LoneRanger09',
      color: 'from-purple-400 to-violet-400',
      bgColor: 'from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30'
    },
    { 
      icon: Linkedin, 
      emoji: '💼',
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/arnav-kumar-4aa662336',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30'
    },
    { 
      icon: Globe, 
      emoji: '🌐',
      label: 'Portfolio', 
      href: 'https://www.itsarnav.me/',
      color: 'from-teal-400 to-emerald-400',
      bgColor: 'from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30'
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20 overflow-hidden">
      {/* Cute floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 6 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute"
            style={{
              left: `${8 + i * 10}%`,
              top: `${10 + (i % 4) * 25}%`
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="w-6 h-6 text-pink-300 dark:text-pink-400/40 fill-pink-300 dark:fill-pink-400/40" />
            ) : i % 3 === 1 ? (
              <Star className="w-6 h-6 text-purple-300 dark:text-purple-400/40 fill-purple-300 dark:fill-purple-400/40" />
            ) : (
              <Sparkles className="w-6 h-6 text-blue-300 dark:text-blue-400/40 fill-blue-300 dark:fill-blue-400/40" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Let's Connect! 🌸
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto mb-8 rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="text-xl text-slate-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I'm always excited to hear about new projects and opportunities! 
          Feel free to reach out and let's create something amazing together ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.5
              }}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`relative p-6 rounded-[2rem] bg-gradient-to-br ${link.bgColor} backdrop-blur-md border-3 border-white/50 dark:border-slate-700/50 hover:border-white dark:hover:border-slate-600 shadow-xl hover:shadow-2xl transition-all overflow-hidden`}>
                  {/* Sparkle decoration */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-2 right-2 opacity-40"
                  >
                    <Sparkles className={`w-5 h-5 bg-gradient-to-r ${link.color} bg-clip-text text-transparent`} />
                  </motion.div>
                  
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                      className="text-4xl mb-3"
                    >
                      {link.emoji}
                    </motion.div>
                    <p className="font-bold text-slate-800 dark:text-slate-100 mb-1">
                      {link.label}
                    </p>
                    <div className={`w-12 h-1 bg-gradient-to-r ${link.color} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="relative p-8 rounded-[2rem] bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-3 border-pink-200 dark:border-pink-300/30 shadow-2xl max-w-2xl mx-auto"
        >
          {/* Corner hearts */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-3 -left-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute -top-3 -right-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 font-semibold text-lg mb-2">
              Made with <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" /> by Arnav Vats
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              ✨ Built with React, Tailwind CSS, and Motion ✨
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
              © 2026 • Pookie Portfolio 🧸💖
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
