
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
            inprogress: ["EDFA采购"],
            lowPrio:["高速采集卡咨询采购"],
            timeline: [
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
            inprogress: ["QXNLL刷固件及可拆卸激光器模块","rio激光器采购"],
            lowPrio: ["LD替换超稳光的本地测试","基于示波器的相位估算问题", "超导使用合束器的理论效率计算"],
            timeline: [
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
                    timestamp: "23-07-17",
                    milestone: "基于LXD的GPU开发环境配置"
                },
                {
                    timestamp: "23-06-29",
                    milestone: "服务器系统环境配置"
                },
            ],
            inprogress: ["服务器报销"],
            lowPrio: [],
            isLowPrio: true,
            timeline: [
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