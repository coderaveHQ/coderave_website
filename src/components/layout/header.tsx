"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import CoderaveLogo from "@/components/coderave-logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-white/80 dark:bg-neutral-900/80 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.neutral.100),theme(colors.neutral.200))_border-box] dark:before:[background:linear-gradient(theme(colors.neutral.800),theme(colors.neutral.700))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] dark:before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)]">
          {/* Company Logo */}
          <div className="flex flex-1 items-center">
            <CoderaveLogo fill="currentColor" />
          </div>

          {/* Color Scheme Toggle */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {/* Add Language Toggle */}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
