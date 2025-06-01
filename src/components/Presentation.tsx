import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHotkeys } from 'react-hotkeys-hook';
import { useSwipeable } from 'react-swipeable';
import TitleSlide from '../slides/TitleSlide';
import MainTableOfContents from '../slides/MainTableOfContents';
import PreTravelTableOfContents from '../slides/PreTravelTableOfContents';
import ItineraryAttractionsTableOfContents from '../slides/ItineraryAttractionsTableOfContents';
import DailyPlansTableOfContents from '../slides/DailyPlansTableOfContents';
import VisaSlide from '../slides/VisaSlide';
import BookingSlide from '../slides/BookingSlide';
import USJSlide from '../slides/USJSlide';
import TokashikiSlide from '../slides/TokashikiSlide';

import ItineraryOverviewSlide from '../slides/ItineraryOverviewSlide';
import USJGuideSlide from '../slides/USJGuideSlide';
import AttractionSlide from '../slides/AttractionSlide';
import DailyPlanSlide from '../slides/DailyPlanSlide';
import FinaleSlide from '../slides/FinaleSlide';

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSwipeHintVisible, setIsSwipeHintVisible] = useState(true);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Navigation function for table of contents
  const navigateToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setIsSwipeHintVisible(false);
    }
  };

  // All slide components with new table of contents structure
  const slides = [
    // 0: 标题页
    <TitleSlide key="title" />,
    
    // 1: 主目录页
    <MainTableOfContents key="main-toc" onNavigate={navigateToSlide} />,
    
    // 2: 出行准备目录页
    <PreTravelTableOfContents key="pre-travel-toc" onNavigate={navigateToSlide} />,
    
    // 3-7: 出行准备内容
    <VisaSlide key="visa" />,
    <BookingSlide key="booking" />,
    <USJSlide key="usj-booking" />,
    <TokashikiSlide key="tokashiki" />,
    
    // 8: 行程景点目录页
    <ItineraryAttractionsTableOfContents key="itinerary-attractions-toc" onNavigate={navigateToSlide} />,
    
    // 9-17: 行程概览和景点介绍
    <ItineraryOverviewSlide key="itinerary" />,
    <USJGuideSlide key="usj-guide" />,
    <AttractionSlide key="attraction-aquarium" attraction="aquarium" />,
    <AttractionSlide key="attraction-american" attraction="american" />,
    <AttractionSlide key="attraction-manzamo" attraction="manzamo" />,
    <AttractionSlide key="attraction-kouri" attraction="kouri" />,
    <AttractionSlide key="attraction-chinen-cape" attraction="chinen_cape" />,
    <AttractionSlide key="attraction-okinawa-world" attraction="okinawa_world" />,
    <AttractionSlide key="attraction-senagajima" attraction="senagajima" />,
    <AttractionSlide key="attraction-tokashiki" attraction="tokashiki" />,
    <AttractionSlide key="attraction-dotonbori" attraction="dotonbori" />,
    <AttractionSlide key="attraction-kokusai" attraction="kokusai" />,
    <AttractionSlide key="attraction-bund" attraction="bund" />,
    
    // 18: 每日行程目录页
    <DailyPlansTableOfContents key="daily-plans-toc" onNavigate={navigateToSlide} />,
    
    // 19-26: 每日详细行程
    <DailyPlanSlide key="day1" day={1} />,
    <DailyPlanSlide key="day2" day={2} />,
    <DailyPlanSlide key="day3" day={3} />,
    <DailyPlanSlide key="day4" day={4} />,
    <DailyPlanSlide key="day5" day={5} />,
    <DailyPlanSlide key="day6" day={6} />,
    <DailyPlanSlide key="day7" day={7} />,
    <DailyPlanSlide key="day8" day={8} />,
    
    // 27: 结尾页
    <FinaleSlide key="finale" />,
  ];

  // Navigation functions
  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
      setIsSwipeHintVisible(false);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
      setIsSwipeHintVisible(false);
    }
  };

  // Listen for keyboard events for navigation
  useHotkeys('left', goToPrevSlide);
  useHotkeys('right', goToNextSlide);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPrevSlide,
    onSwiping: (eventData) => {
      const progress = Math.abs(eventData.deltaX) / (containerRef.current?.clientWidth || 1);
      setSwipeProgress(Math.min(progress, 1));
      setIsSwiping(true);
    },
    onSwiped: () => {
      setSwipeProgress(0);
      setIsSwiping(false);
    },
    preventScrollOnSwipe: true,
    trackMouse: false,
    trackTouch: true,
    delta: 50,
    swipeDuration: 500,
    touchEventOptions: { passive: false }
  });

  // Mount global navigation method and auto-hide swipe hint
  useEffect(() => {
    window._navigate_slide = (index: number) => {
      if (index >= 0 && index < slides.length) {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
      }
    };

    // Set total slides information
    window._total_slides = {
      count: slides.length,
      title: 'Japan Okinawa 8 Days 9 Nights Travel Itinerary - Enhanced with Table of Contents',
    };

    // Auto-hide swipe hint after 5 seconds
    const timer = setTimeout(() => {
      setIsSwipeHintVisible(false);
    }, 5000);

    return () => {
      // Clean up global methods
      window._navigate_slide = undefined;
      window._total_slides = undefined;
      clearTimeout(timer);
    };
  }, [currentSlide, slides.length]);

  // Reset scroll position when slide changes
  useEffect(() => {
    // Reset scroll to top when changing to a table of contents slide
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    // Also reset body scroll for any overflow issues
    window.scrollTo(0, 0);
  }, [currentSlide]);

  // Slide animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div 
      ref={containerRef}
      {...swipeHandlers}
      className="w-full h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden relative select-none"
      style={{ touchAction: 'pan-y pinch-zoom' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/imgs/tokashiki_beach.jpg')] bg-cover bg-center opacity-5"></div>
      
      {/* Swipe hint for mobile */}
      {isSwipeHintVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-1/2 left-4 right-4 z-20 pointer-events-none"
        >
          <div className="bg-black/60 backdrop-blur-md text-white px-4 py-3 rounded-lg text-center text-sm md:hidden">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span>👈</span>
              <span>左右滑动切换页面</span>
              <span>👉</span>
            </div>
            <div className="text-xs opacity-80">或使用下方圆点导航</div>
          </div>
        </motion.div>
      )}

      {/* Swipe progress indicator */}
      {isSwiping && swipeProgress > 0.1 && (
        <div className="absolute top-1/2 left-0 right-0 z-30 pointer-events-none">
          <div className="mx-8">
            <div className="h-1 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-400 rounded-full"
                style={{ width: `${swipeProgress * 100}%` }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation arrows for larger screens */}
      <div className="hidden md:block">
        {currentSlide > 0 && (
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {currentSlide < slides.length - 1 && (
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Quick navigation to main table of contents */}
      {currentSlide > 1 && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="absolute top-4 left-4 z-20"
        >
          <button
            onClick={() => navigateToSlide(1)}
            className="flex items-center gap-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm transition-all duration-200"
            aria-label="返回主目录"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 7l4-4l4 4" />
            </svg>
            <span className="hidden sm:inline">主目录</span>
          </button>
        </motion.div>
      )}
      
      {/* Slide navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 z-10 px-4">
        <div className="flex gap-1 max-w-full overflow-x-auto scrollbar-hide">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
                setIsSwipeHintVisible(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                currentSlide === index 
                  ? 'bg-blue-600 w-4' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`第 ${index + 1} 页`}
            />
          ))}
        </div>
      </div>

      {/* Slide counter and section indicator */}
      <div className="absolute top-4 right-4 z-20 space-y-2">
        <div className="bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
        {/* Section indicator */}
        {currentSlide > 0 && (
          <div className="bg-blue-500/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs text-center">
            {currentSlide === 1 && "📋 主目录"}
            {currentSlide >= 2 && currentSlide <= 7 && "✈️ 出行准备"}
            {currentSlide >= 8 && currentSlide <= 17 && "🏖️ 行程景点"}
            {currentSlide >= 18 && currentSlide <= 26 && "📅 每日安排"}
            {currentSlide === 27 && "🎉 结尾"}
          </div>
        )}
      </div>

      {/* Slide content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Presentation;

// Extend Window interface to add global navigation methods
declare global {
  interface Window {
    _navigate_slide?: (index: number) => void;
    _total_slides?: {
      count: number;
      title: string;
    };
  }
}