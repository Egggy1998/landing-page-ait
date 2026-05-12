/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function AdmissionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="registration-form" className="py-24 bg-brand text-white">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <div className="w-20 h-20 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4 uppercase">Cảm ơn bạn!</h2>
          <p className="text-blue-100 mb-8">
            Thông tin đã được ghi nhận. AITCV sẽ liên hệ với bạn sớm nhất.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-gold px-8 py-3"
          >
            Quay lại
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="registration-form" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-brand rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 md:p-16 text-white bg-gradient-to-br from-brand via-brand to-brand-dark">
            <h2 className="text-3xl md:text-4xl font-display font-black mb-8 leading-tight uppercase">NHẬN TƯ VẤN CHUYÊN SÂU</h2>
            <p className="text-blue-100 mb-12 text-lg leading-relaxed">
              Hãy để lại thông tin, chúng tôi sẽ gửi lộ trình học tập và thông tin học bổng chi tiết dành cho bạn.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-widest mb-1">Hotline</p>
                  <p className="text-xl font-bold">098 343 7766</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-bold">mscesg@aitcv.ac.vn</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-widest mb-1">Địa chỉ</p>
                  <p className="text-sm font-medium leading-relaxed">Tòa nhà B3, ĐH Bách Khoa, Giải Phóng, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="lg:w-3/5 p-12 md:p-16 bg-white">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Họ và tên *</label>
                <input 
                  required
                  type="text" 
                  placeholder="Nhập họ và tên"
                  className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all placeholder:text-slate-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Số điện thoại *</label>
                <input 
                  required
                  type="tel" 
                  placeholder="Nhập số điện thoại"
                  className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all placeholder:text-slate-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Email *</label>
                <input 
                  required
                  type="email" 
                  placeholder="Nhập email"
                  className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all placeholder:text-slate-300"
                />
              </div>
               <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Địa điểm học</label>
                <select className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all text-slate-600">
                    <option>Hà Nội</option>
                    <option>Hồ Chí Minh</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Ghi chú</label>
                <textarea 
                  rows={3}
                  placeholder="Để lại câu hỏi của bạn..."
                  className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all py-4 placeholder:text-slate-300 resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit"
                  className="w-full btn-gold h-16 text-lg uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(226,196,122,0.3)]"
                >
                  GỬI THÔNG TIN NGAY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
