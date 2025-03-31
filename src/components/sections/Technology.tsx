import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaChartLine, FaChartBar } from 'react-icons/fa';

interface TechCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

const TechCard = ({ title, description, icon, index }: TechCardProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            ref={ref}
            className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-sm border border-wheat border-opacity-10 hover:border-opacity-30 transition-all hover:shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-3xl mb-4 text-truffle">{icon}</div>
            <h3 className="text-xl font-bold mb-3 text-truffle">{title}</h3>
            <p className="text-truffle text-opacity-80 text-sm">{description}</p>
        </motion.div>
    );
};

const Technology = () => {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const technologies = [
        {
            icon: <FaSearch />,
            title: "AI图像识别",
            description: "使用先进的AI大模型，来识别与输出食材相关信息与即时菜谱推荐"
        },
        {
            icon: <FaChartLine />,
            title: "饮食需求预测算法",
            description: "基于库存量+饮食习惯的智能推荐系统，每周为您策划最合理的食谱方案"
        },
        {
            icon: <FaChartBar />,
            title: "营养可视化跟踪",
            description: "多维度图表展示营养摄入情况，动态监测健康指标变化，直观呈现饮食平衡状态"
        }
    ];

    return (
        <section id="技术" className="section-padding bg-gradient-to-b from-white to-sandstone relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-10 bottom-10 w-96 h-96 rounded-full bg-avocado opacity-5"></div>
                <div className="absolute right-0 top-20 w-60 h-60 rounded-full bg-wheat opacity-10"></div>
            </div>

            <div className="container-custom relative">
                <div ref={sectionRef} className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6 text-truffle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        重新定义智能厨房
                    </motion.h2>
                    <motion.p
                        className="text-truffle text-opacity-70 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        「食光机」的核心技术基于先进的AI大模型，为用户打造一站式厨房管理解决方案
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <TechCard
                            key={tech.title}
                            icon={tech.icon}
                            title={tech.title}
                            description={tech.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology; 