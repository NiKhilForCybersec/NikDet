/* ============================================
   SOC & Detection Engineering Compendium
   Main JavaScript - Dynamic Sidebar
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    injectSidebar();
    initSidebar();
    initThemeToggle();
    initSidebarSearch();
    initCodeCopy();
    initTabs();
    initTerminalAnimation();
});

/* ============================================
   Dynamic Sidebar Injection
   ============================================ */
function injectSidebar() {
    // Only inject if sidebar doesn't exist
    if (document.getElementById('sidebar')) return;
    
    const sidebarHTML = `
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <input type="text" class="sidebar-search" id="sidebarSearch" placeholder="Search pages... (Ctrl+K)">
        </div>
        <a href="index.html" class="sidebar-home-link"><i class="fas fa-home"></i> Home</a>
        <nav class="sidebar-nav">
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-graduation-cap section-icon"></i><span>Foundations</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/foundations/index.html">SOC Foundations</a></li>
                    <li><a href="pages/foundations/what-is-soc.html">What is a SOC?</a></li>
                    <li><a href="pages/foundations/attack-basics.html">How Attacks Work</a></li>
                    <li><a href="pages/foundations/tools-overview.html">Security Tools Overview</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-user-shield section-icon"></i><span>SOC Operations</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/soc-operations/index.html">Operations Overview</a></li>
                    <li><a href="pages/soc-operations/l1-operations.html">L1 Operations</a></li>
                    <li><a href="pages/soc-operations/l2-operations.html">L2 Operations</a></li>
                    <li><a href="pages/soc-operations/incident-response.html">Incident Response</a></li>
                    <li><a href="pages/soc-operations/metrics.html">Metrics & KPIs</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-book-open section-icon"></i><span>Playbooks</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/playbooks/index.html">All Playbooks</a></li>
                    <li><a href="pages/playbooks/investigation/phishing.html">Phishing Investigation</a></li>
                    <li><a href="pages/playbooks/investigation/malware.html">Malware Investigation</a></li>
                    <li><a href="pages/playbooks/investigation/lateral-movement.html">Lateral Movement</a></li>
                    <li><a href="pages/playbooks/investigation/data-exfiltration.html">Data Exfiltration</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-crosshairs section-icon"></i><span>Threat Hunting</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/threat-hunting/index.html">Hunting Overview</a></li>
                    <li><a href="pages/threat-hunting/methodology.html">Methodology</a></li>
                    <li><a href="pages/threat-hunting/hypothesis.html">Hypothesis Development</a></li>
                    <li><a href="pages/frameworks/mitre-attack.html">MITRE ATT&CK</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-shield-halved section-icon"></i><span>Detection Engineering</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/detection-engineering/index.html">Detection Overview</a></li>
                    <li><a href="pages/detection-engineering/lifecycle.html">Detection Lifecycle</a></li>
                    <li><a href="pages/detection-engineering/sigma-rules.html">Sigma Rules</a></li>
                    <li><a href="pages/detection-engineering/detection-as-code.html">Detection as Code</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-database section-icon"></i><span>SIEM & Queries</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/sentinel/index.html">Microsoft Sentinel</a></li>
                    <li><a href="pages/sentinel/kql-fundamentals.html">KQL Fundamentals</a></li>
                    <li><a href="pages/references/kql-library.html">KQL Library</a></li>
                    <li><a href="pages/splunk/index.html">Splunk</a></li>
                    <li><a href="pages/references/spl-library.html">SPL Library</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-server section-icon"></i><span>Log Analysis</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/log-analysis/index.html">Log Analysis Overview</a></li>
                    <li><a href="pages/log-analysis/windows-events.html">Windows Events</a></li>
                    <li><a href="pages/log-analysis/sysmon.html">Sysmon</a></li>
                    <li><a href="pages/log-analysis/linux-logs.html">Linux Logs</a></li>
                    <li><a href="pages/log-analysis/network-logs.html">Network Logs</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-cloud section-icon"></i><span>Cloud Security</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/cloud-security/index.html">Cloud Overview</a></li>
                    <li><a href="pages/cloud-security/azure-security.html">Azure Security</a></li>
                    <li><a href="pages/cloud-security/aws-security.html">AWS Security</a></li>
                    <li><a href="pages/cloud-security/m365-security.html">M365 Security</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-shield-virus section-icon"></i><span>Defender for Endpoint</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/mde/index.html">MDE Overview</a></li>
                    <li><a href="pages/mde/onboarding-windows.html">Windows Onboarding</a></li>
                    <li><a href="pages/mde/onboarding-linux.html">Linux Onboarding</a></li>
                    <li><a href="pages/mde/onboarding-macos.html">macOS Onboarding</a></li>
                    <li><a href="pages/mde/troubleshooting.html">Troubleshooting</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-cloud-bolt section-icon"></i><span>Defender for Cloud</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/defender-cloud/index.html">Overview</a></li>
                    <li><a href="pages/defender-cloud/cspm.html">CSPM Guide</a></li>
                    <li><a href="pages/defender-cloud/cwpp.html">CWPP Guide</a></li>
                    <li><a href="pages/defender-cloud/aws-integration.html">AWS Integration</a></li>
                    <li><a href="pages/defender-cloud/gcp-integration.html">GCP Integration</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-fire-flame-curved section-icon"></i><span>NGFW - FortiGate</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/ngfw/index.html">NGFW Overview</a></li>
                    <li><a href="pages/ngfw/fortinet/index.html">FortiGate Guide</a></li>
                    <li><a href="pages/ngfw/fortinet/initial-setup.html">Initial Setup</a></li>
                    <li><a href="pages/ngfw/fortinet/interfaces-zones.html">Interfaces & Zones</a></li>
                    <li><a href="pages/ngfw/fortinet/policies.html">Firewall Policies</a></li>
                    <li><a href="pages/ngfw/fortinet/security-profiles.html">Security Profiles</a></li>
                    <li><a href="pages/ngfw/fortinet/logging-siem.html">Logging & SIEM</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-fire section-icon"></i><span>NGFW - Palo Alto</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/ngfw/paloalto/index.html">Palo Alto Guide</a></li>
                    <li><a href="pages/ngfw/paloalto/initial-setup.html">Initial Setup</a></li>
                    <li><a href="pages/ngfw/paloalto/policies.html">Security Policies</a></li>
                    <li><a href="pages/ngfw/paloalto/logging-siem.html">Logging & SIEM</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-id-card section-icon"></i><span>Identity & IAM</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/iam/index.html">IAM Overview</a></li>
                    <li><a href="pages/iam/protocols.html">Auth Protocols</a></li>
                    <li><a href="pages/iam/entra-id/index.html">Microsoft Entra ID</a></li>
                    <li><a href="pages/iam/entra-id/conditional-access.html">Conditional Access</a></li>
                    <li><a href="pages/encryption/index.html">Encryption & Certs</a></li>
                    <li><a href="pages/encryption/certificates-guide.html">Certificate Guide</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-sitemap section-icon"></i><span>Frameworks</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/frameworks/mitre-attack.html">MITRE ATT&CK</a></li>
                    <li><a href="pages/frameworks/nist-csf.html">NIST CSF 2.0</a></li>
                    <li><a href="pages/frameworks/cis-controls.html">CIS Controls v8</a></li>
                    <li><a href="pages/risk-assessment/index.html">Risk Assessment</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-briefcase section-icon"></i><span>Interview Prep</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/interview-career/index.html">Interview Overview</a></li>
                    <li><a href="pages/interview-career/interview-cheatsheet.html">Cheat Sheet</a></li>
                    <li><a href="pages/interview-career/interview-behavioral.html">Behavioral Q&A</a></li>
                    <li><a href="pages/interview-career/interview-technical.html">Technical Q&A</a></li>
                    <li><a href="pages/interview-career/ai-security-risk.html">AI Security</a></li>
                </ul>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-book-bookmark section-icon"></i><span>References</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/references/index.html">All References</a></li>
                    <li><a href="pages/references/cheatsheets.html">Cheatsheets</a></li>
                    <li><a href="pages/references/glossary.html">Glossary</a></li>
                    <li><a href="pages/infrastructure/log-sources.html">Log Sources</a></li>
                </ul>
            </div>
        </nav>
        <div class="sidebar-footer">
            <span>SOC Compendium</span>
            <span>190+ Pages</span>
        </div>
    </aside>
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
    <button class="sidebar-toggle" id="sidebarToggle"><i class="fas fa-bars"></i></button>
    `;
    
    // Insert sidebar at the start of body
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // Mark current page as active
    markActivePage();
}

