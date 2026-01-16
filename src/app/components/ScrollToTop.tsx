import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 text-white shadow-2xl shadow-pink-300/50 dark:shadow-pink-500/30 border-3 border-white/50 dark:border-white/20 backdrop-blur-sm group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <ArrowUp size={24} className="relative z-10" strokeWidth={3} />
            
            {/* Cute sparkle decoration */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-4 h-4 text-yellow-200" fill="currentColor" />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
