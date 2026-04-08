document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Параллакс эффект для Hero (плавное движение фона)
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            // Двигаем фон в 2 раза медленнее скролла
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // 2. Наблюдатель появления элементов (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Срабатывает, когда 15% элемента видно
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс, запускающий CSS-переход
                entry.target.classList.add('in-view');
                // Перестаем следить за элементом после появления
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Находим все элементы, которые должны анимироваться
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});