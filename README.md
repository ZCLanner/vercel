# 冲绳旅行规划演示应用

## 📋 项目简介

这是一个专业的冲绳旅行规划演示应用，提供完整的8天9夜日本冲绳旅行攻略。通过现代化的React技术栈构建，为用户提供交互式的旅行规划体验。

## ✨ 主要特色

### 🎯 完整旅行规划
- **8天9夜行程安排**: 详细的每日行程规划
- **签证申请指导**: 2025年最新日本签证政策和申请流程
- **环球影城攻略**: 门票预订、游玩策略、表演时间表
- **交通住宿指南**: 机票、酒店、租车、轮渡预订攻略
- **景点详细介绍**: 冲绳主要景点信息和游玩建议

### 🎨 优秀用户体验
- **交互式演示**: 支持键盘导航和点击导航
- **响应式设计**: 完美适配桌面和移动设备
- **流畅动画**: 基于Framer Motion的精美切换效果
- **专业界面**: 现代化UI设计，信息层次清晰

### 🛠️ 现代技术栈
- **React 18**: 最新的React框架
- **TypeScript**: 类型安全的开发体验
- **Vite**: 快速的构建工具
- **Tailwind CSS**: 实用优先的CSS框架
- **Framer Motion**: 强大的动画库

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- pnpm >= 8.0.0 (推荐)

### 安装依赖
```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 启动开发服务器
```bash
# 使用 pnpm
pnpm dev

# 或使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用。

### 构建生产版本
```bash
# 使用 pnpm
pnpm build

# 或使用 npm
npm run build

# 或使用 yarn
yarn build
```

### 预览生产版本
```bash
# 使用 pnpm
pnpm preview

# 或使用 npm
npm run preview

# 或使用 yarn
yarn preview
```

## 📁 项目结构

```
okinawa-travel-guide-chinese/
├── public/                    # 静态资源
│   ├── data/                 # JSON数据文件
│   │   ├── visa_requirements.json
│   │   ├── usj_show_schedule.json
│   │   ├── comprehensive_okinawa_guide.json
│   │   └── ...
│   └── imgs/                 # 图片资源
├── src/                      # 源代码
│   ├── components/           # React组件
│   │   ├── ui/              # UI基础组件
│   │   ├── Presentation.tsx  # 主演示组件
│   │   └── ErrorBoundary.tsx # 错误边界
│   ├── slides/              # 幻灯片组件
│   │   ├── TitleSlide.tsx   # 标题页
│   │   ├── ItineraryOverviewSlide.tsx # 行程概览
│   │   ├── DailyPlanSlide.tsx # 每日行程
│   │   ├── VisaSlide.tsx    # 签证信息
│   │   ├── USJSlide.tsx     # 环球影城门票
│   │   ├── USJGuideSlide.tsx # 环球影城攻略
│   │   ├── AttractionSlide.tsx # 景点介绍
│   │   ├── TokashikiSlide.tsx # 渡嘉敷岛
│   │   ├── CarRentalSlide.tsx # 租车指南
│   │   ├── BookingSlide.tsx  # 预订指南
│   │   └── FinaleSlide.tsx   # 结尾页
│   ├── hooks/               # 自定义Hooks
│   ├── lib/                 # 工具函数
│   ├── App.tsx              # 主应用组件
│   └── main.tsx             # 应用入口
├── package.json             # 项目配置
├── tailwind.config.js       # Tailwind配置
├── tsconfig.json           # TypeScript配置
├── vite.config.ts          # Vite配置
└── README.md               # 项目文档
```

## 🎮 使用指南

### 导航方式
- **键盘导航**: 使用方向键 ← → 切换幻灯片
- **鼠标导航**: 点击页面底部的圆点导航
- **触摸导航**: 在移动设备上支持滑动手势

### 内容概览
1. **标题页**: 项目介绍和基本信息
2. **行程概览**: 8天行程总览
3. **每日计划**: 详细的每日行程安排
4. **签证指南**: 日本签证申请详细流程
5. **环球影城门票**: 门票类型和购买攻略
6. **环球影城攻略**: 游玩策略和表演时间
7. **景点介绍**: 冲绳主要景点信息
8. **渡嘉敷岛**: 一日游轮渡预订指南
9. **租车指南**: 冲绳租车攻略
10. **预订指南**: 机票酒店预订技巧
11. **结尾页**: 行程总结和出行提醒

## 🎨 自定义开发

### 添加新幻灯片
1. 在 `src/slides/` 目录创建新的幻灯片组件
2. 在 `src/components/Presentation.tsx` 中引入并添加到幻灯片数组
3. 更新导航逻辑和幻灯片计数

### 修改样式
- 主要使用 Tailwind CSS 进行样式设计
- 全局样式在 `src/index.css` 中定义
- 组件样式直接使用 Tailwind 类名

### 数据更新
- 旅游数据存储在 `public/data/` 目录的JSON文件中
- 可以直接修改JSON文件来更新旅游信息
- 图片资源存储在 `public/imgs/` 目录

## 🔧 技术特性

### 性能优化
- **代码分割**: 使用Vite的自动代码分割
- **懒加载**: 组件和资源的延迟加载
- **缓存策略**: 合理的浏览器缓存配置

### 开发体验
- **TypeScript**: 完整的类型定义和检查
- **ESLint**: 代码质量检查
- **Hot Reload**: 开发时的热更新
- **构建优化**: 生产版本的优化和压缩

### 浏览器兼容性
- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 移动浏览器支持
- 响应式设计适配各种屏幕尺寸

## 📝 更新日志

### v1.0.0
- ✅ 完整的中文化翻译
- ✅ 11个专业幻灯片组件
- ✅ 响应式界面设计
- ✅ 交互式导航体验
- ✅ 2025年最新旅游信息

## 🤝 贡献指南

我们欢迎任何形式的贡献，包括但不限于：
- 🐛 Bug 报告
- 💡 功能建议
- 📝 文档改进
- 🌏 内容更新

### 开发流程
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

如果您有任何问题或建议，请通过以下方式联系我们：
- 📧 邮箱: travel@example.com
- 🐛 Issue: [GitHub Issues](https://github.com/username/repo/issues)

## 🌟 致谢

感谢所有为此项目做出贡献的开发者和设计师。

---

**祝您冲绳之旅愉快！** 🌺🏖️✈️
