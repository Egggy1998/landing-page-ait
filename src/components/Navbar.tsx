/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "bg-white shadow-xl py-2" : "bg-black/10 backdrop-blur-sm py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="transition-transform hover:scale-105">
          <img 
            src="https://aitcv.ac.vn/wp-content/uploads/logo-2.png" 
            alt="AIT Vietnam Logo" 
            className={`h-12 md:h-16 w-auto transition-all ${isScrolled ? "brightness-100" : "filter brightness-0 invert"}`} 
          />
        </a>
        
        <div className="hidden lg:flex items-center gap-8">
          <a href="#gioi-thieu" className={`text-sm font-display font-bold transition-colors ${isScrolled ? "text-slate-800 hover:text-brand" : "text-white hover:text-accent"}`}>GIỚI THIỆU</a>
          <a href="#tai-sao-chon" className={`text-sm font-display font-bold transition-colors ${isScrolled ? "text-slate-800 hover:text-brand" : "text-white hover:text-accent"}`}>ƯU ĐIỂM</a>
          <a href="#giang-vien" className={`text-sm font-display font-bold transition-colors ${isScrolled ? "text-slate-800 hover:text-brand" : "text-white hover:text-accent"}`}>GIẢNG VIÊN</a>
          <a href="#thong-tin-tuyen-sinh" className={`text-sm font-display font-bold transition-colors ${isScrolled ? "text-slate-800 hover:text-brand" : "text-white hover:text-accent"}`}>TUYỂN SINH</a>
          <a href="#lien-he" className={`text-sm font-display font-bold transition-colors ${isScrolled ? "text-slate-800 hover:text-brand" : "text-white hover:text-accent"}`}>LIÊN HỆ</a>
          
          <button 
            onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-6 py-2 text-xs uppercase tracking-widest"
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
    </nav>
  );
}
