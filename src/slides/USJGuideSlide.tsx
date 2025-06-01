import React from 'react';
import { motion } from 'framer-motion';

const USJGuideSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto relative bg-white/90 backdrop-blur-md rounded-xl">
      {/* Title */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-800">日本环球影城游玩攻略</h2>
        <div className="w-20 h-1 bg-blue-500 mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left content */}
        <div className="space-y-6">
          {/* 推荐 attractions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">推荐游玩景点及顺序</h3>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 space-y-4">
              <div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">1</div>
                  <h4 className="font-bold text-blue-600 ml-3">哈利波特魔法世界</h4>
                </div>
                <div className="ml-11">
                  <p className="text-sm text-gray-700">推荐时间：开园后立即前往</p>
                  <p className="text-sm text-gray-700">主要设施：禁忌之旅、鹰马飞行、霍格沃茨城堡</p>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">2</div>
                  <h4 className="font-bold text-blue-600 ml-3">超级任天堂世界</h4>
                </div>
                <div className="ml-11">
                  <p className="text-sm text-gray-700">推荐时间：上午时段（人流较少）</p>
                  <p className="text-sm text-gray-700">主要设施：马力欧赛车、耀西冒险、金刚矿车</p>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">3</div>
                  <h4 className="font-bold text-blue-600 ml-3">水世界表演</h4>
                </div>
                <div className="ml-11">
                  <p className="text-sm text-gray-700">推荐时间：11:00、13:00或15:00</p>
                  <p className="text-sm text-gray-700">特色：精彩的水上特技和特效表演（必看）</p>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">4</div>
                  <h4 className="font-bold text-blue-600 ml-3">小黄人乐园</h4>
                </div>
                <div className="ml-11">
                  <p className="text-sm text-gray-700">推荐时间：下午时段</p>
                  <p className="text-sm text-gray-700">主要设施：小黄人大乱斗、小黄人见面"准备摇滚！"表演</p>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">5</div>
                  <h4 className="font-bold text-blue-600 ml-3">好莱坞过山车</h4>
                </div>
                <div className="ml-11">
                  <p className="text-sm text-gray-700">推荐时间：下午或午餐前</p>
                  <p className="text-sm text-gray-700">主要设施：可选择正向或倒车的过山车</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Show schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">表演时间表</h3>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-700 mb-3 font-medium text-red-600">2025年最新表演时间表（请查看官方应用获取当日具体时间）</p>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-400 pl-3">
                  <h4 className="font-bold text-blue-600">水世界（必看）</h4>
                  <p className="text-sm">表演时间：11:00、13:00、15:00</p>
                  <p className="text-sm">特色：精彩的水上特技和特效表演</p>
                </div>
                
                <div className="border-l-4 border-indigo-400 pl-3">
                  <h4 className="font-bold text-indigo-600">哈利波特魔法世界表演</h4>
                  <p className="text-sm">魔法生物见面会：10:30、11:30、12:30、14:45、15:45</p>
                  <p className="text-sm">鹰马魔法课：09:30、10:20、11:20...（多场次）</p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-3">
                  <h4 className="font-bold text-yellow-600">小黄人表演</h4>
                  <p className="text-sm">小黄人见面"准备摇滚！"：11:25、12:55、15:15、16:50</p>
                  <p className="text-sm">小黄人超萌复活节问候：12:30</p>
                </div>
                
                <div className="border-l-4 border-green-400 pl-3">
                  <h4 className="font-bold text-green-600">环球怪物摇滚表演</h4>
                  <p className="text-sm">表演时间：11:15、13:00、14:45、16:30</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="space-y-6">
          {/* Express Pass */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">快速通关券推荐</h3>
            <div className="bg-yellow-50 rounded-lg p-4 shadow-sm border border-yellow-100">
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-yellow-800">快速通关券4</h4>
                  <p className="text-sm text-gray-700">包含设施：4个指定设施的不同组合</p>
                  <p className="text-sm text-gray-700">适合人群：预算有限但想体验核心设施的游客</p>
                  <p className="text-sm text-gray-700">推荐：包含哈利波特和任天堂世界的组合</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-800">快速通关券7</h4>
                  <p className="text-sm text-gray-700">包含设施：7个指定设施，涵盖最热门项目</p>
                  <p className="text-sm text-gray-700">适合人群：希望体验更多设施的首次游客</p>
                  <p className="text-sm text-gray-700">推荐：包含最新设施的组合</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-800">快速通关券尊享版</h4>
                  <p className="text-sm text-gray-700">包含设施：所有适用设施无限次使用</p>
                  <p className="text-sm text-gray-700">适合人群：预算充足、追求最佳体验的游客</p>
                  <p className="text-sm text-gray-700">注意：价格较高但适合游玩时间有限的游客</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Touring strategy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">最佳游览策略</h3>
            <div className="relative overflow-hidden bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="/imgs/usj_harry_potter.jpg" 
                  alt="哈利波特 Wizarding World" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10 space-y-3">
                <div>
                  <h4 className="font-bold text-blue-600">时间规划</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>建议至少10小时才能体验核心设施</li>
                    <li>开园前30分钟到达排队入园</li>
                    <li>开园后直奔哈利波特区域或任天堂世界</li>
                    <li>上午8:00-10:00是热门设施的黄金时段</li>
                    <li>提前规划表演观看时间，特别是水世界</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-600">官方应用使用</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>查看实时等待时间，避开人流高峰</li>
                    <li>查看当日表演时间表和演出地点</li>
                    <li>预约部分设施的数字门票</li>
                    <li>使用互动地图导航和餐厅预订</li>
                    <li>获取特别活动和限定优惠的最新信息</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-600">专业贴士</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>黄油啤酒和特色美食最好在非用餐高峰时购买</li>
                    <li>部分热门商品有购买限制 - 请提前规划</li>
                    <li>表演开始前15-20分钟到达占好座位</li>
                    <li>闭园前留下拍摄无人群的设施照片</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Food recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">推荐餐厅</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-blue-600 mb-1">三把扫帚酒吧</h4>
                <p className="text-xs text-gray-600">推荐：烤肉套餐</p>
                <p className="text-xs text-gray-600">位置：魔法世界</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-blue-600 mb-1">奇诺比奥咖啡厅</h4>
                <p className="text-xs text-gray-600">推荐：马力欧主题料理</p>
                <p className="text-xs text-gray-600">位置：任天堂世界</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-blue-600 mb-1">小黄人咖啡厅</h4>
                <p className="text-xs text-gray-600">推荐：香蕉主题甜品</p>
                <p className="text-xs text-gray-600">位置：小黄人乐园</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-blue-600 mb-1">比佛利山庄面包店</h4>
                <p className="text-xs text-gray-600">推荐：糕点和咖啡</p>
                <p className="text-xs text-gray-600">位置：好莱坞区域</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default USJGuideSlide;