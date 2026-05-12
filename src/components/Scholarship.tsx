/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Scholarship() {
  return (
    <section className="relative overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img 
          src="https://aitcv.ac.vn/wp-content/uploads/anh-hb.png" 
          alt="Scholarship banner"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
