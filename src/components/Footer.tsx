/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useRef } from "react";
import { motion } from "motion/react";
import { Facebook, Linkedin, Mail, Phone, Globe, Send, MapPin } from "lucide-react";

const LADIPAGE_FORM_ID = "FORM2";

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => { data[key] = value.toString(); });
    data.form_id = LADIPAGE_FORM_ID;

    try {
      await fetch("https://api.ladipage.net/2.0/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (_) {}

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Registration Form Section */}
      <section id="registration-form" className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="bg-brand rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-2/5 p-12 md:p-16 text-white bg-gradient-to-br from-brand via-brand to-brand-dark">
              {isSubmitted ? (
                <div className="text-center py-12">
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
              ) : (
                <>
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
                </>
              )}
            </div>
            
            <div className="lg:w-3/5 p-12 md:p-16 bg-white">
              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Họ và tên *</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    placeholder="Nhập họ và tên"
                    className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all text-slate-800 placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Số điện thoại *</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all text-slate-800 placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Email *</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    placeholder="Nhập email"
                    className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all text-slate-800 placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Địa điểm học</label>
                  <select name="location" className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all text-slate-600">
                    <option>Hà Nội</option>
                    <option>Hồ Chí Minh</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Ghi chú</label>
                  <textarea 
                    name="note"
                    rows={3}
                    placeholder="Để lại câu hỏi của bạn..."
                    className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 focus:border-brand focus:bg-transparent outline-none transition-all py-4 text-slate-800 placeholder:text-slate-300 resize-none"
                  />
                </div>
                <div className="md:col-span-2 pt-6">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold h-16 text-lg uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(226,196,122,0.3)] disabled:opacity-60"
                  >
                    {isSubmitting ? "ĐANG GỬI..." : "GỬI THÔNG TIN NGAY"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Footer Content */}
      <div id="lien-he" className="pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <img 
              src="https://aitcv.ac.vn/wp-content/uploads/logo-2.png" 
              alt="AIT Vietnam" 
              className="h-16 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify">
              AIT là tổ chức giáo dục quốc tế đa chính phủ duy nhất trên thế giới được thành lập năm 1959. AIT Việt Nam được thành lập năm 1993, tiên phong trong đào tạo nguồn nhân lực chất lượng cao.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/aitvietnam" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/school/ait-vietnam" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://aitcv.ac.vn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-4">HÀ NỘI</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-brand flex-shrink-0" />
                <p>mscesg@aitcv.ac.vn</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                <p>098 343 7766</p>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 text-brand flex-shrink-0">📍</div>
                <p>Tòa nhà B3, ĐH Bách Khoa, Số 1, Giải Phóng, Hai Bà Trưng, Hà Nội</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-4">TP. HỒ CHÍ MINH</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-brand flex-shrink-0" />
                <p>mscesg@aitcv.ac.vn</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                <p>035 558 7766</p>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 text-brand flex-shrink-0">📍</div>
                <p>Số 45 Đinh Tiên Hoàng, Quận 1, Tp. Hồ Chí Minh</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-4">QUY ĐỊNH</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách hoàn phí</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} AITCV Vietnam. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
      </div>
    </footer>
  );
}
