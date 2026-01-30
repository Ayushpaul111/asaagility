"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  useRef,
} from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { cn } from "../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Constants moved outside component to prevent recreation
const NAV_ITEMS = [
  { id: "products", label: "PRODUCTS", href: "/products" },
  { id: "about-us", label: "ABOUT US", href: "/about-us" },
] as const;

const SCROLL_THRESHOLD = 10;
const SECTION_OFFSET = 150;

// Memoized desktop nav item - prevents re-render unless props change
const DesktopNavItem = memo(function DesktopNavItem({
  item,
  isActive,
}: {
  item: (typeof NAV_ITEMS)[number];
  isActive: boolean;
}) {
  return (
    <Link href={item.href} className="relative group">
      <span
        className={cn(
          "text-sm font-semibold whitespace-nowrap transition-colors duration-200",
          isActive
            ? "text-yellow-300 font-bold"
            : "text-white hover:text-yellow-100",
        )}
      >
        {item.label}
      </span>

      {/* Active indicator - CSS transition instead of motion */}
      <span
        className={cn(
          "absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-yellow-300 rounded-full",
          "transition-all duration-200 ease-out",
          isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
        )}
      />

      {/* Hover underline - pure CSS */}
      <span className="absolute -bottom-1 left-0 h-0.5 bg-white/50 rounded-full w-0 group-hover:w-full transition-all duration-300" />
    </Link>
  );
});

// Memoized mobile nav item
const MobileNavItem = memo(function MobileNavItem({
  item,
  isActive,
  onClose,
}: {
  item: (typeof NAV_ITEMS)[number];
  isActive: boolean;
  onClose: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className={cn(
        "flex items-center justify-between py-4 px-5 text-sm font-medium",
        "border-b border-gray-100 last:border-b-0",
        "transition-colors duration-150",
        isActive
          ? "bg-[#5C905E]/10 text-[#5C905E] font-bold"
          : "text-gray-700 hover:bg-gray-50 hover:text-[#5C905E]",
      )}
    >
      <span>{item.label}</span>
      {isActive && (
        <span className="flex items-center gap-2">
          <span className="text-xs text-[#5C905E]/70">You're here</span>
          <span className="w-2 h-2 bg-[#5C905E] rounded-full" />
        </span>
      )}
    </Link>
  );
});

// Memoized menu icon with simpler animation
const MenuIcon = memo(function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-6 h-6">
      <X
        className={cn(
          "absolute inset-0 h-6 w-6 transition-all duration-200",
          isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0",
        )}
      />
      <Menu
        className={cn(
          "absolute inset-0 h-6 w-6 transition-all duration-200",
          isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100",
        )}
      />
    </div>
  );
});

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Refs for click outside detection - avoids querySelector
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDropdownRef = useRef<HTMLDivElement>(null);

  // Transform values - these are optimized by framer-motion internally
  const headerScale = useTransform(scrollY, [0, 200], [1, 0.85]);
  const headerPadding = useTransform(scrollY, [0, 200], [24, 16]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const textSize = useTransform(scrollY, [0, 200], [1, 0.9]);

  // Use useMotionValueEvent instead of useEffect + onChange (more performant)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD);
  });

  // Memoized active check function
  const isPathActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    },
    [pathname],
  );

  // Memoized item active check
  const isItemActive = useCallback(
    (item: (typeof NAV_ITEMS)[number]) => {
      return isPathActive(item.href) || activeSection === item.id;
    },
    [isPathActive, activeSection],
  );

  // Memoized close handler
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  // Optimized scroll tracking with throttling via requestAnimationFrame
  useEffect(() => {
    let rafId: number;
    let lastKnownScrollY = 0;
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = lastKnownScrollY + SECTION_OFFSET;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection((prev) =>
            prev !== NAV_ITEMS[i].id ? NAV_ITEMS[i].id : prev,
          );
          ticking = false;
          return;
        }
      }
      setActiveSection((prev) => (prev !== "" ? "" : prev));
      ticking = false;
    };

    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;
      if (!ticking) {
        rafId = requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Optimized click outside and scroll close
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !menuButtonRef.current?.contains(target) &&
        !menuDropdownRef.current?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => setIsMenuOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Memoized nav items rendering
  const desktopNavItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <DesktopNavItem
          key={item.id}
          item={item}
          isActive={isItemActive(item)}
        />
      )),
    [isItemActive],
  );

  const mobileNavItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <MobileNavItem
          key={item.id}
          item={item}
          isActive={isItemActive(item)}
          onClose={closeMenu}
        />
      )),
    [isItemActive, closeMenu],
  );

  // Memoized contact button active state
  const isContactActive = pathname === "/contact";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            scale: headerScale,
            paddingLeft: headerPadding,
            paddingRight: headerPadding,
          }}
          className={cn(
            "rounded-full py-3",
            "flex items-center justify-between",
            "shadow-lg border",
            "transition-colors duration-300",
            isScrolled
              ? "bg-[#5C905E]/70 backdrop-blur-md border-black/60"
              : "bg-[#5C905E] border-transparent",
          )}
        >
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center"
              style={{ scale: logoScale }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/012/982/310/non_2x/chocolate-and-green-tea-logo-icon-free-png.png"
                alt="Unico dentals logo"
                className="h-12"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            style={{ scale: textSize }}
          >
            {desktopNavItems}
          </motion.nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <motion.button
                style={{ scale: textSize }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "text-sm font-medium px-6 py-2 rounded-full whitespace-nowrap",
                  "transition-colors duration-200",
                  isContactActive
                    ? "bg-yellow-400 text-[#375f39] font-bold ring-2 ring-yellow-300 ring-offset-2 ring-offset-[#5C905E]"
                    : isScrolled
                      ? "bg-[#375f39]/70 text-white hover:bg-[#375f39]"
                      : "bg-[#375f39] text-white hover:bg-[#2a4a2c]",
                )}
              >
                Book Online
              </motion.button>
            </Link>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              className="md:hidden text-white p-1 hover:opacity-80 transition-opacity"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuDropdownRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl md:hidden overflow-hidden"
              >
                <nav className="flex flex-col">{mobileNavItems}</nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
    </div>
  );
};

export default memo(Header);
