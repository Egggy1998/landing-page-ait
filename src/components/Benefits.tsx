/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users, FileBadge, GraduationCap, School } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Chương trình Thạc sĩ ESG đầu tiên tại Việt Nam",
    description: "Đơn vị tiên phong đào tạo chương trình Thạc sĩ ESG tại Việt Nam, cung cấp chương trình chuẩn quốc tế gắn liền với thực tiễn quản trị bền vững, giúp học viên sẵn sàng dẫn dắt tổ chức trong kỷ nguyên ESG."
  },
  {
    icon: FileBadge,
    title: "Bằng cấp quốc tế được công nhận",
    description: "Chương trình cấp bằng quốc tế được Bộ Giáo dục & Đào tạo Việt Nam công nhận, đảm bảo giá trị học thuật và pháp lý trong nước."
  },
  {
    icon: GraduationCap,
    title: "Đội ngũ giảng viên, chuyên gia ESG",
    description: "100% giảng viên quốc tế là chuyên gia đầu ngành trong nghiên cứu và tư vấn ESG toàn cầu."
  },
  {
    icon: School,
    title: "Trải nghiệm học tập đa văn hóa",
    description: "Học viên tham gia chương trình học tập 2 tuần tại AIT Bangkok (Thái Lan), mở rộng kiến thức và trải nghiệm môi trường học tập quốc tế."
  }
];

export default function Benefits() {
  return (
    <section id="tai-sao-chon" className="py-24 bg-paper">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-brand">VÌ SAO NÊN THEO HỌC ESG TẠI AIT?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all h-[350px] flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-brand">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-display font-bold mb-4 text-brand leading-snug">
                {benefit.title}
              </h3>
              <p className="text-ait-green text-xs leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
