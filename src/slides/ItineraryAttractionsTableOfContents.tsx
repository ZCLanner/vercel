import React from 'react';
import { motion } from 'framer-motion';

interface ItineraryAttractionsTableOfContentsProps {
  onNavigate: (index: number) => void;
}

const ItineraryAttractionsTableOfContents: React.FC<ItineraryAttractionsTableOfContentsProps> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      <div className="min-h-full flex flex-col justify-center p-8 md:p-12">
        <div className="max-w-4xl w-full mx-auto">
          {/* 返回按钮 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <button
              onClick={() => onNavigate(1)}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回主目录
            </button>
          </motion.div>

          {/* 章节标题 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
              行程概览及特色景点
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryAttractionsTableOfContents;
