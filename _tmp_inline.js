
    (function () {
        'use strict';
        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var hoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

        /* ===== Navbar scroll: passive + rAF ===== */
        var nav = document.getElementById('navbar');
        if (nav) {
            var ticking = false;
            window.addEventListener('scroll', function () {
                if (!ticking) {
                    ticking = true;
                    requestAnimationFrame(function () {
                        nav.classList.toggle('is-scrolled', window.scrollY > 80);
                        ticking = false;
                    });
                }
            }, { passive: true });
        }

        /* ===== Revelado al hacer scroll (sustituye a GSAP) ===== */
        if (!reduceMotion && 'IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

            document.querySelectorAll('[data-reveal]').forEach(function (el) {
                el.classList.add('reveal');
                io.observe(el);
            });
            document.querySelectorAll('[data-reveal-stagger]').forEach(function (parent) {
                Array.prototype.forEach.call(parent.children, function (child, i) {
                    child.style.setProperty('--reveal-delay', (i * 0.09).toFixed(2) + 's');
                    child.classList.add('reveal');
                    io.observe(child);
                });
            });
        }

        /* ===== Glow del cursor (solo puntero fino + sin movimiento reducido) ===== */
        var glow = document.getElementById('cursor-glow');
        if (glow && !reduceMotion && hoverCapable) {
            var gx = 0, gy = 0, glowPending = false;
            document.addEventListener('pointermove', function (e) {
                gx = e.clientX; gy = e.clientY;
                if (!glowPending) {
                    glowPending = true;
                    requestAnimationFrame(function () {
                        glow.style.transform = 'translate(' + (gx - 300) + 'px,' + (gy - 300) + 'px)';
                        glowPending = false;
                    });
                }
            }, { passive: true });
        }

        /* ===== Tilt en tarjetas ===== */
        if (!reduceMotion && hoverCapable) {
            document.querySelectorAll('.about-panel, .profile-card').forEach(function (element) {
                element.addEventListener('pointermove', function (event) {
                    var bounds = element.getBoundingClientRect();
                    var rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -3;
                    var rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 3;
                    element.style.transform = 'perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
                });
                element.addEventListener('pointerleave', function () { element.style.transform = ''; });
            });
        }

        /* ===== Toast ===== */
        var toast = document.getElementById('copy-toast');
        var toastTimer = null;
        function showToast(message) {
            toast.textContent = message;
            toast.classList.add('visible');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(function () { toast.classList.remove('visible'); }, 3000);
        }

        /* ===== Clipboard: API moderna + fallback heredado ===== */
        function legacyCopy(text) {
            var area = document.createElement('textarea');
            area.value = text;
            area.setAttribute('readonly', '');
            area.style.position = 'fixed';
            area.style.opacity = '0';
            document.body.appendChild(area);
            area.select();
            var ok = false;
            try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
            document.body.removeChild(area);
            return ok;
        }
        async function copyContact(value, label) {
            var done = false;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                try { await navigator.clipboard.writeText(value); done = true; }
                catch (err) { done = false; }
            }
            if (!done) { done = legacyCopy(value); }
            showToast(done ? (label + ' copiado al portapapeles')
                           : ('No se pudo copiar el ' + label.toLowerCase()));
        }
        window.copyEmail = function () { copyContact('matias.villalobos.dev@gmail.com', 'Correo'); };
        window.copyPhone = function () { copyContact('+56 9 8757 6708', 'Celular'); };

        /* ===== Galería: pestañas y filtro de habilidades ===== */
        var skillNote = document.getElementById('skill-note');
        function resetSkills() {
            document.querySelectorAll('.skill-chip').forEach(function (chip) {
                chip.classList.remove('active');
                chip.setAttribute('aria-pressed', 'false');
            });
            document.querySelectorAll('[data-project-skills]').forEach(function (p) {
                p.classList.remove('project-match-hidden');
            });
            if (skillNote) { skillNote.textContent = ''; }
        }
        window.showPort = function (type) {
            document.querySelectorAll('.tab-btn').forEach(function (btn) {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            var activeBtn = document.getElementById('btn-' + type);
            if (activeBtn) {
                activeBtn.classList.add('active');
                activeBtn.setAttribute('aria-pressed', 'true');
            }
            document.querySelectorAll('.port-item').forEach(function (grid) { grid.classList.remove('active'); });
            var target = document.getElementById('grid-' + type);
            if (target) { target.classList.add('active'); }
            resetSkills();
        };
        window.filterBySkill = function (skill, button) {
            var wasActive = button.classList.contains('active');
            showPort('image');
            if (wasActive) { return; } // segundo clic sobre el chip: limpia el filtro
            var visible = 0;
            document.querySelectorAll('[data-project-skills]').forEach(function (project) {
                var skills = project.dataset.projectSkills.split(' ');
                var match = skills.indexOf(skill) !== -1;
                project.classList.toggle('project-match-hidden', !match);
                if (match) { visible++; }
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            if (skillNote) {
                skillNote.textContent = 'Mostrando ' + visible + ' proyecto(s) con "' +
                    (button.dataset.label || skill) + '". Toca de nuevo para ver todos.';
            }
            document.getElementById('proyectos')
                .scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        };
        document.querySelectorAll('.skill-chip').forEach(function (chip) {
            chip.addEventListener('click', function () { filterBySkill(chip.dataset.skill, chip); });
        });

        /* ===== Tabs "Sobre Mí" ===== */
        document.querySelectorAll('[data-about-tab]').forEach(function (button) {
            button.addEventListener('click', function () {
                document.querySelectorAll('[data-about-tab]').forEach(function (tab) {
                    var selected = tab === button;
                    tab.classList.toggle('active', selected);
                    tab.setAttribute('aria-selected', String(selected));
                });
                document.querySelectorAll('.about-panel').forEach(function (panel) {
                    panel.hidden = panel.id !== button.dataset.aboutTab;
                });
            });
        });
    })();
    