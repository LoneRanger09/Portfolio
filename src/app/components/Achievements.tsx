import { motion } from 'motion/react';
import { Trophy, Target, Star, Sparkles, Heart } from 'lucide-react';

export function Achievements() {
  const achievements = [
    { text: 'Built lots of real-world projects', icon: '🎉' },
    { text: 'Created Website && Android apps', icon: '✨' },
    { text: 'Participated in IIT Roorkee TechFest', icon: '🌟' },
    { text: 'Learned by doing and building', icon: '💫' }
  ];

  const goals = [
    { text: 'Become a full-stack pookie', icon: '💖' },
    { text: 'Build big cool systems', icon: '🚀' },
    { text: 'Create tech that helps people', icon: '🌸' },
    { text: 'Keep learning new things', icon: '✨' }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Cute floating decorations */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.7
          }}
          className="absolute"
          style={{
            left: `${12 + i * 15}%`,
            top: `${15 + (i % 3) * 30}%`
          }}
        >
          <Sparkles className="w-5 h-5 text-purple-300 dark:text-purple-400/30" fill="currentColor" />
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
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Trophy className="w-12 h-12 text-yellow-400 dark:text-yellow-300 mx-auto" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Achievements & Goals 🎯
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="group"
          >
            <div className="relative p-8 rounded-[2rem] bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 backdrop-blur-md border-3 border-yellow-200 dark:border-yellow-300/30 shadow-2xl hover:shadow-3xl transition-all overflow-hidden">
              {/* Cute corner decoration */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Star className="w-8 h-8 text-white fill-white" />
              </motion.div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-lg"
                  >
                    <Trophy className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                    Achievements ✨
                  </h3>
                </div>

                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring"
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-start gap-3 group/item p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all"
                    >
                      <motion.div 
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                        className="text-2xl mt-0.5"
                      >
                        {achievement.icon}
                      </motion.div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100 transition-colors">
                        {achievement.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="group"
          >
            <div className="relative p-8 rounded-[2rem] bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 backdrop-blur-md border-3 border-pink-200 dark:border-pink-300/30 shadow-2xl hover:shadow-3xl transition-all overflow-hidden">
              {/* Cute corner decoration */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="w-8 h-8 text-white fill-white" />
              </motion.div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl shadow-lg"
                  >
                    <Target className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                    Goals 💫
                  </h3>
                </div>

                <div className="space-y-4">
                  {goals.map((goal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring"
                      }}
                      whileHover={{ x: -10, scale: 1.02 }}
                      className="flex items-start gap-3 group/item p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all"
                    >
                      <motion.div 
                        animate={{ 
                          rotate: [0, -10, 10, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                        className="text-2xl mt-0.5"
                      >
                        {goal.icon}
                      </motion.div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100 transition-colors">
                        {goal.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
