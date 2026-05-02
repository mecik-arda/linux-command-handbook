const fs = require('fs');
const data = require('./data.json');

const css = `
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'DM Sans', sans-serif; }
body { background-color: #0a0a0f; color: #e5e7eb; transition: background-color 0.3s, color 0.3s; overflow-x: hidden; position: relative; }
body.theme-light { background-color: #f5f3ff; color: #1e1b4b; }
h1, h2, h3, h4, h5, h6 { font-family: 'Syne', sans-serif; }
code, pre { font-family: 'JetBrains Mono', monospace; }
#bg-mesh { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; background: radial-gradient(circle at 15% 50%, rgba(124, 58, 237, 0.08), transparent 25%), radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.08), transparent 25%); animation: mesh 20s infinite alternate; }
body.theme-light #bg-mesh { background: radial-gradient(circle at 15% 50%, rgba(124, 58, 237, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.15), transparent 25%); }
@keyframes mesh { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
#progress-bar { position: fixed; top: 0; left: 0; width: 0%; height: 3px; background: linear-gradient(90deg, #7c3aed, #a855f7); z-index: 1000; transition: width 0.1s; }
nav { position: sticky; top: 0; display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: rgba(10, 10, 15, 0.7); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(124, 58, 237, 0.2); z-index: 100; transition: all 0.3s; }
body.theme-light nav { background: rgba(245, 243, 255, 0.7); border-bottom: 1px solid rgba(124, 58, 237, 0.1); }
.nav-brand { font-size: 1.5rem; font-weight: 800; color: #a855f7; display: flex; align-items: center; gap: 0.5rem; font-family: 'Syne', sans-serif; }
.nav-actions { display: flex; align-items: center; gap: 1rem; }
button { background: none; border: none; cursor: pointer; color: inherit; transition: all 0.2s; font-family: inherit; }
.btn-icon { padding: 0.5rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; background: rgba(124, 58, 237, 0.1); }
.btn-icon:hover { background: rgba(124, 58, 237, 0.2); }
.search-container { position: relative; }
#search-input { padding: 0.5rem 1rem 0.5rem 2.5rem; border-radius: 0.5rem; border: 1px solid rgba(124, 58, 237, 0.3); background: rgba(10, 10, 15, 0.5); color: #fff; width: 250px; outline: none; transition: all 0.2s; font-family: inherit; }
body.theme-light #search-input { background: rgba(255, 255, 255, 0.5); color: #000; }
#search-input:focus { border-color: #a855f7; box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.2); width: 300px; }
.search-icon { position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); opacity: 0.5; }
main { display: flex; max-width: 1400px; margin: 0 auto; padding: 2rem; gap: 2rem; min-height: 80vh; }
aside { width: 250px; flex-shrink: 0; }
.category-list { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 0.5rem; }
.category-btn { text-align: left; padding: 0.75rem 1rem; border-radius: 0.5rem; font-weight: 500; display: flex; justify-content: space-between; align-items: center; }
.category-btn:hover, .category-btn.active { background: rgba(124, 58, 237, 0.1); color: #a855f7; }
.badge { background: rgba(124, 58, 237, 0.2); padding: 0.1rem 0.4rem; border-radius: 1rem; font-size: 0.75rem; font-family: 'JetBrains Mono', monospace; }
.content { flex-grow: 1; }
.category-section { margin-bottom: 4rem; scroll-margin-top: 100px; }
.category-title { font-size: 2rem; margin-bottom: 1.5rem; color: #a855f7; border-bottom: 1px solid rgba(124, 58, 237, 0.2); padding-bottom: 0.5rem; font-family: 'Syne', sans-serif;}
.commands-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 1.5rem; }
.command-card { background: rgba(30, 27, 75, 0.4); border: 1px solid rgba(124, 58, 237, 0.1); border-radius: 1rem; padding: 1.5rem; backdrop-filter: blur(10px); transition: all 0.3s; opacity: 0; transform: translateY(20px); display: flex; flex-direction: column; gap: 1rem; }
body.theme-light .command-card { background: rgba(255, 255, 255, 0.6); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
.command-card.visible { opacity: 1; transform: translateY(0); }
.command-card:hover { border-color: #a855f7; box-shadow: 0 0 15px rgba(124, 58, 237, 0.15); transform: translateY(-2px); }
.cmd-header { display: flex; align-items: baseline; gap: 1rem; }
.cmd-name { font-size: 1.25rem; color: #a855f7; background: rgba(124, 58, 237, 0.1); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-family: 'JetBrains Mono', monospace;}
.cmd-desc { font-size: 0.95rem; opacity: 0.9; flex-grow: 1;}
.cmd-section-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.5; margin-bottom: 0.5rem; font-weight: 700; }
.code-block { background: rgba(0, 0, 0, 0.5); padding: 1rem; border-radius: 0.5rem; position: relative; border: 1px solid rgba(255,255,255,0.05); }
body.theme-light .code-block { background: #1e1b4b; color: #e5e7eb; border: none; }
.code-block pre { overflow-x: auto; font-size: 0.85rem; padding-right: 2.5rem; color: #fff; }
body.theme-light .code-block pre { color: #fff; }
.copy-btn { position: absolute; right: 0.5rem; top: 0.5rem; background: rgba(255,255,255,0.1); padding: 0.25rem; border-radius: 0.25rem; opacity: 0; transition: opacity 0.2s; color: #fff; }
.code-block:hover .copy-btn { opacity: 1; }
.copy-btn:hover { background: rgba(255,255,255,0.2); }
.ex-list { display: flex; flex-direction: column; gap: 1rem; }
.ex-item-desc { font-size: 0.85rem; margin-bottom: 0.25rem; opacity: 0.8; }
.ex-item .code-block { padding: 0.75rem; }
.ex-item .code-block pre { font-size: 0.85rem; color: #a855f7; }
#no-results { display: none; text-align: center; padding: 4rem; font-size: 1.5rem; opacity: 0.5; grid-column: 1 / -1; font-family: 'Syne', sans-serif;}
#scroll-top { position: fixed; bottom: 2rem; right: 2rem; background: #a855f7; color: #fff; width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4); opacity: 0; pointer-events: none; transition: all 0.3s; z-index: 100; }
#scroll-top.visible { opacity: 1; pointer-events: auto; }
#scroll-top:hover { transform: translateY(-5px); background: #9333ea; }
.highlight { background: rgba(168, 85, 247, 0.4); color: inherit; padding: 0 0.2rem; border-radius: 0.2rem; }
.footer-banner { margin-top: 4rem; padding: 2rem; text-align: center; background: linear-gradient(to right, rgba(30, 27, 75, 0.8), rgba(10, 10, 15, 0.8)); border-top: 1px solid rgba(124, 58, 237, 0.2); backdrop-filter: blur(10px); }
body.theme-light .footer-banner { background: linear-gradient(to right, rgba(245, 243, 255, 0.8), #fff); }
.credit-link { display: inline-flex; align-items: center; gap: 0.5rem; color: #a855f7; text-decoration: none; font-weight: 700; font-size: 1.2rem; padding: 1rem 2rem; border-radius: 2rem; background: rgba(124, 58, 237, 0.1); transition: all 0.3s; font-family: 'Syne', sans-serif;}
.credit-link:hover { background: #a855f7; color: #fff; transform: translateY(-2px); box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3); }
.credit-card { text-align: center; padding: 3rem; background: rgba(30, 27, 75, 0.2); border-radius: 1rem; border: 1px solid rgba(124, 58, 237, 0.2); margin-top: 4rem; backdrop-filter: blur(10px); }
body.theme-light .credit-card { background: rgba(255, 255, 255, 0.6); }
.credit-card h2 { margin-bottom: 1.5rem; color: #a855f7; font-size: 2rem; }
@media (max-width: 1024px) { main { flex-direction: column; } aside { width: 100%; } .category-list { position: static; flex-direction: row; flex-wrap: wrap; } .category-btn { flex-basis: calc(50% - 0.5rem); } .commands-grid { grid-template-columns: 1fr; } #search-input { width: 200px; } #search-input:focus { width: 250px; } }
@media (max-width: 768px) { nav { flex-direction: column; gap: 1rem; padding: 1rem; } .nav-actions { width: 100%; justify-content: space-between; flex-wrap: wrap; } .search-container { flex-grow: 1; margin-right: 0; width: 100%; order: 3; } #search-input { width: 100%; } #search-input:focus { width: 100%; } .category-btn { flex-basis: 100%; } }
`;

