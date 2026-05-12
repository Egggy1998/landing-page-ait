/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function QuickForm() {
  return (
    <section id="dang-ky" className="py-20 relative overflow-hidden bg-brand/80">
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50"
        style={{ backgroundImage: "url('https://aitcv.ac.vn/wp-content/uploads/7b0496379acaeae6d57360c2fbde9ebe.jpg')" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-4xl font-display font-bold text-center mb-12 uppercase tracking-tight"
        >
          SẴN SÀNG ĐỂ BẮT ĐẦU HÀNH TRÌNH MỚI
        </motion.h2>

        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <input 
              type="text" 
              placeholder="Họ và tên"
              className="w-full h-14 bg-white/95 rounded-xl px-6 outline-none focus:ring-2 focus:ring-accent border-none text-slate-800 placeholder:text-slate-400"
            />
            <input 
              type="tel" 
              placeholder="Số điện thoại"
              className="w-full h-14 bg-white/95 rounded-xl px-6 outline-none focus:ring-2 focus:ring-accent border-none text-slate-800 placeholder:text-slate-400"
            />
            <input 
              type="email" 
              placeholder="Email"
              className="w-full h-14 bg-white/95 rounded-xl px-6 outline-none focus:ring-2 focus:ring-accent border-none text-slate-800 placeholder:text-slate-400"
            />
            <input 
              type="text" 
              placeholder="Chức vụ"
              className="w-full h-14 bg-white/95 rounded-xl px-6 outline-none focus:ring-2 focus:ring-accent border-none text-slate-800 placeholder:text-slate-400"
            />
            <input 
              type="text" 
              placeholder="Số năm kinh nghiệm"
              className="w-full h-14 bg-white/95 rounded-xl px-6 outline-none focus:ring-2 focus:ring-accent border-none text-slate-800 placeholder:text-slate-400"
            />
            <input 
              type="text" 
              placeholder="Tỉnh/ Thành phố"
              className="w-full h-14 bg-white/95 rounded-xl px-6 outline-none focus:ring-2 focus:ring-accent border-none text-slate-800 placeholder:text-slate-400"
            />
          </div>
          
          <div className="text-center">
            <button 
              type="submit"
              className="btn-gold px-12 py-4 text-xl uppercase tracking-widest min-w-[250px]"
            >
              ĐĂNG KÝ
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
