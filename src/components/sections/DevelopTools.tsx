import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaTools, FaLightbulb } from 'react-icons/fa';
import traeLogoImg from '../../assets/trae-logo.svg';

const DevelopTools = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="工具" className="section-padding bg-white relative">
            {/* 背景装饰元素 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 top-40 w-72 h-72 rounded-full bg-wheat opacity-5"></div>
                <div className="absolute left-10 bottom-20 w-60 h-60 rounded-full bg-avocado opacity-10"></div>
            </div>

            <div ref={ref} className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6 text-truffle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        开发工具
                    </motion.h2>
                    <motion.p
                        className="text-truffle text-opacity-70 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        借助AI工具，让创意不再受限于技术
                    </motion.p>
                </div>

                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm p-8 md:p-12 rounded-lg border border-wheat border-opacity-20 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-truffle">我的创作工具</h3>

                            <div className="mb-8 flex items-start">
                                <div className="flex-shrink-0 mr-5">
                                    <FaCode className="text-avocado text-3xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-truffle mb-2">Trae AI IDE</h4>
                                    <p className="text-truffle text-opacity-80 leading-relaxed">
                                        食光机项目使用 <a href="https://trae.ai" target="_blank" rel="noopener noreferrer" className="text-tomato underline">Trae 海外版</a> 进行开发。通过自然语言就能进行编程，开发应用，让我这样不是很懂编码的，也能通过文本描述来实现自己的创意。您现在浏览的这个官网也是完全使用Trae开发而成，从页面设计到交互特效，全程由AI辅助完成。
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 flex items-start">
                                <div className="flex-shrink-0 mr-5">
                                    <FaTools className="text-avocado text-3xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-truffle mb-2">扣子平台智能体</h4>
                                    <p className="text-truffle text-opacity-80 leading-relaxed">
                                        借助扣子平台搭建的工作流智能体，来自动化生成高质量的菜谱内容数据和风格统一的菜谱封面。这使得我可以大规模自动化生成食谱信息，同时保持一致的视觉设计风格，让用户获得更加专业的使用体验。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-5">
                                    <FaLightbulb className="text-avocado text-3xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-truffle mb-2">豆包视觉大模型</h4>
                                    <p className="text-truffle text-opacity-80 leading-relaxed">
                                        项目集成了豆包视觉大模型 Doubao-1.5-vision-pro-32k，用于实现食材识别、营养价值分析、食材知识普及以及处理小贴士等功能。通过这个强大的视觉模型，用户只需拍摄照片，就能获取食材的详细信息，帮助用户更好地了解和利用手中的食材。
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex justify-center flex-col items-center"
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="mb-8 text-center">
                                <img src={traeLogoImg} alt="Trae AI IDE" className="max-w-full h-auto mb-4 mx-auto" style={{ maxHeight: '80px' }} />
                                <p className="text-truffle text-opacity-70 text-sm italic">
                                    使用 Trae AI IDE 进行开发
                                </p>
                            </div>

                            <div className="p-6 bg-wheat bg-opacity-10 rounded-lg border border-wheat border-opacity-20">
                                <h4 className="font-bold text-truffle mb-3 text-center">Trae AI IDE 特点</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-truffle text-opacity-80">
                                        <span className="bg-avocado w-2 h-2 rounded-full mr-2"></span>
                                        免费！免费！免费！
                                    </li>
                                    <li className="flex items-center text-truffle text-opacity-80">
                                        <span className="bg-avocado w-2 h-2 rounded-full mr-2"></span>
                                        自然语言生成代码
                                    </li>
                                    <li className="flex items-center text-truffle text-opacity-80">
                                        <span className="bg-avocado w-2 h-2 rounded-full mr-2"></span>
                                        AI 高度集成于 IDE 环境
                                    </li>
                                    <li className="flex items-center text-truffle text-opacity-80">
                                        <span className="bg-avocado w-2 h-2 rounded-full mr-2"></span>
                                        提供更加流畅、准确的开发体验
                                    </li>
                                </ul>
                                <div className="mt-4 text-center">
                                    <a
                                        href="https://docs.trae.ai/docs/what-is-trae?_lang=zh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-avocado hover:underline text-sm"
                                    >
                                        了解更多 Trae AI IDE →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopTools; 