import { motion } from 'framer-motion';
import { FaLock, FaShieldAlt, FaUserShield, FaDatabase, FaExchangeAlt } from 'react-icons/fa';

const DataSecurity = () => {
    return (
        <div className="bg-sandstone min-h-screen pt-24 pb-16">
            <div className="container-custom max-w-4xl">
                <motion.div
                    className="bg-white shadow-md rounded-lg p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-truffle">数据安全</h1>

                    <div className="prose prose-truffle max-w-none">
                        <p className="text-lg mb-6">
                            最后更新日期：{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <p className="lead text-xl mb-8">
                            在「食光机」，保护您的数据安全是我们的首要任务。我们采取多层次的安全措施，确保您的个人信息和食材数据得到妥善保护。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-sandstone bg-opacity-20 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <FaLock className="text-avocado text-2xl mr-3" />
                                    <h3 className="text-lg font-bold text-truffle">数据加密</h3>
                                </div>
                                <p>
                                    所有用户数据在传输和存储过程中均采用高级加密技术，防止未经授权的访问和数据泄露。我们使用行业标准的SSL/TLS协议，确保您的信息在传输过程中的安全。
                                </p>
                            </div>

                            <div className="bg-sandstone bg-opacity-20 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <FaShieldAlt className="text-avocado text-2xl mr-3" />
                                    <h3 className="text-lg font-bold text-truffle">访问控制</h3>
                                </div>
                                <p>
                                    我们实施严格的访问控制机制，确保只有经授权的人员才能访问用户数据，且仅限于必要的业务目的。所有数据访问都会被记录和监控，以防止滥用。
                                </p>
                            </div>

                            <div className="bg-sandstone bg-opacity-20 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <FaUserShield className="text-avocado text-2xl mr-3" />
                                    <h3 className="text-lg font-bold text-truffle">账户安全</h3>
                                </div>
                                <p>
                                    我们为用户提供了多种账户保护选项，包括强密码要求和双重认证。我们鼓励用户选择强密码并定期更改，以增强账户安全性。
                                </p>
                            </div>

                            <div className="bg-sandstone bg-opacity-20 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <FaDatabase className="text-avocado text-2xl mr-3" />
                                    <h3 className="text-lg font-bold text-truffle">数据备份</h3>
                                </div>
                                <p>
                                    我们定期备份用户数据，并采用严格的灾难恢复程序，确保在发生意外情况时能够快速恢复服务和数据，最大限度减少数据丢失的风险。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold mt-10 mb-4 text-truffle">安全最佳实践</h2>
                        <p>
                            为了帮助您保护自己的账户和数据安全，我们建议采取以下措施：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li>创建强密码并定期更改</li>
                            <li>不要将您的账户信息分享给他人</li>
                            <li>在共享设备上使用后记得登出您的账户</li>
                            <li>定期检查您的账户活动，确认没有可疑操作</li>
                            <li>保持应用程序更新到最新版本</li>
                            <li>谨慎处理您收到的与我们服务相关的电子邮件或消息，特别是那些请求提供个人信息或登录凭证的</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-10 mb-4 text-truffle">数据共享与第三方</h2>
                        <p>
                            在「食光机」，我们严格控制对用户数据的访问和共享。我们仅在必要的情况下，与经过严格审查的第三方服务提供商共享数据，例如云存储和数据分析服务商。所有第三方服务提供商都必须遵守我们的安全和隐私标准，并且只能使用数据来提供我们指定的服务。
                        </p>

                        <div className="flex items-center mt-8 p-6 bg-tomato bg-opacity-10 rounded-lg">
                            <FaExchangeAlt className="text-tomato text-2xl flex-shrink-0 mr-4" />
                            <p className="m-0">
                                <strong>数据透明性承诺：</strong> 我们致力于透明度，在隐私政策中清晰说明我们如何收集、使用和保护您的数据。您有权随时查看、修改或删除我们存储的您的个人信息。我们永远不会在未经您明确同意的情况下，将您的个人数据出售给第三方。
                            </p>
                        </div>

                        <h2 className="text-xl font-bold mt-10 mb-4 text-truffle">安全漏洞报告</h2>
                        <p>
                            我们重视用户和安全研究人员的反馈，以帮助我们改进我们的安全措施。如果您发现任何潜在的安全漏洞或问题，请立即联系我们。我们会迅速调查并采取适当措施解决问题。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">联系我们</h2>
                        <p>
                            如您对我们的数据安全措施有任何疑问或建议，请通过以下方式联系我们：
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

export default DataSecurity; 