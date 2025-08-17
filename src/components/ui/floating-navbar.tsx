import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface FloatingNavbarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The offset in pixels before the navbar starts hiding/showing
   * @default 50
   */
  scrollThreshold?: number;
  /**
   * Whether to show the navbar when scrolling up
   * @default true
   */
  showOnScrollUp?: boolean;
  /**
   * Whether to hide the navbar when scrolling down
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
        "fixed left-1/2 bottom-4 z-50 transform-gpu rounded-full border bg-background/80 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out dark:border-neutral-800 dark:bg-neutral-950/75",
        "w-[90%] -translate-x-1/2 px-4 py-2 sm:w-auto sm:px-8 sm:py-3 sm:bottom-6",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",

        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
}
