/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Zoom animation */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-left md:bg-center z-0"
        style={{ backgroundImage: "url('https://aitcv.ac.vn/wp-content/uploads/Artboard-1-copy-8@2x.png')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-white text-2xl md:text-3xl font-display font-medium tracking-[0.2em] mb-4 drop-shadow-lg">
            THẠC SĨ
          </h2>
          <h1 className="text-white text-4xl md:text-7xl font-display font-extrabold uppercase leading-tight mb-12 drop-shadow-2xl">
            MÔI TRƯỜNG, XÃ HỘI VÀ QUẢN TRỊ
          </h1>
          
          <button 
            onClick={scrollToForm}
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 animate-ping rounded-full bg-accent/40 group-hover:bg-accent/60 opacity-75"></div>
            <img 
              src="https://aitcv.ac.vn/wp-content/uploads/button-300x69.png" 
              alt="Đăng ký ngay"
              className="relative w-64 md:w-80 h-auto transition-transform hover:scale-105 active:scale-95"
            />
          </button>
        </motion.div>
        
        {/* Floating text background from screenshot */}
        <div className="absolute bottom-10 left-0 w-full opacity-30 select-none pointer-events-none hidden md:block">
          <span className="text-[25vw] font-black text-white/40 leading-none">ESG</span>
        </div>
      </div>
    </section>
  );
}
