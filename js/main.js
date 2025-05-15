// Espera até que o DOM esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
  // Inicialização de componentes e funcionalidades
  initializeMenu();
  initializeThemeToggle();
  initializeBackToTop();
  initializeTechTabs();
  loadBlogPosts();
  initializeContactForm();
  initializeStatsCounter();
  initializeScrollAnimations();
});

// Funcionalidade do menu mobile
function initializeMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('#header');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  }
  
  // Navegação ativa e efeito de scroll no header
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Ativar link da navegação com base na seção atual
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
}

// Alternância de tema claro/escuro
function initializeThemeToggle() {
  const themeSwitch = document.getElementById('theme-switch');
  
  // Verificar se há uma preferência salva
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  
  themeSwitch.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Salvar preferência no localStorage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

// Botão de voltar ao topo
function initializeBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
}

// Funcionalidade de abas para as tecnologias
function initializeTechTabs() {
  const techBtns = document.querySelectorAll('.tech-btn');
  const techPanels = document.querySelectorAll('.tech-panel');
  
  // Carregar painéis de tecnologia adicionais do objeto tecnologias
  loadTechPanels();
  
  techBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remover classe active de todos os botões
      techBtns.forEach(b => b.classList.remove('active'));
      // Adicionar classe active ao botão clicado
      this.classList.add('active');
      
      // Ocultar todos os painéis
      techPanels.forEach(panel => panel.classList.remove('active'));
      
      // Mostrar o painel correspondente
      const targetPanel = document.getElementById(this.dataset.category);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// Carrega os painéis de tecnologia a partir dos dados
function loadTechPanels() {
  const techContent = document.querySelector('.tech-content');
  
  // Adicionar painéis que não foram definidos no HTML
  for (const [key, tech] of Object.entries(tecnologias)) {
    // Verificar se o painel já existe no HTML
    if (!document.getElementById(key)) {
      const panel = document.createElement('div');
      panel.className = 'tech-panel';
      panel.id = key;
      
      panel.innerHTML = `
        <div class="tech-info">
          <h3>${tech.titulo}</h3>
          <p>${tech.descricao}</p>
          <ul class="tech-examples">
            ${tech.exemplos.map(ex => `<li>${ex}</li>`).join('')}
          </ul>
          <a href="#" class="btn btn-outline">Saiba Mais</a>
        </div>
        <div class="tech-image">
          <img src="${tech.imagem}" alt="${tech.titulo}">
        </div>
      `;
      
      techContent.appendChild(panel);
    }
  }
}

// Carrega os posts do blog
function loadBlogPosts() {
  const blogPostsContainer = document.querySelector('.blog-posts');
  if (!blogPostsContainer) return;
  
  // Limpar o container
  blogPostsContainer.innerHTML = '';
  
  // Mostrar apenas os 3 primeiros posts inicialmente
  const postsToShow = blogPosts.slice(0, 3);
  
  postsToShow.forEach(post => {
    const postElement = createBlogPostElement(post);
    blogPostsContainer.appendChild(postElement);
  });
  
  // Adicionar evento ao botão "Carregar Mais"
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    let currentlyShown = 3;
    
    loadMoreBtn.addEventListener('click', function() {
      const nextPosts = blogPosts.slice(currentlyShown, currentlyShown + 3);
      
      if (nextPosts.length > 0) {
        nextPosts.forEach(post => {
          const postElement = createBlogPostElement(post);
          blogPostsContainer.appendChild(postElement);
          
          // Adicionar animação
          setTimeout(() => {
            postElement.classList.add('fade-in');
          }, 100);
        });
        
        currentlyShown += nextPosts.length;
        
        // Ocultar o botão se não houver mais posts
        if (currentlyShown >= blogPosts.length) {
          loadMoreBtn.style.display = 'none';
        }
      }
    });
  }
}

// Cria um elemento de post do blog
function createBlogPostElement(post) {
  const postElement = document.createElement('div');
  postElement.className = 'blog-card animate-on-scroll';
  
  postElement.innerHTML = `
    <div class="blog-image">
      <img src="${post.image}" alt="${post.title}">
    </div>
    <div class="blog-content">
      <div class="blog-date">${post.date}</div>
      <h3>${post.title}</h3>
      <p class="blog-excerpt">${post.excerpt}</p>
      <div class="blog-tags">
        ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
      </div>
      <a href="#" class="btn btn-text">Ler mais</a>
    </div>
  `;
  
  return postElement;
}

// Funcionalidade do formulário de contato
function initializeContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('form-success');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio do formulário
      contactForm.style.display = 'none';
      formSuccess.classList.remove('hidden');
      
      // Limpar o formulário
      contactForm.reset();
      
      // Após 5 segundos, mostrar o formulário novamente
      setTimeout(() => {
        formSuccess.classList.add('hidden');
        contactForm.style.display = 'block';
      }, 5000);
    });
  }
}

// Inicializar contadores animados nas estatísticas
function initializeStatsCounter() {
  const statCards = document.querySelectorAll('.stat-card');
  
  // Função para animar a contagem
  function animateCount(element, end, duration) {
    let start = 0;
    const step = end / (duration / 16); // 60fps
    const statNumber = element.querySelector('.stat-number');
    
    function updateCount() {
      start += step;
      if (start > end) start = end;
      
      statNumber.textContent = `${Math.floor(start)}%`;
      
      if (start < end) {
        requestAnimationFrame(updateCount);
      }
    }
    
    updateCount();
  }
  
  // Observer para iniciar contagem quando visível
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const value = parseInt(card.dataset.value);
        animateCount(card, value, 2000);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.5 });
  
  statCards.forEach(card => {
    observer.observe(card);
  });
}

// Animar elementos ao scroll
function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-fade, .animate-scale');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}