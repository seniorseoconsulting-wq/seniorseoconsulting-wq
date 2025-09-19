document.addEventListener('DOMContentLoaded', function () {
  // ===== TESTIMONIALS ROTATIVOS =====
  const testimonials = [
    {
      name: "María González",
      company: "EcoModa S.A.",
      text: "Carlos transformó completamente nuestro tráfico orgánico. En solo 3 meses pasamos de 500 visitas mensuales a más de 15,000. ¡Increíble!",
      image: "https://placehold.co/80x80/4f46e5/ffffff?text=MG",
      rating: 5
    },
    {
      name: "Javier Rodríguez",
      company: "TechSolutions",
      text: "Contratamos a Carlos después de ver resultados de otros clientes. Nuestro ROI en SEO aumentó un 320% en el primer semestre. ¡Altamente recomendado!",
      image: "https://placehold.co/80x80/059669/ffffff?text=JR",
      rating: 5
    },
    {
      name: "Laura Martínez",
      company: "Belleza Natural",
      text: "Nuestro e-commerce estaba estancado hasta que Carlos implementó su estrategia. Ahora somos #1 en Google para nuestras palabras clave principales.",
      image: "https://placehold.co/80x80/dc2626/ffffff?text=LM",
      rating: 5
    }
  ];

  let currentTestimonial = 0;
  const testimonialText = document.getElementById('testimonialText');
  const testimonialRating = document.getElementById('testimonialRating');
  const testimonialAuthorName = document.querySelector('.author-name');
  const testimonialAuthorCompany = document.querySelector('.author-company');
  const testimonialAuthorImage = document.querySelector('.author-avatar');
  const indicators = document.querySelectorAll('.indicator');

  function updateTestimonial(index) {
    const t = testimonials[index];
    testimonialText.textContent = t.text;
    testimonialRating.textContent = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
    testimonialAuthorName.textContent = t.name;
    testimonialAuthorCompany.textContent = t.company;
    testimonialAuthorImage.src = t.image;

    // Actualizar indicadores
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });

    currentTestimonial = index;
  }

  // Evento para los indicadores
  indicators.forEach(indicator => {
    indicator.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'));
      updateTestimonial(index);
    });
  });

  // Rotación automática cada 5 segundos
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
  }, 5000);

  // ===== MENÚ MÓVIL =====
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileToggle.addEventListener('click', function () {
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }
  });

  // Cerrar menú al hacer clic en un enlace
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
    });
  });

  // ===== EFECTO DE APARICIÓN EN HERO =====
  const heroText = document.querySelector('.hero-text');
  setTimeout(() => {
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
  }, 300);

  // Añadir estilos iniciales para la animación
  heroText.style.opacity = '0';
  heroText.style.transform = 'translateY(20px)';
  heroText.style.transition = 'opacity 1s ease, transform 1s ease';
});
