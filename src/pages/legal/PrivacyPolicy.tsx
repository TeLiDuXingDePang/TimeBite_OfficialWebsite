import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="bg-sandstone min-h-screen pt-24 pb-16">
            <div className="container-custom max-w-4xl">
                <motion.div
                    className="bg-white shadow-md rounded-lg p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-truffle">隐私政策</h1>

                    <div className="prose prose-truffle max-w-none">
                        <p className="text-lg mb-6">
                            最后更新日期：{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">1. 引言</h2>
                        <p>
                            欢迎使用「食光机」（"我们"、"我们的"或"本应用"）。我们非常重视您的隐私，并致力于保护您在使用我们服务时提供的个人信息。本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的信息，以及您对这些信息所享有的权利。请您在使用我们的服务前仔细阅读本政策。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">2. 我们收集的信息</h2>
                        <p>
                            在您使用「食光机」服务的过程中，我们可能会收集以下类型的信息：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li><strong>基本用户信息：</strong>包括但不限于您的姓名、联系方式、账户凭证等信息。</li>
                            <li><strong>设备信息：</strong>如设备型号、操作系统版本、应用版本等技术数据。</li>
                            <li><strong>食材信息：</strong>您通过本应用录入、拍摄或识别的食材数据。</li>
                            <li><strong>饮食偏好：</strong>您的饮食习惯、过敏源、营养需求等相关信息。</li>
                            <li><strong>使用情况：</strong>您如何使用我们的服务，如访问时间、使用频率、浏览菜谱等行为数据。</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">3. 我们如何使用您的信息</h2>
                        <p>
                            我们会将收集到的信息用于以下目的：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li>提供、维护和改进我们的服务</li>
                            <li>为您提供个性化的内容和推荐</li>
                            <li>开发新功能和产品</li>
                            <li>进行数据分析和研究</li>
                            <li>回应您的请求和提供客户支持</li>
                            <li>确保服务的安全性和保护用户权益</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">4. 信息的共享与披露</h2>
                        <p>
                            我们重视您的隐私，除以下情况外，不会与第三方共享您的个人信息：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li><strong>经您同意：</strong>在获得您的明确同意后，我们可能会与指定的第三方共享您的信息。</li>
                            <li><strong>服务提供商：</strong>我们可能会与帮助我们提供服务的合作伙伴共享必要的信息，如云存储、数据分析服务商。</li>
                            <li><strong>法律要求：</strong>如法律法规要求、政府机构请求或为保护他人权益而必需披露时。</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">5. 数据安全</h2>
                        <p>
                            我们采取合理的安全措施保护您的个人信息不被未经授权的访问、使用或披露。这些措施包括数据加密、访问控制和定期安全评估。但请注意，尽管我们努力保护您的信息，但互联网传输和电子存储不可能做到100%的安全。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">6. 您的权利</h2>
                        <p>
                            关于您的个人信息，您享有以下权利：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li>访问和查看您的个人信息</li>
                            <li>更正不准确或不完整的信息</li>
                            <li>在某些情况下删除您的个人信息</li>
                            <li>限制或反对我们处理您的信息</li>
                            <li>数据可携带性（获取您提供给我们的信息的电子副本）</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">7. 隐私政策的变更</h2>
                        <p>
                            我们可能会不时更新本隐私政策，以反映我们实践的变化或其他运营、法律和监管原因。重大变更将通过应用内通知或其他合适的方式通知您。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">8. 联系我们</h2>
                        <p>
                            如您对本隐私政策有任何疑问或顾虑，请通过以下方式联系我们：
                        </p>
                        <p className="mt-2">
                            <strong>联系方式：</strong> 微信：19108427390
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy; 