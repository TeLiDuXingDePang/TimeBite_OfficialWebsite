import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaDumbbell, FaLeaf } from 'react-icons/fa';

interface SolutionCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

const SolutionCard = ({ title, description, icon, index }: SolutionCardProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            ref={ref}
            className="bg-sandstone rounded-lg p-8 shadow-md relative overflow-hidden border border-wheat border-opacity-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform rotate-45">
                <div className="w-full h-full bg-avocado rounded-full"></div>
            </div>

            <div className="text-4xl mb-4 text-avocado">{icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-truffle">{title}</h3>
            <p className="text-truffle text-opacity-80">{description}</p>
        </motion.div>
    );
};

const Solutions = () => {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const solutions = [
        {
            icon: <FaUtensils />,
            title: "家庭主厨",
            description: "智能规划一周菜谱，全家营养均衡少操心"
        },
        {
            icon: <FaDumbbell />,
            title: "健身人群",
            description: "高蛋白食谱推荐，自动计算碳水摄入量"
        },
        {
            icon: <FaLeaf />,
            title: "环保主义者",
            description: "年度报告展示避免的食材浪费量，参与公益计划"
        }
    ];

    return (
        <section id="方案" className="section-padding bg-sandstone relative">
            {/* 装饰元素 */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-wheat opacity-10"
                    animate={{
                        y: [0, 15, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute right-10 bottom-20 w-60 h-60 rounded-full bg-tomato opacity-5"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container-custom relative">
                <div ref={sectionRef} className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6 text-truffle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        场景化解决方案
                    </motion.h2>
                    <motion.p
                        className="text-truffle text-opacity-70 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        不同群体，相同便捷。「食光机」为各类用户提供定制化体验。
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={solution.title}
                            icon={solution.icon}
                            title={solution.title}
                            description={solution.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions; 