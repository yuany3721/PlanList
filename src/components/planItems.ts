
export interface TimelineItem {
    timestamp: string;
    thisweek?: string[];
    nextweek?: string[];
}

export interface ProgressItem {
    timestamp?: string;
    milestone: string;
}

export interface OptionItem {
    title: string;
    progress?: ProgressItem[]; // 当前进度
    inprogress?: string[]; // 跟进内容
    lowPrio?: string[]; // 低优先级事件
    isLowPrio?: boolean; // 低优先级标记
    timeline: TimelineItem[];
}

const planItems:OptionItem[] = [
        {
            title: "光纤传感",
            progress: [
                {
                    timestamp: "23-10-27",
                    milestone: "完成500m传感距离下10m空间分辨率基于相干探测和平衡探测的光纤传感"
                },
                {
                    timestamp: "23-07-13",
                    milestone: "kHz线宽光源在单光子探测器下100m空间分辨率直接探测、单路相干探测"
                },
                {
                    timestamp: "23-05",
                    milestone: "完成AOM调制下的平衡探测验证"
                },
                {
                    timestamp: "23-04",
                    milestone: "使用AOM调制kHz线宽光源至脉冲光，消光比>50dB"
                },
                {
                    timestamp: "2022",
                    milestone: "MHz线宽光源在单光子探测器下直接探测OTDR"
                },
            ],
            inprogress: ["国盾Pcie3.0×4采集卡"],
            lowPrio:["IQ解调算法复现bug修改","系统信噪比计算"],
            timeline: [
                {
                    timestamp: "23-11-10",
                    thisweek: [
                        "徐昱FPGA板子无ddr，无法满足采数需求",
                        "使用简单模拟反卷积的方式，证明了直接提高脉冲重频无法实现传感",
                    ],
                    nextweek: [
                        "解决传感距离问题",
                        "量化扰动大小",
                        "购买高速采集卡",
                    ],
                },
                {
                    timestamp: "23-10-27",
                    thisweek: [
                        "使用4Ω3W小喇叭+信号源简单模拟振动源",
                        "完成500m传感距离下10m空间分辨率的传感，可显著观察到传感光纤对应位置喇叭不同频率的对应振动",
                    ],
                    nextweek: [
                        "解决传感距离问题",
                        "量化扰动大小",
                    ],
                },
                {
                    timestamp: "23-10-27",
                    thisweek: [
                        "完成基于巴伦器件的平衡探测采数",
                        "修改算法使其适用于平衡探测结果，发现IQ解调在该场景下存在问题，使用Hilbert变换进行替代",
                    ],
                    nextweek: [
                        "解决振动源问题",
                    ],
                },
                {
                    timestamp: "23-10-13",
                    thisweek: [
                        "迁移实验装置至407，结果无明显改善",
                        "在二级EDFA后添加FP腔滤波器，探测结果显著稳定",
                        "在500m静态测试数据中完成相位解算算法",
                    ],
                    nextweek: [
                        "解决振动源问题",
                        "使用巴伦器件进行平衡探测",
                    ],
                },
                {
                    timestamp: "23-09-15",
                    thisweek: [
                        "粘贴光纤、排查光路不稳定问题，怀疑是超导探测器影响"
                    ],
                    nextweek: [
                        "解决振动源问题",
                    ],
                },
                {
                    timestamp: "23-09-08",
                    thisweek: [
                        "实现抑制相干涨落算法，10kHz频谱峰仍然存在",
                        "发现PZT使用存在问题，粘贴光纤不稳、无高电压驱动"
                    ],
                    nextweek: [
                        "解决振动源问题",
                        "尝试使用徐昱师兄基于FPGA的波形模式进行采数"
                    ],
                },
                {
                    timestamp: "23-09-01",
                    thisweek: [
                        "使用IQ方法解析相位，频谱上存在10kHz高峰，待确认问题",
                        "调研抑制相干涨落算法",
                    ],
                    nextweek: [
                        "实现相干涨落算法",
                        "尝试使用徐昱师兄基于FPGA的波形模式进行采数"
                    ],
                },
                {
                    timestamp: "23-08-25",
                    thisweek: ["单模EDFA不支持低频，厂家给出最低120kHz，购买500m光纤，完成160kHz重频双EDFA的下测试，使用示波器采数",],
                    nextweek: [
                        "写算法解析波形特征",
                        "尝试使用徐昱师兄基于FPGA的波形模式进行采数"
                    ],
                },
                {
                    timestamp: "23-08-11",
                    thisweek: ["EDFA直流光下正常工作，在20kHz重频下无稳定输出",],
                    nextweek: ["和厂家确定问题"],
                },
                {
                    timestamp: "23-07-28",
                    thisweek: [
                        "EDFA到货，测试无出光，上位机软件报错0x2 0x42，已送厂家返修",
                        "测试对比了3G、6G、8G带宽差分巴伦器件，6G、8G器件输出波形相似，基本符合预期，3G输出异常，通过计算模拟认为可能是3G器件中两个差分端口存在衰减不一致问题"
                    ],
                },
                {
                    timestamp: "23-07-14",
                    thisweek: ["完成5km测试实验，使用Thorlabs EDFA100S无法完成基于功率的相干探测OTDR搭建，使用单光子探测确认了较差空间分辨率下的探测可行性","差分转单端巴伦器件存在问题，初步定位是线圈短路"],
                    nextweek: ["采购测试新的巴伦器件","高速采集卡咨询采购"],
                },
                {
                    timestamp: "23-07-07",
                    thisweek: ["调试示波器采数程序", "购买压电陶瓷振动器、光纤盘", "整理5km测试方案"],
                    nextweek: ["进行5km测试实验","高速采集卡咨询采购"],
                },
                {
                    timestamp: "23-06-30",
                    thisweek: ["整理φ-OTDR初步实验方案"],
                    nextweek: ["跑通示波器采数程序", "借用或购买压电陶瓷振动器"],
                },
            ],
        },
        {
            title: "星地TF-QKD地面验证实验",
            progress: [
                {
                    timestamp: "2023-07-17",
                    milestone: "转向基于EOM的调频方案",
                },
                {
                    timestamp: "2023-03",
                    milestone: "相位估算与误码率关系理论计算",
                },
                {
                    timestamp: "2023-02",
                    milestone: "频谱仪采数程序",
                },
                {
                    timestamp: "2022",
                    milestone: "多普勒频移计算",
                },
            ],
            inprogress: ["QXNLL刷固件及可拆卸激光器模块"],
            lowPrio: ["LD替换超稳光的本地测试","基于示波器的相位估算问题", "超导使用合束器的理论效率计算"],
            timeline: [
                {
                    timestamp: "23-11-10",
                    thisweek: [
                        "使用ADCMT6166驱动LD补充相噪测试（ITC4001做温控），确认半导体所激光器性能优于航大华力，前期激光器相噪主要受ITC4001电流噪声影响",
                        "rio激光器符合datasheet，输出稳定性要求环境温度稳定",
                        "采购20G以上射频线缆"
                    ],
                    nextweek: [
                        "DA板使用",
                    ],
                },
                {
                    timestamp: "23-11-03",
                    thisweek: [
                        "讨论放大器和电源需求",
                        "RIO频率长漂问题是温控不好27->31度，环境温度波动大，温度控不住",
                        "已经收到一支航大华力激光器，稳定性±6MHz，展宽1MHz",
                        "航大华力相噪测试中，提供的驱动模块优于ITC4001驱动，待排查问题",
                        "采购AD5791评估板"
                    ],
                    nextweek: [
                        "与rio厂家沟通",
                        "补充LD相噪测试"
                    ],
                },
                {
                    timestamp: "23-10-27",
                    thisweek: [
                        "使用5位半国产电源驱动VCO测试展宽1MHz",
                        "两支RIO激光器拍频展宽500kHz、1天频率长漂约280MHz，相噪测试符合预期",
                        "使用超导DA源驱动VCO，展宽200kHz，与50Ω负载相当"
                    ],
                    nextweek: [
                        "排查RIO激光器长漂问题",
                        "VCO相关测试",
                        "采购AD5791评估板"
                    ],
                },
                {
                    timestamp: "23-10-20",
                    thisweek: [
                        "VCO偏差GHz两个频点调制10次，短时偏差约200kHz（可重复性）",
                        "两支RIO激光器拍频展宽500kHz、1天频率长漂约280MHz，相噪测试符合预期",
                    ],
                    nextweek: [
                        "排查RIO激光器长漂问题",
                        "VCO相关测试"
                    ],
                },
                {
                    timestamp: "23-10-13",
                    thisweek: [
                        "VCO温控结构组装，温控精度达到±5mk，使用ADCMT6166驱动，展宽200kHz",
                        "仿真需求文档讨论",
                    ],
                    nextweek: [
                        "等wmy给具体接口文档",
                        "测试RIO激光器",
                        "VCO重复性测试"
                    ],
                },
                {
                    timestamp: "23-09-29",
                    thisweek: [
                        "VCO结构、热敏电阻到货",
                        "讨论仿真方案",
                        "调研电压源、询价2通道约12w一台",
                        "微波源无输出时间与调制频率无关，无输出时间结束即调制到目标频率"
                    ],
                    nextweek: [
                        "测试RIO激光器",
                        "VCO相关测试"
                    ],
                },
                {
                    timestamp: "23-09-15",
                    thisweek: [
                        "TEC到货",
                        "VCO温控结构投产",
                        "整理不同方案、问题、需求讨论完成",
                        "中星联华微波源使用外部触发存在70us无输出时间"
                    ],
                    nextweek: [
                        "讨论仿真方案",
                        "测试RIO激光器",
                        "确认微波源无输出相关性能",
                    ],
                },
                {
                    timestamp: "23-09-08",
                    thisweek: [
                        "VCO室温环境下10分钟频率漂移100kHz量级",
                        "RIO激光器跑通上位机指令",
                        "模拟轨道数据评估调制深度影响，线性插值1秒间隔频率偏差100kHz量级",
                    ],
                    nextweek: [
                        "讨论仿真方案",
                        "测试RIO激光器",
                        "VCO温控方案",
                    ],
                },
                {
                    timestamp: "23-09-01",
                    thisweek: [
                        "完善仿真方案，v0.4",
                        "准备模拟轨道数据",
                        "RIO激光器已到货",
                        "VCO到货",
                    ],
                    nextweek: [
                        "讨论仿真方案",
                        "测试VCO",
                        "测试RIO激光器",
                        "使用高精度/模拟轨道数据模拟采样深度影响"
                    ],
                },
                {
                    timestamp: "23-08-25",
                    thisweek: [
                        "讨论仿真方案",
                        "使用34470A万用表，测量±1e-5稳定性，跑通上位机控制程序",
                        "使用ADCMT6166电压源，万用表测得10min单点稳定性±2e-5，调制深度1000",
                        "使用模拟轨道数据+线性插值模拟采样深度对整体调制频差影响",
                    ],
                    nextweek: [
                        "讨论仿真方案",
                        "寻找调制深度更高的电压源",
                        "使用高精度/模拟轨道数据模拟采样深度影响"
                    ],
                },
                {
                    timestamp: "23-08-18",
                    thisweek: [
                        "整理仿真需求和接口文档",
                        "拿到SMA100B的SMAB-K724的30天试用license",
                        "采购VCO EV-ADF5079测试板卡",
                        "使用实际轨道数据+线性插值模拟采样深度对整体调制频差影响，1Sa/s在300kHz内，峰值1.3Mhz",
                        "讨论DFT杂峰计算问题，结论是不需要深究对数纵坐标下杂峰问题"
                    ],
                    nextweek: [
                        "讨论仿真方案",
                        "基于高精度程控电压源和宽带VCO方案",
                        "使用高精度/模拟轨道数据模拟采样深度影响"
                    ],
                },
                {
                    timestamp: "23-08-11",
                    thisweek: [
                        "Dwell time 2ms条件下扫频可能出现ALC报错的原因是blanking导致，uninterrupted模式动态范围受限，大约2-3GHz",
                    ],
                    nextweek: [
                        "整理仿真需求和接口文档",
                        "基于高精度程控电压源和宽带VCO方案",
                        "询问SMA100B的SMAB-K724是软件激活还是硬件激活"
                    ],
                },
                {
                    timestamp: "23-07-28",
                    thisweek: [
                        "测试了ADF4372，可以输出单频信号，调频功能需要开发",
                        "测试了中星联华SLFS24A-H微波源，列表模式调制深度（4096个点）不足，无法满足预期",
                        "基于80GSaps示波器初步完成对微波源性能验证手段，在6.4ms采样范围内>10kHz频率分辨率",
                        "为R&S SMA100B微波源编写适配扫频文件，在Dwell time最低2ms间隔实现无报错扫频，但输出仍存在问题",
                    ],
                    nextweek: [
                        "整理仿真需求和接口文档",
                        "探究Dwell time 2ms条件下扫频可能出现ALC报错的原因，解决扫频后半部分输出消失问题",
                        "基于高精度程控电压源和宽带VCO方案"
                    ],
                },
                {
                    timestamp: "23-07-21",
                    thisweek: [
                        "讨论基于IQ调制的EOM移频方案，确定电子学需求",
                        "编写仿真代码（未完成）",
                    ],
                    nextweek: ["编写仿真代码", "测试中信联华微波源、ADF4372"],
                },
                {
                    timestamp: "23-07-14",
                    thisweek: [
                        "调研QKD仿真方法，编写仿真代码（未完成）",
                    ],
                    nextweek: ["编写仿真代码", "替换超稳光的本地测试"],
                },
                {
                    timestamp: "23-07-07",
                    thisweek: [
                        "讨论整理了基于EOM的调制方案可行性",
                        "QXNLL寄回，沟通使用可拆卸模块测试",
                        "激光器相噪关系计算",
                    ],
                    nextweek: ["完善软件仿真框架", "替换超稳光的本地测试"],
                },
                {
                    timestamp: "23-06-30",
                    thisweek: [
                        "国产激光器QXNLL问题为上位机版本错误",
                        "测试了QXNLL等性能，调制幅度略小，调制步长不满足需求，相噪与rio相当，中心波长稳定性、可重复性良好",
                        "暂缓基于示波器的相位估算问题",
                    ],
                    nextweek: ["讨论国产蝶形封装激光器可行性", "替换超稳光的本地测试"],
                },
            ],
        },
        {
            title: "大语言模型部署与微调",
            progress: [
                {
                    timestamp: "23-09-30",
                    milestone: "基于ChatGLM2、FastGPT部署本地知识库项目"
                },
                {
                    timestamp: "23-08-11",
                    milestone: "基于ChatGLM2、闻达，部署类ChatPDF服务"
                },
                {
                    timestamp: "23-07-17",
                    milestone: "基于LXD的GPU开发环境配置"
                },
                {
                    timestamp: "23-06-29",
                    milestone: "服务器系统环境配置"
                },
            ],
            inprogress: [],
            lowPrio: [],
            isLowPrio: true,
            timeline: [
                {
                    timestamp: "23-09-29",
                    thisweek: [
                        "基于ChatGLM2、FastGPT部署本地知识库项目，使用MongoDB作为后端数据库，使用Hugo编写相关使用文档",
                    ],
                },
                {
                    timestamp: "23-08-11",
                    thisweek: [
                        "尝试部署langchain-ChatGLM、闻达、gpt-academic，调通基于闻达和gpt-academic的类ChatPDF功能，对比ChatGLM、ChatGLM2模型性能差异",
                        "基于ChatGLM2、闻达部署类ChatPDF服务"
                    ],
                },
                {
                    timestamp: "23-08-04",
                    thisweek: ["部署langchain-ChatGLM，存在待修改bug"],
                },
                {
                    timestamp: "23-07-28",
                    thisweek: [
                        "整理开源LLM和社区项目信息",
                        "服务器报销"
                    ],
                    nextweek: ["部署附带知识库的LLM项目"],
                },
                {
                    timestamp: "23-07-21",
                    thisweek: ["完成基于LXD的GPU开发环境配置，整理文档","迁移基于校友企业OpenAI API的院内访问共享项目到服务器"],
                },
                {
                    timestamp: "23-07-21",
                    thisweek: ["完成基于LXD的GPU开发环境配置，整理文档","迁移基于校友企业OpenAI API的院内访问共享项目到服务器"],
                },
                {
                    timestamp: "23-07-14",
                    thisweek: ["配置基于LXC的GPU开发虚拟环境镜像模板", "配置LDAP服务及自助密码服务"],
                },
            ],
        },
        {
            title: "其他",
            inprogress: [],
            timeline: [
                {
                    timestamp: "23-07-07",
                    thisweek:["从Endnote迁移文献至Zotero，配置<a href='https://zotero.yuany3721.site/zotero/'>WebDav服务器同步<a/>"]
                },
            ],
        },
    ]

export default planItems;