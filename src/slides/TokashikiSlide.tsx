import React from 'react';
import { motion } from 'framer-motion';

const TokashikiSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto relative bg-white/90 backdrop-blur-md rounded-xl">
      {/* Title */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-800">渡嘉敷岛轮渡预订</h2>
        <div className="w-20 h-1 bg-blue-500 mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">轮渡信息</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-600">轮渡类型</h4>
                <div className="ml-4 mt-2 space-y-2">
                  <div>
                    <p className="font-medium text-blue-800">高速轮渡（海洋客轮）</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">航行时间：</span> 35分钟</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">成人票价：</span> ¥3,310 往返</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">儿童票价：</span> ¥1,660 往返</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">普通轮渡（赞美女王号）</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">航行时间：</span> 70分钟</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">成人票价：</span> ¥2,020 往返</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">儿童票价：</span> ¥1,010 往返</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-600">航班时刻表（2025年8月）</h4>
                <div className="ml-4 mt-2 space-y-2">
                  <div>
                    <p className="font-medium text-blue-800">那霸到渡嘉敷</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">高速渡轮：</span> 9:00, 11:00, 15:00</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">渡轮：</span> 10:00</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">渡嘉敷到那霸</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">高速渡轮：</span> 10:00, 12:30, 16:00</p>
                    <p className="text-sm text-gray-700"><span className="font-medium">渡轮：</span> 15:00</p>
                  </div>
                  <p className="text-xs italic text-gray-500">* 航班时刻可能因天气和季节而变化</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 shadow-sm border border-blue-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">预订方式</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-600">在线预订</h4>
                <ul className="ml-4 mt-1 space-y-1 text-sm list-disc pl-4">
                  <li><span className="font-medium">官方网站：</span> www.keramatouring.jp (仅日语)</li>
                  <li><span className="font-medium">预订窗口：</span> 最多提前2个月</li>
                  <li><span className="font-medium">付款方式：</span> 接受信用卡</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-600">现场预订</h4>
                <ul className="ml-4 mt-1 space-y-1 text-sm list-disc pl-4">
                  <li><span className="font-medium">地点：</span> 泊港轮渡站（那霸）</li>
                  <li><span className="font-medium">柜台时间：</span> 7:30 AM - 5:30 PM</li>
                  <li><span className="font-medium">付款方式：</span> 现金或信用卡</li>
                  <li><span className="font-medium">请提前：</span> 至少提前30分钟到达</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-600">通过酒店/代理</h4>
                <ul className="ml-4 mt-1 space-y-1 text-sm list-disc pl-4">
                  <li>许多那霸酒店可协助预订轮渡</li>
                  <li>客路和Voyagin等旅行社提供英文在线预订</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="relative overflow-hidden bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/imgs/tokashiki_beach.jpg" 
                alt="渡嘉敷岛 Beach" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-700 mb-3">渡嘉敷岛信息</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-blue-600">阿波连海滩</h4>
                  <p className="text-sm text-gray-700">以清澈海水和白色沙滩著名</p>
                  <p className="text-sm text-gray-700">非常适合浮潜和游泳</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-600">岛内交通</h4>
                  <p className="text-sm text-gray-700"><span className="font-medium">Port to 阿波连海滩:</span> 接驳巴士 (¥500 往返)</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">时刻表：</span> 与轮渡到达时间配合</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-600">活动项目</h4>
                  <ul className="ml-4 mt-1 space-y-1 text-sm list-disc pl-4">
                    <li>浮潜（设备租赁： ¥1,500-2,000)</li>
                    <li>玻璃底船游览 (¥2,000-3,000)</li>
                    <li>海上皮划艇 (¥3,000-4,000)</li>
                    <li>海滩休闲</li>
                    <li>海洋生物观赏</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5 shadow-sm border border-yellow-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-3">重要提示</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li><span className="font-bold">预订时机：</span> 旺季请提前2周预订</li>
              <li><span className="font-bold">天气检查：</span> 台风或海况恶劣时轮渡可能取消</li>
              <li><span className="font-bold">最后返程轮渡：</span> 不要错过16:00返回那霸的高速轮渡</li>
              <li><span className="font-bold">晕船：</span> 如需要请准备晕船药，特别是普通轮渡</li>
              <li><span className="font-bold">携带物品：</span> 泳装、防晒霜、毛巾、换洗衣物</li>
              <li><span className="font-bold">餐饮选择：</span> 岛上餐厅有限 - 建议携带小食</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-5 shadow-sm border border-green-100">
            <h3 className="text-xl font-bold text-green-700 mb-3">一日游时间安排</h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-24 font-bold">7:00-8:00</span>
                <p>酒店早餐</p>
              </div>
              <div className="flex">
                <span className="w-24 font-bold">8:00-8:30</span>
                <p>前往泊港</p>
              </div>
              <div className="flex">
                <span className="w-24 font-bold">8:30-9:00</span>
                <p>轮渡站办理登船</p>
              </div>
              <div className="flex">
                <span className="w-24 font-bold">9:00-9:35</span>
                <p>轮渡前往渡嘉敷岛</p>
              </div>
              <div className="flex">
                <span className="w-24 font-bold">9:35-16:00</span>
                <p>岛上活动及午餐</p>
              </div>
              <div className="flex">
                <span className="w-24 font-bold">16:00-16:35</span>
                <p>返程轮渡到那霸</p>
              </div>
              <div className="flex">
                <span className="w-24 font-bold">16:35-17:30</span>
                <p>返回酒店</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TokashikiSlide;