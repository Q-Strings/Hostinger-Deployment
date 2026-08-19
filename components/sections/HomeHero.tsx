"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/data/images";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-16 text-white shadow-glow md:px-12 md:py-20">
      <Image
        src={siteImages.homeHero.src}
        alt={siteImages.homeHero.alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      <motion.div
        className="relative z-10 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-display text-4xl font-semibold text-white md:text-6xl">
          <span className="heading-backdrop-super">Faith Impact Forum</span>
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Elevating Faith-Based Philanthropy and Social Investment for social
          innovation and sustainable impact in Africa and beyond.
        </p>
        <p className="max-w-2xl text-sm text-white/70 md:text-base">
          FBOs are pillars of hope, healing, education, health, and crisis response.
          The forum elevates FBOs as strategic co-creators of development.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/register">Register Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
            <Link href="#events">View Events</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
