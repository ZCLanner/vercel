import React from 'react';
import { motion } from 'framer-motion';

interface DailyPlanSlideProps {
  day: number;
}

const DailyPlanSlide: React.FC<DailyPlanSlideProps> = ({ day }) => {
  // Daily plan data for each day
  const plans = {
    1: {
      date: "8月2日",
      title: "杭州 → 大阪",
      accommodation: "大阪难波Y's CABIN酒店",
      transportation: [
        {
          type: "航班",
          details: "MF8707 Xiamen Airlines (Direct)",
          time: "14:35 - 18:15",
          price: "¥1,441.29"
        },
        {
          type: "机场到酒店",
          details: "Nankai Railway Rapi:t Express",
          time: "34分钟",
          price: "¥1,430"
        }
      ],
      schedule: [
        { time: "12:00-13:00", activity: "抵达杭州机场" },
        { time: "14:35-18:15", activity: "飞往大阪航班(MF8707)" },
        { time: "18:15-18:45", activity: "入境和行李提取" },
        { time: "18:45-19:15", activity: "购买南海电铁车票" },
        { time: "19:15-19:50", activity: "乘坐Rapi:t列车前往难波站" },
        { time: "19:50-20:15", activity: "酒店办理入住" },
        { time: "20:15-22:00", activity: "道顿堀夜游探索及晚餐" },
      ],
      meals: [
        { type: "午餐", suggestion: "航班前在机场用餐" },
        { type: "晚餐", suggestion: "道顿堀美食街 - 品尝章鱼烧和大阪烧" }
      ],
      tips: [
        "在机场兑换一些现金用于初期开销",
        "购买预付费IC卡(ICOCA)方便交通",
        "最后一班Rapi:t列车22:30发车，请勿错过",
        "到达前下载大阪地铁地图应用"
      ]
    },
    2: {
      date: "8月3日",
      title: "日本环球影城",
      accommodation: "大阪难波Y's CABIN酒店",
      transportation: [
        {
          type: "酒店到环球影城",
          details: "JR梦咲线从难波到环球影城站",
          time: "25分钟",
          price: "¥180"
        }
      ],
      schedule: [
        { time: "07:00-07:45", activity: "酒店早餐" },
        { time: "07:45-08:30", activity: "前往日本环球影城" },
        { time: "08:30-09:00", activity: "在乐园入口排队" },
        { time: "09:00-11:00", activity: "哈利波特 Wizarding World 区域" },
        { time: "11:00-11:30", activity: "WaterWorld 表演" },
        { time: "11:30-13:00", activity: "超级任天堂世界 区域" },
        { time: "13:00-14:00", activity: "Lunch at Kinopio's 咖啡厅" },
        { time: "14:00-16:00", activity: "纽约和好莱坞区域的景点" },
        { time: "16:00-17:30", activity: "Minion Park & Animation Celebration" },
        { time: "17:30-18:30", activity: "园内晚餐" },
        { time: "18:30-21:00", activity: "傍晚游乐设施和购物" },
        { time: "21:00-21:45", activity: "返回酒店" }
      ],
      meals: [
        { type: "早餐", suggestion: "酒店或附近便利店简单早餐" },
        { type: "午餐", suggestion: "Kinopio's 咖啡厅 in 超级任天堂世界" },
        { type: "晚餐", suggestion: "比佛利山庄面包店或芬尼根酒吧与烧烤" }
      ],
      tips: [
        "开园前30分钟到达乐园",
        "下载USJ官方应用查看等待时间",
        "最早或最晚参观哈利波特区域排队时间短",
        "携带手机充电宝",
        "通过应用查看表演时间并据此规划行程"
      ]
    },
    3: {
      date: "8月4日",
      title: "大阪 → 冲绳",
      accommodation: "国际通附近酒店",
      transportation: [
        {
          type: "酒店到机场",
          details: "南海电铁到关西机场",
          time: "45分钟",
          price: "¥1,430"
        },
        {
          type: "航班",
          details: "MM215 Peach Aviation",
          time: "14:50 - 17:05",
          price: "¥686.38"
        },
        {
          type: "机场到酒店",
          details: "单轨电车到县厅前站",
          time: "15分钟车程 + 5分钟步行",
          price: "¥330"
        }
      ],
      schedule: [
        { time: "08:00-09:00", activity: "酒店早餐" },
        { time: "09:00-10:00", activity: "退房和大阪最后购物" },
        { time: "10:00-11:00", activity: "前往关西机场" },
        { time: "11:00-12:30", activity: "办理登机手续和安检" },
        { time: "12:30-14:00", activity: "机场午餐" },
        { time: "14:50-17:05", activity: "飞往冲绳（那霸）" },
        { time: "17:05-17:30", activity: "行李领取" },
        { time: "17:30-18:00", activity: "乘坐单轨电车前往酒店" },
        { time: "18:00-18:30", activity: "酒店办理入住" },
        { time: "18:30-21:00", activity: "探索国际通和晚餐" }
      ],
      meals: [
        { type: "早餐", suggestion: "酒店或附近咖啡厅" },
        { type: "午餐", suggestion: "关西机场美食广场" },
        { type: "晚餐", suggestion: "国际通上的冲绳料理餐厅" }
      ],
      tips: [
        "穿着舒适的衣物乘坐飞机",
        "离开前购买大阪纪念品",
        "如有需要，在机场购买冲绳旅游指南",
        "为冲绳较温暖的天气做准备",
        "考虑购买单轨电车1日或2日通票"
      ]
    },
    4: {
      date: "8月5日",
      title: "冲绳北部包车一日游",
      accommodation: "国际通附近酒店",
      transportation: [
        {
          type: "携程包车服务",
          details: "专业中文司机导游服务",
          time: "08:30 - 18:30（10小时）",
          price: "¥2,400"
        }
      ],
      schedule: [
        { time: "07:30-08:00", activity: "酒店早餐" },
        { time: "08:00-08:30", activity: "前往县前厅RYUBO百货集合点" },
        { time: "08:30", activity: "县前厅RYUBO百货集合发车" },
        { time: "08:30-10:05", activity: "前往万座毛（1小时35分钟车程）" },
        { time: "10:05-10:35", activity: "万座毛游览（30分钟）- 象鼻岩观景" },
        { time: "10:35-11:25", activity: "前往古宇利岛（50分钟车程）" },
        { time: "11:25-11:55", activity: "古宇利岛游览（30分钟）- 古宇利大桥美景" },
        { time: "11:55-12:55", activity: "前往美丽海水族馆（1小时车程）" },
        { time: "12:55-15:25", activity: "美丽海水族馆深度游览（2小时30分钟）" },
        { time: "15:25-16:45", activity: "前往美国村（1小时20分钟车程）" },
        { time: "16:45-17:45", activity: "美国村购物观光（1小时）" },
        { time: "17:45-18:30", activity: "返回县前厅（45分钟车程）" }
      ],
      meals: [
        { type: "早餐", suggestion: "酒店早餐，提前享用以准时集合" },
        { type: "午餐", suggestion: "水族馆内海洋蓝餐厅 - 边用餐边观赏鲸鲨" },
        { type: "晚餐", suggestion: "国际通美食街 - 回程后品尝冲绳料理" }
      ],
      tips: [
        "提前10分钟到达县前厅RYUBO百货集合",
        "携带相机记录万座毛象鼻岩奇景",
        "古宇利大桥是绝佳拍照点，准备充足手机电量",
        "水族馆游览时间充足，可深度体验黑潮水槽",
        "美国村时间有限，建议提前规划购物清单",
        "全程有专业中文导游，可随时咨询景点信息"
      ]
    },
    5: {
      date: "8月6日",
      title: "冲绳南部包车一日游",
      accommodation: "国际通附近酒店",
      transportation: [
        {
          type: "携程包车服务",
          details: "专业中文司机导游服务",
          time: "09:20 - 18:30（约9小时）",
          price: "¥2,400"
        }
      ],
      schedule: [
        { time: "08:00-09:00", activity: "酒店早餐" },
        { time: "09:00-09:20", activity: "前往县前厅RYUBO百货集合点" },
        { time: "09:20", activity: "县前厅RYUBO百货集合发车" },
        { time: "09:20-10:00", activity: "前往知念岬公园（40分钟车程）" },
        { time: "10:00-10:30", activity: "知念岬公园游览（30分钟）- 冲绳南部最美观景台" },
        { time: "10:30-11:00", activity: "前往冲绳世界文化王国（30分钟车程）" },
        { time: "11:00-13:00", activity: "冲绳世界文化王国游览（2小时）- 琉球文化体验" },
        { time: "13:00-14:00", activity: "海鲜市场午餐（1小时）" },
        { time: "14:00-14:30", activity: "前往奥特莱斯购物中心（30分钟车程）" },
        { time: "14:30-16:10", activity: "奥特莱斯购物（1小时40分钟）" },
        { time: "16:10-16:40", activity: "前往濑长岛（30分钟车程）" },
        { time: "16:40-17:40", activity: "濑长岛游览（1小时）- 冲绳版小希腊" },
        { time: "17:40-18:30", activity: "返回县前厅（50分钟车程）" }
      ],
      meals: [
        { type: "早餐", suggestion: "酒店早餐，提前享用以准时集合" },
        { type: "午餐", suggestion: "海鲜市场新鲜海产品" },
        { type: "晚餐", suggestion: "国际通冲绳料理 - 回程后品尝当地美食" }
      ],
      tips: [
        "提前10分钟到达县前厅RYUBO百货集合",
        "知念岬公园可远眺久高岛神圣景色",
        "冲绳世界文化王国体验传统琉球文化和毒蛇博物馆",
        "奥特莱斯购物时间有限，建议提前规划购物清单",
        "濑长岛白色建筑群是拍照圣地，建议傍晚游览",
        "全程有专业中文导游，可随时咨询景点信息"
      ]
    },
    6: {
      date: "8月7日",
      title: "渡嘉敷岛一日游",
      accommodation: "国际通附近酒店",
      transportation: [
        {
          type: "Hotel to 轮渡码头",
          details: "出租车前往泊港",
          time: "10分钟",
          price: "¥1,000"
        },
        {
          type: "轮渡",
          details: "高速渡轮（海洋航线）",
          time: "单程35分钟",
          price: "¥3,310 round-trip"
        },
        {
          type: "岛内交通",
          details: "班车前往阿波连海滩",
          time: "单程15分钟",
          price: "¥500往返"
        }
      ],
      schedule: [
        { time: "07:00-08:00", activity: "酒店早餐" },
        { time: "08:00-08:30", activity: "前往泊港" },
        { time: "08:30-09:00", activity: "在渡轮码头办理登船手续" },
        { time: "09:00-09:35", activity: "乘渡轮前往渡嘉敷岛" },
        { time: "09:35-10:00", activity: "乘班车前往阿波连海滩" },
        { time: "10:00-12:00", activity: "海滩休闲和浮潜" },
        { time: "12:00-13:00", activity: "在海滩餐厅午餐" },
        { time: "13:00-15:00", activity: "更多海滩时间或玻璃底船游览" },
        { time: "15:00-15:30", activity: "准备离开并乘班车前往港口" },
        { time: "16:00-16:35", activity: "乘渡轮返回那霸" },
        { time: "16:35-17:00", activity: "返回酒店" },
        { time: "17:30-19:30", activity: "Dinner at 国际通" }
      ],
      meals: [
        { type: "早餐", suggestion: "酒店快速早餐" },
        { type: "午餐", suggestion: "海滩餐厅或自带午餐" },
        { type: "晚餐", suggestion: "国际通上的居酒屋（日式酒馆）" }
      ],
      tips: [
        "带上泳装、毛巾、防晒霜和帽子",
        "考虑在岛上租用浮潜装备",
        "如容易晕船，请服用晕船药",
        "岛上食物选择有限 - 考虑携带零食",
        "不要错过最后一班返回那霸的渡轮（16:00）",
        "带现金，因为岛上信用卡使用有限"
      ]
    },
    7: {
      date: "8月8日",
      title: "冲绳 → 上海",
      accommodation: "南京路附近酒店",
      transportation: [
        {
          type: "酒店到机场",
          details: "出租车或单轨电车",
          time: "15-20分钟",
          price: "¥330（单轨电车）或¥1,500（出租车）"
        },
        {
          type: "航班",
          details: "9C6978 春秋航空",
          time: "15:00 - 16:25",
          price: "¥1,108.02"
        },
        {
          type: "机场到酒店",
          details: "磁悬浮列车+地铁或出租车",
          time: "45分钟到1小时",
          price: "¥50-80（公共交通）或¥200（出租车）"
        }
      ],
      schedule: [
        { time: "08:00-09:00", activity: "酒店早餐" },
        { time: "09:00-10:00", activity: "退房和最后的冲绳纪念品购物" },
        { time: "10:00-10:30", activity: "前往那霸机场" },
        { time: "10:30-12:00", activity: "办理登机手续和安检" },
        { time: "12:00-13:30", activity: "机场午餐" },
        { time: "15:00-16:25", activity: "飞往上海" },
        { time: "16:25-17:00", activity: "入境和行李提取" },
        { time: "17:00-18:00", activity: "前往酒店" },
        { time: "18:00-18:30", activity: "酒店办理入住" },
        { time: "18:30-19:30", activity: "酒店附近晚餐" },
        { time: "19:30-21:30", activity: "傍晚沿外滩漫步" }
      ],
      meals: [
        { type: "早餐", suggestion: "酒店早餐" },
        { type: "午餐", suggestion: "那霸机场美食广场" },
        { type: "晚餐", suggestion: "南京路附近的当地上海美食" }
      ],
      tips: [
        "国际航班前3小时到达机场",
        "准备人民币用于上海的开销",
        "将护照和中国签证放在方便取用的地方",
        "抵达前下载上海地铁应用",
        "夜晚城市灯光下的外滩格外壮观",
        "考虑提前预订黄浦江游船，欣赏江景"
      ]
    },
    8: {
      date: "8月9日",
      title: "上海 → 杭州",
      accommodation: "回到温馨的家",
      transportation: [
        {
          type: "Hotel to 火车站",
          details: "地铁或出租车",
          time: "30分钟",
          price: "¥5-10（地铁）或¥30-40（出租车）"
        },
        {
          type: "高铁",
          details: "上海到杭州",
          time: "45分钟-1小时",
          price: "¥73-93（二等座）"
        }
      ],
      schedule: [
        { time: "08:00-09:00", activity: "酒店早餐" },
        { time: "09:00-10:00", activity: "退房并准备离开" },
        { time: "10:00-12:00", activity: "在南京路购物" },
        { time: "12:00-13:00", activity: "在购物区附近午餐" },
        { time: "13:00-13:30", activity: "前往火车站" },
        { time: "14:00-15:00", activity: "乘高铁前往杭州" },
        { time: "15:00-15:30", activity: "抵达杭州" },
        { time: "15:30-16:00", activity: "返回家中" }
      ],
      meals: [
        { type: "早餐", suggestion: "酒店早餐" },
        { type: "午餐", suggestion: "上海当地餐厅或美食广场" }
      ],
      tips: [
        "提前预订火车票以获得更好的座位",
        "预留足够时间应对前往火车站的交通",
        "将贵重纪念品放在随身行李中",
        "在火车发车前45分钟到达火车站",
        "仔细查看火车站台信息"
      ]
    }
  };

  // Get the data for the selected day
  const dayPlan = plans[day as keyof typeof plans];

  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto relative bg-white/90 backdrop-blur-md rounded-xl">
      {/* Title */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-800">第{day}天: {dayPlan.title}</h2>
            <div className="w-20 h-1 bg-blue-500 mt-2"></div>
          </div>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold">
            {dayPlan.date}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - 交通 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                交通方式
              </span>
            </h3>
            <div className="space-y-4">
              {dayPlan.transportation.map((transport, index) => (
                <div key={index} className="border-l-4 border-blue-300 pl-3 py-1">
                  <p className="font-bold text-blue-600">{transport.type}</p>
                  <p className="text-sm text-gray-700">{transport.details}</p>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>{transport.time}</span>
                    <span className="font-medium">{transport.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-5 shadow-sm border border-blue-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                住宿安排
              </span>
            </h3>
            <div className="p-3 bg-white rounded-md">
              <p className="font-bold text-blue-600">{dayPlan.accommodation}</p>
              {dayPlan.accommodation !== "回到温馨的家" && (
                <div className="text-sm text-gray-600 mt-1">
                  <p>入住：15:00后</p>
                  <p>退房：11:00前</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-5 shadow-sm border border-yellow-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-3">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                贴心提示
              </span>
            </h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {dayPlan.tips.map((tip, index) => (
                <li key={index} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Center column - Detailed 时间安排 */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 h-full">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                每日行程
              </span>
            </h3>
            
            <div className="relative pl-8 space-y-0">
              {/* Timeline line */}
              <div className="absolute top-0 left-3 bottom-0 w-0.5 bg-blue-200"></div>
              
              {dayPlan.schedule.map((item, index) => (
                <motion.div 
                  key={index}
                  className="mb-5 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-29px] top-1">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-bold text-blue-600">{item.time}</p>
                    <p className="text-gray-700">{item.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-5 border-t border-gray-200">
              <h3 className="text-lg font-bold text-blue-700 mb-3">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  用餐安排
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {dayPlan.meals.map((meal, index) => (
                  <div key={index} className="bg-green-50 p-3 rounded-md">
                    <p className="font-bold text-green-700">{meal.type}</p>
                    <p className="text-sm text-gray-700">{meal.suggestion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DailyPlanSlide;