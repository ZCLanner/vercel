import React from 'react';
import { motion } from 'framer-motion';

const TitleSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center relative">
      <div className="absolute inset-0 bg-[url('/imgs/tokashiki_beach.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4">
            日本冲绳8天9夜旅行攻略
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-blue-600 mb-8">
            完整旅行规划指南
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <div className="bg-white/80 p-4 rounded-lg shadow-sm text-blue-800">
            <p className="font-bold">2025年8月2-9日</p>
            <p className="text-sm">出行日期</p>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg shadow-sm text-blue-800">
            <p className="font-bold">大阪 & 冲绳</p>
            <p className="text-sm">旅行目的地</p>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg shadow-sm text-blue-800">
            <p className="font-bold">¥19,000/人</p>
            <p className="text-sm">预估预算</p>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg shadow-sm text-blue-800">
            <p className="font-bold">四人家庭</p>
            <p className="text-sm">旅行人数</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12 text-blue-700 italic"
        >
          <p>使用方向键或点击下方圆点进行导航</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleSlide;