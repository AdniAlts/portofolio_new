// --- Translations ---
const translations = {
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        about_title: "About Me",
        about_p1:
            "I am Abubakar Adni, an Informatics student with a strong passion for exploring the world of technology. I enjoy learning new things, especially in areas like web development, mobile development, AI, operating systems and many more.",
        about_p2:
            "My curiosity continues to drive me to sharpen my skills and expand my knowledge. I am also looking for team collaboration opportunities with people who share the same drive to learn, build, and create meaningful projects together.",
        edu_title: "Education",
        edu_uni_major: "Informatics / Software Engineering",
        edu_hs_major: "Software Engineering",
        exp_title: "Experience",
        exp_subtitle: "My professional journey",
        exp1_role: "Freelance Web Developer",
        exp1_desc:
            "Developing custom websites for small businesses, focusing on performance, SEO, and responsive design.",
        exp2_role: "6 Month Internship",
        exp2_desc:
            "Contributed in a project with client, actively meetings with team members and learn alot of team colaboration skills",
        stack_title: "Technologies",
        projects_title: "Selected Work",
        projects_subtitle: "A collection of projects I've crafted.",
        view_all: "View All Archives",
        proj1_desc:
            "A clean, distraction-free shopping experience focusing on product photography and typography.",
        proj2_desc:
            "Productivity application with drag-and-drop functionality and calm color schemes.",
        proj3_desc:
            "Minimalist weather dashboard providing essential data with beautiful atmospheric gradients.",
        contact_title: "Get in Touch",
        contact_subtitle:
            "Have a project in mind? Let's create something beautiful.",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send Message",
        footer_rights: "All rights reserved.",
    },
    id: {
        nav_about: "Tentang",
        nav_experience: "Pengalaman",
        nav_projects: "Projek",
        nav_contact: "Kontak",
        about_title: "Tentang Saya",
        about_p1:
            "Saya Abubakar Adni, seorang mahasiswa Teknik Informatika yang memiliki ketertarikan besar pada dunia teknologi. Saya menikmati proses belajar hal-hal baru, mulai dari pengembangan website, mobile, artificial intelligence, sistem operasi dan lain sebagainya.",
        about_p2:
            "Rasa ingin tahu itu terus mendorong saya untuk mengasah keterampilan dan memperluas wawasan. Saat ini, saya juga aktif mencari kesempatan kolaborasi dengan tim yang memiliki semangat belajar dan eksplorasi yang sama, agar bisa tumbuh dan berkontribusi lebih jauh.",
        edu_title: "Pendidikan",
        edu_uni_major: "Informatika / Rekayasa Perangkat Lunak",
        edu_hs_major: "Rekayasa Perangkat Lunak",
        exp_title: "Pengalaman",
        exp_subtitle: "Perjalanan profesional saya",
        exp1_role: "Web Developer Freelance",
        exp1_desc:
            "Mengembangkan situs web kustom untuk UMKM, berfokus pada performa, SEO, dan desain responsif.",
        exp2_role: "Magang 6 Bulan",
        exp2_desc:
            "Berkontribusi dalam proyek dengan klien, secara aktif meeting dengan anggota tim dan mempelajari banyak keterampilan kolaborasi tim",
        stack_title: "Teknologi",
        projects_title: "Karya Pilihan",
        projects_subtitle: "Koleksi projek yang telah saya buat.",
        view_all: "Lihat Semua Arsip",
        proj1_desc:
            "Pengalaman belanja yang bersih dan bebas gangguan, berfokus pada fotografi produk dan tipografi.",
        proj2_desc:
            "Aplikasi produktivitas dengan fungsionalitas drag-and-drop dan skema warna yang tenang.",
        proj3_desc:
            "Dasbor cuaca minimalis yang menyediakan data penting dengan gradasi atmosfer yang indah.",
        contact_title: "Hubungi Saya",
        contact_subtitle: "Punya ide projek? Mari buat sesuatu yang indah.",
        form_name: "Nama",
        form_email: "Email",
        form_message: "Pesan",
        form_submit: "Kirim Pesan",
        footer_rights: "Hak cipta dilindungi.",
    },
};

