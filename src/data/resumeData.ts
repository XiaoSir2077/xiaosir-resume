export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ProjectExperience {
  id: string;
  title: string;
  role: string;
  period: string;
  category: string;
  background: string;
  coreWork: string[];
  outcomes: string[];
  media?: {
    type: 'video' | 'image' | 'link' | 'document';
    url?: string;
    title?: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  category: 'solution' | 'video' | 'design';
  title: string;
  subtitle?: string;
  platform?: string;
  metrics?: string;
  outline?: string[];
  link?: string;
  description?: string;
  tags?: string[];
}

export const resumeData = {
  personalInfo: {
    name: "肖宇轩",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop", // placeholder standard professional avatar
    phone: "19572973402",
    email: "3328106076@qq.com",
    role: "AI 内容运营 / AI 产品运营 实习生",
    availability: {
      location: "可远程 / 可到岗",
      schedule: "每周 5 天",
      duration: "6 个月以上"
    },
    slogan: "建议移步我的网页版简历，获得更好的阅读体验哦！"
  },
  selfEvaluation: {
    title: "自我评价",
    paragraphs: [
      "我是一名 AI 内容 / 产品运营方向实习生，擅长将复杂 AI 能力转化为用户能够理解、使用和传播的产品内容与解决方案。",
      "曾参与 AI Agent、AI 教育、AI 影视等多个领域产品运营工作，覆盖内容运营、用户运营、活动运营与产品推广等场景。能够从业务目标出发拆解用户需求，通过内容、产品 Demo 与运营方案帮助团队完成用户增长、产品教育与价值传递等工作。",
      "在小团队环境中具备较强 Owner 意识，能够独立推动项目从需求分析、方案设计到最终交付落地，并持续沉淀 SOP 与工作流提升团队效率。",
      "关注长期价值与高质量交付，内容是否真实解决问题、是否可复用、是否能为业务创造长期价值。希望成为连接产品、用户与业务之间的桥梁。"
    ]
  },
  skills: {
    title: "个人技能",
    categories: [
      {
        id: "ai-skills",
        title: "AI 相关技能",
        items: [
          "熟练使用 GPT、Gemini、Claude 等大模型完成内容生产与方案设计",
          "能通过 Vibe Coding 快速搭建产品 Demo 并验证需求",
          "具备 Prompt Engineering 与 Agent Workflow 搭建经验",
          "能将重复工作沉淀为 SOP 与可复用 Skills",
          "参与过AI影视全流程制作，熟练使用Seedance2.0+GPT image 2.0进行AI影视内容制作"
        ]
      },
      {
        id: "content-skills",
        title: "内容策划与运营",
        items: [
          "具备公众号、小红书、短视频等内容策划与生产经验",
          "能围绕业务目标完成选题设计、内容包装与传播策略制定",
          "熟悉 AI 产品教程、解决方案与案例内容输出",
          "视频剪辑制作：能够进行视频的前期策划，中期拍摄和后期总结的全流程工作；能够熟练使用Ae、Pr、剪映等视频制作软件"
        ]
      },
      {
        id: "product-skills",
        title: "产品表达与设计",
        items: [
          "熟练使用 Figma、Canva 等工具完成产品展示与宣传物料设计",
          "能通过 AI 辅助完成网页 Demo、产品展示页与作品集搭建",
          "具备基础信息架构设计与用户体验意识"
        ]
      }
    ]
  },
  workExperience: [
    {
      company: "北京句子互动科技有限公司",
      role: "AI 管培实习生",
      period: "2025.07 – 2025.11",
      description: "企业级Agentic AI数字员工解决方案",
      highlights: [
        "参与AI解决方案内容体系从0到1建设，输出销售方案、公众号内容、产品宣传物料等核心对外资产。",
        "将复杂AI能力转化为客户能够理解的业务解决方案表达，辅助销售沟通与客户决策。",
        "参与抖音AI私信营销解决方案设计，助力销售完成五位数订单成交。",
        "沉淀内容生产与设计SOP，提高团队交付效率。"
      ]
    },
    {
      company: "北京燕元行",
      role: "内容运营实习生",
      period: "2025.12.04 – 2026.1.21",
      description: "北京大学AIIT实验室孵化的AI教育与AI美育方向团队",
      highlights: [
        "负责AI教育相关内容生产与传播，覆盖公众号、小红书、视频号等多个内容平台。",
        "参与实验室官方小红书账号运营，推动账号从1000增长至1300+粉丝。",
        "围绕 AI 产品与前沿技术选题，完成视频脚本与文案撰写，期间产出 2 条小爆款视频，明显高于账号平均数据表现。",
        "围绕AI产品与前沿技术策划内容选题，产出多条高于账号平均表现的视频内容。",
        "参与K12教育小游戏验证项目，协助探索AI教育产品方向。"
      ]
    },
    {
      company: "北京画澄科技有限公司",
      role: "Zopia内容运营实习生",
      period: "2026.1.26 – 2026.5.25",
      description: "AI影视创作平台",
      highlights: [
        "深度参与Zopia从内测到全球上线阶段运营工作，独立维护3600+用户、90+团队客户。",
        "策划并执行AIGC影像武林大会，吸引20+专业团队及120+创作者参与。",
        "负责公众号内容运营与产品教程建设，推动用户教育与产品功能迭代。",
        "参与线下活动运营与产品推广，单场活动拉新300+用户，长沙沙龙促成5万元订单成交。",
        "参与AIGC短剧项目全流程制作，相关作品最高获得143万次播放。"
      ]
    }
  ] as WorkExperience[],
  projectExperience: [
    {
      id: "zopia-growth",
      title: "Zopia运营增长项目",
      role: "内容运营 / 用户运营 / 活动运营",
      period: "2026.1 - 2026.5",
      category: "运营能力",
      background: "参与AI影视产品Zopia从内测到全球上线阶段运营工作。",
      coreWork: [
        "负责Zopia产品早期运营：陪伴Zopia产品从企业内测到全球上线过程，一个人cover团队企微3600+个人用户，90+团队；负责产品日常企微运营，获得用户好评。",
        "策划 2026 Zopia 100 · AI影像武林大会，编写社群FAQ与Zopia使用创作指南-内测-V1.4。",
        "负责Zopia官方公众号运营，在openclaw爆发初期，为公司官号撰写openclaw安装教程，帮助团队迭代出Zoclaw功能；公众号内容推动功能迭代（如：OpenClaw自动化制作短剧Skill教程：从0到1打造你的AI短剧梦工厂！）。",
        "参与制作的Zopia官号短剧，在抖音拿下最高143万次播放；参与前期策划，中期制作，后期剪辑全链路工作。AIGC短剧全程由Zopia制作。",
        "参与Zopia线下活动运营：参与Zopia在杭州的短剧自习室大会，单日拉新300+用户，建联20+团队。",
        "全程跟Zopia长沙大会：独立承担Zopia“一人成片.一键出海”长沙线下沙龙活动的物料设计与产品讲解活动，帮助团队拿下5万元订单。"
      ],
      outcomes: [
        "微信社群用户数增长，独立服务3600+个人用户与90+团队客户，形成良好社群反馈闭环",
        "公众号内容教程引发业内关注，OpenClaw教程成功转化为产品内置功能 (Zoclaw)",
        "AIGC短剧在抖音获得单视频最高 143 万次播放量",
        "线下活动执行力强，杭州单日拉新 300+ 用户；长沙沙龙独立包办讲解与物料，促成 5 万元直接订单"
      ]
    },
    {
      id: "ai-resume",
      title: "AI简历网站",
      role: "产品设计 / 前端开发 / AI辅助",
      period: "持续进行中",
      category: "产品意识",
      background: "传统简历难以完整展示运营项目、视频作品与解决方案案例，因此尝试通过AI工具搭建个人品牌网站，实现内容可视化展示。",
      coreWork: [
        "从HR与招聘者视角分析浏览路径，设计网站信息架构与内容布局。",
        "使用AI辅助完成网页开发与部署，实现在线访问。",
        "将工作经历、项目案例、视频作品集整合到统一展示平台。",
        "针对不同岗位持续优化内容结构与展示逻辑。"
      ],
      outcomes: [
        "完成个人品牌网站上线与部署，展示真实工作内容",
        "实现简历、作品集、项目案例的一站式统一展示",
        "提升招聘方浏览效率与个人能力展示的完整度和专业感"
      ]
    },
    {
      id: "ai-game",
      title: "AI小游戏开发",
      role: "产品验证 / 游戏设计",
      period: "2025.12",
      category: "产品验证",
      background: "K12教育AI 产品实践项目，基于真实业务需求，通过 Vibe Coding 方式快速完成产品 Demo 验证。",
      coreWork: [
        "需求背景：团队需要探索低成本、可快速验证的教育类小游戏方案，用于内部产品方向讨论与展示。要求非传统研发流程，而是通过 AI + 低代码 / 无代码工具 快速产出可运行 Demo。",
        "核心工作：以产品经理视角拆解需求，明确目标用户（小学 3–5 年级）与核心玩法，设计基础世界观与游戏机制。",
        "原型开发：使用 Vibe Coding，结合现成 AI 工具与模板，快速搭建微信小程序游戏 Demo，实现基础交互与玩法逻辑。",
        "价值验证：在极短周期内完成「从想法 → 原型 → 可运行产品」的验证流程，用于团队内部评估与方向讨论。重点关注是否跑起来而非代码复杂度，验证 AI 驱动下个人快速做产品的可行性。"
      ],
      outcomes: [
        "成功跑通并部署了K12教育AI小游戏Demo，游戏体验地址：https://weiandya.netlify.app/",
        "短时间内完成了“从构想到可运行游戏”的高效原型验证，为团队方向讨论提供直观、可交互的作品"
      ]
    },
    {
      id: "ai-video",
      title: "AI影视内容创作",
      role: "内容策划 / AI制片 / 后期剪辑",
      period: "持续进行中",
      category: "内容能力",
      background: "基于生成式AI工具，探索个人创作者完成影视内容生产的新工作流。",
      coreWork: [
        "项目背景：随着视频生成模型快速发展，个人创作者具备以极低成本完成影视级内容制作的可能性。希望探索 AI 在分镜设计、角色设定、镜头生成与后期剪辑中的实际应用方式，验证“一人团队完成影视内容制作”的可行性。",
        "生成探索：使用 GPT 5.5 thinking、Seedance 2.0、GPT Image 2.0等工具完成世界观设定、角色设计、分镜脚本与视觉素材生成。",
        "影视全流程：独立完成 AI 游戏概念视频、AI 剧情短片等内容制作，覆盖策划、生成、剪辑与包装全流程。",
        "工作流优化：结合Zopia工具，持续优化 AI 影视工作流，探索从创意到成片的标准化生产方式。"
      ],
      outcomes: [
        "累计产出多条 AI 视频作品，用于产品宣传、案例展示与内容传播",
        "AIGC 3A游戏概念视频制作：最近外网火爆的AI 3A游戏概念视频，使用Seedance2.0+GPT image 2.0制作",
        "独立承接AIGC短剧项目全流程制作"
      ]
    },
    {
      id: "other-experience",
      title: "其它运营经历",
      role: "运营志愿者 / 产品大使",
      period: "2024.12 - 至今",
      category: "社群与活动运营",
      background: "积极投身行业社群与产品大使活动，锻炼AI应用实践与大规模现场活动获客能力。",
      coreWork: [
        "生财有术 AI 编程大航海 | 运营志愿者（2024年12月）：在社群24年12月AI编程航海项目中承担志愿者工作，运营30人量级的社群，并且所带社群 80% 成功上岸。在航海中学习到 AI 编程知识，能够将内容制作成可视化网页形式，并且将网页内容部署至云端。",
        "Bonjour 产品大使（声网科技大会 | 运营志愿者）：Bonjour 是一家做 AI 数字名片产品的公司，已获得 10w+ 用户。在北京声网 AIGC 大会上作为产品大使，向来访用户介绍产品，并且引导他们注册账户，获得来访群众好评，帮助 Bonjour 单日用户增长超 400+ 人。"
      ],
      outcomes: [
        "带队生财有术AI编程航海社群，达成 80% 的极高结营率（上岸率），并将AI编程成果部署至云端",
        "在声网AIGC大会上担任Bonjour产品大使，单日拉新增长超 400+ 注册用户"
      ]
    }
  ] as ProjectExperience[],
  education: {
    school: "衡阳师范大学",
    period: "2022.09 - 2026.06",
    degree: "本科",
    major: "商务英语专业"
  },
  portfolio: [
    {
      id: "sol-1",
      category: "solution",
      title: "抖音智能私信营销解决方案.pdf",
      description: "针对抖音生态的企业智能私信自动化交互与AI导流转化的深度解决方案。结合AI Agent自动回复、意图识别与营销转化触点，提升粉丝留存和销售线索捕获率。",
      outline: [
        "抖音私信生态流量痛点与机会分析",
        "AI Agent 意图识别与自动分类算法应用",
        "自动化营销触点与多轮交互话术设计",
        "成交转化路径优化与私域沉淀闭环",
        "服务团队提效与ROI测算指标"
      ]
    },
    {
      id: "sol-2",
      category: "solution",
      title: "海外私域营销解决方案.pdf",
      description: "面向出海业务的跨境私域流量运营体系。整合海外主流即时通讯工具 (WhatsApp, Line等)，应用AI客服数字员工实现全球多语种无缝接待与复购管理。",
      outline: [
        "跨境私域流量结构及主流通讯工具分析",
        "多语言 AI 客服数字员工多语种话术库建设",
        "用户生命周期管理 (LTV) 与精准标签推送",
        "跨境合规与海外社群自动运营工作流"
      ]
    },
    {
      id: "sol-3",
      category: "solution",
      title: "人工智能赋能基层治理.pdf",
      description: "政务与社区基层场景下，利用大模型和智能网格化工具进行工单分派、民意搜集、社区服务自动化的AI落地方案。",
      outline: [
        "基层政务及民意求助信息痛点分析",
        "基于 LLM 的政务公文/投诉工单自动分类与摘要",
        "网格员智能移动助手与全天候政策自动问答",
        "多模态舆情态势分析与基层治理辅助决策"
      ]
    },
    {
      id: "sol-4",
      category: "solution",
      title: "万达私域解决方案.pdf",
      description: "实体商圈百货私域转化的标杆方案。通过线下触点AI化、社群千人千面AI导流与积分商城闭环，将线下商场客流沉淀为高复购的品牌数字私域资产。",
      outline: [
        "商业地产私域用户痛点与运营模型",
        "线下触点 (扫码/Wi-Fi) AI智能交互引流设计",
        "社群AI分群及千人千面商品自动种草策略",
        "会员权益、商户联动与积分商城促活体系"
      ]
    },
    {
      id: "sol-5",
      category: "solution",
      title: "人工智能如何赋能中小学教育主题分享 PPT / 中小学教师人工智能前沿培训 (2.14日版本).pptx",
      description: "面向中小学教师设计的AI前沿应用实操培训方案，涵盖教案自动生成、智能课件设计、个性化错题分析等，助力基础教育数字化转型。",
      outline: [
        "AI 时代对中小学基础教育的新挑战与新机遇",
        "大模型辅助教案撰写、AI课件设计 (Prompt实战演练)",
        "利用 AI 设计趣味互动练习与教学游戏原型",
        "AI 赋能个性化作业批改与学情追踪分析"
      ]
    },
    {
      id: "vid-1",
      category: "video",
      title: "抖音微电影大赛作品 / 个人视频拍摄项目",
      subtitle: "校园微电影大赛获奖作品",
      platform: "抖音 (Douyin)",
      metrics: "27万+ 播放 | 5000+ 点赞 | +150 粉丝",
      link: "https://v.douyin.com/RqxHx6eItKs/",
      description: "在校园微电影大赛中单兵作战。独立承担从前期拉团队、立项创意策划、脚本台词撰写；到中期找场地、现场拍摄、再到后期视频剪辑 (使用剪映/Ae/Pr) 和物料设计的全流程。作品获得27万+播放量，长期作为大学生微电影标杆对标作品。"
    },
    {
      id: "vid-2",
      category: "video",
      title: "AI影视概念片: AIGC 3A游戏概念短片",
      subtitle: "国外爆火的 AI 游戏概念视频",
      platform: "海外 / 抖音多平台",
      description: "使用 Seedance 2.0 视频生成大模型 + GPT Image 2.0 图片生成大模型，探索影视级视效。独立撰写中英文双语脚本、镜头动作提示词 (Prompts)、设定统一角色特征，并通过后期调色与音效合成，打造极具科技震撼感和未来感的3A级游戏视觉概念短片。"
    },
    {
      id: "vid-3",
      category: "video",
      title: "Zopia官号 AI 短剧全流程制作",
      subtitle: "探索影视 AIGC 创作全工作流",
      platform: "抖音官号",
      metrics: "抖音单期最高 143万次播放",
      description: "深度参与 AIGC 短剧全链路生产，包括剧本改编、大模型分镜渲染、动态视频生成及后期剪辑。所有镜头与视觉素材完全通过 AI 工具 Zopia 一站式生成，验证了“极低成本制作高流量短剧”的可行性，相关视频冲破百万播放。"
    },
    {
      id: "des-1",
      category: "design",
      title: "活动宣发海报 & 产品推广长图",
      description: "为 Zopia 线上活动 (AIGC影像武林大会、OpenClaw社群教程) 与 线下沙龙 (长沙一人成片沙龙) 设计的成套视觉海报与长图文介绍。采用契合 AI 主题的极简科技黑金/霓虹色调，极大提升了用户点击率与活动转化率。"
    },
    {
      id: "des-2",
      category: "design",
      title: "Zopia “一人成片 · 一键出海” 长沙线下沙龙活动全套物料",
      description: "独立包办长沙线下沙龙的入场券、X展架、签到背景墙、宣传手册、产品讲解PPT等全套线下活动物料设计。视觉风格专业统一，成功烘托现场氛围，助力团队在现场达成 5 万元的订单成交。"
    }
  ] as PortfolioItem[]
};
