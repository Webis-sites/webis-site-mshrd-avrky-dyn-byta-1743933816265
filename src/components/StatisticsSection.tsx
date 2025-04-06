'use client';

import React, { useState, useEffect } from 'react';
import { FaBalanceScale, FaUsers, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface StatItem {
  id: number;
  icon: React.ReactNode;
  value: number;
  title: string;
  suffix?: string;
}

const StatisticsSection: React.FC = () => {
  const [stats, setStats] = useState<StatItem[]>([
    { id: 1, icon: <FaCalendarAlt className="text-4xl mb-2 text-secondary" />, value: 0, title: "שנות ניסיון", suffix: "+" },
    { id: 2, icon: <FaUsers className="text-4xl mb-2 text-secondary" />, value: 0, title: "לקוחות מרוצים", suffix: "+" },
    { id: 3, icon: <FaCheckCircle className="text-4xl mb-2 text-secondary" />, value: 0, title: "תיקים מוצלחים", suffix: "%" },
    { id: 4, icon: <FaBalanceScale className="text-4xl mb-2 text-secondary" />, value: 0, title: "עורכי דין מומחים", suffix: "" }
  ]);

  const finalValues = [25, 1500, 98, 45];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setStats(prevStats => {
          const allCompleted = prevStats.every((stat, index) => stat.value >= finalValues[index]);
          
          if (allCompleted) {
            clearInterval(interval);
            return prevStats;
          }
          
          return prevStats.map((stat, index) => {
            if (stat.value >= finalValues[index]) {
              return stat;
            }
            
            const increment = Math.max(1, Math.floor(finalValues[index] / 50));
            const newValue = Math.min(stat.value + increment, finalValues[index]);
            
            return { ...stat, value: newValue };
          });
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section className="statistics-section py-20 relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-pattern opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">הנתונים מדברים בעד עצמם</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="text-white mt-6 text-lg max-w-2xl mx-auto">
            משרד עורכי דין ביתא מתמחה בייעוץ משפטי בתחום הטכנולוגיה, עם ניסיון עשיר והישגים מוכחים
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:-translate-y-2">
              {stat.icon}
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">{stat.value}</span>
                <span className="text-2xl font-bold text-primary">{stat.suffix}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">{stat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;