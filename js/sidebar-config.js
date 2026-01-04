// Sidebar configuration for dynamic navigation
const sidebarSections = [
    {
        title: "SOC Operations",
        icon: "fas fa-users-cog",
        path: "pages/soc-operations/",
        items: ["index", "l1-operations", "l2-operations", "l3-operations", "incident-response", "shift-management", "metrics", "escalation"]
    },
    {
        title: "Detection Engineering",
        icon: "fas fa-radar",
        path: "pages/detection-engineering/",
        items: ["index", "company-assessment", "lifecycle", "sigma-rules", "coverage-analysis", "testing", "detection-as-code"]
    },
    {
        title: "Network Security",
        icon: "fas fa-network-wired",
        path: "pages/network-security/",
        items: ["index", "sase-architecture", "ztna-zpa", "swg-zia", "interview-qa"]
    },
    {
        title: "Threat Hunting",
        icon: "fas fa-crosshairs",
        path: "pages/threat-hunting/",
        items: ["index", "methodology", "hypothesis", "hunt-playbooks", "indicators"]
    },
    {
        title: "Log Analysis",
        icon: "fas fa-file-alt",
        path: "pages/log-analysis/",
        items: ["index", "windows-events", "sysmon", "linux-logs", "network-logs"]
    },
    {
        title: "References",
        icon: "fas fa-book",
        path: "pages/references/",
        items: ["index", "kql-library", "spl-library", "cheatsheets", "windows-events-ref"]
    }
];
