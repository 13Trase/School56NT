document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Версия для слабовидящих
    const accessibilityBtn = document.getElementById('accessibility-btn');
    
    accessibilityBtn.addEventListener('click', function() {
        document.body.classList.toggle('accessibility-mode');
        
        if (document.body.classList.contains('accessibility-mode')) {

            document.body.style.fontSize = '23px';
            document.body.style.color = '#000';
            document.body.style.backgroundColor = '#fff';
            document.querySelectorAll('a, button, input').forEach(el => {
                el.style.fontSize = '23px';
            });
        } else {

            document.body.style.fontSize = '';
            document.body.style.color = '';
            document.body.style.backgroundColor = '';
            document.querySelectorAll('a, button, input').forEach(el => {
                el.style.fontSize = '';
            });
        }
    });
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    

    const galleryImages = document.querySelectorAll('.news-gallery img');
    if (galleryImages.length > 0) {

        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                console.log('Открыть изображение: ', this.src);
            });
        });
    }
    

});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        mainNav.classList.toggle('expanded');
        
        const icon = this.querySelector('i');
        if (mainNav.classList.contains('expanded')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});