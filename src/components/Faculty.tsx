/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faculty = [
  {
    name: "TS. Anthony Watanabe",
    role: "Giám đốc Phát triển Bền vững - Indorama Ventures",
    image: "https://aitcv.ac.vn/wp-content/uploads/TS.-Anthony-Watanabe.jpg",
    desc: "Với hơn 20 năm kinh nghiệm trong các lĩnh vực phát triển bền vững, đổi mới sáng tạo và chuyển đổi số, TS. Anthony từng đảm nhiệm các vị trí lãnh đạo cấp cao tại Bombardier và Alstom."
  },
  {
    name: "Mr. Richard Brubaker",
    role: "Nhà sáng lập & Giám đốc Điều hành Collective Responsibility",
    image: "https://aitcv.ac.vn/wp-content/uploads/Mr.-Richard-Brubaker.jpg",
    desc: "Chuyên gia tiêu biểu về phát triển bền vững và ESG tại châu Á, đã dẫn dắt hơn 250 dự án cho các thương hiệu toàn cầu như Unilever, Adidas, BMW."
  },
  {
    name: "TS. Lakeesha K. Ransom",
    role: "Giảng viên chương trình PM-ESG",
    image: "https://aitcv.ac.vn/wp-content/uploads/TS.Lakeesha-K.-Ransom-1.jpg",
    desc: "Sở hữu bằng Tiến sĩ từ Đại học Minnesota (Hoa Kỳ), chuyên gia trong quản trị chiến lược, khởi nghiệp xã hội và lãnh đạo."
  },
  {
    name: "TS. Roger Levermore",
    role: "Giám đốc chương trình PM-ESG",
    image: "https://aitcv.ac.vn/wp-content/uploads/TS.-Roger-Levermore-1.jpg",
    desc: "Hơn 20 năm kinh nghiệm giảng dạy và nghiên cứu về quản trị, lãnh đạo, chiến lược và đạo đức kinh doanh."
  },
  {
    name: "Mr. David Galipeau",
    role: "Nhà sáng lập SDGx Group (Singapore)",
    image: "https://aitcv.ac.vn/wp-content/uploads/Mr.-David-Galipeau-1.jpg",
    desc: "Chuyên gia quốc tế về tài chính bền vững và đổi mới xã hội với hơn 25 năm kinh nghiệm tại Liên Hợp Quốc."
  },
  {
    name: "TS. Faiz Shah",
    role: "Giám đốc Chương trình PM-ESG",
    image: "https://aitcv.ac.vn/wp-content/uploads/dr.faiz_.jpg",
    desc: "Chuyên gia về chính sách và quản trị hệ thống với kinh nghiệm quốc tế sâu rộng trong phát triển bền vững."
  }
];

export default function Faculty() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, faculty.length - itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="giang-vien" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          ĐỘI NGŨ GIẢNG VIÊN
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative group max-w-6xl mx-auto"
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-ait-green text-white shadow-xl flex items-center justify-center hover:bg-green-700 transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
            aria-label="Previous faculty"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={next}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-ait-green text-white shadow-xl flex items-center justify-center hover:bg-green-700 transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
            aria-label="Next faculty"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="flex"
            >
              {faculty.map((member, index) => (
                <div 
                  key={index} 
                  className="px-3 shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                   <FacultyCard member={member} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FacultyCard({ member }: { member: any }) {
  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg border border-slate-100 bg-slate-50">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      
      <div className="absolute bottom-6 left-6 right-6 text-white text-left">
        <h3 className="text-xl font-bold mb-1 leading-tight">{member.name}</h3>
        <p className="text-[10px] text-white/80 line-clamp-2 uppercase font-bold tracking-widest leading-tight">{member.role}</p>
      </div>
    </div>
  );
}