// --- Hero Content ---
const heroContent = {
    en: {
        roles: [
            "Web Developer",
            "IT Enthusiast",
            "Software Engineering Student",
            "Language Learner",
        ],
        description:
            "A multidisciplinary developer helping build modern digital experiences through clean visuals, thoughtful interactions, and purposeful design.",
    },
    id: {
        roles: [
            "Pembuat Web",
            "IT Antusias",
            "Mahasiswa Teknik Informatika",
            "Pelajar Bahasa",
        ],
        description:
            "Seorang pengembang multidisipliner yang membantu membangun pengalaman digital modern melalui visual yang bersih, interaksi yang terarah, dan desain yang bermakna.",
    },
};

// --- Global Variables ---
let currentLang = localStorage.getItem("lang") || "en";
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

// --- DOM Elements ---
const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const langSpan = langToggle.querySelector("span");
const loadingScreen = document.getElementById("loading-screen");
const navItems = document.getElementById("nav-items");
const navControls = document.getElementById("nav-controls");
const langToggleBtn = document.getElementById("lang-toggle");
const heroSection = document.getElementById("hero");
const logoLight = document.querySelector(".logo-light");
const logoDark = document.querySelector(".logo-dark");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mainNav = document.getElementById("main-nav");
const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
const mobileLangToggle = document.getElementById("mobile-lang-toggle");
const heroRole = document.getElementById("hero-role");
const heroDescription = document.getElementById("hero-description");
const typingText = document.getElementById("typing-text");
const heroParallax = document.querySelector(".hero-parallax");

// --- Functions ---

// Loading Screen
function initLoadingScreen() {
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);
    }, 1500);
}

// Scroll-based nav color change (light mode only)
function updateNavColors() {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollY = window.scrollY;
    const isDark = html.classList.contains("dark");

    if (!isDark) {
        // Light mode: white on hero, black when scrolled past hero
        if (scrollY < heroBottom - 100) {
            // On hero section - white text
            navItems.classList.remove("text-black");
            navItems.classList.add("text-white");
            navControls.classList.remove("text-black");
            navControls.classList.add("text-white");
            langToggleBtn.classList.remove("border-black/50", "hover:border-black");
            langToggleBtn.classList.add("border-white/50", "hover:border-white");
            // Show light logo (white logo for dark background)
            logoLight.classList.add("hidden");
            logoDark.classList.remove("hidden");
        } else {
            // Scrolled past hero - black text
            navItems.classList.remove("text-white");
            navItems.classList.add("text-black");
            navControls.classList.remove("text-white");
            navControls.classList.add("text-black");
            langToggleBtn.classList.remove("border-white/50", "hover:border-white");
            langToggleBtn.classList.add("border-black/50", "hover:border-black");
            // Show dark logo (black logo for light background)
            logoLight.classList.remove("hidden");
            logoDark.classList.add("hidden");
        }
    } else {
        // Dark mode: always white
        navItems.classList.remove("text-black");
        navItems.classList.add("text-white");
        navControls.classList.remove("text-black");
        navControls.classList.add("text-white");
        langToggleBtn.classList.remove("border-black/50", "hover:border-black");
        langToggleBtn.classList.add("border-white/50", "hover:border-white");
        // Show light logo (white logo)
        logoLight.classList.add("hidden");
        logoDark.classList.remove("hidden");
    }
}

// Theme Management
function initTheme() {
    const savedTheme =
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "dark");
    if (savedTheme === "dark") html.classList.add("dark");
}

function toggleTheme() {
    html.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        html.classList.contains("dark") ? "dark" : "light"
    );
    updateNavColors();
}

// Language Management
function updateLanguage(lang) {
    // Fade out text
    document
        .querySelectorAll(".text-fade")
        .forEach((el) => el.classList.add("hidden-text"));

    setTimeout(() => {
        // Update text
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key])
                el.textContent = translations[lang][key];
        });
        langSpan.textContent = lang === "en" ? "EN" : "ID";

        // Update mobile lang text
        const mobileLangText = document.querySelector(".mobile-lang-text");
        if (mobileLangText) mobileLangText.textContent = "EN / ID";

        // Update Hero Content
        updateHeroContent(lang);

        // Fade in text
        document
            .querySelectorAll(".text-fade")
            .forEach((el) => el.classList.remove("hidden-text"));
    }, 300);

    localStorage.setItem("lang", lang);
    currentLang = lang;
}

