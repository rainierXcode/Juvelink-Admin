"use client";

import React from "react";
import { motion } from "framer-motion";

type ModalWrapperProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export function ModalWrapper({ children, onClose }: ModalWrapperProps) {
  const handleBackdropClick = () => {
    if (onClose) onClose();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/10 z-[1000] flex items-center justify-center"
    >
      <div onClick={stopPropagation}>
        <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
