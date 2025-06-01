import React from 'react';
import { motion } from 'framer-motion';

const FinaleSlide: React.FC = () => {
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
            感谢观看！
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-blue-600 mb-8">
            祝您冲绳之旅愉快
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          <div className="bg-white/80 p-6 rounded-lg shadow-sm text-left">
            <h3 className="text-xl font-bold text-blue-800 mb-3">行程总结</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-center">
                <span className="w-32 font-bold">行程时长：</span>
                <span>8天9夜</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-bold">总预算：</span>
                <span>~¥19,000/人</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-bold">目的地：</span>
                <span>大阪、冲绳、上海</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-bold">亮点：</span>
                <span>渡嘉敷岛海滩</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/80 p-6 rounded-lg shadow-sm text-left">
            <h3 className="text-xl font-bold text-blue-800 mb-3">出行前清单</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>申请日本签证（提前2个月）</span>
              </li>
              <li className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>预订环球影城门票</span>
              </li>
              <li className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>预约冲绳私人包车游览</span>
              </li>
              <li className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>预订渡嘉敷岛渡轮票</span>
              </li>
              <li className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>购买旅行保险</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12 text-blue-700 italic"
        >
          <p>如有疑问或定制需求，请联系我们</p>
          <p className="mt-2 font-bold">一路平安，创造美好回忆！</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FinaleSlide;