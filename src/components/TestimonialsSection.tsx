'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company?: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "משרד עורכי דין ביתא סייע לנו לנווט את מורכבות חוקי הפטנטים בעת השקת המוצר החדש שלנו. המקצועיות והידע שלהם בתחום הטכנולוגי היו ללא דופי.",
    name: "דניאל כהן",
    position: "מנכ\"ל",
    company: "טק סולושנס",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    quote: "הליווי המשפטי שקיבלנו בנושא הגנת הפרטיות ואבטחת מידע היה מעל לכל הציפיות. צוות משרד ביתא הבין את הצרכים הייחודיים של סטארט-אפ בתחילת דרכו.",
    name: "מיכל לוי",
    position: "מייסדת",
    company: "דאטה גארד",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    quote: "בזכות הייעוץ המשפטי המקצועי של משרד עורכי דין ביתא, הצלחנו לסגור סבב גיוס משמעותי. הם הבינו את המודל העסקי שלנו והתאימו את הפתרונות המשפטיים בהתאם.",
    name: "אלון ברק",
    position: "סמנכ\"ל טכנולוגיות",
    company: "קלאוד אינוביישנס",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    quote: "העבודה עם משרד ביתא בנושאי קניין רוחני הייתה חוויה מקצועית ויעילה. הם הצליחו לפשט תהליכים מורכבים ולהנגיש לנו את המידע בצורה ברורה.",
    name: "רונית שמר",
    position: "יועצת משפטית",
    company: "אפ-טק",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 5,
    quote: "הליווי המשפטי בתחום חוקי הסייבר והגנת המידע היה קריטי להצלחת המיזם שלנו. צוות משרד עורכי דין ביתא הוכיח מומחיות יוצאת דופן בתחום הטכנולוגי.",
    name: "יובל שרון",
    position: "מייסד שותף",
    company: "סייבר שילד",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSpecific = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 8000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAnimating]);

  // Reset animation state after animation completes
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gray-50 dir-rtl" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            לקוחותינו מספרים
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            מה אומרים עלינו לקוחות מתחום הטכנולוגיה שליווינו בהצלחה
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative h-[400px] md:h-[350px] w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.5 },
                  opacity: { duration: 0.3 }
                }}
                onAnimationComplete={handleAnimationComplete}
                className="absolute inset-0"
              >
                <div className="flex flex-col items-center justify-center h-full px-4">
                  <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-secondary">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center max-w-3xl mx-auto mb-6 relative">
                    <FaQuoteRight className="absolute -top-4 right-0 text-primary opacity-20 text-4xl" />
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].position}
                      {testimonials[currentIndex].company && (
                        <span> | {testimonials[currentIndex].company}</span>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all z-10"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <FaChevronRight className="text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all z-10"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <FaChevronLeft className="text-primary" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSpecific(index)}
                className={`mx-1 w-3 h-3 rounded-full focus:outline-none transition-all ${
                  currentIndex === index
                    ? 'bg-primary w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;