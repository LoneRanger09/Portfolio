import { motion } from 'motion/react';
import { Star, Sparkles } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      emoji: '✨',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30',
      skills: ['React', 'HTML', 'CSS/Tailwind', 'JavaScript','TypeScript', 'UI/UX Basics']
    },
    {
      category: 'Mobile',
      emoji: '📱',
      color: 'from-purple-400 to-violet-400',
      bgColor: 'from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30',
      skills: ['Android App (Capacitor)', 'APK Build', 'App Screen Design']
    },
    {
      category: 'Backend / Logic',
      emoji: '⚡',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30',
      skills: ['C++','Java', 'C', 'Python']
    },
    {
      category: 'Hardware / IoT',
      emoji: '🤖',
      color: 'from-orange-400 to-amber-400',
      bgColor: 'from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30',
      skills: ['ESP32', 'Arduino', 'Sensors & Modules', 'Robotics Control', 'BLE (Bluetooth)']
    },
    {
      category: 'Tools',
      emoji: '🛠️',
      color: 'from-emerald-400 to-teal-400',
      bgColor: 'from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30',
      skills: ['Git','Canvas','Figma', 'Arduino IDE', 'Debugging Tools', 'Serial Monitor']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Cute floating stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 4 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${10 + (i % 4) * 25}%`
          }}
        >
          <Star className="w-5 h-5 text-pink-300 dark:text-pink-400/30" fill="currentColor" />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-purple-400 dark:text-purple-300 mx-auto" fill="currentColor" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Skills & Tech 🎀
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.5
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <div className={`relative p-8 rounded-[2rem] bg-gradient-to-br ${category.bgColor} backdrop-blur-md border-3 border-white/50 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-[2rem]`} />
                
                {/* Floating sparkles on hover */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-3 right-3 opacity-30"
                >
                  <Sparkles className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                </motion.div>
                
                <div className="relative">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-4 shadow-lg`}
                  >
                    <span className="text-3xl">{category.emoji}</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1 + skillIndex * 0.05,
                          type: "spring"
                        }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 group/skill"
                      >
                        <motion.div 
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: skillIndex * 0.2
                          }}
                          className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${category.color} shadow-sm`}
                        />
                        <span className="text-slate-700 dark:text-slate-300 font-medium group-hover/skill:text-slate-900 dark:group-hover/skill:text-slate-100 transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
