import React from 'react';
import { motion } from 'framer-motion';

interface MainTableOfContentsProps {
  onNavigate: (index: number) => void;
}

const MainTableOfContents: React.FC<MainTableOfContentsProps> = ({ onNavigate }) => {
  const sections = [
    {
      title: "出行准备",
      slideIndex: 2
    },
    {
      title: "行程概览及特色景点",
      slideIndex: 8
    },
    {
      title: "每日详细安排",
      slideIndex: 18
    }
  ];

  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      <div className="min-h-full flex flex-col justify-center p-8 md:p-12">
        <div className="max-w-4xl w-full mx-auto">
          {/* 头部标题 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
              冲绳8天9夜旅行攻略
            </h1>
          </motion.div>

          {/* 目录列表 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">目录</h2>
            
            <div className="space-y-4">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="cursor-pointer group"
                  onClick={() => onNavigate(section.slideIndex)}
                >
                  <div className="flex items-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                    <span className="text-xl font-medium text-blue-600 mr-4">
                      {index + 1}.
                    </span>
                    <span className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainTableOfContents;
