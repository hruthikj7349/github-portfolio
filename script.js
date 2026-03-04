* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Segoe UI", Arial, sans-serif;
    background-color: #0b1220;
    color: #e2e8f0;
    line-height: 1.7;
}

/* ---------------- NAVIGATION ---------------- */

nav {
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 80px;
    background: rgba(11, 18, 32, 0.95);
    backdrop-filter: blur(6px);
    border-bottom: 1px solid #1e293b;
    z-index: 1000;
    transition: all 0.3s ease;
}

nav.scrolled {
    padding: 12px 80px;
    background: #0b1220;
}

nav .logo {
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 30px;
}

nav a {
    text-decoration: none;
    color: #cbd5e1;
    font-size: 14px;
    transition: color 0.3s;
}

nav a:hover,
nav a.active {
    color: #38bdf8;
}

/* ---------------- SECTIONS ---------------- */

.section {
    padding: 120px 100px;
    max-width: 1200px;
    margin: auto;
}

.section h2 {
    font-size: 30px;
    margin-bottom: 40px;
    color: #38bdf8;
}

/* ---------------- HERO ---------------- */

.hero {
    text-align: center;
    padding-top: 180px;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 10px;
}

.hero h2 {
    font-size: 22px;
    color: #94a3b8;
}

.hero p {
    margin-top: 15px;
    font-size: 16px;
    color: #cbd5e1;
}

.buttons {
    margin-top: 30px;
}

.btn {
    display: inline-block;
    padding: 12px 24px;
    background: #38bdf8;
    color: #0b1220;
    text-decoration: none;
    margin: 10px;
    border-radius: 6px;
    font-weight: 600;
    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-3px);
}

.btn.outline {
    background: transparent;
    border: 1px solid #38bdf8;
    color: #38bdf8;
}

/* ---------------- SKILLS ---------------- */

.skill-group {
    margin-bottom: 40px;
}

.skill-group h3 {
    margin-bottom: 15px;
    color: #60a5fa;
}

.skill-group ul {
    list-style: none;
}

.skill-group li {
    margin-bottom: 8px;
    padding-left: 15px;
    position: relative;
}

.skill-group li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: #38bdf8;
}

/* ---------------- PROJECTS ---------------- */

.project-card {
    background: #111827;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 8px;
    border: 1px solid #1f2937;
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-6px);
    border-color: #38bdf8;
}

.project-card h3 {
    margin-bottom: 15px;
    color: #e2e8f0;
}

.project-card p {
    color: #94a3b8;
}

/* ---------------- CONTACT ---------------- */

#contact p {
    margin-bottom: 10px;
}

#contact a {
    color: #38bdf8;
    text-decoration: none;
}

#contact a:hover {
    text-decoration: underline;
}

/* ---------------- FOOTER ---------------- */

footer {
    text-align: center;
    padding: 30px;
    border-top: 1px solid #1e293b;
    font-size: 14px;
    color: #94a3b8;
}

/* ---------------- SCROLL REVEAL ---------------- */

.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.8s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* ---------------- RESPONSIVE ---------------- */

@media (max-width: 900px) {

    nav {
        padding: 15px 30px;
    }

    .section {
        padding: 100px 30px;
    }

    .hero h1 {
        font-size: 36px;
    }

    nav ul {
        gap: 15px;
    }
}
