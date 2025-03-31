import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdFoodBank, MdOutlineNotificationsActive, MdShoppingCart } from 'react-icons/md';
import { BsCalendar3, BsGraphUp, BsPeopleFill } from 'react-icons/bs';
import { FaVideo, FaBrain, FaCut } from 'react-icons/fa';

// 功能项组件
interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const FeatureItem = ({ icon, title, description, index }: FeatureItemProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            ref={ref}
            className="bg-sandstone p-6 rounded-lg shadow-sm border border-wheat border-opacity-20 hover:border-opacity-40 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-3xl mb-4 text-avocado">{icon}</div>
            <h3 className="text-xl font-bold mb-3 text-truffle">{title}</h3>
            <p className="text-truffle text-opacity-80">{description}</p>
        </motion.div>
    );
};

const Features = () => {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // 功能矩阵数据
    const kitchenFeatures = [
        {
            icon: <MdFoodBank />,
            title: "AI食材识别",
            description: "智能识别食材，实现建档自动算保质期"
        },
        {
            icon: <MdOutlineNotificationsActive />,
            title: "临期预警系统",
            description: "过期前智能提醒，推荐'清库存'创意菜谱"
        },
        {
            icon: <MdShoppingCart />,
            title: "一键补货清单",
            description: "同步购物平台，比价采购节省时间"
        }
    ];

    const dietFeatures = [
        {
            icon: <BsCalendar3 />,
            title: "可视化饮食日历",
            description: "智能安排早中晚餐，冲突检测规避过敏风险"
        },
        {
            icon: <BsGraphUp />,
            title: "多维健康报告",
            description: "环形图/折线图/条形图分析营养缺口"
        },
        {
            icon: <BsPeopleFill />,
            title: "全家模式",
            description: "儿童/孕妇/健身专属方案，一人规划全家受益"
        }
    ];

    const cookingFeatures = [
        {
            icon: <FaVideo />,
            title: "视频化菜谱库",
            description: "关键步骤6秒动图示范，火候时间精准提示"
        },
        {
            icon: <FaBrain />,
            title: "智能替代方案",
            description: "缺食材时推荐替代品（如酸奶→牛奶+柠檬汁）"
        },
        {
            icon: <FaCut />,
            title: "预处理指南",
            description: "备菜顺序优化建议，节省烹饪时间"
        }
    ];

    return (
        <section id="功能" className="section-padding bg-gradient-to-b from-sandstone to-sandstone relative">
            {/* 自然纹理背景 */}
            <div className="absolute inset-0 natural-texture"></div>

            <div className="container-custom relative">
                <div ref={sectionRef} className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-truffle relative inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="relative">
                            核心功能模块
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-1 bg-avocado rounded"
                                initial={{ width: 0 }}
                                animate={sectionInView ? { width: "100%" } : { width: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            ></motion.span>
                        </span>
                    </motion.h2>
                </div>

                {/* 模块1：智能厨房中枢 */}
                <div className="mb-20">
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-10 text-truffle text-center"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        三步告别食材浪费
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {kitchenFeatures.map((feature, index) => (
                            <FeatureItem
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="mt-10 max-w-lg mx-auto text-center text-sm text-truffle text-opacity-70">
                        <p>手机扫描冰箱食材 → 智能识别食材、录入库存、菜谱推荐</p>
                    </div>
                </div>

                {/* 模块2：个性化饮食规划 */}
                <div className="mb-20">
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-10 text-truffle text-center"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        你的私人营养顾问
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {dietFeatures.map((feature, index) => (
                            <FeatureItem
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="mt-10 max-w-lg mx-auto text-center text-sm text-truffle text-opacity-70">
                        <p>营养跟踪图表 + 本周饮食计划安排</p>
                    </div>
                </div>

                {/* 模块3：极简烹饪体验 */}
                <div>
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-10 text-truffle text-center"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        从厨房小白到料理达人
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cookingFeatures.map((feature, index) => (
                            <FeatureItem
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="mt-10 max-w-lg mx-auto text-center text-sm text-truffle text-opacity-70">
                        <p>菜谱详情页分层折叠设计 → 用户可快速定位所需信息</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features; 