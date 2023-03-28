import { useState } from "react";
import Image from "next/image";
import shoeImage from "../../public/images/shoe_product_image 2.jpg";
import { motion } from "framer-motion";
import cx from "classnames";
import ShopifyIcon from "../shared/icons/shopifyIcon";
// STAR RATINGS COMPONENT
export const StarRating = ({ className }: { className: string }) => {
  const starIds = ["star1", "star2", "star3", "star4", "star5"];
  return (
    <div className={cx(className, "mt-2.5 mb-2.5 flex items-center")}>
      {starIds.map((star) => (
        <svg
          key={star}
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
      <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
        5.0
      </span>
    </div>
  );
};

export default function ShoeProduct() {
  return (
    <div data-testid="ecommerce-shoe-" className="flex flex-col justify-center">
      <div>
        <div className="mx-3 grid max-w-[680px] grid-cols-2 items-center gap-5">
          <div className="border-blue-500 ">
            <Image
              className="self-center rounded-xl"
              src={shoeImage}
              width={300}
              alt="shoe product shot"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Unlimited Lace Up Pro-Sport Kicks, Orange
            </h3>
            {/* Buy Now Button */}
            <button className="w-36 rounded border-transparent bg-orange-500 py-2 px-4 font-semibold text-white hover:border hover:border-orange-500 hover:bg-transparent hover:text-orange-600">
              Buy Now
            </button>
            <StarRating className={"m-0"} />
            {/* Price */}
            <span className="flex flex-row text-3xl font-bold text-gray-900 dark:text-white">
              $185
              <ShopifyIcon className="mx-3 h-8 w-8 animate-swing" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
