'use client';
import {
  Inertia,
  TargetAndTransition,
  VariantLabels,
  motion,
} from 'framer-motion';
import React, { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string | undefined;
  dragTransition?: Partial<Omit<Inertia, 'velocity' | 'type'>> | undefined;
  whileDrag?: VariantLabels | TargetAndTransition | undefined;
};
//vary position

export default function DragChild({
  children,
  className = 'absolute',
  dragTransition,
  whileDrag,
}: Props) {
  const constraintRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div ref={constraintRef} className={className}>
      <motion.div
        drag
        dragConstraints={constraintRef}
        dragTransition={dragTransition}
        whileDrag={whileDrag}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