const js = `
const db = ${JSON.stringify(data)};
const dict = {
  tr: {
    title: "Linux Komut El Kitabı",
    search: "Komut ara... (Ctrl+K)",
    noResults: "Sonuç bulunamadı",
    syntax: "Sözdizimi",
    examples: "Örnekler",
    about: "Hakkında / Krediler",
    developedBy: "💜 ile geliştirildi, Arda Meçik",
    copy: "Kopyala",
    copied: "Kopyalandı!",
    cat: {
      fileSystem: "Dosya Sistemi",
      textProcessing: "Metin İşleme",
      processManagement: "Süreç Yönetimi",
      network: "Ağ",
      packageManagement: "Paket Yönetimi",
      userManagement: "Kullanıcı Yönetimi",
      archiving: "Arşivleme",
      systemInfo: "Sistem Bilgisi",
      shellScripting: "Kabuk ve Betik",
      permissionsSecurity: "İzinler ve Güvenlik"
    }
  },
  en: {
    title: "Linux Command Handbook",
    search: "Search commands... (Ctrl+K)",
    noResults: "No results found",
    syntax: "Syntax",
    examples: "Examples",
    about: "About / Credits",
    developedBy: "Developed with 💜 by Arda Meçik",
    copy: "Copy",
    copied: "Copied!",
    cat: {
      fileSystem: "File System",
      textProcessing: "Text Processing",
      processManagement: "Process Management",
      network: "Network",
      packageManagement: "Package Management",
      userManagement: "User Management",
      archiving: "Archiving",
      systemInfo: "System Info",
      shellScripting: "Shell & Scripting",
      permissionsSecurity: "Permissions & Security"
    }
  }
};

let currentLang = 'tr';
let isDark = true;

const el = (id) => document.getElementById(id);
const q = (sel) => document.querySelector(sel);
const qa = (sel) => document.querySelectorAll(sel);

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function render() {
  const t = dict[currentLang];
  document.title = t.title;
  el('app-title').textContent = t.title;
  el('search-input').placeholder = t.search;
  el('no-results').textContent = t.noResults;
  el('footer-text').textContent = t.developedBy;
  el('about-title').textContent = t.about;
  el('about-text').textContent = t.developedBy;

  const aside = el('category-list');
  aside.innerHTML = '';
  db.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.dataset.target = 'sec-' + cat.cat;
    btn.innerHTML = '<span>' + t.cat[cat.cat] + '</span><span class="badge">' + cat.cmds.length + '</span>';
    btn.onclick = () => {
      const target = el('sec-' + cat.cat);
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    };
    aside.appendChild(btn);
  });

  const content = el('main-content');
  content.innerHTML = '';
  db.forEach(cat => {
    const sec = document.createElement('section');
    sec.className = 'category-section';
    sec.id = 'sec-' + cat.cat;
    
    const h2 = document.createElement('h2');
    h2.className = 'category-title';
    h2.textContent = t.cat[cat.cat];
    sec.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = 'commands-grid';

    cat.cmds.forEach(cmd => {
      const card = document.createElement('article');
      card.className = 'command-card search-item';
      card.dataset.cmd = cmd.name.toLowerCase();
      card.dataset.desc = cmd[currentLang].toLowerCase();

      let exHtml = '';
      cmd.ex.forEach(ex => {
        exHtml += '<div class="ex-item"><div class="ex-item-desc">' + escapeHtml(ex[currentLang]) + '</div><div class="code-block"><button class="copy-btn" aria-label="' + t.copy + '" onclick="copyCode(this)">' + svgCopy + '</button><pre><code>' + escapeHtml(ex.c) + '</code></pre></div></div>';
      });

      card.innerHTML = '<div class="cmd-header"><h3 class="cmd-name"><code>' + escapeHtml(cmd.name) + '</code></h3><p class="cmd-desc">' + escapeHtml(cmd[currentLang]) + '</p></div><div class="cmd-body"><div class="cmd-section-title">' + t.syntax + '</div><div class="code-block"><button class="copy-btn" aria-label="' + t.copy + '" onclick="copyCode(this)">' + svgCopy + '</button><pre><code>' + escapeHtml(cmd.syntax) + '</code></pre></div></div><div class="cmd-examples"><div class="cmd-section-title">' + t.examples + '</div><div class="ex-list">' + exHtml + '</div></div>';
      grid.appendChild(card);
    });

    sec.appendChild(grid);
    content.appendChild(sec);
  });

  setupObservers();
  filterCommands(el('search-input').value);
}

const svgCopy = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
const svgCheck = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

window.copyCode = function(btn) {
  const code = btn.nextElementSibling.textContent;
  navigator.clipboard.writeText(code).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = svgCheck;
    setTimeout(() => { btn.innerHTML = original; }, 1500);
  });
};

function setupObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  qa('.command-card').forEach(card => observer.observe(card));

  const secObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        qa('.category-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.target === entry.target.id);
        });
      }
    });
  }, { threshold: 0.2, rootMargin: '-100px 0px -60% 0px' });
  qa('.category-section').forEach(sec => secObserver.observe(sec));
}

function filterCommands(query) {
  query = query.toLowerCase();
  let foundAny = false;
  qa('.search-item').forEach(card => {
    const text = card.dataset.cmd + ' ' + card.dataset.desc;
    if (text.includes(query)) {
      card.style.display = 'flex';
      foundAny = true;
      if (query.length > 0) {
        highlightNode(card.querySelector('.cmd-name code'), query);
        highlightNode(card.querySelector('.cmd-desc'), query);
      } else {
        removeHighlight(card.querySelector('.cmd-name code'));
        removeHighlight(card.querySelector('.cmd-desc'));
      }
    } else {
      card.style.display = 'none';
    }
  });

  qa('.category-section').forEach(sec => {
    const visibleCards = sec.querySelectorAll('.search-item[style="display: flex;"]');
    sec.style.display = visibleCards.length > 0 ? 'block' : 'none';
  });

  el('no-results').style.display = foundAny ? 'none' : 'block';
}

function highlightNode(node, query) {
  removeHighlight(node);
  if (!query) return;
  const regex = new RegExp('(' + query.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&') + ')', 'gi');
  node.innerHTML = node.innerHTML.replace(regex, '<span class="highlight">$1</span>');
}

function removeHighlight(node) {
  node.innerHTML = node.innerHTML.replace(/<span class="highlight">(.*?)<\\/span>/g, '$1');
}

el('search-input').addEventListener('input', (e) => filterCommands(e.target.value));

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey && e.key === 'k') || e.key === '/') {
    e.preventDefault();
    el('search-input').focus();
  }
});

el('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  el('lang-text').textContent = currentLang.toUpperCase();
  render();
});

el('theme-toggle').addEventListener('click', () => {
  isDark = !isDark;
  document.body.className = isDark ? 'theme-dark' : 'theme-light';
  el('theme-icon').innerHTML = isDark 
    ? '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>'
    : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
});

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  el('progress-bar').style.width = scrolled + '%';
  
  if (winScroll > 300) {
    el('scroll-top').classList.add('visible');
  } else {
    el('scroll-top').classList.remove('visible');
  }
});

el('scroll-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

render();
`;