function markActivePage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.sidebar-links a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href) || currentPath.includes(href.replace('index.html', ''))) {
            link.classList.add('active');
            // Expand parent section
            const section = link.closest('.sidebar-section');
            if (section) {
                section.classList.remove('collapsed');
            }
        }
    });
}

/* ============================================
   Sidebar Navigation - Collapsible Sections
   ============================================ */
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    // Toggle collapsible sections
    const sectionHeaders = document.querySelectorAll('.sidebar-section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.closest('.sidebar-section');
            section.classList.toggle('collapsed');
        });
    });
    
    // Start with all sections collapsed except the one with active link
    document.querySelectorAll('.sidebar-section').forEach(section => {
        if (!section.querySelector('.sidebar-links a.active')) {
            section.classList.add('collapsed');
        }
    });
    
    // Mobile sidebar toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Close sidebar when clicking overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
            sidebarToggle.querySelector('i').classList.add('fa-bars');
            sidebarToggle.querySelector('i').classList.remove('fa-times');
        });
    }
    
    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        }
    });
}

/* ============================================
   Sidebar Search
   ============================================ */
function initSidebarSearch() {
    const searchInput = document.getElementById('sidebarSearch');
    
    if (searchInput) {
        // Keyboard shortcut
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
        });
        
        // Filter sidebar links
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const sections = document.querySelectorAll('.sidebar-section');
            
            sections.forEach(section => {
                const links = section.querySelectorAll('.sidebar-links a');
                let hasMatch = false;
                
                links.forEach(link => {
                    const text = link.textContent.toLowerCase();
                    if (text.includes(query) || query === '') {
                        link.style.display = '';
                        hasMatch = true;
                    } else {
                        link.style.display = 'none';
                    }
                });
                
                // Show/hide section based on matches
                if (hasMatch || query === '') {
                    section.style.display = '';
                    if (query !== '') {
                        section.classList.remove('collapsed');
                    }
                } else {
                    section.style.display = 'none';
                }
            });
        });
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
