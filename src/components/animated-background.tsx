import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const [words, setWords] = useState<
    Array<{ id: number; word: string; x: number; y: number; color: string }>
  >([]);

  useEffect(() => {
    const keywords = ["Inovação", "Sustentabilidade", "Impacto Social"];
    const colors = ["#00A7BE", "#FEBD11", "#45B649"];
    let wordCounter = 0;

    const interval = setInterval(() => {
      const newWord = {
        id: wordCounter++,
        word: keywords[Math.floor(Math.random() * keywords.length)],
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setWords((prev) => [...prev, newWord]);

      setTimeout(() => {
        setWords((prev) => prev.filter((w) => w.id !== newWord.id));
      }, 4000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {words.map((word) => (
        <motion.div
          key={word.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute text-2xl md:text-4xl font-aminute"
          style={{
            left: `${word.x}%`,
            top: `${word.y}%`,
            transform: "translate(-50%, -50%)",
            color: word.color,
          }}
        >
          {word.word}
        </motion.div>
      ))}
    </div>
  );
}
