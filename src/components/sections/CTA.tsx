import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdSmartphone, MdSecurity, MdFavorite } from 'react-icons/md';

const CTA = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="pt-8 pb-20 relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-sandstone to-wheat opacity-20"></div>
                <div className="absolute inset-0 natural-texture"></div>
            </div>

            <div ref={ref} className="container-custom relative z-10 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-12 border border-wheat border-opacity-20">
                    <div className="text-center mb-10">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4 text-truffle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            智慧厨房的未来
                        </motion.h2>
                        <motion.p
                            className="text-truffle text-opacity-70 max-w-xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            「食光机」致力于用科技让每一份食材物尽其用，让健康饮食变得更加简单
                        </motion.p>
                    </div>

                    <motion.div
                        className="mt-8 flex flex-wrap justify-center gap-8 items-center"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {/* 多设备适配展示 */}
                        <div className="flex items-center text-truffle text-opacity-60 text-sm">
                            <MdSmartphone className="w-5 h-5 mr-2" />
                            多设备适配
                        </div>

                        {/* 隐私安全 */}
                        <div className="flex items-center text-truffle text-opacity-60 text-sm">
                            <MdSecurity className="w-5 h-5 mr-2" />
                            隐私安全认证
                        </div>

                        {/* 用户关怀 */}
                        <div className="flex items-center text-truffle text-opacity-60 text-sm">
                            <MdFavorite className="w-5 h-5 mr-2" />
                            用户数据永不售卖
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA; 