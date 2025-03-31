import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaGraduationCap, FaRobot } from 'react-icons/fa';
import { MdExplore, MdOutlineRocketLaunch, MdFavoriteBorder, MdLightbulb } from 'react-icons/md';
import myselfAvatar from '../../assets/images/myself-avatar.png';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="开发者" className="section-padding bg-gradient-to-b from-sandstone to-white relative">
            {/* 背景装饰元素 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-20 top-40 w-72 h-72 rounded-full bg-avocado opacity-5"></div>
                <div className="absolute right-10 bottom-20 w-60 h-60 rounded-full bg-wheat opacity-10"></div>
            </div>

            <div ref={ref} className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6 text-truffle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        开发者
                    </motion.h2>
                    <motion.p
                        className="text-truffle text-opacity-70 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        由特立独行的胖倾力打造，为AI for Code应用赛道而生
                    </motion.p>
                </div>

                {/* 团队介绍卡片 */}
                <motion.div
                    className="max-w-3xl mx-auto p-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-sm border border-wheat border-opacity-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 rounded-full bg-avocado bg-opacity-20 overflow-hidden">
                                <img src={myselfAvatar} alt="特立独行的胖" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-3 text-truffle">特立独行的胖</h3>

                            <div className="text-truffle text-opacity-80 mb-4">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex items-start">
                                        <MdLightbulb className="text-avocado text-xl mt-0.5 mr-2 flex-shrink-0" />
                                        <p>热爱尝试AI新技术的创新爱好者，特别爱玩AI编程工具，靠"人工智能"弥补我的"<span className="line-through">人工智障</span>"，硬是把创意变成了现实。</p>
                                    </div>

                                    <div className="flex items-start">
                                        <MdFavoriteBorder className="text-tomato text-xl mt-0.5 mr-2 flex-shrink-0" />
                                        <p>喜欢用AI来开发一些好玩有趣、实用的项目，希望借助AI来解决生活中的实际问题。</p>
                                    </div>

                                    <div className="flex items-start">
                                        <MdOutlineRocketLaunch className="text-wheat text-xl mt-0.5 mr-2 flex-shrink-0" />
                                        <p>「食光机」的创意灵感来源自"体重管理年"和AI，这个创意不仅有趣，还能减少食材浪费、提升烹饪效率。</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
                                <span className="inline-flex items-center bg-tomato bg-opacity-10 text-tomato px-3 py-1 rounded-full text-sm">
                                    <FaGraduationCap className="mr-2 text-xs" />
                                    学生
                                </span>
                                <span className="inline-flex items-center bg-avocado bg-opacity-10 text-avocado px-3 py-1 rounded-full text-sm">
                                    <FaLightbulb className="mr-2 text-xs" />
                                    创意爱好者
                                </span>
                                <span className="inline-flex items-center bg-wheat bg-opacity-10 text-truffle px-3 py-1 rounded-full text-sm">
                                    <MdExplore className="mr-2 text-xs" />
                                    AI创作探索
                                </span>
                                <span className="inline-flex items-center bg-truffle bg-opacity-10 text-truffle px-3 py-1 rounded-full text-sm">
                                    <FaRobot className="mr-2 text-xs" />
                                    AI for Code应用赛道
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 