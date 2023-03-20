import { useState } from "react";
import Image from "next/image";
import shoeImage from "../../public/images/shoe_product_image 2.jpg";
import { motion } from "framer-motion";
export default function ComponentGrid() {
  return (
    <div className="flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
      >
        <div className="flex w-[600px] flex-row items-center justify-around rounded-xl border">
          <div className="border-blue-500 ">
            <Image
              className="self-center rounded-xl"
              src={shoeImage}
              width={300}
              alt="shoe product shot"
            />
          </div>
          <button className="rounded border border-orange-500 bg-transparent py-2 px-4 font-semibold text-orange-600 hover:border-transparent hover:bg-orange-500 hover:text-white">
            Buy Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
