/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function ProgramStructure() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          CẤU TRÚC CHƯƠNG TRÌNH
        </motion.h2>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex justify-center"
        >
          <img 
            src="https://aitcv.ac.vn/wp-content/uploads/cau-truc-chuong-trinh-2048x1455.png" 
            alt="Program structure"
            className="max-w-full md:max-w-5xl h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
