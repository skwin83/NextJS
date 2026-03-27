/*
 * About.tsx — VacuTech 회사소개 페이지
 * Industrial Precision Aesthetic: Dark navy bg, steel blue accents
 * Sections: Vision, History, Certifications, Facilities
 */

import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

const FACTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482140460/fNkVu5Tg3PJ9iHbksmAfuk/factory-interior-aPhRQA5EAphZsihvNqCKbN.webp";

const history = [
  { year: "2004", event: "VacuTech 주식회사 설립, 경기도 화성 공장 준공" },
  { year: "2007", event: "ISO 9001 품질경영시스템 인증 취득" },
  { year: "2010", event: "터보분자펌프 자체 개발 성공, 국산화 달성" },
  { year: "2013", event: "반도체 대기업 1차 협력사 등록" },
  { year: "2016", event: "R&D 센터 설립, 연구 인력 50명 확보" },
  { year: "2019", event: "수출 100만 달러 달성, 일본·대만 시장 진출" },
  { year: "2021", event: "2공장 증설, 생산능력 2배 확대" },
  { year: "2024", event: "창립 20주년, 누적 납품 1,200건 돌파" },
];

const certs = [
  { name: "ISO 9001", desc: "품질경영시스템", year: "2007" },
  { name: "CE", desc: "유럽 안전인증", year: "2015" },
  { name: "KS", desc: "한국산업표준", year: "2012" },
  { name: "ISO 14001", desc: "환경경영시스템", year: "2018" },
];

const values = [
  { num: "01", title: "기술 혁신", desc: "끊임없는 R&D 투자로 진공 기술의 한계를 넘어섭니다." },
  { num: "02", title: "품질 우선", desc: "모든 제품은 엄격한 품질 검사를 통과한 후 출하됩니다." },
  { num: "03", title: "고객 중심", desc: "고객의 공정 요구사항에 맞춘 최적의 솔루션을 제공합니다." },
  { num: "04", title: "지속 성장", desc: "친환경 기술 개발로 지속 가능한 미래를 만들어 갑니다." },
];

export default function About() {
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
            <span>회사소개</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
            <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
              ABOUT VACUTECH
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
            회사 소개
          </h1>
        </div>
      </div>

      {/* Vision section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
                <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                  OUR VISION
                </span>
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.92 0.008 220)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                아시아 최고의<br />
                <span style={{ color: "oklch(0.55 0.12 230)" }}>진공 기술 기업</span>으로
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.65 0.012 225)" }}>
                VacuTech는 2004년 설립 이래 진공 기술 분야에서 꾸준한 혁신을 이어왔습니다.
                반도체, OLED 디스플레이, 태양광, 제약, 화학 등 첨단 산업의 핵심 공정에
                필수적인 진공 환경을 구현하는 기술력을 보유하고 있습니다.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "oklch(0.65 0.012 225)" }}>
                자체 R&D 센터와 최신 정밀 가공 시설을 통해 설계부터 제작, 설치, A/S까지
                원스톱 서비스를 제공하며, 국내외 1,200여 고객사의 신뢰를 받고 있습니다.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "1,200+", label: "납품 실적" },
                  { num: "20년", label: "업력" },
                  { num: "50+", label: "제품 라인" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3" style={{ border: "1px solid oklch(0.28 0.020 235)" }}>
                    <div
                      className="mono-num"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "oklch(0.55 0.12 230)" }}
                    >
                      {s.num}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.60 0.015 230)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={FACTORY_IMG}
                alt="VacuTech 공장"
                className="w-full object-cover"
                style={{ height: "450px" }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24"
                style={{ border: "2px solid oklch(0.55 0.12 230)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section
        className="py-20"
        style={{ background: "oklch(0.14 0.024 240)", borderTop: "1px solid oklch(0.28 0.020 235)", borderBottom: "1px solid oklch(0.28 0.020 235)" }}
      >
        <div className="container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
              <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                CORE VALUES
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "oklch(0.92 0.008 220)",
                letterSpacing: "0.04em",
              }}
            >
              핵심 가치
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.num} className="industrial-card p-6">
                <div
                  className="mono-num mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "oklch(0.28 0.020 235)", lineHeight: 1 }}
                >
                  {v.num}
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.55 0.12 230)", letterSpacing: "0.05em" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.60 0.015 230)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
              <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                COMPANY HISTORY
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "oklch(0.92 0.008 220)",
                letterSpacing: "0.04em",
              }}
            >
              연혁
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-16 top-0 bottom-0 w-px"
              style={{ background: "oklch(0.28 0.020 235)" }}
            />
            <div className="space-y-6">
              {history.map((item, i) => (
                <div key={item.year} className="flex items-start gap-8 relative">
                  {/* Year */}
                  <div
                    className="w-32 text-right flex-shrink-0 pt-1 mono-num"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.5rem",
                      color: i === 0 ? "oklch(0.55 0.12 230)" : "oklch(0.45 0.015 230)",
                    }}
                  >
                    {item.year}
                  </div>
                  {/* Dot */}
                  <div
                    className="absolute flex-shrink-0 w-3 h-3 rounded-full"
                    style={{
                      left: "calc(4rem - 6px)",
                      top: "6px",
                      background: i === 0 ? "oklch(0.55 0.12 230)" : "oklch(0.28 0.020 235)",
                      border: `2px solid ${i === 0 ? "oklch(0.55 0.12 230)" : "oklch(0.40 0.018 235)"}`,
                    }}
                  />
                  {/* Event */}
                  <div
                    className="flex-1 py-1 pl-4 text-sm"
                    style={{ color: i === 0 ? "oklch(0.85 0.010 220)" : "oklch(0.65 0.012 225)" }}
                  >
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="py-20"
        style={{ background: "oklch(0.14 0.024 240)", borderTop: "1px solid oklch(0.28 0.020 235)" }}
      >
        <div className="container">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
              <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                CERTIFICATIONS
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "oklch(0.92 0.008 220)",
                letterSpacing: "0.04em",
              }}
            >
              인증 현황
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certs.map((cert) => (
              <div
                key={cert.name}
                className="industrial-card p-6 text-center transition-all duration-300"
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.55 0.12 230)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.28 0.020 235)"; }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  style={{
                    border: "2px solid oklch(0.55 0.12 230)",
                    background: "oklch(0.55 0.12 230 / 0.10)",
                  }}
                >
                  <span
                    className="mono-num font-bold"
                    style={{ color: "oklch(0.55 0.12 230)", fontSize: "0.85rem" }}
                  >
                    {cert.name}
                  </span>
                </div>
                <h3
                  className="text-base mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.92 0.008 220)", letterSpacing: "0.05em" }}
                >
                  {cert.name}
                </h3>
                <p className="text-xs mb-1" style={{ color: "oklch(0.65 0.012 225)" }}>{cert.desc}</p>
                <p className="text-xs mono-num" style={{ color: "oklch(0.45 0.015 230)" }}>취득: {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
