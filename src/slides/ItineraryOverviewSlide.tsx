import React from 'react';
import { motion } from 'framer-motion';

const ItineraryOverviewSlide: React.FC = () => {
  const itinerary = [
    {
      day: 1,
      date: "8月2日",
      title: "杭州 → 大阪",
      highlights: "直飞航班MF8707，道顿堀夜游探索",
      accommodation: "大阪难波Y's CABIN酒店"
    },
    {
      day: 2,
      date: "8月3日",
      title: "日本环球影城",
      highlights: "哈利波特世界，超级任天堂世界，精彩表演",
      accommodation: "大阪难波Y's CABIN酒店"
    },
    {
      day: 3,
      date: "8月4日",
      title: "大阪 → 冲绳",
      highlights: "航班MM215，国际通夜游探索",
      accommodation: "国际通附近酒店"
    },
    {
      day: 4,
      date: "8月5日",
      title: "冲绳北部游览",
      highlights: "美之海水族馆，美国村（私人用车）",
      accommodation: "国际通附近酒店"
    },
    {
      day: 5,
      date: "8月6日",
      title: "冲绳南部游览",
      highlights: "玉泉洞，泊港鱼市场，奥特莱斯（私人用车）",
      accommodation: "国际通附近酒店"
    },
    {
      day: 6,
      date: "8月7日",
      title: "渡嘉敷岛一日游",
      highlights: "高速渡轮，阿波连海滩，浮潜体验",
      accommodation: "国际通附近酒店"
    },
    {
      day: 7,
      date: "8月8日",
      title: "冲绳 → 上海",
      highlights: "航班9C6978，外滩夜景观赏",
      accommodation: "南京路附近酒店"
    },
    {
      day: 8,
      date: "8月9日",
      title: "上海 → 杭州",
      highlights: "南京路购物，高铁返程",
      accommodation: "回到温馨的家"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto relative bg-white/90 backdrop-blur-md rounded-xl">
      {/* Title */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-800">行程总览</h2>
        <div className="w-20 h-1 bg-blue-500 mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 gap-4">
        {itinerary.map((item, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                {item.day}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-blue-700">{item.title}</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{item.date}</span>
                </div>
                <p className="text-gray-700 mt-1">{item.highlights}</p>
                <div className="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-sm text-amber-600 ml-1">{item.accommodation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-8 bg-blue-50 rounded-lg p-4 shadow-sm border border-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h3 className="text-lg font-bold text-blue-700 mb-2">旅行概况</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-blue-600">行程总时长</p>
            <p className="text-gray-700">8天9夜</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">旅行目的地</p>
            <p className="text-gray-700">大阪（2晚），冲绳（4晚），上海（1晚）</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">总旅行距离</p>
            <p className="text-gray-700">约4,800公里</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">交通方式</p>
            <p className="text-gray-700">3次航班，1次高铁，2天私人用车</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">主要活动</p>
            <p className="text-gray-700">主题乐园，海滩度假，水族馆，购物，观光游览</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">预估预算</p>
            <p className="text-gray-700">约¥19,000/人（不含购物）</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ItineraryOverviewSlide;