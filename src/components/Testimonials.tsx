/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Bà Nguyễn Thị Hương Thu",
    role: "Tổng Giám đốc GreenViet Green Building Consultancy Co., Ltd.",
    content: "PM-ESG giúp tôi nhận rõ vai trò then chốt của quản trị và tầm quan trọng của đầu tư vào môi trường, con người để tạo giá trị bền vững. Đồng thời, chương trình làm rõ triết lý kinh doanh và định hướng ESG, giúp tôi tư vấn và hỗ trợ khách hàng hiệu quả hơn.",
    image: "https://aitcv.ac.vn/wp-content/uploads/Asset-10@2x.png"
  },
  {
    name: "Ông Trương Vĩnh Khang",
    role: "Trưởng bộ phận Phát triển các giải pháp Phát triển Bền vững, BSI Việt Nam",
    content: "PM-ESG mang đến góc nhìn toàn diện, đa chiều về phát triển bền vững, hỗ trợ trực tiếp cho work. Phương pháp học tương tác và nghiên cứu chuyên sâu giúp tôi củng cố kiến thức, nâng cao năng lực và đóng góp giá trị thiết thực hơn cho doanh nghiệp.",
    image: "https://aitcv.ac.vn/wp-content/uploads/Asset-12@2x.png"
  },
  {
    name: "Bà Nguyễn Thị Mai Anh",
    role: "Chủ tịch Công ty tư vấn & kiểm toán Anh Consulting",
    content: "PM-ESG giúp tôi nhận rõ vai trò then chốt của quản trị và tầm quan trọng của đầu tư vào môi trường, con người để tạo giá trị bền vững. Đồng thời, chương trình làm rõ triết lý kinh doanh và định hướng ESG, giúp tôi tư vấn và hỗ trợ khách hàng hiệu quả hơn.",
    image: "https://aitcv.ac.vn/wp-content/uploads/Asset-11@2x.png"
  },
  {
    name: "Bà Trần Thị Kim Khánh",
    role: "Thành viên HĐQT độc lập, Chủ tịch Ủy ban Kiểm toán",
    content: "Chương trình giúp tôi tự tin tham gia và đóng góp vào các hoạt động ESG ở cấp Hội đồng quản trị. Đồng thời, tôi có thể hỗ trợ doanh nghiệp triển khai ESG hiệu quả hơn trong vai trò tư vấn. Đây là nền tảng quan trọng cho các quyết định chiến lược.",
    image: "https://aitcv.ac.vn/wp-content/uploads/Asset-13@2x.png"
  },
  {
    name: "Ông Trần Quốc Bảo",
    role: "Luật sư Môi trường, Pantheon Law Việt Nam",
    content: "PM-ESG giúp tôi hiểu sâu hơn vai trò của khung pháp lý trong thúc đẩy phát triển bền vững. Những kiến thức và công cụ từ chương trình hỗ trợ trực tiếp cho công việc tư vấn khách hàng. Nhờ đó, tôi có thể giúp doanh nghiệp đáp ứng các tiêu chuẩn bền vững toàn cầu.",
    image: "https://aitcv.ac.vn/wp-content/uploads/Asset-12@2x-1.png"
  },
  {
    name: "Bà Phan Thị Bảo Châu",
    role: "Giám đốc American Medical Solutions",
    content: "Chương trình giúp tôi tự tin tiếp cận các thách thức ESG một cách chiến lược hơn. Đặc biệt, dự án cuối khóa cho phép áp dụng kiến thức vào thực tế trong lĩnh vực y tế bền vững. Qua đó, tôi củng cố hiểu biết và định hướng nghề nghiệp rõ ràng hơn.",
    image: "https://aitcv.ac.vn/wp-content/uploads/Asset-10@2x-1.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = testimonials.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          CẢM NHẬN HỌC VIÊN
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative group max-w-7xl mx-auto"
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-ait-green text-white shadow-xl flex items-center justify-center hover:bg-green-700 transition-all hover:scale-110 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={next}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-ait-green text-white shadow-xl flex items-center justify-center hover:bg-green-700 transition-all hover:scale-110 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="flex"
            >
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="px-4 shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                   <TestimonialCard testimonial={t} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col h-full border border-slate-50 relative">
      <div className="relative h-80 overflow-hidden bg-slate-200">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-full h-full object-cover object-top" 
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
      
      <div className="p-8 pt-0 flex flex-col flex-grow relative -mt-16">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-50 text-center flex-grow flex flex-col items-center">
           <span className="text-4xl text-brand/20 block mb-2 font-serif leading-none">“</span>
           <p className="text-[13px] text-slate-600 leading-relaxed italic mb-6 flex-grow">
             {testimonial.content}
           </p>
           <div className="pt-4 border-t border-slate-100 w-full mt-auto">
              <p className="font-bold text-brand text-base mb-1 leading-tight">{testimonial.name}</p>
              <p className="text-[10px] text-ait-green font-bold uppercase tracking-[0.05em] leading-tight">
                {testimonial.role}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
