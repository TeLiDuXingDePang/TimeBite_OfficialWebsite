import { motion } from 'framer-motion';

const CookiePolicy = () => {
    return (
        <div className="bg-sandstone min-h-screen pt-24 pb-16">
            <div className="container-custom max-w-4xl">
                <motion.div
                    className="bg-white shadow-md rounded-lg p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-truffle">数据存储声明</h1>

                    <div className="prose prose-truffle max-w-none">
                        <p className="text-lg mb-6">
                            最后更新日期：{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">什么是小程序数据存储？</h2>
                        <p>
                            「食光机」作为一款微信小程序，使用微信平台提供的数据存储机制来保存用户数据和设置。这些存储机制包括本地缓存（Storage）和云端存储，用于保存您的偏好设置、应用状态和其他必要信息，以提供个性化的用户体验和保证应用功能的正常运行。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">我们如何使用数据存储</h2>
                        <p>
                            「食光机」通过微信小程序的存储功能来提供、定制、评估和改进我们的服务。以下是我们使用数据存储的主要方式：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li><strong>基本功能存储：</strong>这些数据对于提供我们的服务和功能是必不可少的，例如用户登录状态、授权信息等，确保您每次打开小程序时不需要重新登录。</li>
                            <li><strong>用户偏好存储：</strong>这些数据使我们能够记住您的设置和选择（如语言偏好、界面布局、食材分类方式等），提供更个性化的体验。</li>
                            <li><strong>使用分析数据：</strong>这些数据帮助我们了解用户如何与我们的小程序互动，从而改进用户体验和解决问题，例如功能使用频率、页面访问路径等。</li>
                            <li><strong>食材和饮食数据：</strong>这些是您在使用小程序过程中生成的数据，如食材库存、购物清单、饮食记录等，是提供核心服务的基础。</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">我们存储的具体数据类型</h2>
                        <p>以下是「食光机」小程序存储的主要数据类型及其用途：</p>

                        <table className="w-full border-collapse border border-wheat border-opacity-20 my-6">
                            <thead>
                                <tr className="bg-avocado bg-opacity-10">
                                    <th className="border border-wheat border-opacity-20 p-3 text-left">数据类型</th>
                                    <th className="border border-wheat border-opacity-20 p-3 text-left">存储位置</th>
                                    <th className="border border-wheat border-opacity-20 p-3 text-left">目的</th>
                                    <th className="border border-wheat border-opacity-20 p-3 text-left">保留期限</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-wheat border-opacity-20 p-3">登录凭证</td>
                                    <td className="border border-wheat border-opacity-20 p-3">本地缓存</td>
                                    <td className="border border-wheat border-opacity-20 p-3">维持用户登录状态</td>
                                    <td className="border border-wheat border-opacity-20 p-3">会话结束或失效前</td>
                                </tr>
                                <tr>
                                    <td className="border border-wheat border-opacity-20 p-3">用户设置</td>
                                    <td className="border border-wheat border-opacity-20 p-3">本地缓存/云端</td>
                                    <td className="border border-wheat border-opacity-20 p-3">存储界面偏好、通知设置等</td>
                                    <td className="border border-wheat border-opacity-20 p-3">账户存续期间</td>
                                </tr>
                                <tr>
                                    <td className="border border-wheat border-opacity-20 p-3">食材数据</td>
                                    <td className="border border-wheat border-opacity-20 p-3">云端数据库</td>
                                    <td className="border border-wheat border-opacity-20 p-3">存储用户的食材库存信息</td>
                                    <td className="border border-wheat border-opacity-20 p-3">用户主动删除前</td>
                                </tr>
                                <tr>
                                    <td className="border border-wheat border-opacity-20 p-3">饮食记录</td>
                                    <td className="border border-wheat border-opacity-20 p-3">云端数据库</td>
                                    <td className="border border-wheat border-opacity-20 p-3">记录用户的饮食历史和营养摄入</td>
                                    <td className="border border-wheat border-opacity-20 p-3">用户主动删除前</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">管理您的数据</h2>
                        <p>
                            作为微信小程序用户，您可以通过以下方式管理「食光机」存储的数据：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li><strong>应用内设置：</strong>在「食光机」的"设置"或"个人中心"页面，您可以查看和管理个人数据及偏好设置。</li>
                            <li><strong>微信小程序授权管理：</strong>通过微信"设置"→"隐私"→"授权管理"，您可以查看并管理授予「食光机」的权限。</li>
                            <li><strong>清除缓存：</strong>在微信中长按小程序图标，选择"设置"，然后点击"清除缓存"可删除本地存储的临时数据。</li>
                            <li><strong>账户注销：</strong>如果您希望完全删除您的数据，可以通过应用内的账户注销功能，我们将按照您的请求删除或匿名化处理您的个人数据。</li>
                        </ul>

                        <p className="my-4">
                            请注意，清除缓存或撤销权限可能会影响「食光机」的某些功能正常使用。某些核心数据（如食材记录）存储在云端，清除本地缓存不会删除这些数据。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">与微信平台的数据共享</h2>
                        <p>
                            作为微信生态的一部分，「食光机」运行在微信平台上，某些基本信息（如访问日志、崩溃报告）会被微信平台收集以保障服务质量和安全。这些数据的处理受微信的隐私政策约束。我们建议您阅读微信的隐私政策以了解更多信息。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">数据存储声明更新</h2>
                        <p>
                            我们可能会不时更新本数据存储声明，以反映我们数据处理方式的变化或响应法规要求的更新。更新后的声明将在我们的小程序和网站上发布，并在发布时立即生效。我们鼓励您定期查看本声明，以了解我们如何处理和保护您的数据。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">联系我们</h2>
                        <p>
                            如您对我们的数据存储和使用有任何疑问或建议，请通过以下方式联系我们：
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

export default CookiePolicy; 