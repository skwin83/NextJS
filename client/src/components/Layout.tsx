/*
 * Layout.tsx — VacuTech Industrial Precision Design
 * Dark navy background, steel blue accents, Bebas Neue headlines
 * Top navigation with logo + links, footer with contact info
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/products", label: "제품" },
  { href: "/about", label: "회사소개" },
  { href: "/contact", label: "문의하기" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.12 0.025 240)" }}>
      {/* Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "oklch(0.10 0.025 240 / 0.97)"
            : "oklch(0.10 0.025 240 / 0.80)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid oklch(0.28 0.020 235)" : "1px solid transparent",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 group">
                <div
                  className="w-8 h-8 flex items-center justify-center"
                  style={{
                    background: "oklch(0.55 0.12 230)",
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <span className="text-white font-bold text-xs">VT</span>
                </div>
                <div>
                  <span
                    className="text-2xl tracking-widest"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      color: "oklch(0.92 0.008 220)",
                    }}
                  >
                    VACUTECH
                  </span>
                  <div
                    className="text-xs tracking-widest"
                    style={{ color: "oklch(0.55 0.12 230)", fontFamily: "'Roboto Mono', monospace" }}
                  >
                    VACUUM SOLUTIONS
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm font-medium tracking-wider transition-colors duration-200 relative group"
                    style={{
                      color: location === link.href
                        ? "oklch(0.55 0.12 230)"
                        : "oklch(0.75 0.010 220)",
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        background: "oklch(0.55 0.12 230)",
                        width: location === link.href ? "100%" : "0%",
                      }}
                    />
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-5 py-2 text-sm font-medium tracking-wider transition-all duration-200"
                  style={{
                    background: "oklch(0.55 0.12 230)",
                    color: "oklch(0.98 0.005 220)",
                    fontFamily: "'Noto Sans KR', sans-serif",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.65 0.12 230)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.55 0.12 230)";
                  }}
                >
                  견적 문의
                  <ChevronRight size={14} />
                </button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              style={{ color: "oklch(0.92 0.008 220)" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{
              background: "oklch(0.10 0.025 240)",
              borderColor: "oklch(0.28 0.020 235)",
            }}
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block py-2 text-sm font-medium tracking-wider"
                    style={{
                      color: location === link.href
                        ? "oklch(0.55 0.12 230)"
                        : "oklch(0.75 0.010 220)",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer
        style={{
          background: "oklch(0.09 0.022 240)",
          borderTop: "1px solid oklch(0.28 0.020 235)",
        }}
      >
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 flex items-center justify-center"
                  style={{
                    background: "oklch(0.55 0.12 230)",
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <span className="text-white font-bold text-xs">VT</span>
                </div>
                <span
                  className="text-2xl tracking-widest"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.92 0.008 220)" }}
                >
                  VACUTECH
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.60 0.015 230)" }}>
                20년 이상의 기술력으로 반도체, 디스플레이, 제약, 화학 등 다양한 산업 분야에
                최고 품질의 진공 솔루션을 제공합니다.
              </p>
              <div className="flex gap-1">
                {["ISO 9001", "CE", "KS"].map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-1 text-xs mono-num"
                    style={{
                      border: "1px solid oklch(0.55 0.12 230)",
                      color: "oklch(0.55 0.12 230)",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: "oklch(0.55 0.12 230)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem" }}
              >
                바로가기
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: "oklch(0.60 0.015 230)" }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: "oklch(0.55 0.12 230)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem" }}
              >
                연락처
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "oklch(0.60 0.015 230)" }}>
                <li>📞 02-1234-5678</li>
                <li>✉️ info@vacutech.co.kr</li>
                <li>📍 경기도 화성시 동탄산업단지</li>
                <li className="mono-num text-xs" style={{ color: "oklch(0.45 0.015 230)" }}>
                  MON–FRI 09:00–18:00
                </li>
              </ul>
            </div>
          </div>

          <div
            className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
            style={{
              borderTop: "1px solid oklch(0.22 0.018 240)",
              color: "oklch(0.45 0.015 230)",
            }}
          >
            <span>© 2024 VacuTech Co., Ltd. All rights reserved.</span>
            <span className="mono-num">사업자등록번호: 123-45-67890</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
