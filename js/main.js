/* ============================================
   ROSHAN TRAVELS - Main JavaScript
   ============================================ */

// ─── PAGE LOADER ───────────────────────────
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 800);
  }
  initScrollAnimations();
  updateNavAuth();
});

// ─── NAVBAR ────────────────────────────────
const navbar = document.getElementById("main-navbar");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }
});

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
}

// Close mobile menu on link click
document.querySelectorAll(".mobile-menu .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger?.classList.remove("open");
    mobileMenu?.classList.remove("open");
  });
});

// Set active nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}
setActiveNavLink();

// ─── AUTH NAV UPDATE ───────────────────────
function updateNavAuth() {
  const user = Auth?.getUser?.();
  const loginBtn = document.getElementById("nav-login-btn");
  const userMenu = document.getElementById("nav-user-menu");
  const userNameSpan = document.getElementById("nav-user-name");

  if (user && userMenu) {
    if (loginBtn) loginBtn.style.display = "none";
    userMenu.style.display = "flex";
    if (userNameSpan) userNameSpan.textContent = user.name.split(" ")[0];
  } else if (!user && loginBtn) {
    loginBtn.style.display = "flex";
    if (userMenu) userMenu.style.display = "none";
  }
}

// ─── HERO SLIDER ───────────────────────────
let heroSlides = [];
let currentSlide = 0;
let heroInterval;

function initHeroSlider() {
  const bg = document.getElementById("hero-bg");
  const dotsContainer = document.getElementById("hero-dots");
  if (!bg || !HERO_SLIDES) return;

  // Create slide elements
  HERO_SLIDES.forEach((slide, i) => {
    const el = document.createElement("div");
    el.className = "hero-bg-image" + (i === 0 ? " active" : "");
    el.style.backgroundImage = `url('${slide.image}')`;
    bg.appendChild(el);
    heroSlides.push(el);

    // Dot
    const dot = document.createElement("div");
    dot.className = "hero-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer?.appendChild(dot);
  });

  updateHeroText(0);
  heroInterval = setInterval(() => goToSlide((currentSlide + 1) % HERO_SLIDES.length), 5000);
}

function goToSlide(index) {
  heroSlides[currentSlide]?.classList.remove("active");
  document.querySelectorAll(".hero-dot")[currentSlide]?.classList.remove("active");
  currentSlide = index;
  heroSlides[currentSlide]?.classList.add("active");
  document.querySelectorAll(".hero-dot")[currentSlide]?.classList.add("active");
  updateHeroText(currentSlide);
}

function updateHeroText(index) {
  const slide = HERO_SLIDES[index];
  const titleEl = document.getElementById("hero-title");
  const descEl = document.getElementById("hero-desc");
  if (titleEl) {
    titleEl.style.opacity = "0";
    titleEl.style.transform = "translateY(20px)";
    setTimeout(() => {
      titleEl.innerHTML = slide.title;
      titleEl.style.opacity = "1";
      titleEl.style.transform = "translateY(0)";
    }, 300);
  }
  if (descEl) {
    descEl.style.opacity = "0";
    setTimeout(() => {
      descEl.textContent = slide.desc;
      descEl.style.opacity = "1";
    }, 400);
  }
}

// ─── SCROLL ANIMATIONS ─────────────────────
function initScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  elements.forEach(el => observer.observe(el));
}

// ─── COUNTER ANIMATION ─────────────────────
function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(start).toLocaleString() + suffix;
    }, 16);
  });
}

const counterSection = document.getElementById("counter-section");
if (counterSection) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(counterSection);
}

