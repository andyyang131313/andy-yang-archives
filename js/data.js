/* ============================================================
   ANDY'S VAULT — 数据层
   每张“唱片”即一段经历。新增/修改经历只需编辑本文件。
   字段说明：
   - id        : 唯一标识
   - year      : 唱片上显示的年份/周期
   - period    : 完整时间区间
   - title     : 唱片标题
   - subtitle  : 中文副标题
   - role      : 角色
   - org       : 公司/组织（可空）
   - vinyl     : 彩胶纹理形态（splash-rb / marble-rw / smoke-gold / duo-rw / sandwich-gr / splash-wrb）
   - cover     : 封面图路径（assets/ 下）
   - coverAlt  : 封面图 alt 文本
   - intro     : 唱片引言（一句话）
   - summary   : 项目简介
   - duties    : 工作内容列表
   - results   : 成果列表
   - tracks    : 浮窗曲目 [{ name, video?, image?, url? }]
                 video/image 为本地文件路径，url 为外链；
                 都为空时前端显示「作品待补充」
   - tags      : 作品类型标签
   - links     : 外链入口 [{label, url}]，url 为空则不渲染
   ============================================================ */

const RECORDS = [
  {
    id: "herbeast",
    year: "2026",
    period: "2026.07 – 2026.09",
    title: "HERBEAST",
    subtitle: "东方草药的产品叙事",
    role: "产品营销实习生",
    org: "上海东边野兽化妆品有限公司",
    vinyl: "splash-rb",
    cover: "assets/cover-a.png",
    coverAlt: "herbeast 品牌标识：白底红色神兽图形与 herbeast 文字的原始构图",
    intro: "把一株灵芝，讲成一个被记住的理由。",
    summary:
      "参与灵芝水及「油皮版」产品 Message House 制定，梳理核心卖点、RTB、竞品信息与营销话术；参与品牌图片、视频素材拍摄制作，及矩阵账号「东边野兽梳妆台」运营。",
    duties: ["产品 Message House 制定", "竞品与卖点梳理", "品牌图片/视频素材拍摄制作", "矩阵账号运营"],
    results: [
      "参与搭建的灵芝水 Message House 应用于 Q2 产品传播",
      "Marketing Brief 被电商等部门采用",
      "产品视觉素材用于品牌上新及营销节点传播",
    ],
    tracks: [
      { name: "Message House", noBadge: true },
      {
        name: "产品图片",
        type: "image",
        items: [
          { title: "HERBEAST-产品图片-01", src: "assets/herbeast/photo-01.jpg" },
          { title: "HERBEAST-产品图片-02", src: "assets/herbeast/photo-02.jpg" },
          { title: "HERBEAST-产品图片-03", src: "assets/herbeast/photo-03.jpg" },
          { title: "HERBEAST-产品图片-04", src: "assets/herbeast/photo-04.jpg" },
          { title: "HERBEAST-产品图片-05", src: "assets/herbeast/photo-05.jpg" },
          { title: "HERBEAST-产品图片-06", src: "assets/herbeast/photo-06.jpg" },
          { title: "HERBEAST-产品图片-07", src: "assets/herbeast/photo-07.jpg" },
          { title: "HERBEAST-产品图片-08", src: "assets/herbeast/photo-08.jpg" },
          { title: "HERBEAST-产品图片-09", src: "assets/herbeast/photo-09.jpg" },
          { title: "HERBEAST-产品图片-10", src: "assets/herbeast/photo-10.jpg" },
          { title: "HERBEAST-产品图片-11", src: "assets/herbeast/photo-11.jpg" },
          { title: "HERBEAST-产品图片-12", src: "assets/herbeast/photo-12.jpg" },
          { title: "HERBEAST-产品图片-13", src: "assets/herbeast/photo-13.jpg" },
          { title: "HERBEAST-产品图片-14", src: "assets/herbeast/photo-14.jpg" },
        ],
      },
      {
        name: "Social Video",
        type: "video",
        items: [
          { title: "Social Video 01", src: "assets/herbeast/video-01.mp4" },
          { title: "Social Video 02", src: "assets/herbeast/video-02.mp4" },
          { title: "Social Video 03", src: "assets/herbeast/video-03.mp4" },
          { title: "Social Video 04", src: "assets/herbeast/video-04.mp4" },
        ],
      },
    ],
    tags: ["产品营销", "Message House", "视觉素材", "Social"],
    links: [],
  },
  {
    id: "winona",
    year: "2026",
    period: "2026.03 – 2026.06",
    title: "WINONA",
    subtitle: "敏感肌的寻「爱」启示",
    role: "品牌自媒体实习生",
    org: "上海贝泰妮生物科技有限公司",
    vinyl: "marble-rw",
    cover: "assets/cover-b.png",
    coverAlt: "薇诺娜品牌标识",
    intro: "在一座城里，重新学会照顾自己。",
    summary:
      "围绕「城市探索 × 自我关爱」，参与「薇诺娜云游记·泉州」系列的选题、文案、脚本、拍摄及后期统筹；策划「寻找薇朋友」UGC 征集。",
    duties: ["系列选题与文案", "脚本与拍摄统筹", "后期统筹", "UGC 活动策划"],
    results: [
      "小红书发布量减少 15.94% 的情况下，播放量环比提升 27.91%",
      "公众号仅发布 2 篇内容，阅读量环比提升 60.55%",
      "推动「寻找薇朋友」成为长期栏目",
    ],
    tracks: [
      {
        name: "寻「爱」图文",
        url: "https://www.xiaohongshu.com/discovery/item/6a3d2091000000002201b0e8?source=webshare&xhsshare=pc_web&xsec_token=AB47rcPQ7_w5YckcB3gD_5LxBGgc6aahA3jpOxoiPgOGE=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "寻「爱」预告",
        url: "https://www.xiaohongshu.com/discovery/item/6a37c94a000000002100a02f?source=webshare&xhsshare=pc_web&xsec_token=ABk7HiHx_tBP7fAhbSQ6XoHPYgjDxNMd0AlbV5FnYeR5A=&xsec_source=pc_share87",
        direct: true,
      },
      {
        name: "寻「爱」视频",
        url: "https://www.xiaohongshu.com/discovery/item/6a38b864000000001101dcf4?source=webshare&xhsshare=pc_web&xsec_token=ABkCn7ifxjRroAQf0Iw7tbGnV1NWRa9mL3jpdJ76qFBHE=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "云游 Q&A 之妆后修护",
        url: "https://www.xiaohongshu.com/discovery/item/6a4770db000000001101164f?source=webshare&xhsshare=pc_web&xsec_token=ABe85-X3a1D0pRO88UtcU1V1eCZ5gqAg8qghmnykL00rs=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "云游 Q&A 之旅途减负",
        url: "https://www.xiaohongshu.com/discovery/item/6a47979200000000080012a2?source=webshare&xhsshare=pc_web&xsec_token=ABe85-X3a1D0pRO88UtcU1V2Sey-srx38mLRzUlhfYjH0=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "云游 Q&A 之至爱呵护",
        url: "https://www.xiaohongshu.com/discovery/item/6a464226000000001102cf16?source=webshare&xhsshare=pc_web&xsec_token=ABvYqu_L7TMAC151-oNqmRRQqN0Bq1I78rbBq5FEyw8I8=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "征集薇朋友",
        url: "https://www.xiaohongshu.com/discovery/item/6a439f0a000000000f017bd6?source=webshare&xhsshare=pc_web&xsec_token=AB-8kx3OTxBIrOZTr9SgCuXoPjcjEILuKbGKLJL6KPQRo=&xsec_source=pc_share",
        direct: true,
      },
    ],
    tags: ["品牌自媒体", "城市营销", "UGC", "小红书", "公众号"],
    links: [],
  },
  {
    id: "spoon-rola",
    year: "2025",
    period: "2025.11 – 2026.03",
    title: "SPOON & ROLA",
    subtitle: "一勺罗拉的买手日记",
    role: "内容编导",
    org: "",
    vinyl: "smoke-gold",
    cover: "assets/cover-c.png",
    coverAlt: "Spoon & Rola 封面：白底浅黄色横幅与黑色手写标题",
    intro: "从 0 到 1，把「会买」做成一门内容生意。",
    summary:
      "从 0 到 1 协助孵化「高品质美妆买手」IP，负责护肤、探店、职场等内容选题操盘，将原始素材转为高留存叙事脚本，并完成后期剪辑。",
    duties: ["IP 定位与孵化", "内容选题操盘", "叙事脚本撰写", "后期剪辑"],
    results: [
      "发布原创笔记 61 篇，粉丝增长至 5,200+，累计赞藏 4.4 万",
      "打造 2 条 10 万+ 曝光商单视频",
      "两次直播总成交额达 94.6 万，新粉下单率 97.2%",
    ],
    tracks: [
      {
        name: "云逛街 in UK",
        url: "https://www.xiaohongshu.com/discovery/item/69a80a500000000015020545?source=webshare&xhsshare=pc_web&xsec_token=ABNjlV8kIibmLTsvu25Cc0Xc4hYjZPCLy3eSfRoTRPS_o=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "面霜测评",
        url: "https://www.xiaohongshu.com/discovery/item/696f5aad00000000210324f7?source=webshare&xhsshare=pc_web&xsec_token=AB_gF66pZ2TYYng10L2_2eCMiArH9_KrMSHq_fIz84heA=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "昔又大排灯",
        url: "https://www.xiaohongshu.com/discovery/item/69708ea4000000000c0348a9?source=webshare&xhsshare=pc_web&xsec_token=AB2v0Yb8vrs2DuO6DgeN88BvXJDvEXBwYb9uUF1OM8t20=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "眼周扫「黑」",
        url: "https://www.xiaohongshu.com/discovery/item/69675988000000000a03fc12?source=webshare&xhsshare=pc_web&xsec_token=ABLq5HYC0cl_nm9MyoEdwDesk25jYGDTm21mi5Mwy86ZA=&xsec_source=pc_share",
        direct: true,
      },
    ],
    tags: ["IP 孵化", "内容编导", "商单", "直播"],
    links: [],
  },
  {
    id: "beauty-insider",
    year: "2025",
    period: "2025.05 – 2025.08",
    title: "BEAUTY INSIDER",
    subtitle: "美妆内行人的通勤 AB 面",
    role: "自媒体运营实习生",
    org: "北京映天下网络科技有限公司上海分公司",
    vinyl: "duo-rw",
    cover: "assets/cover-d.jpg",
    coverAlt: "美妆内行人 Beauty Insiders 栏目标识",
    intro: "让美妆职场 IP，走进一座城市的夏天。",
    summary:
      "参与「美妆内行人」「美内今天不上班」日常运营，负责选题、内容编导、推文排版及小红书图文/短视频制作；策划旅行主题 Vlog，让美妆职场 IP 延展到城市生活方式。",
    duties: ["账号日常运营", "选题与内容编导", "推文排版", "图文/短视频制作"],
    results: ["南宁系列单条最高曝光 10 万+", "通过内容复盘优化互动率与粉丝留存"],
    tracks: [
      {
        name: "南宁 Vlog Day1",
        url: "https://www.xiaohongshu.com/discovery/item/684969b8000000002300d683?source=webshare&xhsshare=pc_web&xsec_token=ABMjP-DLq30UEHcYVeYFQhHLgou2zxm9CLhhxXLmLnTSI=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "南宁 Vlog Day2",
        url: "https://www.xiaohongshu.com/discovery/item/684fdf26000000000303f348?source=webshare&xhsshare=pc_web&xsec_token=ABYaeAdmLu4mxJGtNHxOnk-BcrkRajL5VYBUJSq3BVU44=&xsec_source=pc_share",
        direct: true,
      },
      {
        name: "播客录制",
        type: "image",
        items: [
          { title: "美内茶话会录制", src: "assets/beauty-insider/podcast-tea.jpg" },
          { title: "美妆内行人节目录制现场", src: "assets/beauty-insider/podcast-show.jpg" },
          { title: "对话循理创始人K博录制现场", src: "assets/beauty-insider/podcast-kbo.jpg" },
        ],
      },
    ],
    tags: ["自媒体运营", "Vlog", "小红书", "推文排版"],
    links: [],
  },
  {
    id: "zsiga",
    year: "2024",
    period: "2024",
    title: "POPMART",
    subtitle: "我允许，则我多彩",
    role: "编导 / 剪辑",
    org: "全国大学生广告艺术大赛 · 影视广告",
    vinyl: "sandwich-gr",
    cover: "assets/cover-e.png",
    coverAlt: "Zsiga 海报：白底「生来自由 倔强生长」棕色文字与右上角红色 Zsiga 标记",
    intro: "允许这一切，世界才有颜色。",
    summary:
      "为泡泡玛特旗下 Zsiga 创作 30 秒影视广告。以「单色世界被色彩击破」为叙事，将「允许这一切」的品牌哲学转化为 Z 世代关于自由表达的视觉故事。",
    duties: ["品牌调性研究", "选题", "分镜脚本", "现场执行", "后期剪辑"],
    results: ["第 16 届全国大学生广告艺术大赛校赛二等奖"],
    tracks: [
      {
        name: "作品正片",
        type: "video",
        items: [
          { title: "我允许，则我多彩", src: "assets/popmart/main.mp4" },
        ],
      },
    ],
    tags: ["影视广告", "编导", "剪辑", "大广赛"],
    links: [],
  },
  {
    id: "andyopia",
    year: "ONGOING",
    period: "持续进行中",
    title: "ANDYOPIA / GIRAFFILM",
    labelTitle: "ANDYOPIA",
    subtitle: "私人频率",
    role: "音乐博主 / 摄影师 / 写作者",
    org: "",
    vinyl: "splash-wrb",
    cover: "assets/cover-f.jpg",
    coverAlt: "Andy 在海边用相机拍照的胶片感生活照",
    intro: "把私人频率，调到能被听见的音量。",
    summary:
      "个人小红书账号认证为音乐博主与摄影师，聚焦独立音乐、唱片收藏和现场摄影；个人公众号「ANDYOPIA」以信纸般的排版发布音乐随笔与摄影作品，「GIRAFFILM」代表胶片摄影系列。",
    duties: ["音乐内容创作", "现场摄影", "胶片摄影", "公众号写作与排版"],
    dutiesZh: "内容",
    dutiesEn: "MY LIFE",
    results: [
      "Wolf Alice 巡演相关彩胶与现场摄影内容，在无投流条件下达到 28.4% 封面点击率，超过 87% 同类账号",
      "Phoebe Bridgers 彩胶唱片摄影内容，曝光达 9,000+，封面点击率 19.1%，超过 50% 同类作者",
      "SPELLLING 中国巡演签售相关内容，封面点击率 24%，超过 74% 同类作者",
    ],
    tracks: [
      {
        name: "现场摄影",
        type: "image",
        items: [
          { title: "WOLF ALICE-12", src: "assets/andyopia/live-01.jpg" },
          { title: "WOLF ALICE-10", src: "assets/andyopia/live-02.jpg" },
          { title: "SPELLLING-02", src: "assets/andyopia/live-03.jpg" },
          { title: "SPELLLING-05", src: "assets/andyopia/live-04.jpg" },
          { title: "WOLF ALICE-04", src: "assets/andyopia/live-05.jpg" },
          { title: "WOLF ALICE-01", src: "assets/andyopia/live-06.jpg" },
          { title: "SPELLLING-01", src: "assets/andyopia/live-07.jpg" },
          { title: "WOLF ALICE-09", src: "assets/andyopia/live-08.jpg" },
          { title: "WOLF ALICE-08", src: "assets/andyopia/live-09.jpg" },
          { title: "WOLF ALICE-07", src: "assets/andyopia/live-10.jpg" },
          { title: "WOLF ALICE-03", src: "assets/andyopia/live-11.jpg" },
          { title: "WOLF ALICE-02", src: "assets/andyopia/live-12.jpg" },
          { title: "WOLF ALICE-05", src: "assets/andyopia/live-13.jpg" },
          { title: "SPELLLING-03", src: "assets/andyopia/live-14.jpg" },
          { title: "SPELLLING-04", src: "assets/andyopia/live-15.jpg" },
          { title: "WOLF ALICE-06", src: "assets/andyopia/live-16.jpg" },
          { title: "WOLF ALICE-11", src: "assets/andyopia/live-17.jpg" },
        ],
      },
      {
        name: "扫街摄影",
        type: "image",
        items: [
          { title: "老巷新象-01", src: "assets/andyopia/street-01.jpg" },
          { title: "老巷新象-02", src: "assets/andyopia/street-02.jpg" },
          { title: "老巷新象-03", src: "assets/andyopia/street-03.jpg" },
          { title: "老巷新象-04", src: "assets/andyopia/street-04.jpg" },
          { title: "老巷新象-05", src: "assets/andyopia/street-05.jpg" },
          { title: "老巷新象-06", src: "assets/andyopia/street-06.jpg" },
          { title: "老巷新象-07", src: "assets/andyopia/street-07.jpg" },
          { title: "老巷新象-08", src: "assets/andyopia/street-08.jpg" },
          { title: "老巷新象-09", src: "assets/andyopia/street-09.jpg" },
        ],
      },
      {
        name: "平面设计",
        type: "image",
        items: [
          { title: "PS专业课作业-大象无形海报", src: "assets/andyopia/design-01.jpg" },
          { title: "PS专业课作业-书籍封面", src: "assets/andyopia/design-02.jpg" },
          { title: "PS专业课作业-钱塘运河海报", src: "assets/andyopia/design-03.jpg" },
        ],
      },
      { name: "音乐随笔", url: "https://mp.weixin.qq.com/s/xl6ve52M85YWRCpXw4yl5Q", direct: true },
      { name: "giraffilm in June", url: "https://mp.weixin.qq.com/s/wmS3YXIl8ey21HtD472FmQ", direct: true },
      { name: "giraffilm in July", url: "https://mp.weixin.qq.com/s/hLd3tgTlmRCQVeksjTGIwQ", direct: true },
    ],
    tags: ["音乐博主", "摄影", "写作", "平面设计"],
    links: [],
  },
];

