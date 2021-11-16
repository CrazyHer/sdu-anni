# 百廿校庆云游山大-团橘奇遇记 趣味小程序

为校团委庆祝山大120周年校庆而制作的趣味答题小程序，在地图上选择各校区回答题目并点亮徽章，最后写下 祝福语生成、分享卡通图片并参加抽奖

![qrcode](docs/qrcode.jpg)

![screenshot](docs/screenshot1.png)

- 安装依赖：`yarn`

- 调试模式运行（微信小程序）：`yarn dev:weapp`

- 生产模式打包（微信小程序）： `yarn build:weapp`

## 核心技术： Taro + React + TypeScript

- 使用Taro跨端方案实现React编写微信小程序 
- 使用Canvas绘制卡通图片并生成祝福语，保存在本地 
- 利用缓存机制实现小程序图片资源的预加载 
- 使用阿里云CDN服务减少静态资源请求的服务器负载，加快加载时间 
- 活动期间小程序访问量6.5w+，HTTPS请求量48w+
