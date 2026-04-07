'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className: string;
  delay: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: Partial<ScrollRevealProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
