// =============================
// NAVEGACIÓN SUAVE
// =============================
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// =============================
// MENSAJE AL CARGAR
// =============================
window.addEventListener('load', function() {
    console.log('FLOTACARGO - Página cargada correctamente');
});

// =============================
// FORMULARIO CTA
// =============================
const ctaForm = document.querySelector('.cta-form');

if (ctaForm) {
    ctaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Gracias por tu interés. Te contactaremos a: ' + email);
        this.reset();
    });
}