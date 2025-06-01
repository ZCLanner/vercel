import React from 'react';
import { motion } from 'framer-motion';

const USJSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto relative bg-white/90 backdrop-blur-md rounded-xl">
      {/* Title */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-800">日本环球影城门票指南</h2>
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
            <h3 className="text-xl font-bold text-blue-700 mb-3">门票类型</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-300 pl-3">
                <h4 className="font-bold text-blue-600">一日门票</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">成人（12岁以上）：</span>¥8,900</p>
                <p className="text-sm text-gray-700"><span className="font-medium">儿童（4-11岁）：</span>¥5,700</p>
                <p className="text-sm text-gray-700"><span className="font-medium">说明：</span>标准一日入园门票</p>
              </div>
              
              <div className="border-l-4 border-indigo-300 pl-3">
                <h4 className="font-bold text-indigo-600">二日门票</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">成人（12岁以上）：</span>¥16,000</p>
                <p className="text-sm text-gray-700"><span className="font-medium">儿童（4-11岁）：</span>¥10,800</p>
                <p className="text-sm text-gray-700"><span className="font-medium">说明：</span>连续两日入园门票</p>
              </div>

              <div className="border-l-4 border-purple-300 pl-3">
                <h4 className="font-bold text-purple-600">快速通关券选项</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">快速通关券4：</span>¥6,000-9,800</p>
                <p className="text-sm text-gray-700"><span className="font-medium">快速通关券7：</span>¥10,500-14,500</p>
                <p className="text-sm text-gray-700"><span className="font-medium">快速通关券尊享版：</span>¥18,000-28,000</p>
                <p className="text-sm text-gray-700"><span className="font-medium">注意：</span>价格根据日期变动（淡季/平季/旺季）</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 shadow-sm border border-blue-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">在线购买选项</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-bold">环球影城官网：</span>
                <p className="text-sm">最可靠的购票渠道，可提前3个月购买</p>
                <p className="text-sm text-blue-600">www.usj.co.jp/e/</p>
              </li>
              <li>
                <span className="font-bold">客路（Klook）：</span>
                <p className="text-sm">经常有折扣优惠，电子票便捷</p>
                <p className="text-sm text-blue-600">www.klook.com</p>
              </li>
              <li>
                <span className="font-bold">Voyagin：</span>
                <p className="text-sm">提供快速通关券套票</p>
                <p className="text-sm text-blue-600">www.govoyagin.com</p>
              </li>
              <li>
                <span className="font-bold">GetYourGuide：</span>
                <p className="text-sm">用户友好的平台，客服优质</p>
                <p className="text-sm text-blue-600">www.getyourguide.com</p>
              </li>
            </ul>
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
                src="/imgs/usj_harry_potter.jpg" 
                alt="哈利波特 World at USJ" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-700 mb-3">预订策略</h3>
              <ul className="space-y-3 list-disc pl-5 text-gray-700">
                <li><span className="font-bold">预订时间：</span>提前2-3个月，旺季尤其重要</li>
                <li><span className="font-bold">快速通关券：</span>与门票同时预订</li>
                <li><span className="font-bold">最佳游玩日：</span>周二至周四人流较少</li>
                <li><span className="font-bold">人流预测：</span>预订前查看USJ人流日历</li>
                <li><span className="font-bold">套票优惠：</span>考虑酒店+门票套餐更划算</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5 shadow-sm border border-yellow-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-3">快速通关券推荐</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-yellow-800">快速通关券4</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">适合人群：</span>预算有限、时间紧张的游客</p>
                <p className="text-sm text-gray-700"><span className="font-medium">推荐组合：</span>哈利波特 + 超级任天堂世界</p>
              </div>
              
              <div>
                <h4 className="font-bold text-yellow-800">快速通关券7</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">适合人群：</span>希望体验大部分设施的首次游客</p>
                <p className="text-sm text-gray-700"><span className="font-medium">性价比：</span>价格与覆盖范围的最佳平衡</p>
              </div>
              
              <div>
                <h4 className="font-bold text-yellow-800">快速通关券尊享版</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">适合人群：</span>旺季游玩时间有限的游客</p>
                <p className="text-sm text-gray-700"><span className="font-medium">特色：</span>所有适用设施无限次快速通行</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-5 shadow-sm border border-green-100">
            <h3 className="text-xl font-bold text-green-700 mb-3">重要提示</h3>
            <ul className="space-y-1 list-disc pl-5 text-sm text-gray-700">
              <li>游玩前务必下载USJ官方应用</li>
              <li>节假日和周末门票价格更高</li>
              <li>热门日期的快速通关券很快售罄</li>
              <li>接受电子票（建议截图备份）</li>
              <li>超级任天堂世界可能需要预约入场时间</li>
              <li>打印门票或离线保存作为备份</li>
              <li>预订前查看园区开放时间 - 因季节而异</li>
              <li>取票时请准备好护照</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default USJSlide;