document.addEventListener('DOMContentLoaded', () => {

    // Efeito de mudar a navbar ao rolar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');

        if (window.scrollY > 50) {
            navbar.style.padding = "1rem 10%";
            navbar.style.background = "#fdfdfd";
        } else {
            navbar.style.padding = "1.5rem 10%";
            navbar.style.background = "#fff";
        }
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});


// Efeito de revelação (fade in)
const observarScroll = () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    const sectionSobre = document.querySelector('.about');

    sectionSobre.style.opacity = "0";
    sectionSobre.style.transform = "translateY(30px)";
    sectionSobre.style.transition = "all 0.8s ease-out";

    observer.observe(sectionSobre);
};

observarScroll();