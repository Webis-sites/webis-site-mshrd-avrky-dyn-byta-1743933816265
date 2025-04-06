'use client';

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-secondary/10 to-primary/10 rtl" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="משרד עורכי דין טכנולוגי"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-primary/70 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <div className="mb-8 inline-block rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
            <h2 className="font-heading text-lg font-medium text-white md:text-xl">משרד עורכי דין ביתא</h2>
          </div>
          
          <h1 className="font-heading mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            משרד עורכי דין מוביל בישראל
          </h1>
          
          <p className="mb-10 text-xl text-white/90 md:text-2xl">
            חווית לקוח מושלמת בכל ביקור
          </p>
          
          <button
            onClick={handleCtaClick}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span className="relative flex items-center gap-2">
              קבע תור עכשיו
              <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            </span>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">+500</span>
              <span className="text-sm text-white/80">לקוחות מרוצים</span>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">15+</span>
              <span className="text-sm text-white/80">שנות ניסיון</span>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">98%</span>
              <span className="text-sm text-white/80">אחוזי הצלחה</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary/30 to-transparent"></div>
      <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full border border-white/20 opacity-50"></div>
      <div className="absolute right-12 top-24 h-16 w-16 rounded-full border border-white/20 opacity-50"></div>
    </div>
  );
}