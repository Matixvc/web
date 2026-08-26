// CV Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Print functionality
    const printBtn = document.querySelector('.btn-print');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            // Configurar opciones de impresión para una sola página
            const originalTitle = document.title;
            document.title = 'CV_Matias_Villalobos';
            
            window.print();
            
            // Restaurar título original
            setTimeout(() => {
                document.title = originalTitle;
            }, 1000);
        });
    }

    // Add smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag, .interest-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add animation to project items on scroll
    const projectItems = document.querySelectorAll('.project-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // Current year for footer
    const footer = document.querySelector('.cv-footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = footer.textContent.replace('Agosto 2026', `Agosto ${currentYear}`);
    }

    // Add copy to clipboard functionality for emails
    const emailElements = document.querySelectorAll('.contact-item');
    emailElements.forEach(emailElement => {
        if (emailElement.textContent.includes('@')) {
            emailElement.style.cursor = 'pointer';
            emailElement.title = 'Click para copiar email';
            
            emailElement.addEventListener('click', function() {
                const email = this.textContent.trim();
                navigator.clipboard.writeText(email).then(() => {
                    const originalText = this.innerHTML;
                    this.innerHTML = '✓ Email copiado';
                    this.style.color = '#10B981';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Error al copiar email:', err);
                });
            });
        }
    });

});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});