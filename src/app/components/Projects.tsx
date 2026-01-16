import { motion } from 'motion/react';
import { ExternalLink, Github, Heart, Sparkles, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export function Projects() {
  const projects = [
        {
      title: 'BloomBuddy',
      emoji: '🌸',
      description: 'BloomBuddy is a teen-focused menstrual and emotional wellness app designed to provide a safe, cozy, and judgment-free space for young users. The app helps teens understand their menstrual cycle, track emotions, and practice gentle self-care.',
      image: 'data:image/jpeg;base64,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',
      tags: ['Capacitor', 'JavaScript', 'Android'],
      features: ['Period cycle tracking','Cozy and friendly UI for teens','Offline support', 'Push notifications', 'Data export'],
      github: 'https://github.com/LoneRanger09/BloomBuddy',
      demo: '#',
      gradient: 'from-purple-400 via-violet-400 to-indigo-400',
      borderColor: 'border-purple-200 dark:border-purple-300/30'
    },
    {
      title: 'ChatApp (Node.js)',
      emoji: '💬',
      description: 'A real-time chat application built using Node.js that allows users to communicate instantly through messages.',
      image: 'data:image/jpeg;base64,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EEAgjzBmurWThw+UVSqTMcxNKba3W7JyNT6D0LH5VB9H7+DQr9khm09xz8zjZwI7lurIPvsQ/wCU2w1tb78FLpkU9EneZuj2ymvDXVb+btUa+6wLIvtzs/mYbKuXQai4JUE1niC6akFSfETRG2EuIsg4tdzmRE6Oxth5eWzLi0NaygFgunqgnQEkkAdJNtJZZxLJzok3wt1G2bOtCVedttf6k4pKNlbj3Ohys0Ad60oSf7x/3ZTLVVR8ySrkyoJJey/YbaGcQaaStZ/prdUr08VJ5v8A1QfdL12Bu22VikMmOLHGn4S8+kbUd4B9VT9ECS4LMlmv8oL9y2NPqQrsTu2w8DSwj0+QP6ZwNFOnP0VfyO/nzPn3SaieYnnznKbzJl6SXYRESJ0REQBERAEREAREQBERAEREAREQBERAEgna7eVXs/J9BfhXlSAyWqauGwaDi4dSOhOhHX3ESdz49p7Lx8is1ZFS2ofkuAw17iNeh8xzkoOKf1LKOPPkVXtTfhXwkYuE5buNzoqjl14U4uL2aj2yptvbayMy5r8l+N25eCqo6Ii9yjU8v1ky7tqbl9mudabbqfyVZXX6nBP2z5MTchhBtbMu9x81RUmvtOh+yehVdpq+YrkolCcu5S+y9m3ZFq049Zssc6BR9pJ7lHeTyE0tu/7JV7OxhWCGtc8dzgfGfTTRfyQOQ95750Oz3ZjCwk4MSha9fjNzLtp85zzPs6TsTPqNS7eF2Jwr2njSeYiZS0REQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//Z',
      tags: ['Node.js', 'Express', 'Socket.io', 'HTML, CSS, JavaScript'],
      features: ['Real-time messaging','One-to-one and group chat', 'Secure message handling', 'Responsive design'],
      github: 'https://github.com/LoneRanger09/ChatApp_NodeJs',
      demo: '#',
      gradient: 'from-pink-400 via-rose-400 to-orange-400',
      borderColor: 'border-pink-200 dark:border-pink-300/30'
    },
    {
      title: 'Micromouse Robot',
      emoji: '🐭',
      description: 'A micromouse is a small autonomous robot that solves a maze by finding the shortest path from start to finish.',
      image: 'data:image/jpeg;base64,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',
      tags: ['ESP32', 'Sensors', 'Robotics', 'BLE'],
      features: ['Maze Solver', 'Auto-navigation', 'Sensor integration',"C/C++", "maze-solving logic"],
      github: '#',
      demo: '#',
      gradient: 'from-blue-400 via-cyan-400 to-teal-400',
      borderColor: 'border-blue-200 dark:border-blue-300/30'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900 transition-colors relative overflow-hidden">
      {/* Floating hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.8
          }}
          className="absolute"
          style={{
            left: `${15 + i * 18}%`,
            top: `${15 + (i % 3) * 30}%`
          }}
        >
          <Heart className="w-6 h-6 text-pink-300 dark:text-pink-400/30 fill-pink-300 dark:fill-pink-400/30" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Star className="w-12 h-12 text-pink-400 dark:text-pink-300 mx-auto fill-pink-400 dark:fill-pink-300" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects 💖
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto mb-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">✨ Here are some cute projects I've built ✨</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <Card className={`overflow-hidden h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm ${project.borderColor} border-3 hover:shadow-2xl shadow-xl transition-all rounded-[2rem]`}>
                {/* Image with gradient overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity`} />
                  
                  {/* Cute floating badge */}
                  <motion.div 
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <div className="px-4 py-2 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md flex items-center gap-2 shadow-xl border-2 border-pink-200 dark:border-pink-300/30">
                      <Sparkles className="w-4 h-4 text-pink-500" fill="currentColor" />
                      <span className="text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        Featured
                      </span>
                    </div>
                  </motion.div>

                  {/* Project emoji */}
                  <div className="absolute bottom-4 left-4">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-5xl filter drop-shadow-lg"
                    >
                      {project.emoji}
                    </motion.div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 dark:text-slate-100 font-bold">{project.title}</CardTitle>
                  <CardDescription className="dark:text-slate-400 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-3 py-1 rounded-full font-semibold shadow-md`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <Star className="w-4 h-4 text-pink-400 fill-pink-400" />
                      Key Features:
                    </p>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group/btn border-2 border-pink-300 dark:border-pink-300/30 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30 rounded-full font-semibold" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0 rounded-full font-semibold shadow-lg`}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
