/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Rankings() {
  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img 
          src="https://aitcv.ac.vn/wp-content/uploads/rankingesg.png" 
          alt="AIT Rankings"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
