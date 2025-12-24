// Vue 3 Composition API + TypeScript 实现交互功能

// 导航栏滚动高亮功能
function setupNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200 && pageYOffset < sectionTop + sectionHeight - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-emerald-600', 'font-semibold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-emerald-600', 'font-semibold');
            }
        });
    });
}

// 技能标签悬停效果
function setupSkillHover() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.classList.add('scale-110', 'bg-sky-200', 'text-sky-900');
        });
        tag.addEventListener('mouseleave', () => {
            tag.classList.remove('scale-110', 'bg-sky-200', 'text-sky-900');
        });
    });
}

// 项目卡片悬停效果
function setupProjectHover() {
    const projectCards = document.querySelectorAll('#projects > div > div');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow-2xl', '-translate-y-2');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow-2xl', '-translate-y-2');
        });
    });
}

// 平滑滚动到指定section
function setupSmoothScroll() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 电话号码和邮箱链接的交互效果
function setupContactLinkHover() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    // 电话链接效果
    phoneLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('text-emerald-600');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('text-emerald-600');
        });
    });
    
    // 邮箱链接效果
    emailLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('text-emerald-600');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('text-emerald-600');
        });
    });
}

// 初始化所有交互功能
function initApp() {
    setupNavigation();
    setupSkillHover();
    setupProjectHover();
    setupSmoothScroll();
    setupContactLinkHover(); // 添加电话和邮箱链接交互效果
    
    console.log('简历网页交互功能已初始化');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);

// 导出函数供TypeScript使用（如果需要）
export { initApp, setupNavigation, setupSkillHover, setupProjectHover, setupSmoothScroll, setupContactLinkHover };