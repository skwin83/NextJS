/*
 * Contact.tsx — VacuTech 문의하기 페이지
 * Industrial Precision Aesthetic: Dark navy bg, steel blue accents
 * Contact form + company info
 */

import { useState } from "react";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "전화", value: "02-1234-5678", sub: "영업팀 직통" },
  { icon: Mail, label: "이메일", value: "info@vacutech.co.kr", sub: "24시간 접수" },
  { icon: MapPin, label: "주소", value: "경기도 화성시 동탄산업단지", sub: "동탄대로 123번길 45" },
  { icon: Clock, label: "운영시간", value: "월–금 09:00–18:00", sub: "토·일·공휴일 휴무" },
];

const inquiryTypes = [
  "제품 견적 문의",
  "기술 상담",
  "A/S 요청",
  "납기 문의",
  "기타",
];

export default function Contact() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company || !form.name || !form.email || !form.message) {
      toast.error("필수 항목을 모두 입력해 주세요.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("문의가 접수되었습니다. 영업일 기준 1–2일 내에 답변 드리겠습니다.");
      setForm({ company: "", name: "", email: "", phone: "", type: "", message: "" });
    }, 1200);
  };

  const inputStyle = {
    background: "oklch(0.18 0.018 240)",
    border: "1px solid oklch(0.28 0.020 235)",
    color: "oklch(0.85 0.008 220)",
    outline: "none",
    width: "100%",
    padding: "0.625rem 0.875rem",
    fontSize: "0.875rem",
    fontFamily: "'Noto Sans KR', sans-serif",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    marginBottom: "0.375rem",
    color: "oklch(0.60 0.015 230)",
    fontFamily: "'Roboto Mono', monospace",
  };

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
            <span>문의하기</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
            <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
              CONTACT US
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
            문의하기
          </h1>
          <p className="mt-3 max-w-xl" style={{ color: "oklch(0.65 0.012 225)" }}>
            제품 견적, 기술 상담, A/S 등 모든 문의를 환영합니다. 전문 엔지니어가 신속하게 답변 드립니다.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
              <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                CONTACT INFO
              </span>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="industrial-card p-4 flex items-start gap-4"
                >
                  <div
                    className="w-9 h-9 flex-shrink-0 flex items-center justify-center"
                    style={{ background: "oklch(0.55 0.12 230 / 0.15)", border: "1px solid oklch(0.55 0.12 230 / 0.4)" }}
                  >
                    <info.icon size={16} style={{ color: "oklch(0.55 0.12 230)" }} />
                  </div>
                  <div>
                    <p className="text-xs mono-num mb-1" style={{ color: "oklch(0.55 0.12 230)" }}>{info.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.85 0.008 220)" }}>{info.value}</p>
                    <p className="text-xs" style={{ color: "oklch(0.55 0.015 230)" }}>{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="mt-6 flex items-center justify-center"
              style={{
                height: "180px",
                background: "oklch(0.16 0.022 240)",
                border: "1px solid oklch(0.28 0.020 235)",
                color: "oklch(0.45 0.015 230)",
                fontSize: "0.75rem",
                fontFamily: "'Roboto Mono', monospace",
              }}
            >
              <div className="text-center">
                <MapPin size={24} style={{ margin: "0 auto 8px", color: "oklch(0.55 0.12 230)" }} />
                <p>경기도 화성시 동탄산업단지</p>
                <p>동탄대로 123번길 45</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "oklch(0.55 0.12 230)" }} />
              <span className="text-xs tracking-widest mono-num" style={{ color: "oklch(0.55 0.12 230)" }}>
                INQUIRY FORM
              </span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>회사명 *</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="(주)회사명"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.55 0.12 230)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.28 0.020 235)"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>담당자명 *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.55 0.12 230)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.28 0.020 235)"; }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>이메일 *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.55 0.12 230)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.28 0.020 235)"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.55 0.12 230)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.28 0.020 235)"; }}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>문의 유형</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "oklch(0.55 0.12 230)"; }}
                  onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = "oklch(0.28 0.020 235)"; }}
                >
                  <option value="">선택해 주세요</option>
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>문의 내용 *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="제품명, 수량, 적용 공정 등 상세 내용을 입력해 주세요."
                  rows={6}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "oklch(0.55 0.12 230)"; }}
                  onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "oklch(0.28 0.020 235)"; }}
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 px-10 py-3 text-sm font-semibold tracking-wider transition-all duration-200 disabled:opacity-60"
                  style={{
                    background: "oklch(0.55 0.12 230)",
                    color: "oklch(0.98 0.005 220)",
                    clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.65 0.12 230)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.55 0.12 230)";
                  }}
                >
                  {submitting ? "전송 중..." : "문의 전송"}
                  {!submitting && <ChevronRight size={14} />}
                </button>
                <p className="text-xs" style={{ color: "oklch(0.50 0.015 230)" }}>
                  * 표시 항목은 필수입니다
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
