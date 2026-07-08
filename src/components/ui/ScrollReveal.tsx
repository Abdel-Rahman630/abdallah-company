"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealImage({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: isInView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay }}
        className="w-full h-full"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: isInView ? 1 : 1.2 }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay }}
          className="w-full h-full origin-left"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function RevealText({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)", y: 20, opacity: 0 }}
        animate={{ 
          clipPath: isInView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          y: isInView ? 0 : 20, 
          opacity: isInView ? 1 : 0 
        }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
