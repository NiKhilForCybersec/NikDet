/* ============================================
   SOC & Detection Engineering Compendium
   Main JavaScript - Consistent Sidebar
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
    initThemeToggle();
    initSearch();
    initCodeCopy();
    initTabs();
    initTerminalAnimation();
});

/* ============================================
   Sidebar Navigation - Consistent Collapsible
   ============================================ */
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebarClose = document.getElementById('sidebarClose');
    
    // Toggle collapsible sections
    const sectionHeaders = document.querySelectorAll('.nav-section-header[data-toggle]');
    
    sectionHeaders.forEach(header => {
        // Set initial state
        const targetId = header.getAttribute('data-toggle');
        const targetNav = document.getElementById(targetId);
        
        if (targetNav && !targetNav.classList.contains('expanded')) {
            header.classList.add('collapsed');
        }
        
        header.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-toggle');
            const targetNav = document.getElementById(targetId);
            
            if (targetNav) {
                const isExpanded = targetNav.classList.contains('expanded');
                
                if (isExpanded) {
                    targetNav.classList.remove('expanded');
                    this.classList.add('collapsed');
                } else {
                    targetNav.classList.add('expanded');
                    this.classList.remove('collapsed');
                }
            }
        });
    });
    
    // Mobile sidebar toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            openSidebar();
        });
    }
    
    // Close sidebar button
    if (sidebarClose) {
        sidebarClose.addEventListener('click', function() {
            closeSidebar();
        });
    }
    
    // Close sidebar when clicking overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            closeSidebar();
        });
    }
    
    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
    
    // Expand section containing active link
    const activeLink = document.querySelector('.nav-links li a.active');
    if (activeLink) {
        const parentNav = activeLink.closest('.nav-links');
        if (parentNav && parentNav.id) {
            parentNav.classList.add('expanded');
            const header = document.querySelector(`[data-toggle="${parentNav.id}"]`);
            if (header) {
                header.classList.remove('collapsed');
            }
        }
    }
    
    function openSidebar() {
        if (sidebar) sidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ============================================
   Theme Toggle
   ============================================ */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
}

/* ============================================
   Search Functionality
   ============================================ */
function initSearch() {
    const searchInput = document.getElementById('globalSearch');
    
    if (searchInput) {
        // Keyboard shortcut
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
            
            if (e.key === 'Escape' && document.activeElement === searchInput) {
                searchInput.blur();
            }
        });
    }
}

/* ============================================
   Code Copy Functionality
   ============================================ */
function initCodeCopy() {
    const copyButtons = document.querySelectorAll('.query-copy-btn, .code-copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', async function() {
            const container = this.closest('.query-example, .code-block-container');
            const codeBlock = container ? container.querySelector('code, pre') : null;
            
            if (codeBlock) {
                try {
                    await navigator.clipboard.writeText(codeBlock.textContent);
                    
                    // Visual feedback
                    const originalHTML = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Copied';
                    this.style.color = 'var(--accent-primary)';
                    this.style.borderColor = 'var(--accent-primary)';
                    
                    setTimeout(() => {
                        this.innerHTML = originalHTML;
                        this.style.color = '';
                        this.style.borderColor = '';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
            }
        });
    });
}

/* ============================================
   Tab Functionality
   ============================================ */
function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs-container');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab-btn');
        const panels = container.querySelectorAll('.tab-panel');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetId = this.getAttribute('data-tab');
                
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Show target panel
                panels.forEach(panel => {
                    panel.classList.remove('active');
                    if (panel.id === targetId) {
                        panel.classList.add('active');
                    }
                });
            });
        });
    });
    
    // Also handle simple tab groups
    const simpleTabs = document.querySelectorAll('.tabs .tab-btn');
    simpleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabGroup = this.closest('.tabs');
            const tabContent = tabGroup ? tabGroup.nextElementSibling : null;
            const targetId = this.getAttribute('data-tab');
            
            // Update active state in tab group
            tabGroup.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update panels if they exist
            if (tabContent && tabContent.classList.contains('tab-content')) {
                tabContent.querySelectorAll('.tab-panel').forEach(panel => {
                    panel.classList.remove('active');
                    if (panel.id === targetId) {
                        panel.classList.add('active');
                    }
                });
            }
        });
    });
}

/* ============================================
   Terminal Animation
   ============================================ */
function initTerminalAnimation() {
    const terminal = document.querySelector('.terminal-body');
    
    if (terminal) {
        const lines = terminal.querySelectorAll('.terminal-line');
        
        lines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(8px)';
            
            setTimeout(() => {
                line.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, 150 + (index * 120));
        });
    }
}

/* ============================================
   Smooth Scroll for Anchors
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            
            if (target) {
                e.preventDefault();
                
                const navHeight = document.querySelector('.main-nav')?.offsetHeight || 54;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL
                history.pushState(null, null, targetId);
            }
        }
    });
});

/* ============================================
   Decision Tree Interactivity
   ============================================ */
function initDecisionTree() {
    const decisionNodes = document.querySelectorAll('.decision-option');
    
    decisionNodes.forEach(option => {
        option.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetNode = document.getElementById(targetId);
            
            if (targetNode) {
                // Highlight selected option
                const parentNode = this.closest('.decision-node');
                if (parentNode) {
                    parentNode.querySelectorAll('.decision-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    this.classList.add('selected');
                }
                
                // Show target and scroll
                targetNode.style.display = 'block';
                targetNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
}

/* ============================================
   Accordion Functionality
   ============================================ */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            const isActive = item.classList.contains('active');
            
            // Close all others in same accordion group
            const accordion = this.closest('.accordion');
            if (accordion) {
                accordion.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                    if (activeItem !== item) {
                        activeItem.classList.remove('active');
                        activeItem.querySelector('.accordion-content').style.maxHeight = '0';
                    }
                });
            }
            
            // Toggle current
            if (isActive) {
                item.classList.remove('active');
                content.style.maxHeight = '0';
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

/* ============================================
   Table of Contents Generator
   ============================================ */
function generateTOC() {
    const tocContainer = document.getElementById('toc');
    const content = document.querySelector('.content');
    
    if (tocContainer && content) {
        const headings = content.querySelectorAll('h2, h3');
        
        if (headings.length === 0) return;
        
        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';
        
        headings.forEach((heading, index) => {
            // Add ID if not present
            if (!heading.id) {
                heading.id = 'section-' + index;
            }
            
            const li = document.createElement('li');
            li.className = heading.tagName.toLowerCase() === 'h3' ? 'toc-h3' : 'toc-h2';
            
            const link = document.createElement('a');
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;
            
            li.appendChild(link);
            tocList.appendChild(li);
        });
        
        tocContainer.appendChild(tocList);
    }
}

/* ============================================
   Utility: Debounce
   ============================================ */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
