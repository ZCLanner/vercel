import React from 'react';
import { motion } from 'framer-motion';

interface AttractionSlideProps {
  attraction: 'aquarium' | 'american' | 'tokashiki' | 'okinawa_world' | 'dotonbori' | 'kokusai' | 'bund' | 'manzamo' | 'kouri' | 'chinen_cape' | 'senagajima' | 'seafood_market';
}

const AttractionSlide: React.FC<AttractionSlideProps> = ({ attraction }) => {
  // Attraction data based on the selected attraction
  const attractions = {
    aquarium: {
      title: '冲绳美之海水族馆',
      description: '世界上最大的水族馆之一，特色是巨大的黑潮水槽，内有鲸鲨和蝠鲼。水族馆展示了冲绳丰富的海洋生物，包括珊瑚礁和深海生物。',
      highlights: [
        '黑潮之海水槽：巨大的820万升水槽，饲养鲸鲨',
        '珊瑚礁水槽：美丽的活珊瑚礁生态系统',
        '海豚表演：每日多场演出',
        '深海展览：稀有深海生物展示',
        '海景咖啡厅：可观赏水槽的用餐体验'
      ],
      info: {
        位置: '本部町，冲绳北部',
        开放时间: '上午8:30 - 下午6:30（最后入场下午5:30）',
        门票: '成人: ¥2,200, 儿童: ¥730',
        交通时间: '90 分钟从 Naha 开车',
        建议游览时间: '3-4 开放时间'
      },
      imagePath: '/imgs/okinawa_aquarium.jpg',
      tips: [
        '提前到达以避免主水槽人群拥挤',
        '查看海豚和海牛的喂食时间表',
        '黑潮水槽的二楼提供最佳观赏视角',
        '如果可能的话，在工作日参观人会更少',
        '与附近景点的联票可以节省费用'
      ]
    },
    american: {
      title: '美国村',
      description: '一个充满活力的娱乐区，提供美式主题购物、餐饮和娱乐设施。特色包括摩天轮、餐厅、时尚精品店和娱乐场所，融合了独特的美式-冲绳风情。',
      highlights: [
        '美浜摩天轮：东海全景观赏',
        '海滨木板路：完美的日落漫步去处',
        '车站岛：购物和餐饮综合区',
        '现场音乐场所：定期演出',
        '日落海滩：紧邻村庄的小型海滩区'
      ],
      info: {
        位置: '北谷町，冲绳中部',
        开放时间: '因店铺而异（通常为上午10:00 - 下午10:00）',
        门票: '免费（各景点单独收费）',
        交通时间: '30 分钟从 Naha 开车',
        建议游览时间: '3-5小时'
      },
      imagePath: '/imgs/american_village.jpg',
      tips: [
        '傍晚参观可体验最佳灯光氛围',
        '日落时分的摩天轮乘坐特别美丽',
        '许多商店为游客提供免税购物',
        '购买纪念品的绝佳地点',
        '提供多个适合拍照的网红打卡点'
      ]
    },
    tokashiki: {
      title: '渡嘉敷岛阿波连海滩',
      description: '渡嘉敷岛上一处原始的白沙滩，拥有清澈的绿松石色海水。是慶良間诸岛的一部分，以日本最美丽的海滩和绝佳的浮潜潜水机会而闻名。',
      highlights: [
        '原始白沙滩：持续被评为日本最佳海滩之一',
        '浮潜天堂：丰富的珊瑚礁和热带鱼',
        '海龟观赏：夏季经常可见',
        '玻璃底船游：不用下水也能观赏海洋生物',
        '岛上风景步道：拥有全景视野的徒步小径'
      ],
      info: {
        位置: '渡嘉敷岛, 慶良間诸岛',
        开放时间: '海滩全天开放（服务时间上午9:00 - 下午5:00）',
        门票: '免费 (渡轮费用：¥3,310往返)',
        交通时间: '从那霸乘高速渡轮35分钟',
        建议游览时间: '全天行程'
      },
      imagePath: '/imgs/tokashiki_beach.jpg',
      tips: [
        '旺季期间提前1-2周预订渡轮票',
        '携带自己的浮潜装备或在岛上租赁',
        '食物选择有限 - 考虑携带零食',
        '岛上的班车与渡轮到达时间协调',
        '仔细查看返程渡轮时间 - 不要错过最后一班船！'
      ]
    },
    okinawa_world: {
      title: '冲绳世界文化王国',
      description: '集琉球文化体验、玉泉洞观光、毒蛇博物馆于一体的综合主题公园。这里可以深度体验传统冲绳文化，包括琉球王国村、工艺品制作体验和壮观的地下钟乳石洞穴。',
      highlights: [
        '琉球王国村：重现古代琉球王国的传统建筑和生活',
        '玉泉洞：30万年历史的石灰岩洞穴，钟乳石奇观',
        '毒蛇博物馆：冲绳特有的波布蛇（Habu）展示',
        '传统工艺体验：陶艺、织布、玻璃工艺制作',
        '艾萨舞蹈表演：每日多场传统冲绳舞蹈演出'
      ],
      info: {
        位置: '南城市，冲绳南部',
        开放时间: '上午9:00 - 下午6:00（最晚入场下午5:30）',
        门票: '成人: ¥2,200, 儿童: ¥1,100',
        交通时间: '从那霸市区驾车约30分钟',
        建议游览时间: '2-3小时'
      },
      imagePath: '/imgs/okinawa_world_culture.jpeg',
      tips: [
        '玉泉洞内恒温21°C，建议携带外套',
        '参与工艺体验需额外付费，但值得尝试',
        '艾萨舞蹈表演时间：10:30、12:30、14:30、16:00',
        '毒蛇博物馆适合儿童参观，寓教于乐',
        '园区较大，建议穿舒适的步行鞋'
      ]
    },
    chinen_cape: {
      title: '知念岬公园',
      description: '位于冲绳南部的绝美观景台，可以远眺神圣的久高岛和太平洋壮丽景色。这里是观赏日出的最佳地点之一，也是冲绳南部最受欢迎的拍照胜地。',
      highlights: [
        '久高岛远眺：观赏琉球王国的神圣岛屿',
        '太平洋全景：180度无障碍海景观赏',
        '日出胜地：冲绳最佳日出观赏点之一',
        '步道散步：沿海岸线的优美散步道',
        '拍照圣地：网红打卡的绝美景观台'
      ],
      info: {
        位置: '南城市知念，冲绳南部',
        开放时间: '全天开放',
        门票: '免费',
        交通时间: '从那霸市区驾车约40分钟',
        建议游览时间: '30-45分钟'
      },
      imagePath: '/imgs/chinen_cape_okinawa.jpg',
      tips: [
        '早晨6-7点是观赏日出的最佳时间',
        '海风较大，建议穿着保暖衣物',
        '设有停车场，但位置有限',
        '带相机记录绝美的海景和日出',
        '可与附近的斋场御岳等景点组合游览'
      ]
    },
    senagajima: {
      title: '濑长岛',
      description: '被誉为冲绳版"小希腊"的美丽小岛，以其白色建筑群、温泉设施和绝美海景而闻名。这里可以泡温泉、品尝美食，同时欣赏飞机起降的独特景观。',
      highlights: [
        '白色建筑群：地中海风情的纯白色商店和餐厅',
        '濑长岛温泉：天然海水温泉，可边泡温泉边看海',
        '飞机观赏：近距离观看那霸机场飞机起降',
        '海景餐厅：多家海景餐厅和咖啡厅',
        '夕阳美景：傍晚时分的绝美日落景色'
      ],
      info: {
        位置: '丰见城市濑长，距那霸机场5分钟',
        开放时间: '全天开放（各店铺营业时间不同）',
        门票: '免费（温泉和餐厅单独收费）',
        交通时间: '从那霸市区驾车约20分钟',
        建议游览时间: '1-2小时'
      },
      imagePath: '/imgs/senagajima_okinawa.jpg',
      tips: [
        '温泉设施需额外付费（约¥1,300）',
        '傍晚时分最适合拍照和观赏夕阳',
        '距离机场很近，适合行程最后一天游览',
        '白色建筑在蓝天下特别美丽',
        '有免费停车场，交通便利'
      ]
    },
    dotonbori: {
      title: '大阪道顿堀',
      description: '大阪充满活力的娱乐和美食区，以其炫目的霓虹灯、动态广告牌和无数餐厅而闻名。运河边的步行道上排列着供应大阪著名街头美食和美味佳肴的餐厅。',
      highlights: [
        '格力高跑步人标志：标志性广告牌和拍照地点',
        '美食天堂：大阪街头美食文化中心',
        '惠比须桥：俯瞰运河的中心集合点',
        '法善寺横丁：气氛浓厚的狭窄小巷，有传统商店',
        '傍晚彩灯：天黑后壮观的霓虹灯展示'
      ],
      info: {
        位置: '中央区，大阪中心',
        开放时间: '因店铺而异（通常上午11:00至深夜）',
        门票: '免费',
        交通时间: '从难波站步行5分钟',
        建议游览时间: '3-4小时（晚上最佳）'
      },
      imagePath: '/imgs/dotonbori.jpg',
      tips: [
        '必尝美食：章鱼烧、大阪烧和串炸',
        '道顿堀在天黑后霓虹灯效果最佳',
        '乘坐运河游船获得不同视角',
        '工作日参观可避开极度拥挤的人群',
        '寻找3D广告牌，如巨大的移动螃蟹'
      ]
    },
    kokusai: {
      title: '国际通',
      description: '冲绳主要商业街，贯穿那霸市中心1.6公里，提供购物、餐饮和娱乐活动。被称为"奇迹之里"，拥有纪念品商店、当地工艺品、餐厅和文化体验。',
      highlights: [
        '传统工艺品：销售冲绳陶器、玻璃器皿和纺织品的商店',
        '美食多样性：从当地冲绳料理到国际选择',
        '牧志公共市场：附近的传统食品市场',
        '街头表演：偶尔有传统冲绳表演',
        '购物拱廊：从主干道分支出的有顶购物街'
      ],
      info: {
        位置: '那霸市，冲绳南部',
        开放时间: '大多数商店上午10:00 - 晚上8:00',
        门票: '免费',
        交通时间: '可乘坐单轨电车或从那霸市中心步行',
        建议游览时间: '3-4小时'
      },
      imagePath: '/imgs/kokusai_street.jpg',
      tips: [
        '参观专卖店购买正宗冲绳纪念品',
        '尝试冲绳特色美食，如塔可饭和蓝印冰淇淋',
        '探索小巷找到更多当地的、游客较少的商店',
        '有顶市场是雨天的好去处',
        '傍晚带来更热闹的氛围，餐厅和酒吧开始营业'
      ]
    },
    bund: {
      title: '上海外滩',
      description: '上海市中心著名的滨水区，通过令人印象深刻的欧式建筑展示城市的殖民历史，与黄浦江对岸未来主义的浦东天际线形成鲜明对比。',
      highlights: [
        '历史建筑：52栋多样建筑风格的建筑',
        '黄浦江景观：迷人的浦东现代天际线景色',
        '外滩步行道：沿着水边的流行步行道',
        '夜晚灯光：历史建筑和浦东均灯火通明',
        '高端购物和用餐：高级零售和餐厅选择'
      ],
      info: {
        位置: '黄浦区，上海',
        开放时间: '全天开放（步行道）',
        门票: '免费',
        交通时间: '从南京路步行可达',
        建议游览时间: '2-3小时（日落/晚上最佳）'
      },
      imagePath: '/imgs/shanghai_bund.jpg',
      tips: [
        '日落时参观，可同时欣赏白天和夜景',
        '乘坐江河游船欣赏两岸全景',
        '清晨参观可避开游客人群',
        '外滩连接南京路，可延伸观光',
        '傍晚灯光亮起时是拍照的最佳时机'
      ]
    },
    manzamo: {
      title: '万座毛',
      description: '位于冲绳西海岸的著名景点，以其独特的象鼻岩地形和绝美海景而闻名。万座毛意为"能容纳万人坐下的草原"，是欣赏冲绳自然美景的绝佳观景台。',
      highlights: [
        '象鼻岩：独特的珊瑚礁岩石地形，形似大象鼻子',
        '绝美海景：东海壮丽海岸线全景观赏',
        '夕阳美景：傍晚时分的金色夕阳倒影',
        '草原平台：宽阔的观景草坪区域',
        '拍照圣地：冲绳最具代表性的风景拍摄点'
      ],
      info: {
        位置: '恩纳村，冲绳西海岸',
        开放时间: '全天开放',
        门票: '免费',
        交通时间: '从那霸市区驾车约1小时',
        建议游览时间: '30-45分钟'
      },
      imagePath: '/imgs/manzamo_okinawa.jpg',
      tips: [
        '最佳观赏时间为日落前1小时',
        '海风较大，建议穿着风衣或外套',
        '注意安全，不要过于靠近悬崖边缘',
        '早晨时分游客较少，拍照效果更佳',
        '可与附近的海中道路等景点组合游览'
      ]
    },
    kouri: {
      title: '古宇利岛',
      description: '被誉为"恋岛"的美丽离岛，通过壮观的古宇利大桥与冲绳本岛相连。岛上拥有透明度极高的蔚蓝海水和洁白沙滩，是冲绳北部最浪漫的旅游胜地。',
      highlights: [
        '古宇利大桥：全长1960米的跨海大桥，驾车体验绝佳',
        '心形岩石：海滩上天然形成的心形珊瑚礁岩石',
        '透明海水：能见度极高的翡翠绿海水',
        '古宇利海滩：岛上最美的天然海滩',
        '恋人圣地：冲绳著名的浪漫约会胜地'
      ],
      info: {
        位置: '今归仁村，冲绳北部',
        开放时间: '全天开放（大桥24小时通行）',
        门票: '免费（大桥通行免费）',
        交通时间: '从那霸市区驾车约1小时30分钟',
        建议游览时间: '30-60分钟'
      },
      imagePath: '/imgs/kouri_island_bridge.jpg',
      tips: [
        '古宇利大桥观景台是最佳拍照点',
        '海滩适合游泳，可携带泳装',
        '岛上有贝壳博物馆值得参观',
        '午后阳光最佳，海水呈现翡翠绿色',
        '与万座毛可安排在同一天游览'
      ]
    },
    seafood_market: {
      title: '冲绳第一牧志公设市场',
      description: '冲绳最著名的传统海鲜市场，被誉为"冲绳的厨房"。这里汇集了新鲜的当地海产品，游客可以购买海鲜并在二楼的食堂现场加工享用，体验最正宗的冲绳海鲜文化。',
      highlights: [
        '新鲜海鲜：各种冲绳特色海产，包括龙虾、海胆、海葡萄',
        '现买现做：一楼购买海鲜，二楼加工享用的独特体验',
        '冲绳特产：海葡萄、紫薯、黑糖等当地特色食材',
        '传统文化：体验冲绳传统市场的热闹氛围',
        '经济实惠：相比餐厅价格更加亲民的海鲜享用方式'
      ],
      info: {
        位置: '那霸市松尾，国际通附近',
        开放时间: '上午8:00 - 下午9:00（周日休息）',
        门票: '免费（食物单独付费）',
        交通时间: '从国际通步行5分钟',
        建议游览时间: '1-2小时'
      },
      imagePath: '/imgs/kokusai_street.jpg',
      tips: [
        '早上到达可选择最新鲜的海鲜',
        '二楼食堂加工费用约¥300-500每道菜',
        '可以砍价，特别是购买多种海鲜时',
        '推荐尝试冲绳特色海葡萄和海胆',
        '周日休息，请安排好游览时间'
      ]
    },
  };

  // 美食推荐数据
  const foodRecommendations = {
    dotonbori: [
      {
        name: '达摩串炸（難波本店）',
        dish: '各类炸物，搭配秘传酱汁，牛肉串炸',
        price: '¥1000-2000',
        rating: '4.0/5',
        feature: '创立于昭和4年，100%牛脂炸油，外衣细腻酥脆'
      },
      {
        name: '金久右卫门拉面',
        dish: '4号「大阪黑」拉面，湯头濃厚回甘',
        price: '¥800-1500',
        rating: '4.2/5',
        feature: 'tabelog「大阪最强拉面」比赛连续3年冠军'
      },
      {
        name: '蟹道乐本店',
        dish: '顶级松叶蟹、鱈场蟹料理，螃蟹火锅',
        price: '¥5000-15000',
        rating: '4.1/5',
        feature: '高档螃蟹料理专门店，以巨大螃蟹招牌闻名'
      }
    ],
    american: [
      {
        name: 'グルメ回转寿司市场',
        dish: '产地直送新鲜鱼货，海葡萄、石垣牛寿司',
        price: '¥110-500/盘',
        rating: '4.2/5',
        feature: '美国村人气Top1餐厅，CP值超高'
      },
      {
        name: '塔可饭咖啡Kijimuna',
        dish: '蛋包塔可饭（年销10万份）',
        price: '¥800-1200',
        rating: '4.3/5',
        feature: '冲绳塔可饭发源地，融合美式和冲绳风味'
      }
    ],
    kokusai: [
      {
        name: '暖暮拉面',
        dish: '台湾人最爱No.1冲绳拉面，豚骨拉面',
        price: '¥800-1500',
        rating: '4.1/5',
        feature: '冲绳拉面代表店，汤头浓郁有层次'
      },
      {
        name: '琉球茶房 あしびうなぁ',
        dish: '冲绳传统料理，ゴーヤチャンプルー',
        price: '¥1200-2000',
        rating: '4.2/5',
        feature: '正宗冲绳家庭料理，传统琉球风味'
      }
    ],
    bund: [
      {
        name: 'Hakkasan 客家轩',
        dish: '现代粤菜，蒜子黑椒、玫瑰豉油鸡、宫爆松露',
        price: '¥700-1500/人',
        rating: '4.5/5',
        feature: '米其林星级餐厅，现代粤菜典范'
      },
      {
        name: '外滩22号 Restaurant',
        dish: '法式精致料理，景观位用餐',
        price: '¥500-1200/人',
        rating: '4.3/5',
        feature: '外滩景观餐厅，法式浪漫用餐体验'
      }
    ]
  };

  // 判断是否为商业景点
  const isCommercialArea = ['dotonbori', 'american', 'kokusai', 'bund'].includes(attraction);
  
  const selected = attractions[attraction];

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto relative bg-white/90 backdrop-blur-md rounded-xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 z-0" 
        style={{ backgroundImage: `url(${selected.imagePath})` }}
      ></div>

      <div className="relative z-10 p-12">
        {/* Title */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-800">{selected.title}</h2>
          <div className="w-20 h-1 bg-blue-500 mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
              <img 
                src={selected.imagePath} 
                alt={selected.title} 
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">描述</h3>
              <p className="text-gray-700">{selected.description}</p>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            {/* 亮点 */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">亮点</h3>
              <ul className="space-y-2">
                {selected.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="ml-2 text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Info */}
            <div className="bg-blue-50 rounded-lg p-5 shadow-sm border border-blue-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">实用信息</h3>
              <div className="space-y-2">
                <div className="flex">
                  <span className="font-bold text-blue-600 w-36">位置：</span>
                  <span className="text-gray-700">{selected.info.位置}</span>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-600 w-36">开放时间：</span>
                  <span className="text-gray-700">{selected.info.开放时间}</span>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-600 w-36">门票:</span>
                  <span className="text-gray-700">{selected.info.门票}</span>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-600 w-36">交通时间：</span>
                  <span className="text-gray-700">{selected.info.交通时间}</span>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-600 w-36">推荐：</span>
                  <span className="text-gray-700">{selected.info.建议游览时间}</span>
                </div>
              </div>
            </div>

            {/* 提示 */}
            <div className="bg-yellow-50 rounded-lg p-5 shadow-sm border border-yellow-100">
              <h3 className="text-xl font-bold text-yellow-700 mb-3">游客贴士</h3>
              <ul className="space-y-1 list-disc pl-5">
                {selected.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700 text-sm">{tip}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 美食推荐部分 - 仅商业景点显示 */}
        {isCommercialArea && foodRecommendations[attraction as keyof typeof foodRecommendations] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 shadow-sm border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
                <span className="mr-2">🍽️</span>
                美食推荐
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foodRecommendations[attraction as keyof typeof foodRecommendations]?.map((restaurant, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
                    <h4 className="font-bold text-orange-800 mb-2">{restaurant.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-600">招牌菜品：</span>
                        <span className="text-gray-700">{restaurant.dish}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">价格：</span>
                        <span className="text-gray-700">{restaurant.price}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">评分：</span>
                        <span className="text-orange-600 font-medium">{restaurant.rating}</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded">
                        {restaurant.feature}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AttractionSlide;