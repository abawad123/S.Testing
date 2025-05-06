document.addEventListener('DOMContentLoaded', () => {
    // تحديد عناصر التقدم
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    // دالة لتحديث دائرة التقدم
    const updateProgress = (circle, progress) => {
        circle.style.background = `conic-gradient(
            var(--main-color) ${progress * 3.6}deg,
            rgba(255, 255, 255, 0.1) ${progress * 3.6}deg
        )`;
    };

    // دالة لبدء الحركة عندما تكون العناصر مرئية
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const targetProgress = circle.getAttribute('data-progress');
                let progress = 0;
                
                const interval = setInterval(() => {
                    progress++;
                    updateProgress(circle, progress);
                    circle.querySelector('.progress-value').textContent = progress + '%';
                    
                    if (progress >= targetProgress) {
                        clearInterval(interval);
                    }
                }, 20);

                // إيقاف المراقبة بعد تشغيل الحركة
                observer.unobserve(circle);
            }
        });
    };

    // إنشاء مراقب العناصر
    const observer = new IntersectionObserver(startAnimation, {
        threshold: 0.5
    });

    // بدء مراقبة كل دوائر التقدم
    progressCircles.forEach(circle => {
        observer.observe(circle);
    });

    // إضافة تأثيرات hover للصناديق
    const testingBoxes = document.querySelectorAll('.testing-box');
    testingBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(-10px)';
            box.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            box.style.backgroundColor = 'var(--main-color)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translateY(0)';
            box.style.boxShadow = 'none';
            box.style.backgroundColor = 'var(--second-bg-color)';
        });
    });

    const testCards = document.querySelectorAll('.test-card');
    
    // إضافة تأثير ظهور تدريجي عند التمرير
    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    testCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        observer1.observe(card);
        
        // إضافة تأثير تفاعلي للأيقونات
        const icons = card.querySelectorAll('.tech-stack i');
        icons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                icon.style.transform = 'scale(1.4) rotate(360deg)';
                icon.style.color = 'var(--main-color)';
            });
            
            icon.addEventListener('mouseout', () => {
                icon.style.transform = 'scale(1) rotate(0)';
                icon.style.color = '';
            });
        });
    });

    const qualityCards = document.querySelectorAll('.quality-card');
    
    // إضافة تأثير ظهور تدريجي
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    qualityCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        observer2.observe(card);
        
        // إضافة تأثير تسليط الضوء على الكود
        const codeBlock = card.querySelector('code');
        card.addEventListener('mouseenter', () => {
            codeBlock.style.filter = 'brightness(1.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            codeBlock.style.filter = 'brightness(1)';
        });
    });

    // إضافة تأثير نسخ الكود
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(block => {
        block.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block.textContent);
                
                // إظهار رسالة نجاح النسخ
                const toast = document.createElement('div');
                toast.className = 'copy-toast';
                toast.textContent = 'Code copied!';
                document.body.appendChild(toast);
                
                setTimeout(() => {
                    toast.remove();
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
        });
    });

    const solutionCard = document.querySelector('.solution-card');
    const benefitItems = document.querySelectorAll('.benefit-item');
    const codeBoxes = document.querySelectorAll('.code-box, .solution-box');

    // إضافة أزرار النسخ
    codeBoxes.forEach(box => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        box.appendChild(copyBtn);

        const codeBlock = box.querySelector('code');
        
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(codeBlock.textContent);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    });

    // تأثير الظهور التدريجي
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // تطبيق الحركة على البطاقة والفوائد
    [solutionCard, ...benefitItems].forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        observer3.observe(element);
    });

    // تسليط الضوء على الكود
    codeBoxes.forEach(box => {
        const codeBlock = box.querySelector('code');
        box.addEventListener('mouseenter', () => {
            codeBlock.style.filter = 'brightness(1.2)';
        });
        
        box.addEventListener('mouseleave', () => {
            codeBlock.style.filter = 'brightness(1)';
        });
    });

    const optimizationCard = document.querySelector('.optimization-card');
    const tipCards = document.querySelectorAll('.tip-card');
    const codeExample = document.querySelector('.code-example');

    // تأثير الظهور التدريجي
    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // تطبيق الحركة على العناصر
    [optimizationCard, codeExample, ...tipCards].forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        observer4.observe(element);
    });

    // إضافة زر نسخ للكود
    const codeBlock2 = codeExample.querySelector('code');
    const copyBtn2 = document.createElement('button');
    copyBtn2.className = 'copy-btn';
    copyBtn2.textContent = 'Copy';
    codeExample.appendChild(copyBtn2);

    copyBtn2.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(codeBlock2.textContent);
            copyBtn2.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn2.textContent = 'Copy';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });

    // تحسين تحميل الصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS

        const updateCounter = () => {
            count += increment;
            counter.textContent = Math.floor(count);

            if (count < target) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const messageList = document.getElementById('messageList');

    // Load messages from localStorage
    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messageList.innerHTML = '';
        
        messages.forEach((msg, index) => {
            const messageEl = createMessageElement(msg, index);
            messageList.appendChild(messageEl);
        });
    };

    // Create message element
    const createMessageElement = (msg, index) => {
        const div = document.createElement('div');
        div.className = 'message-item';
        div.innerHTML = `
            <h4>${msg.name}</h4>
            <p>${msg.message}</p>
            <span class="timestamp">${new Date(msg.timestamp).toLocaleString()}</span>
            <button class="delete-message" data-index="${index}">
                <i class='bx bx-x'></i>
            </button>
        `;
        return div;
    };

    // Show toast notification
    const showToast = (message) => {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    };

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            timestamp: new Date().getTime()
        };

        // Get existing messages
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        // Add new message
        messages.unshift(formData);
        
        // Save to localStorage
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        // Reset form
        contactForm.reset();
        
        // Reload messages
        loadMessages();
        
        // Show success message
        showToast('Message sent successfully!');
    });

    // Handle message deletion
    messageList.addEventListener('click', (e) => {
        if (e.target.closest('.delete-message')) {
            const index = e.target.closest('.delete-message').dataset.index;
            const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            
            messages.splice(index, 1);
            localStorage.setItem('contactMessages', JSON.stringify(messages));
            
            loadMessages();
            showToast('Message deleted successfully!');
        }
    });

    // Initial load of messages
    loadMessages();

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to your server
            console.log('Newsletter subscription:', email);
            
            // Show success message
            showToast('Thank you for subscribing!');
            
            // Reset form
            newsletterForm.reset();
        });
    }

    // تحديد زر الرجوع للأعلى
    const scrollTop = document.querySelector('.scroll-top');

    // إظهار/إخفاء الزر بناءً على موقع التمرير
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });

    // وظيفة الرجوع للأعلى عند النقر
    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

    // Responsive Navigation
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && !e.target.closest('.menu-icon')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });

    // Resize handler
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });

    // Dark/Light mode toggle
    const moonIcon = document.getElementById('moon');
    
    // Check for saved theme preference
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        moonIcon.classList.remove('bx-moon');
        moonIcon.classList.add('bx-sun');
    }

    // Toggle dark/light mode
    moonIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            moonIcon.classList.remove('bx-moon');
            moonIcon.classList.add('bx-sun');
            localStorage.setItem('dark-mode', 'true');
        } else {
            moonIcon.classList.remove('bx-sun');
            moonIcon.classList.add('bx-moon');
            localStorage.setItem('dark-mode', 'false');
        }
    });

    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    const usernameDisplay = document.querySelector('.username-display');
    const usernameInput = document.getElementById('username');

    // عرض النموذج وتركيز المؤشر على حقل الإدخال مباشرة
    loginModal.style.display = 'flex';
    usernameInput.focus(); // إضافة التركيز التلقائي

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = usernameInput.value;
        
        if(username.trim() !== '') {
            usernameDisplay.textContent = username;
            loginModal.style.display = 'none';
        }
    });
});