/* 经历时间轴（极简版，不重复作品内容） */
const TIMELINE = [
  { period: "2026.07 – 2026.09", title: "东边野兽 · 产品营销实习生", note: "卖点整理 / 视觉素材 / 矩阵号运营" },
  { period: "2026.03 – 2026.06", title: "贝泰妮（薇诺娜）· 品牌自媒体实习生", note: "官号运营 / 云游记 Campaign / 寻找「薇朋友」" },
  { period: "2025.11 – 2026.03", title: "一勺罗拉 · 内容编导", note: "IP孵化 / 美妆买手 / 脚本剪辑" },
  { period: "2025.05 – 2025.08", title: "映天下 · 自媒体运营实习生", note: "美妆内行人 / 行业洞察 / 生活方式" },
  { period: "2024", title: "大广赛影视广告 · 编导/剪辑", note: "Zsiga《我允许，则我多彩》校赛二等奖" },
];

/* 数字锚点 */
const METRICS = [
  { value: "10万+", label: "单条最高曝光" },
  { value: "4.4万", label: "累计赞藏" },
  { value: "94.6万", label: "直播总成交额" },
  { value: "28.4%", label: "封面点击率" },
];

/* 工作技能 */
const SKILLS = [
  "小红书与公众号内容策划",
  "脚本撰写",
  "熟练使用剪映制作视频",
  "熟练使用秀米、E2 编辑器进行推文排版",
  "熟练使用 Word、PowerPoint 等办公软件",
  "掌握 Photoshop 等设计软件",
];

/* Now Spinning：四个兴趣入口 */
const INSPIRATIONS = [
  { key: "music", en: "MUSIC", zh: "音乐", desc: "独立音乐与唱片收藏——流行文化观察的第一现场。" },
  { key: "photo", en: "PHOTOGRAPHY", zh: "摄影", desc: "胶片与现场——用镜头完成另一种叙事。" },
  { key: "exhibition", en: "EXHIBITION", zh: "展览", desc: "看展——在当代艺术的语境里校准审美。" },
  { key: "writing", en: "WRITING", zh: "书写", desc: "随笔与手写——把洞察写成温度。" },
];

/* 联系方式：邮箱为 mailto；小红书点击跳转主页；公众号展示账号名，点击复制 */
const CONTACT = {
  email: "1625662944@qq.com",
  xiaohongshu: "Andy🦒",
  xiaohongshuUrl: "https://xhslink.cn/o/5vHa5s8CWZd",
  wechat: "ANDYOPIA",
};
