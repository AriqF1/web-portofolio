import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface FloatingNavbarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   *
   * @default 50
   */
  scrollThreshold?: number;
  /**
   *
   * @default true
   */
  showOnScrollUp?: boolean;
  /**
   *
   * @default true
   */
  hideOnScrollDown?: boolean;
}

export function FloatingNavbar({
  children,
  className,
  scrollThreshold = 50,
  showOnScrollUp = true,
  hideOnScrollDown = true,
  ...props
}: FloatingNavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // Show/hide based on scroll direction and threshold
      if (currentScrollY < scrollThreshold) {
        setIsVisible(true);
      } else if (scrollDifference > 0) {
        // Scrolling down
        hideOnScrollDown && setIsVisible(false);
      } else if (scrollDifference < 0) {
        // Scrolling up
        showOnScrollUp && setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollThreshold, showOnScrollUp, hideOnScrollDown]);

  return (
    <nav
      className={cn(
        "fixed left-1/2 bottom-6 z-50 -translate-x-1/2",

        "rounded-2xl border border-gray-200/50 bg-white/90 shadow-2xl backdrop-blur-xl",
        "dark:border-gray-700/50 dark:bg-gray-900/90",

        "w-[90%] max-w-md px-3 py-2.5",
        "sm:w-auto sm:px-6 sm:py-3",
        "md:px-8 md:py-3.5",

        "transform-gpu transition-all duration-500 ease-out",
        "hover:shadow-3xl hover:scale-105",

        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-16 opacity-0 scale-95",

        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/5 before:to-purple-500/5 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",

        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center space-x-1 sm:space-x-2">
        {children}
      </div>
    </nav>
  );
}
