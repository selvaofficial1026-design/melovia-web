"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Play,
  Smartphone,
  Zap,
  Music,
  Users,
  Heart,
  Globe,
  ChevronLeft,
  ChevronRight,
  Tag,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  version: string;
  apkUrl: string;
}

export default function HomeClient({ version, apkUrl }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const slides = [1, 2, 3];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleDownload = useCallback(() => {
    setDownloading(true);
    setShowToast(true);
    // Simulate brief loading then show success
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
    }, 1500);
    setTimeout(() => {
      setDownloaded(false);
      setShowToast(false);
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/10 selection:text-primary">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-xl bg-primary/10 flex items-center justify-center">
              <img
                src="/logo-placeholder.png"
                alt="Melovia"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("bg-primary");
                }}
              />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground">Melovia</span>
          </div>

          {/* Desktop button */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              <Tag className="h-3 w-3" />
              {version}
            </span>
            <Button
              className="rounded-full px-6 font-medium shadow-sm transition-all hover:scale-105 min-w-[160px]"
              asChild={!downloading && !downloaded}
              onClick={handleDownload}
            >
              {downloading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Starting...
                </span>
              ) : downloaded ? (
                <span className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  Download Started!
                </span>
              ) : (
                <a href={apkUrl} download="Melovia.apk">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </a>
              )}
            </Button>
          </div>

          {/* Mobile button */}
          <div className="flex md:hidden items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-full">
              <Tag className="h-3 w-3" />
              {version}
            </span>
            <a
              href={apkUrl}
              download="Melovia.apk"
              onClick={handleDownload}
              className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-semibold shadow-md active:scale-95 transition-transform"
            >
              {downloading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : downloaded ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {downloaded ? "Started!" : "Download"}
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-48 lg:pb-32">
          <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1097/845] w-[40rem] sm:w-[68rem] bg-gradient-to-tr from-primary to-secondary opacity-10"
              style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
            ></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-6 sm:mb-8">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Now available for Android
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-foreground mb-3 sm:mb-4">
                  Melovia
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-5 sm:mb-6">
                  Where Every Heart Finds Its Melody.
                </p>

                <p className="text-sm sm:text-lg leading-relaxed text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
                  A beautifully crafted music app for Android. Enjoy crystal-clear audio, custom playlists, and a clean, intuitive interface.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <Button
                    size="lg"
                    className="w-full max-w-xs sm:w-auto rounded-full h-13 sm:h-14 px-8 text-base shadow-lg transition-all hover:shadow-primary/25 hover:scale-[1.02]"
                    asChild
                  >
                    <a href={apkUrl} download="Melovia.apk" onClick={handleDownload}>
                      <Download className="mr-2 h-5 w-5" />
                      Download Latest Release
                    </a>
                  </Button>
                  {/* Live version chip */}
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                    <Tag className="h-4 w-4" />
                    Latest: {version}
                  </span>
                </div>

                {/* Feature Tags */}
                <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6">
                  {[
                    { icon: Music, label: "Millions of Songs" },
                    { icon: Globe, label: "All Indian Languages" },
                    { icon: Smartphone, label: "Android Exclusive" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-3 py-1.5 sm:px-0 sm:py-0 sm:bg-transparent sm:border-0"
                    >
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold sm:font-medium text-foreground sm:text-muted-foreground whitespace-nowrap">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="relative rounded-[3rem] border-[10px] sm:border-[12px] border-black bg-black shadow-2xl overflow-hidden aspect-[9/19.5] w-[220px] sm:w-[280px] lg:w-[320px] ring-1 ring-white/10 mx-auto">
                    <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                      <div className="w-20 h-6 bg-black rounded-b-3xl"></div>
                    </div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                    <img
                      src="/mockup-hero.jpeg"
                      alt="Melovia App Interface"
                      className="w-full h-full object-cover bg-[#121212] relative z-0"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML =
                            '<div class="w-full h-full flex flex-col items-center justify-center bg-black text-slate-400 p-6 text-center z-0 relative"><p class="text-sm font-medium">Add mockup-hero.jpeg to public folder</p></div>';
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-b from-primary/30 to-secondary/10 blur-2xl opacity-50"></div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Features of Melovia</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
                Explore the unique tools designed to make your listening experience magical.
              </p>
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 relative z-10">
              {[
                { title: "Listen Together", description: "Create a room ID, connect with friends, and listen to the same song perfectly in sync anywhere in the world.", icon: Users },
                { title: "Melovia Soulmate", description: "Compare your music taste with others and discover your perfect musical match based on your listening habits.", icon: Heart },
                { title: "Ad-Free Music", description: "Enjoy uninterrupted, premium listening without any distracting advertisements or interruptions.", icon: Zap },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-5 sm:py-8 px-4 sm:px-6 rounded-2xl hover:bg-white/5 transition-all duration-500 overflow-hidden cursor-default border border-transparent hover:border-border/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                  <div className="flex flex-row items-center gap-4 sm:gap-6 shrink-0 w-full sm:w-auto">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                      <span className="text-2xl sm:text-3xl font-black text-muted-foreground/30 group-hover:hidden transition-all">0{idx + 1}</span>
                      {idx === 0 && (
                        <div className="hidden group-hover:flex items-end gap-1 h-5 sm:h-6">
                          <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 bg-primary rounded-full"></motion.div>
                          <motion.div animate={{ height: ["80%", "30%", "80%"] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 bg-primary rounded-full"></motion.div>
                          <motion.div animate={{ height: ["50%", "90%", "50%"] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 bg-primary rounded-full"></motion.div>
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="hidden group-hover:flex items-center justify-center relative w-6 h-6 sm:w-8 sm:h-8">
                          <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute -left-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] border-primary"></motion.div>
                          <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "easeInOut" }} className="absolute -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] border-primary"></motion.div>
                        </div>
                      )}
                      {idx === 2 && (
                        <div className="hidden group-hover:flex items-center justify-center gap-1 h-5 sm:h-6">
                          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></motion.div>
                          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5, ease: "easeInOut" }} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></motion.div>
                          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1.0, ease: "easeInOut" }} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></motion.div>
                        </div>
                      )}
                    </div>
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 text-primary shadow-[0_0_15px_rgba(37,99,235,0.05)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  <div className="flex-1 mt-1 sm:mt-0">
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="hidden sm:flex h-12 w-12 rounded-full border border-border/50 items-center justify-center text-muted-foreground group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 cursor-pointer">
                    <Play className="h-5 w-5 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interface Slider */}
        <section id="interface" className="py-16 sm:py-24 overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-3 sm:mb-4">A Look Inside</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tap through to see the elegant, intuitive interface that puts your music front and center.
            </p>
          </div>

          <div className="relative w-full flex flex-col items-center">
            <div className="relative flex justify-center items-center h-[500px] sm:h-[600px] w-full px-16 sm:px-20 max-w-sm">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100, scale: 0.9, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -100, scale: 0.9, filter: "blur(8px)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
                  className="absolute shrink-0 rounded-[2.5rem] border-[10px] border-black bg-black shadow-xl overflow-hidden aspect-[9/19.5] w-[220px] sm:w-[270px] ring-1 ring-white/10"
                >
                  <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                    <div className="w-20 h-6 bg-black rounded-b-2xl"></div>
                  </div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                  <img
                    src={`/slider-mockup-${slides[currentSlide]}.jpeg`}
                    alt={`Melovia Interface ${slides[currentSlide]}`}
                    className="w-full h-full object-cover bg-[#121212] relative z-0"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-black text-slate-400 p-6 text-center z-0 relative"><p class="text-sm font-medium">Interface Image ${slides[currentSlide]}</p></div>`;
                      }
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              <button onClick={prevSlide} aria-label="Previous screenshot" className="absolute left-0 z-30 p-2.5 sm:p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-foreground hover:bg-primary/20 active:scale-95 transition-all shadow-lg cursor-pointer">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button onClick={nextSlide} aria-label="Next screenshot" className="absolute right-0 z-30 p-2.5 sm:p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-foreground hover:bg-primary/20 active:scale-95 transition-all shadow-lg cursor-pointer">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5"}`}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-lg bg-primary/10 flex items-center justify-center">
              <img
                src="/logo-placeholder.png"
                alt="Melovia"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("bg-primary");
                }}
              />
            </div>
            <span className="text-base sm:text-lg font-bold text-foreground">Melovia</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Melovia. All rights reserved.
          </p>
          <a
            href={apkUrl}
            download="Melovia.apk"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline transition-colors"
          >
            <Download className="h-4 w-4" />
            Download {version}
          </a>
        </div>
      </footer>

      {/* Download Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-sm"
          >
            <div className="flex items-center gap-4 bg-foreground text-background rounded-2xl px-5 py-4 shadow-2xl">
              <div className="shrink-0">
                {downloading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                ) : (
                  <CheckCircle className="h-6 w-6 text-green-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">
                  {downloading ? "Starting download..." : "Download Started! 🎉"}
                </p>
                <p className="text-xs opacity-70 mt-0.5">
                  {downloading
                    ? "Please wait a moment"
                    : "APK file is downloading. Check your notifications."}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
