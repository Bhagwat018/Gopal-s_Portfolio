"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface ToastProps {
  message: string | null;
  isVisible: boolean;
}

export function Toast({ message, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-clay-sm border-3 border-ink bg-white px-4 py-3 shadow-brutal font-mono text-xs font-bold text-ink"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-ink">
            <Check className="h-3 w-3 stroke-[3]" />
          </div>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