// ─── TOAST NOTIFICATIONS ───────────────────
function showToast(title, message = "", type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const icons = { success: "fa-check-circle", error: "fa-times-circle", warning: "fa-exclamation-triangle" };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas ${icons[type]} toast-icon"></i>
    <div class="toast-text">
      <strong>${title}</strong>
      ${message ? `<p>${message}</p>` : ""}
    </div>
    <i class="fas fa-times toast-dismiss" onclick="this.closest('.toast').remove()"></i>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ─── MODAL ─────────────────────────────────
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Close modal on overlay click
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// ─── AUTH MODALS ───────────────────────────
function initAuthModals() {
  // Login form
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value;
      const btn = loginForm.querySelector("[type=submit]");

      if (!email || !password) { showToast("Error", "Please fill all fields.", "error"); return; }

      btn.innerHTML = '<span class="loading-spinner"></span> Logging in…';
      btn.disabled = true;

      setTimeout(() => {
        const result = Auth.login(email, password);
        if (result.ok) {
          closeModal("auth-modal");
          showToast("Welcome back!", `Logged in as ${Auth.getUser().name}.`);
          updateNavAuth();
          if (result.isAdmin) {
            setTimeout(() => window.location.href = "admin.html", 500);
          }
        } else {
          showToast("Login Failed", result.msg, "error");
        }
        btn.innerHTML = "Login";
        btn.disabled = false;
      }, 800);
    });
  }

  // Register form
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("reg-name").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const password = document.getElementById("reg-password").value;
      const confirm = document.getElementById("reg-confirm").value;
      const btn = registerForm.querySelector("[type=submit]");

      if (!name || !email || !password) { showToast("Error", "Please fill all fields.", "error"); return; }
      if (password !== confirm) { showToast("Error", "Passwords do not match.", "error"); return; }
      if (password.length < 6) { showToast("Error", "Password must be at least 6 characters.", "error"); return; }

      btn.innerHTML = '<span class="loading-spinner"></span> Creating account…';
      btn.disabled = true;

      setTimeout(() => {
        const result = Auth.register(name, email, password);
        if (result.ok) {
          closeModal("auth-modal");
          showToast("Account Created!", `Welcome, ${name}! 🎉`);
          updateNavAuth();
        } else {
          showToast("Error", result.msg, "error");
        }
        btn.innerHTML = "Create Account";
        btn.disabled = false;
      }, 800);
    });
  }
}

// Switch auth tabs
function switchAuthTab(tab) {
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".auth-panel").forEach(p => p.classList.remove("active"));
  document.querySelector(`.auth-tab[data-tab="${tab}"]`)?.classList.add("active");
  document.getElementById(`auth-${tab}`)?.classList.add("active");
}

// Logout
function logout() {
  Auth.logout();
  updateNavAuth();
  showToast("Logged out", "See you next time! ✈️");
  setTimeout(() => window.location.href = "index.html", 500);
}

// ─── SEARCH ────────────────────────────────
function initSearch() {
  const searchForm = document.getElementById("hero-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      const dest = document.getElementById("search-dest")?.value || "";
      const budget = document.getElementById("search-budget")?.value || "";
      const duration = document.getElementById("search-duration")?.value || "";
      const params = new URLSearchParams();
      if (dest) params.set("dest", dest);
      if (budget) params.set("budget", budget);
      if (duration) params.set("duration", duration);
      window.location.href = `packages.html?${params.toString()}`;
    });
  }
}

// ─── WISHLIST ──────────────────────────────
const Wishlist = {
  KEY: "rt_wishlist",
  get() { try { return JSON.parse(localStorage.getItem(this.KEY) || "[]"); } catch { return []; } },
  toggle(id) {
    let list = this.get();
    if (list.includes(id)) { list = list.filter(x => x !== id); }
    else { list.push(id); }
    localStorage.setItem(this.KEY, JSON.stringify(list));
    return list.includes(id);
  },
  has(id) { return this.get().includes(id); },
};

function initWishlists() {
  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    const id = btn.dataset.id;
    if (Wishlist.has(id)) btn.classList.add("active");
    btn.addEventListener("click", () => {
      const added = Wishlist.toggle(id);
      btn.classList.toggle("active", added);
      showToast(added ? "Added to Wishlist ❤️" : "Removed from Wishlist", "", added ? "success" : "warning");
    });
  });
}

// ─── INIT ──────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initSearch();
  initAuthModals();
  initWishlists();

  // Trigger initial scroll check for navbar
  if (window.scrollY < 50 && navbar) {
    navbar.classList.add("transparent");
  }
});
