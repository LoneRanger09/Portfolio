import { motion } from 'motion/react';
import { Moon, Sun, ArrowDown, Sparkles, Heart, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useTheme } from '@/app/components/ThemeProvider';

export function Hero() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-950/30 dark:via-purple-950/30 dark:to-blue-950/30">
      {/* Cute floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-pink-200 dark:bg-pink-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-8 left-1/3 w-80 h-80 bg-blue-200 dark:bg-blue-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60"
        />
        
        {/* Floating sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + i * 0.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          >
            <Sparkles className="w-6 h-6 text-pink-400 dark:text-pink-300" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Cute theme toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="absolute top-8 right-8 p-4 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border-2 border-pink-200 dark:border-pink-300/30 hover:border-pink-300 dark:hover:border-pink-300/50 transition-all shadow-lg shadow-pink-200/50 dark:shadow-pink-500/20"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-purple-400" />
        )}
      </motion.button>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-6"
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-2 border-pink-200 dark:border-pink-300/30 mb-8 shadow-lg"
          >
            <Heart className="w-5 h-5 text-pink-500 dark:text-pink-400 fill-pink-500 dark:fill-pink-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              ✨ open to cute opportunities ✨
            </span>
            <Heart className="w-5 h-5 text-pink-500 dark:text-pink-400 fill-pink-500 dark:fill-pink-400 animate-pulse" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 dark:from-pink-300 dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent drop-shadow-sm">
              Arnav Vats 🧸
            </h1>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-4"
        >
          💻 Web, Mobile & IoT Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build real-world apps and smart devices using web, mobile, and hardware technologies 🌟
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, type: "spring" }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white shadow-xl shadow-pink-300/50 dark:shadow-pink-500/30 border-0 font-semibold text-lg px-8"
            >
              ✨ View My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="rounded-full border-3 border-pink-400 dark:border-pink-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30 font-semibold text-lg px-8 shadow-lg"
            >
              💌 Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 15, 0]
        }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pink-500 dark:text-pink-400 cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={36} strokeWidth={3} />
      </motion.button>
    </section>
  );
}
