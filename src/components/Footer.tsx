/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Linkedin, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
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
