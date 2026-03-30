/*
 * Products.tsx — MSKTech 제품 페이지
 * Industrial Precision Aesthetic: Dark navy bg, steel blue accents
 * Product categories with specs and images
 */

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

const PUMP_IMG = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000";
const CHAMBER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482140460/fNkVu5Tg3PJ9iHbksmAfuk/vacuum-chamber-b9WZaLMxgtppd4t9GEwHLU.webp";
const VALVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482140460/fNkVu5Tg3PJ9iHbksmAfuk/vacuum-valve-APag6GQ4gXX57Xr5SjfbfJ.webp";

const categories = [
  { id: "all", label: "전체" },
  { id: "pump", label: "진공 펌프" },
  { id: "chamber", label: "진공 챔버" },
  { id: "valve", label: "진공 밸브" },
  { id: "measurement", label: "측정 장비" },
];

const products = [
  {
    id: 1,
    category: "pump",
    name: "터보분자펌프 TMP-500",
    nameEn: "TURBOMOLECULAR PUMP",
    img: PUMP_IMG,
    spec: "10⁻⁸ Pa",
    specs: [
      { label: "최대 진공도", value: "5×10⁻⁸ Pa" },
      { label: "배기속도", value: "500 L/s" },
      { label: "회전수", value: "60,000 rpm" },
      { label: "플랜지", value: "ISO 160" },
    ],
    desc: "고속 회전 터빈 블레이드를 이용하여 분자 흐름 영역에서 작동하는 고진공 펌프. 반도체 및 연구용 장비에 최적.",
    badge: "베스트셀러",
  },
  {
    id: 2,
    category: "pump",
    name: "로터리베인펌프 RVP-100",
    nameEn: "ROTARY VANE PUMP",
    img: PUMP_IMG,
    spec: "10⁻³ Pa",
    specs: [
      { label: "최대 진공도", value: "1×10⁻³ Pa" },
      { label: "배기속도", value: "100 m³/h" },
      { label: "소비전력", value: "2.2 kW" },
      { label: "오일 용량", value: "1.5 L" },
    ],
    desc: "오일 윤활 방식의 2단 로터리베인 펌프. 안정적인 중진공 환경 구현에 적합.",
    badge: null,
  },
  {
    id: 3,
    category: "pump",
    name: "드라이스크롤펌프 DSP-50",
    nameEn: "DRY SCROLL PUMP",
    img: PUMP_IMG,
    spec: "오일프리",
    specs: [
      { label: "최대 진공도", value: "1×10⁻² Pa" },
      { label: "배기속도", value: "50 m³/h" },
      { label: "소비전력", value: "1.5 kW" },
      { label: "특징", value: "오일프리, 청정" },
    ],
    desc: "오일을 사용하지 않는 청정 드라이 펌프. 제약·식품·반도체 클린룸 환경에 적합.",
    badge: "신제품",
  },
  {
    id: 4,
    category: "chamber",
    name: "UHV 진공 챔버 UC-600",
    nameEn: "UHV VACUUM CHAMBER",
    img: CHAMBER_IMG,
    spec: "UHV 등급",
    specs: [
      { label: "재질", value: "SUS316L" },
      { label: "내경", value: "Φ600 mm" },
      { label: "도달진공도", value: "10⁻¹⁰ Pa" },
      { label: "표면처리", value: "전해연마" },
    ],
    desc: "초고진공 환경을 위한 맞춤형 챔버. 전해연마 내면 처리로 가스 방출 최소화.",
    badge: null,
  },
  {
    id: 5,
    category: "chamber",
    name: "공정용 챔버 PC-1200",
    nameEn: "PROCESS CHAMBER",
    img: CHAMBER_IMG,
    spec: "맞춤 제작",
    specs: [
      { label: "재질", value: "SUS304/316L" },
      { label: "크기", value: "맞춤 제작" },
      { label: "포트", value: "CF/KF 혼합" },
      { label: "가열", value: "최대 300°C" },
    ],
    desc: "CVD, PVD, 에칭 등 다양한 공정에 맞춤 설계되는 대형 공정 챔버.",
    badge: null,
  },
  {
    id: 6,
    category: "valve",
    name: "게이트밸브 GV-160",
    nameEn: "GATE VALVE",
    img: VALVE_IMG,
    spec: "ISO KF160",
    specs: [
      { label: "구경", value: "ISO KF 160" },
      { label: "작동방식", value: "공압/수동" },
      { label: "누설률", value: "< 10⁻¹⁰ mbar·L/s" },
      { label: "재질", value: "SUS316L" },
    ],
    desc: "진공 라인 차단을 위한 고신뢰성 게이트밸브. 공압 및 수동 작동 모두 지원.",
    badge: "베스트셀러",
  },
  {
    id: 7,
    category: "valve",
    name: "버터플라이밸브 BV-200",
    nameEn: "BUTTERFLY VALVE",
    img: VALVE_IMG,
    spec: "유량 제어",
    specs: [
      { label: "구경", value: "DN 200" },
      { label: "작동방식", value: "전동/수동" },
      { label: "제어", value: "0~100% 개도" },
      { label: "재질", value: "알루미늄/SUS" },
    ],
    desc: "진공 시스템의 유량 및 압력 제어를 위한 정밀 버터플라이밸브.",
    badge: null,
  },
  {
    id: 8,
    category: "measurement",
    name: "진공 게이지 컨트롤러 VGC-3",
    nameEn: "VACUUM GAUGE CONTROLLER",
    img: CHAMBER_IMG,
    spec: "멀티채널",
    specs: [
      { label: "측정범위", value: "10⁻¹⁰ ~ 10³ Pa" },
      { label: "채널수", value: "3채널" },
      { label: "통신", value: "RS-232/USB" },
      { label: "센서", value: "이온/피라니" },
    ],
    desc: "이온 게이지와 피라니 게이지를 동시 제어하는 멀티채널 진공 측정 컨트롤러.",
    badge: null,
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ background: "oklch(0.12 0.025 240)", minHeight: "100vh" }}>
      {/* Page header */}
      <div
        className="py-16 relative overflow-hidden"
        style={{ background: "oklch(0.10 0.025 240)", borderBottom: "1px solid oklch(0.28 0.020 235)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(oklch(0.55 0.12 230 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.12 230 / 0.04) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-xs mb-4 mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
            <Link href="/"><span className="hover:underline cursor-pointer">홈</span></Link>
            <ChevronRight size={12} />
            <span>제품</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
            <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
              PRODUCT CATALOG
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "oklch(0.92 0.008 220)",
              letterSpacing: "0.04em",
            }}
          >
            제품 카탈로그
          </h1>
          <p className="mt-3 max-w-xl" style={{ color: "oklch(0.65 0.012 225)" }}>
            VacuTech의 다양한 진공 솔루션을 만나보세요. 맞춤 제작 및 기술 상담은 문의하기를 이용해 주세요.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div
        className="sticky top-16 z-40 py-4"
        style={{ background: "oklch(0.14 0.024 240)", borderBottom: "1px solid oklch(0.28 0.020 235)" }}
      >
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 text-sm tracking-wider transition-all duration-200"
                style={{
                  background: activeCategory === cat.id ? "oklch(0.55 0.12 230)" : "transparent",
                  color: activeCategory === cat.id ? "oklch(0.98 0.005 220)" : "oklch(0.65 0.012 225)",
                  border: `1px solid ${activeCategory === cat.id ? "oklch(0.55 0.12 230)" : "oklch(0.28 0.020 235)"}`,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="industrial-card overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.55 0.12 230)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.28 0.020 235)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div className="relative overflow-hidden" style={{ height: "180px" }}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, oklch(0.16 0.022 240) 0%, transparent 60%)" }}
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold"
                    style={{
                      background: product.badge === "신제품" ? "oklch(0.65 0.18 145)" : "oklch(0.55 0.12 230)",
                      color: "oklch(0.98 0.005 220)",
                    }}
                  >
                    {product.badge}
                  </span>
                )}
                <span
                  className="absolute top-3 right-3 px-2 py-1 text-xs mono-num"
                  style={{ background: "oklch(0.10 0.025 240 / 0.9)", color: "oklch(0.75 0.012 225)" }}
                >
                  {product.spec}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs tracking-widest mb-1 mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                  {product.nameEn}
                </p>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.92 0.008 220)", letterSpacing: "0.05em" }}
                >
                  {product.name}
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "oklch(0.60 0.015 230)" }}>
                  {product.desc.substring(0, 60)}...
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {product.specs.slice(0, 2).map((s) => (
                    <div key={s.label} className="text-xs" style={{ color: "oklch(0.50 0.015 230)" }}>
                      <span>{s.label}: </span>
                      <span className="mono-num" style={{ color: "oklch(0.70 0.012 225)" }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product detail modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "oklch(0.05 0.020 240 / 0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="w-full max-w-2xl industrial-card overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative" style={{ height: "280px" }}>
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-widest mb-1 mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                  {selectedProduct.nameEn}
                </p>
                <h2
                  className="text-2xl mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.92 0.008 220)", letterSpacing: "0.05em" }}
                >
                  {selectedProduct.name}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.65 0.012 225)" }}>
                  {selectedProduct.desc}
                </p>
                <div className="space-y-2 mb-6">
                  {selectedProduct.specs.map((s) => (
                    <div key={s.label} className="flex justify-between text-sm py-1" style={{ borderBottom: "1px solid oklch(0.22 0.018 240)" }}>
                      <span style={{ color: "oklch(0.55 0.015 230)" }}>{s.label}</span>
                      <span className="mono-num font-medium" style={{ color: "oklch(0.80 0.010 220)" }}>{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href="/contact">
                    <button
                      className="flex-1 py-2 text-sm font-semibold tracking-wider transition-all duration-200"
                      style={{
                        background: "oklch(0.55 0.12 230)",
                        color: "oklch(0.98 0.005 220)",
                      }}
                    >
                      견적 문의
                    </button>
                  </Link>
                  <button
                    className="px-4 py-2 text-sm transition-all duration-200"
                    style={{
                      border: "1px solid oklch(0.28 0.020 235)",
                      color: "oklch(0.65 0.012 225)",
                    }}
                    onClick={() => setSelectedProduct(null)}
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
