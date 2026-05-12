/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
  {
    id: "yc",
    label: "Yêu cầu đầu vào",
    content: (
      <ul className="space-y-4 list-disc pl-6 text-ait-green">
        <li>Có bằng đại học hệ 4-5 năm hoặc tương đương, chuyên ngành phù hợp, điểm tổng kết trên <strong>2.75</strong>.</li>
        <li>Có tối thiểu 3 năm kinh nghiệm làm việc (căn cứ vào CV)</li>
        <li>Trình độ tiếng Anh đầu vào: IELTS <strong>(5.0)</strong> hoặc tương đương/ Hoặc ứng viên tham gia thi Tiếng Anh Đầu Vào của AIT (writing task 2). Lệ phí thi: <strong>1.239.719 VND/lần (47 USD/lần)</strong></li>
        <li>Chương trình sẽ xem xét phỏng vấn tùy vào hồ sơ của ứng viên</li>
      </ul>
    )
  },
  {
    id: "hs",
    label: "Hồ sơ bắt buộc",
    content: (
      <ul className="space-y-4 list-disc pl-6 text-ait-green">
        <li>Đơn xin nhập học theo mẫu</li>
        <li>CV tiếng anh (tối đa 2 trang)</li>
        <li>Bằng cử nhân với CGPA trên 2.75, tối thiểu 3 năm kinh nghiệm làm việc phù hợp và bảng điểm (tiếng Anh)</li>
        <li>IELTS 5.0 hoặc tương đương hoặc EET-AIT 5.0 trở lên</li>
        <li>Hộ chiếu (scan có hình)</li>
        <li>1 ảnh 3×4</li>
      </ul>
    )
  },
  {
    id: "hp",
    label: "Học phí - học bổng",
    content: (
      <div className="space-y-6 text-ait-green">
        <p>• Tổng Học phí (trọn gói): <strong>342.901.000 VND (13.000 USD).</strong></p>
        <p>• Chi phí cho 02 chuyến học tập tại AIT, Thái Lan (tùy chọn): <strong>52.754.000 VND (2.000 USD)</strong> (Không bao gồm chi phí ăn uống, sinh hoạt cá nhân)</p>
        <p>• Tổng học phí: <strong>395.655.000 VND (15.000 USD)</strong> chia làm 3 lần đóng trong 1 năm</p>
        <p className="text-xs italic text-slate-500">* Tỷ giá tham chiếu: 1 USD = 26.377 VND. AIT Việt Nam trao Học bổng Lãnh đạo & Tác động 2026 lên đến 50% học phí.</p>
      </div>
    )
  },
  {
    id: "tg",
    label: "Thời gian nhập học",
    content: (
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <tbody className="divide-y divide-slate-100">
            <tr className="bg-slate-50"><td className="p-4 font-bold">Kỳ học</td><td className="p-4">2026 - 2027</td></tr>
            <tr><td className="p-4 font-bold">Hồ sơ ứng tuyển</td><td className="p-4">Hà Nội (07/2026) - HCM (02/2027)</td></tr>
            <tr className="bg-slate-50"><td className="p-4 font-bold">Thi Tiếng Anh</td><td className="p-4">Thứ 3 & 4 hàng tuần</td></tr>
            <tr><td className="p-4 font-bold">Khai giảng</td><td className="p-4">Hà Nội (09/2026) - HCM (03/2027)</td></tr>
          </tbody>
        </table>
      </div>
    )
  }
];

export default function AdmissionInfo() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="thong-tin-tuyen-sinh" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          THÔNG TIN TUYỂN SINH
        </motion.h2>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 bg-paper p-6 md:p-12 rounded-[2rem] shadow-sm">
          {/* Tabs Sidebar */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {tabs.map((tab, idx) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between px-8 py-5 rounded-2xl font-bold text-left transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-ait-green text-white shadow-lg" 
                    : "bg-[#FAF5ED] text-slate-500 hover:bg-slate-200"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`transition-transform duration-300 ${activeTab === tab.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>➜</span>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="md:w-2/3 bg-white p-8 md:p-12 rounded-3xl min-h-[400px] shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-display font-bold text-brand mb-8 uppercase">
                  {tabs.find(t => t.id === activeTab)?.label}:
                </h3>
                <div className="leading-relaxed">
                  {tabs.find(t => t.id === activeTab)?.content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Bottom Video and Form Link */}
        <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto border-[12px] border-ait-green/10 rounded-3xl overflow-hidden shadow-2xl mb-12">
                 <iframe 
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/u7F2fF-r8t4" 
                  title="AIT Graduation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
}
