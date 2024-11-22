window.addEventListener('scroll', () => {
 const scrollY = window.scrollY;
 const maxScroll = document.body.offsetHeight - window.innerHeight;
 const porcentajeScroll = (scrollY / maxScroll) * 100;

 const fondoOscuro = document.getElementById('Fondo-Oscuro');
 fondoOscuro.style.background = `rgba(0, 0, 0, ${porcentajeScroll / 100})`;
 fondoOscuro.style.backdropFilter = `blur(${porcentajeScroll / 10}px)`;
 });