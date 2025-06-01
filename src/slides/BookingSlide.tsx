import React from 'react';
import { motion } from 'framer-motion';

const BookingSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto relative bg-white/90 backdrop-blur-md rounded-xl">
      {/* Title */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-800">机票和酒店预订指南</h2>
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
            <h3 className="text-xl font-bold text-blue-700 mb-3">机票预订策略</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-600">推荐航班</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">杭州到大阪：</span> MF8707 (Xiamen Air)</p>
                <p className="text-sm text-gray-700"><span className="font-medium">起飞/到达：</span> 14:35-18:15</p>
                <p className="text-sm text-gray-700"><span className="font-medium">价格：</span> ¥1,441.29</p>
                <p className="text-sm text-gray-700"><span className="font-medium">特色：</span> 直飞航班，到达时间完美</p>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-600">日本国内航班</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">大阪到冲绳：</span> MM215</p>
                <p className="text-sm text-gray-700"><span className="font-medium">起飞/到达：</span> 14:50-17:05</p>
                <p className="text-sm text-gray-700"><span className="font-medium">价格：</span> ¥686.38</p>
              </div>

              <div>
                <h4 className="font-bold text-blue-600">返程航班</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">冲绳到上海：</span> 9C6978</p>
                <p className="text-sm text-gray-700"><span className="font-medium">起飞/到达：</span> 15:00-16:25</p>
                <p className="text-sm text-gray-700"><span className="font-medium">价格：</span> ¥1,108.02</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 shadow-sm border border-blue-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">最佳预订时间</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li className="text-gray-700"><span className="font-bold">航班：</span> 提前3-4个月预订获得最优价格</li>
              <li className="text-gray-700"><span className="font-bold">酒店：</span> 提前2-3个月预订</li>
              <li className="text-gray-700"><span className="font-bold">环球影城门票：</span> 提前2个月预订</li>
              <li className="text-gray-700"><span className="font-bold">携程包车：</span> 提前1-2个月预订确保车辆和司机</li>

              <li className="text-gray-700"><span className="font-bold">渡嘉敷轮渡：</span> 提前2周预订</li>
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
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">酒店推荐</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-600">大阪 - 道顿堀地区</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">推荐：</span> Y's CABIN Osaka Namba</p>
                <p className="text-sm text-gray-700"><span className="font-medium">价格：</span> ¥422.55/night</p>
                <p className="text-sm text-gray-700"><span className="font-medium">优势：</span> 位置优越，靠近地铁，隔音良好</p>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-600">冲绳 - 国际通地区</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">价格区间：</span> ¥600-800/night</p>
                <p className="text-sm text-gray-700"><span className="font-medium">优势：</span> 中心位置，靠近餐厅和商店</p>
              </div>

              <div>
                <h4 className="font-bold text-blue-600">上海 - 南京路</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">价格区间：</span> ¥600/night</p>
                <p className="text-sm text-gray-700"><span className="font-medium">优势：</span> 步行可达外滩，交通便利</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">携程包车服务</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-600">冲绳北部一日游包车</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">价格：</span> ¥2,400/天</p>
                <p className="text-sm text-gray-700"><span className="font-medium">时间：</span> 08:30-18:30（10小时）</p>
                <p className="text-sm text-gray-700"><span className="font-medium">路线：</span> 万座毛 → 古宇利岛 → 美丽海水族馆 → 美国村</p>
              </div>

              <div>
                <h4 className="font-bold text-blue-600">冲绳南部一日游包车</h4>
                <p className="text-sm text-gray-700"><span className="font-medium">价格：</span> ¥2,400/天</p>
                <p className="text-sm text-gray-700"><span className="font-medium">时间：</span> 09:20-18:30（约9小时）</p>
                <p className="text-sm text-gray-700"><span className="font-medium">路线：</span> 知念岬公园 → 冲绳世界文化王国 → 海鲜市场 → 奥特莱斯 → 濑长岛</p>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-600">服务特色</h4>
                <p className="text-sm text-gray-700">• 专业中文司机导游服务</p>
                <p className="text-sm text-gray-700">• 县前厅RYUBO百货固定集合点</p>
                <p className="text-sm text-gray-700">• 北部南部经典景点全覆盖</p>
                <p className="text-sm text-gray-700">• 合理时间安排，无需赶行程</p>
              </div>

              <div>
                <h4 className="font-bold text-blue-600">预订建议</h4>
                <p className="text-sm text-gray-700">• 提前1-2个月通过携程APP预订</p>
                <p className="text-sm text-gray-700">• 确认集合时间和地点</p>
                <p className="text-sm text-gray-700">• 根据行程选择北部或南部线路</p>
                <p className="text-sm text-gray-700">• 与司机确认景点游览时间</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5 shadow-sm border border-yellow-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-3">预订技巧</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>使用比价网站（Skyscanner、Kayak）预订机票</li>
              <li>尽可能预订可免费取消的酒店</li>
              <li>为您的首选旅行日期设置价格提醒</li>
              <li>考虑包含机票+酒店的套餐</li>
              <li>在多个平台查看酒店评价</li>
              <li>寻找机场交通便利的酒店</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-5 shadow-sm border border-green-100">
            <h3 className="text-xl font-bold text-green-700 mb-3">付款提示</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="font-bold">信用卡：</span> 使用无境外交易手续费的信用卡</li>
              <li><span className="font-bold">汇率：</span> 监控汇率寻找最佳预订时机</li>
              <li><span className="font-bold">旅行保险：</span> 预订机票时购买</li>
              <li><span className="font-bold">预订确认：</span> 下载所有确认单供离线查看</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingSlide;