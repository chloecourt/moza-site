import MozaLogo from "@/components/layout/logoText";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <div className="fixed h-screen w-full bg-gradient-to-br from-orange-50 via-white to-red-50" />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/images/mozaLogo.png"
              alt="Moza Logo"
              width="130"
              height="130"
            />
          </Link>
          <ul className="mr-5 flex flex-row justify-end gap-x-5 text-lg font-semibold text-orange-400">
            <Link href="/about-us">
              <li>Hire Us</li>
            </Link>
          </ul>
        </div>
      </div>
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="mb-1 text-gray-500">
          Click{" "}
          <Link href="/privacy-policy" className="text-gray-500 underline">
            here
          </Link>{" "}
          to read our privacy policy.
        </p>
        <p className="text-gray-500">
          Website design by{" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/steventey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moza Collective
          </a>
        </p>
      </div>
    </>
  );
}
