import logoIcon from '../../assets/logo-icon.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
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
        <footer className="bg-truffle text-sandstone py-16">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo区 */}
                    <div className="col-span-1">
                        <div className="flex items-center mb-4">
                            <img src={logoIcon} alt="食光机" className="h-10 brightness-200 mix-blend-lighten" />
                            <span className="ml-2 text-xl font-serif font-bold text-sandstone">食光机</span>
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed">
                            让每份食材物尽其用的<br />智慧厨房管家
                        </p>
                        <div className="mt-6 flex items-center">
                            {/* 飞书图标与文档链接 */}
                            <a
                                href="https://ecn2lbeqlqpq.feishu.cn/wiki/QW32w2ummicX0nkgq6nckbUVnse?from=from_copylink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sandstone text-opacity-80 hover:text-opacity-100 transition-all group"
                                aria-label="点击查看作品文档"
                            >
                                <span className="w-8 h-8 rounded-full border border-sandstone border-opacity-30 flex items-center justify-center transition-all group-hover:bg-wheat group-hover:border-wheat group-hover:text-truffle mr-2">
                                    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon="LarkLogoColorful">
                                        <path d="m12.924 12.803.056-.054c.038-.034.076-.072.11-.11l.077-.076.23-.227 1.334-1.319.335-.331c.063-.063.13-.123.195-.183a7.777 7.777 0 0 1 1.823-1.24 7.607 7.607 0 0 1 1.014-.4 13.177 13.177 0 0 0-2.5-5.013 1.203 1.203 0 0 0-.94-.448h-9.65c-.173 0-.246.224-.107.325a28.23 28.23 0 0 1 8 9.098c.007-.006.016-.013.023-.022Z" fill="#00D6B9"></path>
                                        <path d="M9.097 21.299a13.258 13.258 0 0 0 11.82-7.247 5.576 5.576 0 0 1-.731 1.076 5.315 5.315 0 0 1-.745.7 5.117 5.117 0 0 1-.615.404 4.626 4.626 0 0 1-.726.331 5.312 5.312 0 0 1-1.883.312 5.892 5.892 0 0 1-.524-.031 6.509 6.509 0 0 1-.729-.126c-.06-.016-.12-.029-.18-.044-.166-.044-.33-.092-.494-.14-.082-.024-.164-.046-.246-.072-.123-.038-.247-.072-.366-.11l-.3-.095-.284-.094-.192-.067c-.08-.025-.155-.053-.234-.082a3.49 3.49 0 0 1-.167-.06c-.11-.04-.221-.079-.328-.12-.063-.025-.126-.047-.19-.072l-.252-.098c-.088-.035-.18-.07-.268-.107l-.174-.07c-.072-.028-.141-.06-.214-.088l-.164-.07c-.057-.024-.114-.05-.17-.075l-.149-.066-.135-.06-.14-.063a90.183 90.183 0 0 1-.141-.066 4.808 4.808 0 0 0-.18-.083c-.063-.028-.123-.06-.186-.088a5.697 5.697 0 0 1-.199-.098 27.762 27.762 0 0 1-8.067-5.969.18.18 0 0 0-.312.123l.006 9.21c0 .4.199.779.533 1a13.177 13.177 0 0 0 7.326 2.205Z" fill="#3370FF"></path>
                                        <path d="M23.732 9.295a7.55 7.55 0 0 0-3.35-.776 7.521 7.521 0 0 0-2.284.35c-.054.016-.107.035-.158.05a8.297 8.297 0 0 0-.855.35 7.14 7.14 0 0 0-.552.297 6.716 6.716 0 0 0-.533.347c-.123.089-.243.18-.363.275-.13.104-.252.211-.375.321-.067.06-.13.123-.196.184l-.334.328-1.338 1.321-.23.228-.076.075c-.038.038-.076.073-.11.11l-.057.054a1.914 1.914 0 0 1-.085.08c-.032.028-.063.06-.095.088a13.286 13.286 0 0 1-2.748 1.946c.06.028.12.057.18.082l.142.066c.044.022.091.041.139.063l.135.06.149.067.17.075.164.07c.073.031.142.06.215.088.056.025.116.047.173.07.088.034.177.072.268.107.085.031.168.066.253.098l.189.072c.11.041.218.082.328.12.057.019.11.041.167.06.08.028.155.053.234.082l.192.066.284.095.3.095c.123.037.243.075.366.11l.246.072c.164.048.331.095.495.14.06.015.12.03.18.043.114.029.227.05.34.07.13.022.26.04.389.057a5.815 5.815 0 0 0 .994.019 5.172 5.172 0 0 0 1.413-.3 5.405 5.405 0 0 0 .726-.334c.06-.035.122-.07.182-.108a7.96 7.96 0 0 0 .432-.297 5.362 5.362 0 0 0 .577-.517 5.285 5.285 0 0 0 .37-.429 5.797 5.797 0 0 0 .527-.827l.13-.258 1.166-2.325-.003.006a7.391 7.391 0 0 1 1.527-2.186Z" fill="#133C9A"></path>
                                    </svg>
                                </span>
                                <span className="text-sm">查看作品文档</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {/* 导航链接区 */}
                            <div>
                                <h4 className="font-medium text-lg mb-4">探索</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <button
                                            onClick={() => scrollToSection('hero')}
                                            className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
                                        >
                                            首页
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection('开发者')}
                                            className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
                                        >
                                            开发者
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection('工具')}
                                            className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
                                        >
                                            工具
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection('功能')}
                                            className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
                                        >
                                            功能
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection('方案')}
                                            className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
                                        >
                                            方案
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection('技术')}
                                            className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
                                        >
                                            技术
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            {/* 法律条款 */}
                            <div>
                                <h4 className="font-medium text-lg mb-4">法律</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/privacy-policy" className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity">
                                            隐私政策
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/terms-of-service" className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity">
                                            使用条款
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/data-security" className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity">
                                            数据安全
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cookie-policy" className="text-sandstone text-opacity-80 hover:text-opacity-100 transition-opacity">
                                            数据存储声明
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 联系信息 */}
                            <div>
                                <h4 className="font-medium text-lg mb-4">联系我</h4>
                                <p className="text-sm text-sandstone text-opacity-80 mt-2">
                                    微信：19108427390
                                </p>
                                <p className="text-xs mt-4 text-sandstone text-opacity-60">
                                    我们永不售卖您的个人数据，详见<Link to="/privacy-policy" className="underline hover:text-wheat">隐私政策</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 底部版权信息 */}
                <div className="border-t border-sandstone border-opacity-20 mt-12 pt-6 text-center md:text-left md:flex justify-between items-center">
                    <p className="text-sm text-sandstone text-opacity-60">
                        © {new Date().getFullYear()} 食光机. 保留所有权利。
                    </p>
                    <p className="text-xs mt-2 md:mt-0 text-sandstone text-opacity-60">
                        由特立独行的胖倾力打造，为AI for Code应用赛道而生
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 