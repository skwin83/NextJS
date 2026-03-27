/*
 * Home.tsx — VacuTech 홈페이지
 * Industrial Precision Aesthetic: Dark navy bg, steel blue accents
 * Sections: Hero, Stats, Products preview, About snippet, CTA
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Shield, Zap, Award, Wrench } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482140460/fNkVu5Tg3PJ9iHbksmAfuk/hero-bg-DFQX8x6w4pBWhZKHcfLBjE.webp";
const FACTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482140460/fNkVu5Tg3PJ9iHbksmAfuk/factory-interior-aPhRQA5EAphZsihvNqCKbN.webp";
const PUMP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482140460/fNkVu5Tg3PJ9iHbksmAfuk/vacuum-pump-KxtCBumyBx8DpNnYFokr8y.webp";
const CHAMBER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482140460/fNkVu5Tg3PJ9iHbksmAfuk/vacuum-chamber-b9WZaLMxgtppd4t9GEwHLU.webp";
const VALVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482140460/fNkVu5Tg3PJ9iHbksmAfuk/vacuum-valve-APag6GQ4gXX57Xr5SjfbfJ.webp";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, unit, label, started }: { value: number; unit: string; label: string; started: boolean }) {
  const count = useCountUp(value, 1800, started);
  return (
    <div className="text-center">
      <div className="flex items-end justify-center gap-1 mb-1">
        <span
          className="mono-num"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "oklch(0.55 0.12 230)", lineHeight: 1 }}
        >
          {count.toLocaleString()}
        </span>
        <span style={{ color: "oklch(0.55 0.12 230)", fontSize: "1.5rem", fontFamily: "'Bebas Neue', sans-serif" }}>{unit}</span>
      </div>
      <p className="text-sm tracking-wider" style={{ color: "oklch(0.60 0.015 230)" }}>{label}</p>
    </div>
  );
}

const products = [
  {
    id: "pump",
    name: "진공 펌프",
    nameEn: "VACUUM PUMP",
    desc: "터보분자펌프, 로터리베인펌프, 드라이펌프 등 다양한 방식의 고성능 진공 펌프",
    img: PUMP_IMG,
    spec: "10⁻⁸ Pa 달성",
  },
  {
    id: "chamber",
    name: "진공 챔버",
    nameEn: "VACUUM CHAMBER",
    desc: "SUS316L 소재의 맞춤형 진공 챔버. 반도체·디스플레이 공정에 최적화",
    img: CHAMBER_IMG,
    spec: "UHV 등급",
  },
  {
    id: "valve",
    name: "진공 밸브",
    nameEn: "VACUUM VALVE",
    desc: "게이트밸브, 버터플라이밸브, 앵글밸브 등 정밀 진공 밸브 라인업",
    img: VALVE_IMG,
    spec: "ISO KF/CF 규격",
  },
];

const features = [
  { icon: Shield, title: "품질 보증", desc: "ISO 9001 인증 기반 엄격한 품질 관리 시스템" },
  { icon: Zap, title: "신속 납기", desc: "재고 보유 및 빠른 생산으로 최단 납기 보장" },
  { icon: Award, title: "20년 기술력", desc: "국내외 1,000여 고객사에 검증된 기술 노하우" },
  { icon: Wrench, title: "A/S 지원", desc: "전국 서비스 네트워크를 통한 신속한 기술 지원" },
];

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "oklch(0.10 0.025 240)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="진공장비 제조 시설"
            className="w-full h-full object-cover"
            style={{ opacity: 0.45 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, oklch(0.10 0.025 240 / 0.97) 35%, oklch(0.10 0.025 240 / 0.55) 70%, oklch(0.10 0.025 240 / 0.30) 100%)",
            }}
          />
        </div>

        {/* Technical grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.55 0.12 230 / 0.04) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.55 0.12 230 / 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            {/* Tag line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
              <span
                className="text-xs tracking-widest uppercase mono-num"
                style={{ color: "oklch(0.55 0.12 230)" }}
              >
                VACUUM TECHNOLOGY SOLUTIONS
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="mb-6 leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                color: "oklch(0.95 0.008 220)",
                letterSpacing: "0.04em",
              }}
            >
              PRECISION
              <br />
              <span style={{ color: "oklch(0.55 0.12 230)" }}>VACUUM</span>
              <br />
              SOLUTIONS
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "oklch(0.72 0.012 225)" }}
            >
              반도체, 디스플레이, 제약, 화학 산업을 위한 고성능 진공 시스템.
              20년의 기술 노하우로 귀사의 공정을 최적화합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <button
                  className="flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wider transition-all duration-200"
                  style={{
                    background: "oklch(0.55 0.12 230)",
                    color: "oklch(0.98 0.005 220)",
                    clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.65 0.12 230)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.55 0.12 230)"; }}
                >
                  제품 보기
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wider transition-all duration-200"
                  style={{
                    border: "1px solid oklch(0.55 0.12 230)",
                    color: "oklch(0.75 0.012 225)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.55 0.12 230 / 0.15)";
                    (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.92 0.008 220)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.75 0.012 225)";
                  }}
                >
                  견적 문의
                  <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.45 0.015 230)" }}>SCROLL</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: "oklch(0.28 0.020 235)" }}>
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                height: "40%",
                background: "oklch(0.55 0.12 230)",
                animation: "scrollDown 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
        <style>{`
          @keyframes scrollDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(300%); }
          }
        `}</style>
      </section>

      {/* ── STATS ── */}
      <section
        ref={statsRef}
        className="py-16"
        style={{ background: "oklch(0.14 0.024 240)", borderTop: "1px solid oklch(0.28 0.020 235)", borderBottom: "1px solid oklch(0.28 0.020 235)" }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={1200} unit="+" label="납품 실적" started={statsStarted} />
            <StatCard value={20} unit="년" label="업력" started={statsStarted} />
            <StatCard value={98} unit="%" label="고객 만족도" started={statsStarted} />
            <StatCard value={50} unit="+" label="제품 라인업" started={statsStarted} />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ── */}
      <section className="py-20" style={{ background: "oklch(0.12 0.025 240)" }}>
        <div className="container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
              <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                PRODUCT LINE
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.92 0.008 220)",
                letterSpacing: "0.04em",
              }}
            >
              주요 제품
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="industrial-card group overflow-hidden transition-all duration-300"
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.55 0.12 230)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.28 0.020 235)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, oklch(0.16 0.022 240) 0%, transparent 60%)" }}
                  />
                  <span
                    className="absolute top-3 right-3 px-2 py-1 text-xs mono-num"
                    style={{
                      background: "oklch(0.55 0.12 230 / 0.9)",
                      color: "oklch(0.98 0.005 220)",
                    }}
                  >
                    {product.spec}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs tracking-widest mb-1 mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                    {product.nameEn}
                  </p>
                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.92 0.008 220)", letterSpacing: "0.05em" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.60 0.015 230)" }}>
                    {product.desc}
                  </p>
                  <Link href="/products">
                    <span
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                      style={{ color: "oklch(0.55 0.12 230)" }}
                    >
                      자세히 보기 <ChevronRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/products">
              <button
                className="px-10 py-3 text-sm font-semibold tracking-wider transition-all duration-200"
                style={{
                  border: "1px solid oklch(0.55 0.12 230)",
                  color: "oklch(0.75 0.012 225)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.55 0.12 230)";
                  (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.98 0.005 220)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.75 0.012 225)";
                }}
              >
                전체 제품 보기
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section
        className="py-20"
        style={{ background: "oklch(0.14 0.024 240)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={FACTORY_IMG}
                alt="VacuTech 공장"
                className="w-full object-cover"
                style={{ height: "400px" }}
              />
              {/* Decorative corner */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24"
                style={{ border: "2px solid oklch(0.55 0.12 230)", background: "transparent" }}
              />
              <div
                className="absolute -top-4 -left-4 w-16 h-16"
                style={{ border: "1px solid oklch(0.55 0.12 230 / 0.5)", background: "transparent" }}
              />
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
                <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                  ABOUT US
                </span>
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.92 0.008 220)",
                  letterSpacing: "0.04em",
                }}
              >
                진공 기술의 새로운 기준을
                <br />
                <span style={{ color: "oklch(0.55 0.12 230)" }}>VacuTech</span>가 만듭니다
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.65 0.012 225)" }}>
                2004년 설립 이래 VacuTech는 국내 진공장비 산업의 선두주자로 자리매김해 왔습니다.
                반도체, OLED 디스플레이, 태양광, 제약 등 첨단 산업 분야에서 요구하는 극한의
                진공 환경을 구현하는 기술력을 보유하고 있습니다.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "oklch(0.65 0.012 225)" }}>
                자체 R&D 센터와 정밀 가공 시설을 통해 설계부터 제작, 설치, A/S까지
                원스톱 서비스를 제공합니다.
              </p>
              <Link href="/about">
                <button
                  className="flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wider transition-all duration-200"
                  style={{
                    background: "oklch(0.55 0.12 230)",
                    color: "oklch(0.98 0.005 220)",
                    clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.65 0.12 230)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.55 0.12 230)"; }}
                >
                  회사 소개 보기
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20" style={{ background: "oklch(0.12 0.025 240)" }}>
        <div className="container">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
              <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                WHY VACUTECH
              </span>
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "oklch(0.92 0.008 220)",
                letterSpacing: "0.04em",
              }}
            >
              VacuTech를 선택하는 이유
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="industrial-card p-6 transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.55 0.12 230)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.28 0.020 235)";
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.55 0.12 230 / 0.15)", border: "1px solid oklch(0.55 0.12 230 / 0.4)" }}
                >
                  <f.icon size={20} style={{ color: "oklch(0.55 0.12 230)" }} />
                </div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.92 0.008 220)", letterSpacing: "0.05em" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.60 0.015 230)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "oklch(0.55 0.12 230)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.98 0.005 220 / 0.06) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.98 0.005 220 / 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "oklch(0.98 0.005 220)",
              letterSpacing: "0.04em",
            }}
          >
            지금 바로 견적을 문의하세요
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.90 0.008 220)" }}>
            전문 엔지니어가 귀사의 공정에 최적화된 진공 솔루션을 제안해 드립니다.
          </p>
          <Link href="/contact">
            <button
              className="px-10 py-4 text-sm font-bold tracking-wider transition-all duration-200"
              style={{
                background: "oklch(0.10 0.025 240)",
                color: "oklch(0.92 0.008 220)",
                clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.16 0.022 240)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.10 0.025 240)"; }}
            >
              문의하기
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
