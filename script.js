// ==========================================
// GLOBAL VARIABLES & DATA
// ==========================================
const projectsData = [
    {
      id: 1,
      title: 'VulnShop (Demo)',
      category: 'web',
      description: 'A deliberately vulnerable e-commerce application designed to demonstrate common web vulnerabilities including SQL Injection and XSS attacks. Includes comprehensive writeups and fixes.',
      tags: ['SQLi', 'XSS', 'CTF', 'PHP', 'MySQL'],
      code: 'https://github.com/yourusername/vulnshop',
      demo: '#',
      icon: 'fas fa-shopping-cart',
      details: 'VulnShop is an educational platform that demonstrates real-world vulnerabilities in e-commerce applications. It features intentional security flaws that allow users to practice penetration testing techniques in a safe environment.'
    },
    {
      id: 2,
      title: 'ReconPy',
      category: 'tools',
      description: 'A powerful Python reconnaissance tool that automates common HTTP fingerprinting, subdomain enumeration, and port scanning operations for security assessments.',
      tags: ['Python', 'Automation', 'Recon', 'Security'],
      code: 'https://github.com/yourusername/reconpy',
      demo: '#',
      icon: 'fas fa-search',
      details: 'ReconPy streamlines the information gathering phase of penetration testing by automating repetitive tasks and generating detailed reports.'
    },
    {
      id: 3,
      title: 'HTB-Blue Writeup',
      category: 'reports',
      description: 'Comprehensive writeup for HackTheBox machine "Blue" focusing on SMB exploitation, EternalBlue vulnerability, and post-exploitation techniques.',
      tags: ['Writeup', 'HTB', 'EternalBlue', 'SMB'],
      code: '#',
      demo: 'https://medium.com/@yourusername/htb-blue',
      icon: 'fas fa-file-alt',
      details: 'Detailed analysis of the Blue machine from HackTheBox, including vulnerability identification, exploitation methodology, and privilege escalation techniques.'
    },
    {
      id: 4,
      title: 'XSS Hunter Pro',
      category: 'tools',
      description: 'Advanced XSS detection tool with automated payload generation, DOM-based XSS detection, and comprehensive vulnerability reporting.',
      tags: ['XSS', 'JavaScript', 'Security', 'Testing'],
      code: 'https://github.com/yourusername/xss-hunter',
      demo: '#',
      icon: 'fas fa-code',
      details: 'A sophisticated tool for identifying Cross-Site Scripting vulnerabilities across web applications with support for multiple injection contexts.'
    },
    {
      id: 5,
      title: 'Secure Auth System',
      category: 'web',
      description: 'A robust authentication system implementing best practices including bcrypt hashing, JWT tokens, rate limiting, and 2FA support.',
      tags: ['Node.js', 'JWT', 'Security', '2FA'],
      code: 'https://github.com/yourusername/secure-auth',
      demo: '#',
      icon: 'fas fa-lock',
      details: 'Production-ready authentication system with enterprise-grade security features and comprehensive documentation.'
    },
    {
      id: 6,
      title: 'CTF Challenges Collection',
      category: 'reports',
      description: 'Curated collection of CTF challenge writeups covering web exploitation, cryptography, reverse engineering, and forensics.',
      tags: ['CTF', 'Writeups', 'Multiple', 'Educational'],
      code: '#',
      demo: 'https://ctf.yourwebsite.com',
      icon: 'fas fa-flag',
      details: 'Over 50+ detailed writeups from various CTF competitions including methodology, tools used, and lessons learned.'
    },
    {
      id: 7,
      title: 'SQLi Scanner',
      category: 'tools',
      description: 'Automated SQL injection vulnerability scanner with support for various database types and injection techniques.',
      tags: ['Python', 'SQLi', 'Automation', 'Database'],
      code: 'https://github.com/yourusername/sqli-scanner',
      demo: '#',
      icon: 'fas fa-database',
      details: 'Comprehensive SQL injection testing tool with blind injection detection, time-based attacks, and automated exploitation.'
    },
    {
      id: 8,
      title: 'Secure File Upload',
      category: 'web',
      description: 'Demonstration of secure file upload implementation with proper validation, sanitization, and storage practices.',
      tags: ['Security', 'PHP', 'File Upload', 'Best Practices'],
      code: 'https://github.com/yourusername/secure-upload',
      demo: '#',
      icon: 'fas fa-upload',
      details: 'Educational project showcasing common file upload vulnerabilities and their mitigations with practical examples.'
    },
    {
      id: 9,
      title: 'OSINT Framework',
      category: 'tools',
      description: 'Open-source intelligence gathering framework for reconnaissance and information collection from public sources.',
      tags: ['OSINT', 'Python', 'Recon', 'Intelligence'],
      code: 'https://github.com/yourusername/osint-framework',
      demo: '#',
      icon: 'fas fa-eye',
      details: 'Automated OSINT tool for gathering publicly available information about targets including social media, emails, and domain data.'
    }
  ];
  
  // ==========================================
  // INITIALIZATION
  // ==========================================
  document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
  });
  
  function initializeApp() {
    // Hide loading screen
    setTimeout(() => {
      const loadingScreen = document.getElementById('loading');
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
      }
    }, 800);
  
    // Initialize all components
    initializeTheme();
    initializeNavigation();
    initializeProjects();
    initializeContactForm();
    initializeScrollEffects();
    initializeBackToTop();
    initializeAnimations();
    updateYear();
    
    console.log('Portfolio initialized successfully! 🚀');
  }
  
  // ==========================================
  // THEME MANAGEMENT
  // ==========================================
  function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      updateThemeIcon(true);
    }
    
    // Theme toggle handler
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const isLight = currentTheme === 'light';
        
        if (isLight) {
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('theme', 'dark');
          updateThemeIcon(false);
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          updateThemeIcon(true);
        }
        
        // Add animation
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          this.style.transform = '';
        }, 300);
      });
    }
  }
  
  function updateThemeIcon(isLight) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
      }
    }
  }
  
  // ==========================================
  // NAVIGATION
  // ==========================================
  function initializeNavigation() {
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for header
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
      });
    }
    
    // Smooth scroll and close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
          
          // Close mobile menu
          if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
          }
        }
      });
    });
    
    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          mobileMenu.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  }
  
  // ==========================================
  // PROJECTS
  // ==========================================
  function initializeProjects() {
    renderProjects(projectsData);
  }
  
  function renderProjects(projects) {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (projects.length === 0) {
      grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No projects found in this category.</p>';
      return;
    }
    
    projects.forEach(project => {
      const card = createProjectCard(project);
      grid.appendChild(card);
    });
    
    // Animate cards
    animateProjectCards();
  }
  
  function createProjectCard(project) {
    const article = document.createElement('article');
    article.className = 'project-card fade-in';
    article.dataset.category = project.category;
    
    article.innerHTML = `
      <div class="project-header">
        <div class="project-icon">
          <i class="${project.icon}"></i>
        </div>
        <span class="project-category">${project.category.toUpperCase()}</span>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-actions">
        <button class="btn btn-primary btn-small" onclick="openModal(${project.id})">
          <i class="fas fa-info-circle"></i> Details
        </button>
        <a class="btn btn-secondary btn-small" href="${project.code}" target="_blank" rel="noopener">
          <i class="fab fa-github"></i> Code
        </a>
      </div>
    `;
    
    return article;
  }
  
  function filterProjects(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent.toLowerCase().includes(category) || 
          (category === 'all' && btn.textContent.toLowerCase().includes('all'))) {
        btn.classList.add('active');
      }
    });
    
    // Filter and render
    if (category === 'all') {
      renderProjects(projectsData);
    } else {
      const filtered = projectsData.filter(p => p.category === category);
      renderProjects(filtered);
    }
  }
  
  function animateProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 100);
    });
  }
  
  // ==========================================
  // MODAL
  // ==========================================
  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
      <div class="project-icon" style="margin-bottom: 20px;">
        <i class="${project.icon}"></i>
      </div>
      <h2>${project.title}</h2>
      <p style="margin-bottom: 16px;"><strong>Category:</strong> <span style="color: var(--accent-primary)">${project.category.toUpperCase()}</span></p>
      <p>${project.details}</p>
      <div class="project-tags" style="margin: 20px 0;">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <pre style="margin: 20px 0;">
  <strong>Technologies Used:</strong>
  ${project.tags.join(', ')}
  
  <strong>Features:</strong>
  • Comprehensive vulnerability demonstration
  • Detailed documentation and writeups
  • Educational purpose with best practices
  • Active maintenance and updates
      </pre>
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <a class="btn btn-primary" href="${project.code}" target="_blank" rel="noopener">
          <i class="fab fa-github"></i> View Code
        </a>
        ${project.demo !== '#' ? `
          <a class="btn btn-secondary" href="${project.demo}" target="_blank" rel="noopener">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
        ` : ''}
      </div>
    `;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
  
  // Close modal on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // ==========================================
  // CONTACT FORM
  // ==========================================
  function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      
      // Clear previous messages
      formMessage.className = 'form-message';
      formMessage.textContent = '';
      
      try {
        // Replace with your actual endpoint
        // Examples: Formspree, Netlify Forms, your own backend
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          formMessage.className = 'form-message success';
          formMessage.textContent = '✓ Message sent successfully! I will get back to you soon.';
          form.reset();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        formMessage.className = 'form-message error';
        formMessage.textContent = '✗ Failed to send message. Please try again or email me directly at musab@example.com';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }
  
  // ==========================================
  // SCROLL EFFECTS
  // ==========================================
  function initializeScrollEffects() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // ==========================================
  // BACK TO TOP BUTTON
  // ==========================================
  function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // ==========================================
  // ANIMATIONS
  // ==========================================
  function initializeAnimations() {
    // Typing effect for hero title
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
      const texts = [
        'I build secure web apps and hunt bugs.',
        'I specialize in web pentesting.',
        'I participate in CTF competitions.',
        'I create security tools.'
      ];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      
      function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
          typingText.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typingText.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
      }
      
      // Start typing effect after delay
      setTimeout(type, 1000);
    }
  }
  
  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = section.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  // Resume download handler
  document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.getElementById('downloadResume');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', function() {
        // Replace with your actual resume URL
        const resumeUrl = 'https://yourwebsite.com/resume.pdf';
        window.open(resumeUrl, '_blank');
        
        // Optional: Analytics tracking
        console.log('Resume download initiated');
      });
    }
  });
  
  // ==========================================
  // PERFORMANCE MONITORING
  // ==========================================
  if ('performance' in window) {
    window.addEventListener('load', function() {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
      }, 0);
    });
  }
  
  // ==========================================
  // EXPORT FUNCTIONS FOR GLOBAL ACCESS
  // ==========================================
  window.filterProjects = filterProjects;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.scrollToSection = scrollToSection;