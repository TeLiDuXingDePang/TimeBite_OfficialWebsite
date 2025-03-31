import { motion } from 'framer-motion';
import heroBackground from '../../assets/hero-background.svg';
import foodIllustration from '../../assets/food-illustration.svg';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
    // 滚动到指定元素
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // 减去header高度和一些间距
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center relative overflow-hidden"
            style={{ background: `url(${heroBackground}) no-repeat center/cover` }}
        >
            {/* 渐变覆盖层 */}
            <div className="absolute inset-0 bg-gradient-to-r from-sandstone/80 to-transparent"></div>

            <div className="container-custom py-24 md:py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* 左侧文本内容 */}
                    <div className="lg:pr-8">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-display font-bold text-truffle mb-4 font-serif leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            「食光机」<br />
                            <span className="text-avocado">让每份食材物尽其用</span><br />
                            的智慧厨房管家
                        </motion.h1>

                        <motion.p
                            className="text-lg text-truffle text-opacity-80 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="inline-block mr-4 mb-2"><FaCheckCircle className="inline-block mr-2 text-avocado" />AI智能识别</span>
                            <span className="inline-block mr-4 mb-2"><FaCheckCircle className="inline-block mr-2 text-avocado" />智能推荐省心菜谱</span>
                            <span className="inline-block mr-4 mb-2"><FaCheckCircle className="inline-block mr-2 text-avocado" />健康数据全程追踪</span>
                            <span className="inline-block mr-4 mb-2"><FaCheckCircle className="inline-block mr-2 text-avocado" />家庭模式共享管理</span>
                            <span className="inline-block mb-2"><FaCheckCircle className="inline-block mr-2 text-avocado" />全方位个性化设置</span>
                        </motion.p>

                        <motion.div
                            className="text-sm text-truffle text-opacity-70 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            由特立独行的胖倾力打造，为AI for Code应用赛道而生
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <button
                                onClick={() => scrollToSection('开发者')}
                                className="btn-primary inline-flex items-center cursor-pointer"
                            >
                                了解更多
                                <FaChevronDown className="ml-2" />
                            </button>
                        </motion.div>
                    </div>

                    {/* 右侧插画 */}
                    <motion.div
                        className="relative lg:pl-8 mt-8 lg:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <img
                            src={foodIllustration}
                            alt="食材智能归类动画"
                            className="w-full max-w-lg mx-auto"
                        />
                        <motion.div
                            className="absolute -bottom-10 -left-10 w-40 h-40 bg-wheat rounded-full opacity-10 z-0"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.1, 0.15, 0.1]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute -top-10 -right-10 w-32 h-32 bg-tomato rounded-full opacity-10 z-0"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.1, 0.15, 0.1]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* 向下滚动指示器 */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <button
                    onClick={() => scrollToSection('开发者')}
                    className="flex flex-col items-center text-truffle text-opacity-70 hover:text-opacity-100 transition-all"
                >
                    <span className="text-sm mb-2">向下滚动</span>
                    <FaChevronDown className="text-xl" />
                </button>
            </motion.div>

            {/* 波浪底部装饰 */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z"
                        fill="#FAF6F0"
                        fillOpacity="0.3"
                    />
                    <path
                        d="M0,100 C240,60 480,140 720,100 C960,60 1200,140 1440,100 L1440,120 L0,120 Z"
                        fill="#FAF6F0"
                        fillOpacity="0.6"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero; 