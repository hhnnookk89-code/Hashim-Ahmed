document.addEventListener('DOMContentLoaded', function() {
    // إعدادات التحميل اليدوية (اجعلها فريدة)
    const downloadConfig = {
        version: "2.1.0",
        url: "https://github.com/YOUR_USERNAME/MobileSales/releases/download/v2.0.0/MobileSales.exe", // 👈 ضع رابط الإصدار هنا
        size: "غير محدد" // يمكنك كتابة الحجم هنا مثلاً "12 MB"
    };

    const versionInfo = document.getElementById('version-info');
    const downloadButton = document.getElementById('download-button');
    const downloadVersion = document.getElementById('download-version');
    const downloadSize = document.getElementById('download-size');

    // تحديث الواجهة بالبيانات
    if (versionInfo) versionInfo.textContent = `الإصدار الحالي: ${downloadConfig.version}`;
    if (downloadVersion) downloadVersion.textContent = downloadConfig.version;
    
    if (downloadButton) {
        downloadButton.href = downloadConfig.url;
        downloadButton.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
                e.preventDefault();
                alert('رابط التحميل غير متوفر حالياً. يرجى المحاولة لاحقاً.');
            }
        });
    }

    if (downloadSize) {
        if (downloadConfig.size && downloadConfig.size !== "غير محدد") {
            downloadSize.textContent = `حجم الملف: ${downloadConfig.size}`;
        } else {
            downloadSize.style.display = 'none';
        }
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لتواصلك معنا! سيتم الرد عليك قريباً.');
            contactForm.reset();
        });
    }

    // Modals Handling (Login & Signup)
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    function openModal(modal) {
        if (modal) modal.style.display = 'flex';
    }

    function closeModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(loginModal);
        });
    }

    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(signupModal);
        });
    }

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal(loginModal);
            closeModal(signupModal);
        });
    });

    window.addEventListener('click', function(e) {
        if (e.target == loginModal) closeModal(loginModal);
        if (e.target == signupModal) closeModal(signupModal);
    });

    // Forms Handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('جاري تسجيل الدخول... (هذه نسخة تجريبية)');
            closeModal(loginModal);
            loginForm.reset();
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('جاري إنشاء الحساب... (هذه نسخة تجريبية)');
            closeModal(signupModal);
            signupForm.reset();
        });
    }
});