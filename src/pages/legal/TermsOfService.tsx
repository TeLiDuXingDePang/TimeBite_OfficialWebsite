import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <div className="bg-sandstone min-h-screen pt-24 pb-16">
            <div className="container-custom max-w-4xl">
                <motion.div
                    className="bg-white shadow-md rounded-lg p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-truffle">使用条款</h1>

                    <div className="prose prose-truffle max-w-none">
                        <p className="text-lg mb-6">
                            最后更新日期：{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">1. 接受条款</h2>
                        <p>
                            欢迎使用「食光机」（"我们"、"我们的"或"本应用"）。本使用条款（"条款"）构成您与我们之间关于您使用我们的应用程序、网站和服务（统称"服务"）的法律协议。通过访问或使用我们的服务，您表示您已阅读、理解并同意受这些条款的约束。如果您不同意这些条款的任何部分，请停止使用我们的服务。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">2. 服务说明</h2>
                        <p>
                            「食光机」是一款智能厨房管理应用，旨在帮助用户管理食材库存、获取菜谱推荐、追踪营养摄入等。我们的服务可能包括但不限于：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li>食材识别与库存管理</li>
                            <li>个性化菜谱推荐</li>
                            <li>营养数据分析与可视化</li>
                            <li>食材购物清单生成</li>
                            <li>多设备数据同步</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">3. 用户账户</h2>
                        <p>
                            使用我们的某些服务可能需要创建用户账户。您负责维护您的账户信息的准确性和安全性，包括您的密码。您同意及时更新账户信息，以确保我们能够联系您。您应对使用您的账户进行的所有活动负责，无论这些活动是否得到您的授权。如发现任何未经授权使用您账户的情况，请立即通知我们。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">4. 用户行为规范</h2>
                        <p>
                            在使用我们的服务时，您同意：
                        </p>
                        <ul className="list-disc pl-6 my-4 space-y-2">
                            <li>遵守所有适用的法律法规</li>
                            <li>不发布、上传或传播任何非法、有害、威胁、滥用、骚扰、诽谤、侵犯隐私、冒犯他人或其他不适当的内容</li>
                            <li>不从事可能损害、禁用、过度负担或损害我们服务的活动</li>
                            <li>不尝试未经授权访问、篡改或使用服务的任何部分</li>
                            <li>尊重其他用户的权利和隐私</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">5. 知识产权</h2>
                        <p>
                            「食光机」及其内容、功能和特性是我们及我们的许可方的财产，受著作权、商标和其他知识产权法律保护。未经我们明确许可，您不得复制、修改、创建衍生作品、公开展示、表演、重新发布、下载、存储或传输服务中的任何材料。
                        </p>
                        <p className="mt-2">
                            对于您提交或上传到服务的内容（如图片、评论等），您授予我们非排他性、免版税、全球性的许可，以使用、复制、修改、公开展示、创建衍生作品和分发该内容，用于提供和改进我们的服务。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">6. 免责声明</h2>
                        <p>
                            「食光机」提供的服务"按原样"和"按可用性"提供，不作任何明示或暗示的保证。我们不保证服务将无中断、安全或无错误，也不保证服务中的错误将被纠正。我们对通过服务获取的任何信息的准确性、完整性或可靠性不作任何保证。
                        </p>
                        <p className="mt-2">
                            特别是，我们的食材识别和营养分析功能仅作为信息参考，不应被视为专业营养或健康建议的替代品。用户应自行判断并酌情咨询专业人士。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">7. 责任限制</h2>
                        <p>
                            在法律允许的最大范围内，「食光机」及其管理人员、董事、员工、代理人或关联公司对因使用或无法使用我们的服务而产生的任何直接、间接、附带、特殊、惩罚性或后果性损害不承担责任，无论是基于保证、合同、侵权（包括疏忽）、产品责任或其他法律理论，也无论我们是否被告知此类损害的可能性。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">8. 条款修改</h2>
                        <p>
                            我们保留不时修改这些条款的权利。修改后的条款将在我们的网站或应用程序上发布，并在发布时立即生效。继续使用我们的服务将视为您接受修改后的条款。如有重大变更，我们将通过应用内通知或其他合适的方式通知您。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">9. 终止</h2>
                        <p>
                            我们可以在任何时候，以任何理由，包括您违反这些条款，暂停或终止您对我们服务的访问，而无需事先通知。在终止后，您使用服务的权利将立即停止，且我们可能会禁用您的账户和访问权限。
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4 text-truffle">10. 联系我们</h2>
                        <p>
                            如您对本使用条款有任何疑问或顾虑，请通过以下方式联系我们：
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

export default TermsOfService; 