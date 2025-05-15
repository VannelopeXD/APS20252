// Arquivo para animações e efeitos visuais especiais
document.addEventListener('DOMContentLoaded', function() {
  initializeParallaxEffect();
  initializeHoverEffects();
  initializeScrollEffects();
});

// Efeito parallax na seção hero
function initializeParallaxEffect() {
  const heroSection = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero-image img');
  
  if (heroSection && heroImage) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      
      // Só aplicar o efeito se a seção for visível na viewport
      if (scrollTop < heroSection.offsetHeight) {
        const parallaxValue = scrollTop * 0.4;
        heroImage.style.transform = `translateY(${parallaxValue}px)`;
      }
    });
  }
}

// Efeitos de hover
function initializeHoverEffects() {
  // Efeito hover para cards de estudo de caso
  const caseCards = document.querySelectorAll('.case-card');
  
  caseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('h3').style.color = 'var(--color-primary)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('h3').style.color = '';
    });
  });
  
  // Efeito hover para botões
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = 'var(--shadow-md)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
}

// Efeitos ao rolar a página
function initializeScrollEffects() {
  // Adicionar classe 'active' para seções quando ficarem visíveis
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active-section');
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => {
    observer.observe(section);
    section.classList.add('section-transition');
  });
  
  // Efeito para título da seção ao entrar no viewport
  const sectionTitles = document.querySelectorAll('.section-header h2');
  
  const titleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('highlight-title');
        titleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  sectionTitles.forEach(title => {
    titleObserver.observe(title);
  });
}

// Efeito de digitação para o texto principal
function typeWriterEffect(element, text, speed = 50, delay = 0) {
  if (!element) return;
  
  setTimeout(() => {
    let i = 0;
    element.textContent = '';
    element.style.borderRight = '0.08em solid var(--color-primary)';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.style.borderRight = 'none';
      }
    }
    
    type();
  }, delay);
}

// Adicionar efeitos especiais para elementos específicos
document.addEventListener('DOMContentLoaded', function() {
  // Efeito para a estatística principal
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length > 0) {
    const mainStat = statNumbers[0];
    
    // Adicionar um destaque especial ao primeiro número estatístico
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          mainStat.classList.add('pulse');
        }, 2000); // Aplicar após a animação de contagem
        observer.unobserve(mainStat);
      }
    }, { threshold: 0.7 });
    
    observer.observe(mainStat);
  }
  
  // Adicionar animação para o botão de contato
  const contactBtn = document.querySelector('.btn-destaque');
  
  if (contactBtn) {
    setInterval(() => {
      contactBtn.classList.add('pulse');
      
      setTimeout(() => {
        contactBtn.classList.remove('pulse');
      }, 1000);
    }, 5000);
  }
});

// Adicionar efeito de onda para a seção de contato
document.addEventListener('DOMContentLoaded', function() {
  const contactSection = document.getElementById('contato');
  
  if (contactSection) {
    // Criar elemento para ondas
    const waveElement = document.createElement('div');
    waveElement.className = 'wave-effect';
    waveElement.innerHTML = `
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
    `;
    
    // Inserir antes do primeiro elemento dentro da seção
    contactSection.insertBefore(waveElement, contactSection.firstChild);
    
    // Adicionar estilos para as ondas
    const style = document.createElement('style');
    style.textContent = `
      .wave-effect {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
      }
      
      .wave {
        position: relative;
        display: block;
        width: 100%;
        height: 60px;
        transform-origin: center bottom;
      }
      
      .wave1 {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' opacity='0.1'%3E%3C/path%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
      }
      
      .wave2 {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='0.1'%3E%3C/path%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
        margin-top: -40px;
      }
    `;
    
    document.head.appendChild(style);
  }
});