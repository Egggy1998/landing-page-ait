/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const stats = [
  { value: "4,500", suffix: "+", label: "Học viên và, cựu học viên" },
  { value: "40,000", suffix: "+", label: "Chuyên gia được đào tạo khắp cả" },
  { value: "30", suffix: "+", label: "Lĩnh vực đào tạo chuyên môn" }
];

export default function Intro() {
  return (
    <div className="bg-paper overflow-hidden">
      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="border-[12px] border-brand rounded-2xl overflow-hidden shadow-xl">
                <iframe 
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/jQRj7c-0Big" 
                  title="AITCV - Hành Trình 30 Năm Phát Triển"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-display font-bold text-brand mb-6 uppercase">VỀ CHÚNG TÔI</h2>
              <div className="text-slate-700 leading-relaxed text-justify space-y-4">
                <p>
                  AIT là tổ chức giáo dục quốc tế đa chính phủ duy nhất trên thế giới được thành lập năm 1959 bởi các quốc gia như <strong>Anh, Mỹ, Pháp, Úc, New Zealand</strong>,… Năm 1993, AIT Việt Nam được thành lập theo thỏa thuận giữa Chính phủ Việt Nam và AIT.
                </p>
                <p>
                  Từ khi đó, AIT Việt Nam luôn tiên phong trong sứ mệnh đào tạo và phát triển nguồn nhân lực chất lượng cao cho Việt Nam và khu vực. Sau <strong>chặng đường 33 năm</strong>, AIT Việt Nam đã đào tạo thành công hơn <strong>4.500 Tiến sĩ, Thạc sĩ</strong> cùng hơn <strong>40.000 chuyên gia</strong> trong nhiều lĩnh vực khác nhau.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Intro Content with Stats */}
      <section id="gioi-thieu" className="py-20 bg-paper">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#072f21] leading-tight">
              Chương trình Thạc sĩ quốc tế <br /> đầu tiên về ESG tại Việt Nam
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Stats Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-12"
            >
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group"
                >
                  <div className="text-4xl font-display font-bold text-brand mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-ait-green font-medium mb-4">{stat.label}</p>
                  <div className="w-1/2 h-[5px] bg-slate-300 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 self-stretch"
            >
              <div 
                className="w-full h-full min-h-[400px] rounded-3xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: "url('https://aitcv.ac.vn/wp-content/uploads/JEW00391-683x1024.jpg')" }}
              />
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-5"
            >
              <img src="https://aitcv.ac.vn/wp-content/uploads/nature-2.png" className="w-16 h-16 mb-6" alt="Nature icon" />
              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-6 leading-snug text-justify">
                ESG (Môi trường – Xã hội – Quản trị) không chỉ là kỹ năng mới, mà là lợi thế nghề nghiệp then chốt trong 3 đến 5 năm tới. ESG đã trở thành tiêu chuẩn bắt buộc trong chiến lược phát triển của mọi doanh nghiệp toàn cầu
              </h3>
              <p className="text-ait-green text-justify leading-relaxed">
                Trước nhu cầu ngày càng gia tăng về đội ngũ lãnh đạo và chuyên gia có năng lực ESG trong nhiều lĩnh vực, chương trình Thạc sĩ ESG tại AIT (PM-ESG) được thiết kế bài bản, kết hợp chặt chẽ giữa nền tảng học thuật vững chắc và khả năng ứng dụng vào thực tiễn, qua đó mở ra nhiều cơ hội nghề nghiệp trong lĩnh vực quản trị bền vững.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