function updateHeroContent(lang) {
    if (heroDescription)
        heroDescription.textContent = heroContent[lang].description;
    // Reset typing animation
    currentRoleIndex = 0;
    currentCharIndex = 0;
    isDeleting = false;
    if (typingText) typingText.textContent = "";
}

// Typing Animation
function typeRole() {
    if (!typingText) return;
    const roles = heroContent[currentLang].roles;
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(
            0,
            currentCharIndex - 1
        );
        currentCharIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(
            0,
            currentCharIndex + 1
        );
        currentCharIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && currentCharIndex === currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeRole, typingSpeed);
}

// Parallax Effect (desktop only)
function initParallax() {
    // Disable on mobile for performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile || !heroParallax) return;
    
    let ticking = false;
    document.addEventListener("mousemove", (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 15;
                const y = (e.clientY / window.innerHeight - 0.5) * 15;
                heroParallax.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in-up");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
        el.style.opacity = "0";
        observer.observe(el);
    });
}

// Active Section Highlighting
function initNavHighlighting() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => navObserver.observe(section));
}

// Tech Slider Swipeable
function initTechSlider() {
    const slider = document.getElementById("tech-slider");
    const container = document.getElementById("tech-slider-container");
    if (!slider || !container) return;

    // Check if mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let isDown = false;
    let startX;
    let scrollLeft;
    let animationPaused = false;
    let velX = 0;
    let momentumID;

    // Pause animation on interaction
    function pauseAnimation() {
        if (!animationPaused) {
            slider.style.animationPlayState = "paused";
            animationPaused = true;
        }
    }

    // Resume animation after delay
    function resumeAnimation() {
        setTimeout(() => {
            slider.style.animationPlayState = "running";
            animationPaused = false;
        }, 3000);
    }

    // Momentum scrolling (desktop only)
    function momentumLoop() {
        if (isMobile) return;
        container.scrollLeft += velX;
        velX *= 0.95;
        if (Math.abs(velX) > 0.5) {
            momentumID = requestAnimationFrame(momentumLoop);
        }
    }

    // Mouse events (desktop)
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX;
        scrollLeft = container.scrollLeft;
        cancelAnimationFrame(momentumID);
        pauseAnimation();
    });

    slider.addEventListener("mouseleave", () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove("active");
            momentumID = requestAnimationFrame(momentumLoop);
            resumeAnimation();
        }
    });

    slider.addEventListener("mouseup", () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove("active");
            momentumID = requestAnimationFrame(momentumLoop);
            resumeAnimation();
        }
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 1.5;
        velX = x - startX;
        startX = x;
        container.scrollLeft = scrollLeft - walk;
        scrollLeft = container.scrollLeft;
    });

    // Touch events - simple pause/resume, let native scroll handle the rest
    container.addEventListener("touchstart", () => {
        cancelAnimationFrame(momentumID);
        pauseAnimation();
    }, { passive: true });

    container.addEventListener("touchend", () => {
        resumeAnimation();
    }, { passive: true });
}

// --- Event Listeners ---
function initEventListeners() {
    // Scroll event for nav colors
    window.addEventListener("scroll", updateNavColors);

    // Desktop theme toggle
    themeToggle.addEventListener("click", toggleTheme);

    // Mobile menu toggle
    mobileMenuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenu.classList.add("hidden");
        }
    });

    // Mobile theme toggle
    mobileThemeToggle.addEventListener("click", () => {
        toggleTheme();
        mobileMenu.classList.add("hidden");
    });

    // Mobile language toggle
    mobileLangToggle.addEventListener("click", () => {
        const newLang = currentLang === "en" ? "id" : "en";
        updateLanguage(newLang);
        mobileMenu.classList.add("hidden");
    });

    // Desktop language toggle
    langToggle.addEventListener("click", () => {
        const newLang = currentLang === "en" ? "id" : "en";
        updateLanguage(newLang);
    });
}

// --- Initialize ---
document.addEventListener("DOMContentLoaded", () => {
    initLoadingScreen();
    initTheme();
    updateNavColors();
    initEventListeners();
    updateLanguage(currentLang);
    initParallax();
    initScrollAnimations();
    initNavHighlighting();
    initTechSlider();

    // Start typing animation
    setTimeout(() => typeRole(), 1000);
});