const html = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linux Komut El Kitabı</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=JetBrains+Mono:wght@400;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
    <style>${css}</style>
</head>
<body class="theme-dark">
    <div id="bg-mesh"></div>
    <div id="progress-bar"></div>
    <nav>
        <div class="nav-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4-9 4-9-4 9-4z"></path><path d="M12 22l9-4-9-4-9 4 9 4z"></path><path d="M2 12l9 4 9-4"></path></svg>
            <span id="app-title">Linux Komut El Kitabı</span>
        </div>
        <div class="nav-actions">
            <div class="search-container">
                <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" id="search-input" placeholder="Komut ara... (Ctrl+K)" aria-label="Search">
            </div>
            <button id="lang-toggle" class="btn-icon">
                <span id="lang-text" style="font-weight: 700; font-family: 'JetBrains Mono', monospace;">TR</span>
            </button>
            <button id="theme-toggle" class="btn-icon" aria-label="Toggle theme">
                <svg id="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            </button>
        </div>
    </nav>
    <main>
        <aside>
            <div id="category-list" class="category-list"></div>
        </aside>
        <div class="content">
            <div id="no-results">Sonuç bulunamadı</div>
            <div id="main-content"></div>
            
            <section class="credit-card" id="about-section">
                <h2 id="about-title" style="font-family: 'Syne', sans-serif;">Hakkında</h2>
                <a href="https://www.linkedin.com/in/arda-mecik/" target="_blank" rel="noopener noreferrer" class="credit-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <span id="about-text">💜 ile geliştirildi, Arda Meçik</span>
                </a>
            </section>
        </div>
    </main>
    <footer class="footer-banner">
        <a href="https://www.linkedin.com/in/arda-mecik/" target="_blank" rel="noopener noreferrer" class="credit-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span id="footer-text">💜 ile geliştirildi, Arda Meçik</span>
        </a>
    </footer>
    <button id="scroll-top" aria-label="Scroll to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
    </button>
    <script>${js}</script>
</body>
</html>`;

fs.writeFileSync('C:/Users/ardam/.gemini/antigravity/scratch/linux-command-handbook.html', html);
