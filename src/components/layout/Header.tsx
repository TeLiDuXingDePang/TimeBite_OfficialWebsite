import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logo-icon.svg';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 监听滚动事件，改变header样式
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['首页', '开发者', '工具', '功能', '方案', '技术'];

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
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-sandstone bg-opacity-95 shadow-sm py-3' : 'py-5'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/" className="flex items-center">
                        <img src={logoIcon} alt="食光机" className="h-10" />
                        <span className="ml-2 text-xl font-serif font-bold text-truffle">食光机</span>
                    </Link>
                </motion.div>

                {/* 桌面端导航 */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => scrollToSection(item === '首页' ? 'hero' : item)}
                                className="text-truffle hover:text-avocado hover-color-transition text-base font-medium bg-transparent border-none cursor-pointer"
                            >
                                {item}
                            </button>
                        </motion.div>
                    ))}
                </nav>

                {/* 移动端菜单按钮 */}
                <button
                    className="md:hidden flex flex-col space-y-1.5"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-truffle transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-truffle transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-0.5 bg-truffle transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* 移动菜单 */}
            <div className={`md:hidden absolute w-full bg-sandstone shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
                }`}>
                <div className="container-custom flex flex-col space-y-3">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                scrollToSection(item === '首页' ? 'hero' : item);
                                setMobileMenuOpen(false);
                            }}
                            className="text-truffle hover:text-avocado text-lg py-2 border-b border-wheat border-opacity-20 text-left bg-transparent border-none cursor-pointer"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header; 