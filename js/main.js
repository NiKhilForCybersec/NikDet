/* ============================================
   SOC & Detection Engineering Compendium
   Main JavaScript - Dynamic Sidebar (COMPLETE)
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
   Dynamic Sidebar Injection - COMPLETE COVERAGE
   ============================================ */
function injectSidebar() {
    if (document.getElementById('sidebar')) return;
    
    const sidebarHTML = `
    <style>
        /* Inline sidebar collapse styles - fallback */
        .sidebar .sidebar-section .sidebar-links { display: none !important; }
        .sidebar .sidebar-section.expanded .sidebar-links { display: block !important; }
        .sidebar .sidebar-section-header .chevron { transform: rotate(-90deg); transition: transform 0.2s ease; }
        .sidebar .sidebar-section.expanded .sidebar-section-header .chevron { transform: rotate(0deg); }
    </style>
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <input type="text" class="sidebar-search" id="sidebarSearch" placeholder="Search pages... (Ctrl+K)">
        </div>
        <a href="index.html" class="sidebar-home-link"><i class="fas fa-home"></i> Home</a>
        <nav class="sidebar-nav">
            <!-- FOUNDATIONS -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-graduation-cap section-icon"></i><span>Foundations</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/foundations/index.html">SOC Foundations</a></li>
                    <li><a href="pages/foundations/what-is-soc.html">What is a SOC?</a></li>
                    <li><a href="pages/foundations/security-fundamentals.html">Security Fundamentals</a></li>
                    <li><a href="pages/foundations/networking-basics.html">Networking Basics</a></li>
                    <li><a href="pages/foundations/operating-systems.html">Operating Systems</a></li>
                    <li><a href="pages/foundations/attack-basics.html">How Attacks Work</a></li>
                    <li><a href="pages/foundations/tools-overview.html">Security Tools</a></li>
                    <li><a href="pages/foundations/terminology.html">Terminology</a></li>
                    <li><a href="pages/foundations/reading-logs.html">Reading Logs</a></li>
                    <li><a href="pages/foundations/analyst-skills.html">Analyst Skills</a></li>
                    <li><a href="pages/foundations/first-day.html">First Day Guide</a></li>
                    <li><a href="pages/foundations/daily-operations.html">Daily Operations</a></li>
                    <li><a href="pages/foundations/career-path.html">Career Path</a></li>
                    <li><a href="pages/foundations/certifications.html">Certifications</a></li>
                </ul>
            </div>
            <!-- SOC OPERATIONS -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-user-shield section-icon"></i><span>SOC Operations</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/soc-operations/index.html">Operations Overview</a></li>
                    <li><a href="pages/soc-operations/l1-operations.html">L1 Operations</a></li>
                    <li><a href="pages/soc-operations/l2-operations.html">L2 Operations</a></li>
                    <li><a href="pages/soc-operations/l3-operations.html">L3 Operations</a></li>
                    <li><a href="pages/soc-operations/incident-response.html">Incident Response</a></li>
                    <li><a href="pages/soc-operations/threat-hunting.html">Threat Hunting</a></li>
                    <li><a href="pages/soc-operations/shift-management.html">Shift Management</a></li>
                    <li><a href="pages/soc-operations/metrics.html">Metrics & KPIs</a></li>
                </ul>
            </div>
            <!-- SOC MATURITY -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-stairs section-icon"></i><span>SOC Maturity</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/soc-maturity/index.html">Maturity Model</a></li>
                    <li><a href="pages/soc-maturity/level-1.html">Level 1 - Initial</a></li>
                    <li><a href="pages/soc-maturity/level-2.html">Level 2 - Managed</a></li>
                    <li><a href="pages/soc-maturity/level-3.html">Level 3 - Defined</a></li>
                    <li><a href="pages/soc-maturity/level-4.html">Level 4 - Measured</a></li>
                    <li><a href="pages/soc-maturity/level-5.html">Level 5 - Optimizing</a></li>
                </ul>
            </div>
            <!-- PLAYBOOKS - TRIAGE -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-clipboard-check section-icon"></i><span>Triage Playbooks</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/playbooks/index.html">All Playbooks</a></li>
                    <li><a href="pages/playbooks/triage/endpoint.html">Endpoint Triage</a></li>
                    <li><a href="pages/playbooks/triage/email.html">Email Triage</a></li>
                    <li><a href="pages/playbooks/triage/network.html">Network Triage</a></li>
                    <li><a href="pages/playbooks/triage/identity.html">Identity Triage</a></li>
                    <li><a href="pages/playbooks/triage/cloud.html">Cloud Triage</a></li>
                    <li><a href="pages/playbooks/triage/malware.html">Malware Triage</a></li>
                    <li><a href="pages/playbooks/triage/dlp.html">DLP Triage</a></li>
                    <li><a href="pages/playbooks/triage/authentication.html">Auth Triage</a></li>
                </ul>
            </div>
            <!-- PLAYBOOKS - INVESTIGATION -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-search section-icon"></i><span>Investigation Playbooks</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/playbooks/investigation/phishing.html">Phishing</a></li>
                    <li><a href="pages/playbooks/investigation/malware.html">Malware</a></li>
                    <li><a href="pages/playbooks/investigation/ransomware.html">Ransomware</a></li>
                    <li><a href="pages/playbooks/investigation/account-compromise.html">Account Compromise</a></li>
                    <li><a href="pages/playbooks/investigation/bec.html">Business Email Compromise</a></li>
                    <li><a href="pages/playbooks/investigation/lateral-movement.html">Lateral Movement</a></li>
                    <li><a href="pages/playbooks/investigation/privilege-escalation.html">Privilege Escalation</a></li>
                    <li><a href="pages/playbooks/investigation/data-exfiltration.html">Data Exfiltration</a></li>
                    <li><a href="pages/playbooks/investigation/insider-threat.html">Insider Threat</a></li>
                    <li><a href="pages/playbooks/investigation/c2-detection.html">C2 Detection</a></li>
                </ul>
            </div>
            <!-- PLAYBOOKS - INCIDENT RESPONSE -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-fire-extinguisher section-icon"></i><span>Incident Response</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/playbooks/incident-response/ransomware-ir.html">Ransomware IR</a></li>
                    <li><a href="pages/playbooks/incident-response/phishing-ir.html">Phishing IR</a></li>
                    <li><a href="pages/playbooks/incident-response/malware-ir.html">Malware IR</a></li>
                    <li><a href="pages/playbooks/incident-response/data-breach-ir.html">Data Breach IR</a></li>
                    <li><a href="pages/playbooks/incident-response/insider-ir.html">Insider Threat IR</a></li>
                    <li><a href="pages/playbooks/incident-response/ddos-ir.html">DDoS IR</a></li>
                </ul>
            </div>
            <!-- PLAYBOOKS - CONTAINMENT -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-shield section-icon"></i><span>Containment</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/playbooks/containment/endpoint-isolation.html">Endpoint Isolation</a></li>
                    <li><a href="pages/playbooks/containment/account-actions.html">Account Actions</a></li>
                    <li><a href="pages/playbooks/containment/network-actions.html">Network Actions</a></li>
                    <li><a href="pages/playbooks/containment/email-remediation.html">Email Remediation</a></li>
                    <li><a href="pages/playbooks/containment/cloud-containment.html">Cloud Containment</a></li>
                </ul>
            </div>
            <!-- THREAT HUNTING -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-crosshairs section-icon"></i><span>Threat Hunting</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/threat-hunting/index.html">Hunting Overview</a></li>
                    <li><a href="pages/threat-hunting/methodology.html">Methodology</a></li>
                    <li><a href="pages/threat-hunting/hypothesis.html">Hypothesis Development</a></li>
                    <li><a href="pages/threat-hunting/hunt-playbooks.html">Hunt Playbooks</a></li>
                    <li><a href="pages/playbooks/hunting/initial-access.html">Initial Access Hunt</a></li>
                    <li><a href="pages/playbooks/hunting/persistence.html">Persistence Hunt</a></li>
                    <li><a href="pages/playbooks/hunting/privilege-escalation-hunt.html">Priv Esc Hunt</a></li>
                    <li><a href="pages/playbooks/hunting/defense-evasion.html">Defense Evasion Hunt</a></li>
                    <li><a href="pages/playbooks/hunting/credential-access.html">Credential Access Hunt</a></li>
                    <li><a href="pages/playbooks/hunting/lateral-movement-hunt.html">Lateral Movement Hunt</a></li>
                    <li><a href="pages/playbooks/hunting/exfiltration.html">Exfiltration Hunt</a></li>
                </ul>
            </div>
            <!-- DETECTION ENGINEERING -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-shield-halved section-icon"></i><span>Detection Engineering</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/detection-engineering/index.html">Detection Overview</a></li>
                    <li><a href="pages/detection-engineering/lifecycle.html">Detection Lifecycle</a></li>
                    <li><a href="pages/detection-engineering/sigma-rules.html">Sigma Rules</a></li>
                    <li><a href="pages/detection-engineering/detection-as-code.html">Detection as Code</a></li>
                    <li><a href="pages/detection-engineering/testing.html">Detection Testing</a></li>
                    <li><a href="pages/detection-engineering/coverage-analysis.html">Coverage Analysis</a></li>
                </ul>
            </div>
            <!-- MICROSOFT SENTINEL -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-database section-icon"></i><span>Microsoft Sentinel</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/sentinel/index.html">Sentinel Overview</a></li>
                    <li><a href="pages/sentinel/architecture.html">Architecture</a></li>
                    <li><a href="pages/sentinel/data-connectors.html">Data Connectors</a></li>
                    <li><a href="pages/sentinel/analytics-rules.html">Analytics Rules</a></li>
                    <li><a href="pages/sentinel/workbooks.html">Workbooks</a></li>
                    <li><a href="pages/sentinel/automation.html">Automation</a></li>
                    <li><a href="pages/sentinel/kql-fundamentals.html">KQL Fundamentals</a></li>
                    <li><a href="pages/sentinel/kql-intermediate.html">KQL Intermediate</a></li>
                    <li><a href="pages/sentinel/kql-advanced.html">KQL Advanced</a></li>
                    <li><a href="pages/references/kql-library.html">KQL Library</a></li>
                </ul>
            </div>
            <!-- SPLUNK -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-chart-line section-icon"></i><span>Splunk</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/splunk/index.html">Splunk Overview</a></li>
                    <li><a href="pages/splunk/spl-fundamentals.html">SPL Fundamentals</a></li>
                    <li><a href="pages/splunk/spl-intermediate.html">SPL Intermediate</a></li>
                    <li><a href="pages/splunk/spl-advanced.html">SPL Advanced</a></li>
                    <li><a href="pages/references/spl-library.html">SPL Library</a></li>
                </ul>
            </div>
            <!-- LOG ANALYSIS -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-file-lines section-icon"></i><span>Log Analysis</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/log-analysis/index.html">Log Analysis Overview</a></li>
                    <li><a href="pages/log-analysis/windows-events.html">Windows Events</a></li>
                    <li><a href="pages/log-analysis/sysmon.html">Sysmon</a></li>
                    <li><a href="pages/log-analysis/linux-logs.html">Linux Logs</a></li>
                    <li><a href="pages/log-analysis/network-logs.html">Network Logs</a></li>
                    <li><a href="pages/infrastructure/index.html">Log Infrastructure</a></li>
                    <li><a href="pages/infrastructure/log-sources.html">Log Sources</a></li>
                    <li><a href="pages/infrastructure/collection.html">Log Collection</a></li>
                    <li><a href="pages/infrastructure/parsing.html">Log Parsing</a></li>
                </ul>
            </div>
            <!-- CLOUD SECURITY -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-cloud section-icon"></i><span>Cloud Security</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/cloud-security/index.html">Cloud Overview</a></li>
                    <li><a href="pages/cloud-security/azure-security.html">Azure Security</a></li>
                    <li><a href="pages/cloud-security/aws-security.html">AWS Security</a></li>
                    <li><a href="pages/cloud-security/m365-security.html">M365 Security</a></li>
                    <li><a href="pages/cloud-security/cloud-detection.html">Cloud Detection</a></li>
                </ul>
            </div>
            <!-- DEFENDER FOR ENDPOINT -->
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
            <!-- DEFENDER FOR CLOUD -->
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
            <!-- NGFW FORTIGATE -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-fire-flame-curved section-icon"></i><span>FortiGate NGFW</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/ngfw/index.html">NGFW Overview</a></li>
                    <li><a href="pages/ngfw/fortinet/index.html">FortiGate Guide</a></li>
                    <li><a href="pages/ngfw/fortinet/initial-setup.html">Initial Setup</a></li>
                    <li><a href="pages/ngfw/fortinet/interfaces-zones.html">Interfaces & Zones</a></li>
                    <li><a href="pages/ngfw/fortinet/objects.html">Objects</a></li>
                    <li><a href="pages/ngfw/fortinet/policies.html">Firewall Policies</a></li>
                    <li><a href="pages/ngfw/fortinet/security-profiles.html">Security Profiles</a></li>
                    <li><a href="pages/ngfw/fortinet/routing.html">Routing</a></li>
                    <li><a href="pages/ngfw/fortinet/vpn.html">VPN</a></li>
                    <li><a href="pages/ngfw/fortinet/authentication.html">Authentication</a></li>
                    <li><a href="pages/ngfw/fortinet/ha.html">High Availability</a></li>
                    <li><a href="pages/ngfw/fortinet/logging-siem.html">Logging & SIEM</a></li>
                </ul>
            </div>
            <!-- NGFW PALO ALTO -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-fire section-icon"></i><span>Palo Alto NGFW</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/ngfw/paloalto/index.html">Palo Alto Guide</a></li>
                    <li><a href="pages/ngfw/paloalto/initial-setup.html">Initial Setup</a></li>
                    <li><a href="pages/ngfw/paloalto/interfaces-zones.html">Interfaces & Zones</a></li>
                    <li><a href="pages/ngfw/paloalto/policies.html">Security Policies</a></li>
                    <li><a href="pages/ngfw/paloalto/security-profiles.html">Security Profiles</a></li>
                    <li><a href="pages/ngfw/paloalto/decryption.html">Decryption</a></li>
                    <li><a href="pages/ngfw/paloalto/user-id.html">User-ID</a></li>
                    <li><a href="pages/ngfw/paloalto/globalprotect.html">GlobalProtect</a></li>
                    <li><a href="pages/ngfw/paloalto/logging-siem.html">Logging & SIEM</a></li>
                </ul>
            </div>
            <!-- IDENTITY & IAM -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-id-card section-icon"></i><span>Identity & IAM</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/iam/index.html">IAM Overview</a></li>
                    <li><a href="pages/iam/fundamentals.html">IAM Fundamentals</a></li>
                    <li><a href="pages/iam/authentication-types.html">Authentication Types</a></li>
                    <li><a href="pages/iam/protocols.html">Auth Protocols</a></li>
                    <li><a href="pages/iam/sso.html">Single Sign-On</a></li>
                    <li><a href="pages/iam/active-directory.html">Active Directory</a></li>
                </ul>
            </div>
            <!-- ENTRA ID -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fab fa-microsoft section-icon"></i><span>Microsoft Entra ID</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/iam/entra-id/index.html">Entra ID Overview</a></li>
                    <li><a href="pages/iam/entra-id/users-groups.html">Users & Groups</a></li>
                    <li><a href="pages/iam/entra-id/mfa.html">MFA</a></li>
                    <li><a href="pages/iam/entra-id/conditional-access.html">Conditional Access</a></li>
                    <li><a href="pages/iam/entra-id/pim.html">Privileged Identity (PIM)</a></li>
                    <li><a href="pages/iam/entra-id/identity-protection.html">Identity Protection</a></li>
                    <li><a href="pages/iam/entra-id/applications.html">Applications</a></li>
                    <li><a href="pages/iam/entra-id/b2b-b2c.html">B2B & B2C</a></li>
                    <li><a href="pages/iam/entra-id/hybrid.html">Hybrid Identity</a></li>
                </ul>
            </div>
            <!-- ENCRYPTION -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-lock section-icon"></i><span>Encryption & Certs</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/encryption/index.html">Encryption Overview</a></li>
                    <li><a href="pages/encryption/certificates-guide.html">Certificate Guide</a></li>
                </ul>
            </div>
            <!-- SECURITY ARCHITECTURE -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-building-shield section-icon"></i><span>Security Architecture</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/security-architecture/index.html">Architecture Overview</a></li>
                    <li><a href="pages/security-architecture/why-security-matters.html">Why Security Matters</a></li>
                    <li><a href="pages/security-architecture/enterprise-security.html">Enterprise Security</a></li>
                    <li><a href="pages/security-architecture/defense-in-depth.html">Defense in Depth</a></li>
                    <li><a href="pages/security-architecture/zero-trust.html">Zero Trust</a></li>
                    <li><a href="pages/security-architecture/identity-security.html">Identity Security</a></li>
                    <li><a href="pages/security-architecture/endpoint-security.html">Endpoint Security</a></li>
                    <li><a href="pages/security-architecture/network-security.html">Network Security</a></li>
                    <li><a href="pages/security-architecture/network-security-config.html">Network Config</a></li>
                    <li><a href="pages/security-architecture/application-security.html">Application Security</a></li>
                    <li><a href="pages/security-architecture/data-protection.html">Data Protection</a></li>
                    <li><a href="pages/security-architecture/email-security.html">Email Security</a></li>
                    <li><a href="pages/security-architecture/casb-cloud-security.html">CASB & Cloud</a></li>
                    <li><a href="pages/security-architecture/siem-monitoring.html">SIEM & Monitoring</a></li>
                    <li><a href="pages/security-architecture/security-operations.html">Security Operations</a></li>
                    <li><a href="pages/security-architecture/backup-dr-security.html">Backup & DR</a></li>
                    <li><a href="pages/security-architecture/ot-ics-security.html">OT/ICS Security</a></li>
                    <li><a href="pages/security-architecture/third-party-risk.html">Third-Party Risk</a></li>
                    <li><a href="pages/security-architecture/implementation-guide.html">Implementation Guide</a></li>
                    <li><a href="pages/security-architecture/security-decisions-guide.html">Decisions Guide</a></li>
                    <li><a href="pages/security-architecture/security-faq.html">Security FAQ</a></li>
                    <li><a href="pages/security-architecture/troubleshooting-security.html">Troubleshooting</a></li>
                </ul>
            </div>
            <!-- FRAMEWORKS -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-sitemap section-icon"></i><span>Frameworks</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/frameworks/index.html">Frameworks Overview</a></li>
                    <li><a href="pages/frameworks/mitre-attack.html">MITRE ATT&CK</a></li>
                    <li><a href="pages/frameworks/nist-csf.html">NIST CSF 2.0</a></li>
                    <li><a href="pages/frameworks/cis-controls.html">CIS Controls v8</a></li>
                    <li><a href="pages/frameworks/sigma-rules.html">Sigma Rules</a></li>
                </ul>
            </div>
            <!-- RISK ASSESSMENT -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-scale-balanced section-icon"></i><span>Risk Assessment</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/risk-assessment/index.html">Risk Overview</a></li>
                    <li><a href="pages/risk-assessment/fundamentals.html">Fundamentals</a></li>
                    <li><a href="pages/risk-assessment/methodology.html">Methodology</a></li>
                    <li><a href="pages/risk-assessment/asset-discovery.html">Asset Discovery</a></li>
                    <li><a href="pages/risk-assessment/crown-jewels.html">Crown Jewels</a></li>
                    <li><a href="pages/risk-assessment/threat-modeling.html">Threat Modeling</a></li>
                    <li><a href="pages/risk-assessment/controls-mapping.html">Controls Mapping</a></li>
                    <li><a href="pages/risk-assessment/enterprise-risk.html">Enterprise Risk</a></li>
                    <li><a href="pages/risk-assessment/third-party-risk.html">Third-Party Risk</a></li>
                    <li><a href="pages/risk-assessment/industry-scenarios.html">Industry Scenarios</a></li>
                </ul>
            </div>
            <!-- VULNERABILITY MANAGEMENT -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-bug section-icon"></i><span>Vulnerability Mgmt</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/vuln-management/index.html">Vuln Mgmt Overview</a></li>
                    <li><a href="pages/vuln-management/scanning.html">Scanning</a></li>
                    <li><a href="pages/vuln-management/cvss-scoring.html">CVSS Scoring</a></li>
                    <li><a href="pages/vuln-management/prioritization.html">Prioritization</a></li>
                    <li><a href="pages/vuln-management/remediation.html">Remediation</a></li>
                </ul>
            </div>
            <!-- FORENSICS -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-fingerprint section-icon"></i><span>Forensics</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/forensics/index.html">Forensics Overview</a></li>
                    <li><a href="pages/forensics/evidence-collection.html">Evidence Collection</a></li>
                    <li><a href="pages/forensics/disk-forensics.html">Disk Forensics</a></li>
                    <li><a href="pages/forensics/memory-forensics.html">Memory Forensics</a></li>
                    <li><a href="pages/forensics/timeline-analysis.html">Timeline Analysis</a></li>
                </ul>
            </div>
            <!-- THREAT INTEL -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-radar section-icon"></i><span>Threat Intelligence</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/threat-intel/index.html">Threat Intel Overview</a></li>
                    <li><a href="pages/threat-intel/intel-lifecycle.html">Intel Lifecycle</a></li>
                    <li><a href="pages/threat-intel/intel-sources.html">Intel Sources</a></li>
                    <li><a href="pages/threat-intel/ioc-types.html">IOC Types</a></li>
                    <li><a href="pages/threat-intel/threat-actors.html">Threat Actors</a></li>
                </ul>
            </div>
            <!-- MENTAL MODELS -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-brain section-icon"></i><span>Mental Models</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/mental-models/index.html">Security Mental Model</a></li>
                    <li><a href="pages/mental-models/three-planes.html">Three Planes</a></li>
                    <li><a href="pages/mental-models/xdr-siem-strategy.html">XDR vs SIEM</a></li>
                    <li><a href="pages/mental-models/sase-architecture.html">SASE Architecture</a></li>
                    <li><a href="pages/mental-models/ransomware-defense.html">Ransomware Defense</a></li>
                </ul>
            </div>
            <!-- INFRASTRUCTURE AS CODE -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-code section-icon"></i><span>Infrastructure as Code</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/iac/index.html">IaC Overview</a></li>
                    <li><a href="pages/iac/terraform-guide.html">Terraform Guide</a></li>
                    <li><a href="pages/iac/ansible-guide.html">Ansible Guide</a></li>
                    <li><a href="pages/iac/security-scanning.html">Security Scanning</a></li>
                    <li><a href="pages/iac/gitops.html">GitOps & CI/CD</a></li>
                    <li><a href="pages/iac/secrets-management.html">Secrets Management</a></li>
                    <li><a href="pages/iac/drift-detection.html">Drift Detection</a></li>
                </ul>
            </div>
            <!-- INTERVIEW PREP -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-briefcase section-icon"></i><span>Interview & Career</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/interview-career/index.html">Interview Overview</a></li>
                    <li><a href="pages/interview-career/interview-cheatsheet.html">Cheat Sheet</a></li>
                    <li><a href="pages/interview-career/interview-behavioral.html">Behavioral Q&A</a></li>
                    <li><a href="pages/interview-career/interview-technical.html">Technical Q&A</a></li>
                    <li><a href="pages/interview-career/case-study.html">Case Studies</a></li>
                    <li><a href="pages/interview-career/ai-security-risk.html">AI Security</a></li>
                </ul>
            </div>
            <!-- AUTOMATION -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-robot section-icon"></i><span>Automation & SOAR</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/automation/index.html">Automation Overview</a></li>
                </ul>
            </div>
            <!-- TROUBLESHOOTING -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-wrench section-icon"></i><span>Troubleshooting</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/troubleshooting/index.html">Troubleshooting Guide</a></li>
                    <li><a href="pages/troubleshooting/decision-trees.html">Decision Trees</a></li>
                    <li><a href="pages/troubleshooting/real-world-scenarios.html">Real-World Scenarios</a></li>
                </ul>
            </div>
            <!-- REFERENCES -->
            <div class="sidebar-section">
                <div class="sidebar-section-header"><i class="fas fa-book-bookmark section-icon"></i><span>References</span><i class="fas fa-chevron-down chevron"></i></div>
                <ul class="sidebar-links">
                    <li><a href="pages/references/index.html">All References</a></li>
                    <li><a href="pages/references/cheatsheets.html">Cheatsheets</a></li>
                    <li><a href="pages/references/glossary.html">Glossary</a></li>
                </ul>
            </div>
        </nav>
        <div class="sidebar-footer">
            <span>SOC Compendium</span>
            <span>230 Pages</span>
        </div>
    </aside>
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
    <button class="sidebar-toggle" id="sidebarToggle"><i class="fas fa-bars"></i></button>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    markActivePage();
}

/* ============================================
   Mark Active Page in Sidebar
   ============================================ */
function markActivePage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.sidebar-links a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href) || currentPath.includes(href.replace('pages/', ''))) {
            link.classList.add('active');
            // Expand parent section
            const section = link.closest('.sidebar-section');
            if (section) {
                section.classList.add('expanded');
            }
        }
    });
}

/* ============================================
   Initialize Sidebar Interactions
   ============================================ */
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('sidebarOverlay');
    
    // Toggle sidebar on mobile
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
        });
    }
    
    // Close sidebar when clicking overlay
    if (overlay && sidebar) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
    
    // Section expand/collapse - MUST run even if toggle doesn't exist
    const headers = document.querySelectorAll('.sidebar-section-header');
    console.log('Sidebar: Found', headers.length, 'section headers');
    
    headers.forEach((header, index) => {
        header.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const section = this.parentElement;
            const wasExpanded = section.classList.contains('expanded');
            section.classList.toggle('expanded');
            console.log('Section', index, 'clicked. Was expanded:', wasExpanded, 'Now expanded:', section.classList.contains('expanded'));
        });
    });
    
    // Expand section containing current page
    const activeLink = document.querySelector('.sidebar-links a.active');
    if (activeLink) {
        const section = activeLink.closest('.sidebar-section');
        if (section) section.classList.add('expanded');
    }
}

/* ============================================
   Sidebar Search
   ============================================ */
function initSidebarSearch() {
    const searchInput = document.getElementById('sidebarSearch');
    if (!searchInput) return;
    
    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        if (e.key === 'Escape') {
            searchInput.blur();
            searchInput.value = '';
            filterSidebar('');
        }
    });
    
    searchInput.addEventListener('input', (e) => {
        filterSidebar(e.target.value.toLowerCase());
    });
}

function filterSidebar(query) {
    const sections = document.querySelectorAll('.sidebar-section');
    
    sections.forEach(section => {
        const links = section.querySelectorAll('.sidebar-links li');
        let hasMatch = false;
        
        links.forEach(li => {
            const text = li.textContent.toLowerCase();
            if (query === '' || text.includes(query)) {
                li.style.display = '';
                hasMatch = true;
            } else {
                li.style.display = 'none';
            }
        });
        
        // Show/hide section based on matches
        if (query === '') {
            section.style.display = '';
            section.classList.remove('expanded');
        } else if (hasMatch) {
            section.style.display = '';
            section.classList.add('expanded');
        } else {
            section.style.display = 'none';
        }
    });
}

/* ============================================
   Theme Toggle
   ============================================ */
function initThemeToggle() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    }
}

/* ============================================
   Code Copy Functionality
   ============================================ */
function initCodeCopy() {
    document.querySelectorAll('pre').forEach(pre => {
        if (pre.querySelector('.copy-btn')) return;
        
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.innerHTML = '<i class="fas fa-copy"></i>';
        btn.title = 'Copy code';
        
        btn.addEventListener('click', () => {
            const code = pre.querySelector('code') || pre;
            navigator.clipboard.writeText(code.textContent).then(() => {
                btn.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    btn.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        });
        
        pre.style.position = 'relative';
        pre.appendChild(btn);
    });
}

/* ============================================
   Tabs Functionality
   ============================================ */
function initTabs() {
    document.querySelectorAll('.tab-group').forEach(group => {
        const buttons = group.querySelectorAll('.tab-btn');
        const contents = group.querySelectorAll('.tab-content');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.tab;
                
                buttons.forEach(b => b.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                const targetContent = group.querySelector(`[data-tab-content="${target}"]`);
                if (targetContent) targetContent.classList.add('active');
            });
        });
    });
}

/* ============================================
   Terminal Animation
   ============================================ */
function initTerminalAnimation() {
    document.querySelectorAll('.terminal-typing').forEach(terminal => {
        const text = terminal.dataset.text || terminal.textContent;
        terminal.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                terminal.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                type();
                observer.disconnect();
            }
        });
        
        observer.observe(terminal);
    });
}
