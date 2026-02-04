"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

const GITHUB_URI = "https://github.com/binaryshrey/Nebula-AI-v1";
const LINKEDIN_URI = "https://in.linkedin.com/in/shreyanshsaurabh";
const BETTERSTACK_URI = "https://nebulaai.betteruptime.com/";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("features-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="isolate min-h-screen"
      style={{ backgroundColor: "#060E17" }}
    >
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/banner.webp)" }}
      ></div>
      <div className="px-6 pt-6">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1 items-center">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Nebula AI Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-semibold text-gray-900">
                Nebula AI
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden gap-4">
            <div className="p-1 pr-3 pl-3 bg-black rounded-full cursor-pointer">
              <Link
                href="/sign-up"
                className="text-sm font-semibold leading-6 text-white"
              >
                Join Nebula AI
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href={GITHUB_URI}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Github
            </a>
            <a
              onClick={handleScroll}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >
              Features
            </a>
            <a
              href={BETTERSTACK_URI}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Status
            </a>
            <a
              href={LINKEDIN_URI}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex gap-4 justify-center items-center">
              <Link
                href="/sign-in"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in
              </Link>
              <Link href="/sign-up">
                <div className="p-1 pr-3 pl-3 bg-black rounded-full cursor-pointer">
                  <p className="text-sm font-semibold leading-6 text-white">
                    Join Nebula AI
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-normal text-gray-900">
                  Nebula AI
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href={GITHUB_URI}
                    target="_blank"
                    rel="noreferrer"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Github
                  </a>
                  <a
                    onClick={handleScroll}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-400/10 cursor-pointer"
                  >
                    Features
                  </a>
                  <a
                    href={BETTERSTACK_URI}
                    target="_blank"
                    rel="noreferrer"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Status
                  </a>
                  <a
                    href={LINKEDIN_URI}
                    target="_blank"
                    rel="noreferrer"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                  <Link
                    href="/sign-in"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-medium leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/sign-up"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-medium leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Join Nebula AI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <main>
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="font-crimson-text text-3xl font-medium tracking-tight text-gray-900 sm:text-5xl">
                The Fastest Way To Go From
              </h1>
              <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-5xl">
                <span className="relative inline-block px-2 sm:px-4 p-2 italic">
                  <span className="absolute inset-0 bg-blue-200 italic rounded-lg sm:rounded-xl -z-10 sm:p-6"></span>
                  Requirements
                </span>{" "}
                To{" "}
                <span className="relative inline-block px-2 sm:px-4 p-2 italic">
                  <span className="absolute inset-0 bg-blue-200 italic rounded-lg sm:rounded-xl -z-10 sm:p-6"></span>
                  Deployments
                </span>{" "}
              </h1>
              <p className="mt-6 text-sm sm:text-lg leading-8 text-gray-600">
                A multi-agent AI platform that orchestrates end to end software
                delivery, powered by{" "}
                <span className="font-semibold">Airia</span> &{" "}
                <span className="font-semibold">ElevenLabs</span>
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-x-6">
              <Link href="/sign-up">
                <button className="cursor-pointer rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/90 transition-colors">
                  Get Started
                </button>
              </Link>
              <a
                href={GITHUB_URI}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-28 flow-root sm:mt-16 mx-4 sm:mx-10 lg:mx-20">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="relative">
                  <HeroVideoDialog
                    animationStyle="top-in-bottom-out"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="/demo.png"
                    thumbnailAlt="Hero Video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="features-section"></div>
    </div>
  );
}
