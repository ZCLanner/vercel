import React from 'react';
import { motion } from 'framer-motion';

const VisaSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto relative bg-white/90 backdrop-blur-md rounded-xl">
      {/* Title */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-800">日本签证申请</h2>
        <div className="w-20 h-1 bg-blue-500 mt-2"></div>
      </motion.div>

      {/* Visit Japan Web Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">VJW</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-700 mb-3">Visit Japan Web - 入境数字化服务</h3>
              <p className="text-gray-700 mb-4">
                日本政府官方推出的数字化入境服务，可提前完成入境审查、海关申报等手续，大幅缩短入境等待时间。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-blue-600 mb-2">📱 在线办理</h4>
                  <p className="text-sm text-gray-700">入境前14天内，通过Visit Japan Web网站或APP完成注册</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-blue-600 mb-2">⚡ 快速通关</h4>
                  <p className="text-sm text-gray-700">使用二维码快速通过入境审查和海关检查</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-blue-600 mb-2">📋 免填表格</h4>
                  <p className="text-sm text-gray-700">无需在飞机上填写纸质入境卡和海关申报表</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>官方网站：</strong> <span className="font-mono">www.vjw.digital.go.jp</span><br/>
                  <strong>建议：</strong> 出发前48小时完成注册，避免入境排队
                </p>
              </div>
            </div>
          </div>
        </div>
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
            <h3 className="text-xl font-bold text-blue-700 mb-3">2025新签证政策</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <span className="font-medium text-blue-600">十年多次入境签证</span>
                <p className="text-sm text-gray-700">为具有良好出行记录的中国公民提供的新选择</p>
              </li>
              <li>
                <span className="font-medium text-blue-600">电子签证系统</span>
                <p className="text-sm text-gray-700">简化的在线申请流程，审批更快速</p>
              </li>
              <li>
                <span className="font-medium text-blue-600">办理时间</span>
                <p className="text-sm text-gray-700">标准申请5个工作日，加急服务3天</p>
              </li>
              <li>
                <span className="font-medium text-blue-600">签证费用</span>
                <p className="text-sm text-gray-700">单次入境：¥3,000，多次入境：¥6,000</p>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 shadow-sm border border-blue-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">申请材料要求</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li className="text-gray-700">有效护照（至少6个月有效期）</li>
              <li className="text-gray-700">完整填写的签证申请表</li>
              <li className="text-gray-700">近期护照照片（4.5cm × 3.5cm）</li>
              <li className="text-gray-700">行程安排及机票/酒店预订单</li>
              <li className="text-gray-700">在职证明</li>
              <li className="text-gray-700">银行流水（近3个月）</li>
              <li className="text-gray-700">个人所得税纳税证明</li>
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
            <h3 className="text-xl font-bold text-blue-700 mb-3">旅游签证类型</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-600">单次入境旅游签证</h4>
                <p className="text-sm text-gray-700">有效期3个月，可停留15天或30天</p>
                <p className="text-sm text-gray-700">适合首次赴日旅游者</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-600">多次入境旅游签证</h4>
                <p className="text-sm text-gray-700">有效期3-5年，每次可停留30天</p>
                <p className="text-sm text-gray-700">适合经常赴日旅游者</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-600">十年多次入境签证（新）</h4>
                <p className="text-sm text-gray-700">有效期10年，每次可停留30天</p>
                <p className="text-sm text-gray-700">需要具有良好的赴日旅游记录</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5 shadow-sm border border-yellow-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-3">重要提示</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>至少提前1个月申请签证</li>
              <li>材料必须齐全 - 缺少材料将导致延误</li>
              <li>建议通过日本签证申请中心办理，处理更快</li>
              <li>提交前务必复印所有材料</li>
              <li>护照至少要有两页空白页</li>
              <li>入境时请准备好酒店和机票预订确认单</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-5 shadow-sm border border-green-100">
            <h3 className="text-xl font-bold text-green-700 mb-3">建议时间安排</h3>
            <ul className="space-y-1 text-sm">
              <li><span className="font-bold">出行前3个月：</span>准备所需材料</li>
              <li><span className="font-bold">出行前2个月：</span>提交签证申请</li>
              <li><span className="font-bold">出行前1个月：</span>确认签证状态</li>
              <li><span className="font-bold">出行前2周：</span>复印签证和相关文件</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisaSlide;