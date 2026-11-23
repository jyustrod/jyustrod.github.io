(() => {
  "use strict";
  const messages = {
    en: {
      skip:"Skip to content",navAbout:"About",navProjects:"Projects",navSkills:"Skills",navEducation:"Education",navContact:"Contact",
      eyebrow:"Computer Science · Madrid, Spain",heroRole:'Software development <span class="accent-amp">&amp;</span> applied AI.',
      heroDescription:"I build practical applications with a focus on Python, clean architecture and automation. Currently finishing my Computer Science degree at Universidad Alfonso X el Sabio.",
      seeProjects:"View projects",focusLabel:"FOCUS",locationLabel:"BASED IN",graduateLabel:"GRADUATION",expected:"(expected)",languageLabel:"ENGLISH",scroll:"SCROLL TO EXPLORE",
      aboutTitle:"About me",aboutLead:"I'm a fourth-year Computer Science student interested in the full process of creating software: from understanding a problem to building, testing and deploying a solution.",
      aboutBody:"My work explores backend systems, web applications and the integration of artificial intelligence into real workflows. I enjoy turning complex requirements into usable, maintainable tools.",
      projectsTitle:"Selected projects",projectsIntro:"A selection of applications I've worked on. Project repositories are private; descriptions focus on the public-facing technical scope.",
      p1Type:"APPLIED AI · AUTOMATION",p1Description:"A conversational assistant for agricultural record management through WhatsApp, combining AI-based interpretation with structured validation and confirmation workflows.",
      p2Type:"BUSINESS SOFTWARE · BACKEND",p2Description:"A business workflow and CRM application supporting opportunity research, project tracking and proposal review, with automation and external service integrations.",
      p3Type:"WEB DEVELOPMENT · FRONTEND",p3Description:"A bilingual corporate website with responsive layouts, interactive content, search engine metadata and a streamlined presentation of a pistachio cooperative.",
      skillsTitle:"Technical skills",skillLanguages:"Languages",skillBackend:"Backend & data",skillFrontend:"Web",skillAutomation:"AI, tooling & delivery",
      educationTitle:"Education",anticipated:"· Expected",degree:"BSc in Computer Science",average:"Academic average (unweighted, completed courses): 8.12 / 10",certificate:"Certificate in Business & Product Innovation",languagesMeta:"LANGUAGES",english:"English · C2 (CEFR)",spanish:"Spanish · Native",
      contactOverline:"05 / CONTACT",contactTitle:"Let's connect.",contactBody:"Interested in software development, Python and applied AI opportunities.",footer:"Built with care · Hosted on GitHub Pages",backTop:"Back to top ↑",
      themeLabel:"Toggle color theme",navLabel:"Primary navigation",factsLabel:"Quick facts",title:"Javier Yustres Rodríguez — Software Development & AI",
      description:"Javier Yustres Rodríguez — Computer Science student at UAX. Python, software engineering, automation and applied AI."
    },
    es: {
      skip:"Saltar al contenido",navAbout:"Sobre mí",navProjects:"Proyectos",navSkills:"Tecnologías",navEducation:"Formación",navContact:"Contacto",
      eyebrow:"Ingeniería Informática · Madrid, España",heroRole:'Desarrollo de software <span class="accent-amp">e</span> IA aplicada.',
      heroDescription:"Desarrollo aplicaciones prácticas con especial interés en Python, la arquitectura de software y la automatización. Actualmente termino el Grado en Ingeniería Informática en la Universidad Alfonso X el Sabio.",
      seeProjects:"Ver proyectos",focusLabel:"ÁREAS",locationLabel:"UBICACIÓN",graduateLabel:"GRADUACIÓN",expected:"(prevista)",languageLabel:"INGLÉS",scroll:"DESCUBRE MÁS",
      aboutTitle:"Sobre mí",aboutLead:"Soy estudiante de cuarto de Ingeniería Informática y me interesa todo el proceso de creación de software: desde entender el problema hasta diseñar, probar y desplegar la solución.",
      aboutBody:"Mis proyectos abarcan sistemas backend, aplicaciones web e integración de inteligencia artificial en procesos reales. Me gusta convertir requisitos complejos en herramientas útiles y mantenibles.",
      projectsTitle:"Proyectos destacados",projectsIntro:"Una selección de aplicaciones en las que he trabajado. Los repositorios son privados; las descripciones se limitan a su alcance técnico general.",
      p1Type:"IA APLICADA · AUTOMATIZACIÓN",p1Description:"Asistente conversacional para gestionar registros agrícolas por WhatsApp, que combina interpretación con IA, validación estructurada y flujos de confirmación.",
      p2Type:"SOFTWARE EMPRESARIAL · BACKEND",p2Description:"Aplicación CRM para gestionar oportunidades comerciales, seguimiento de proyectos y revisión de propuestas, con automatización e integración de servicios externos.",
      p3Type:"DESARROLLO WEB · FRONTEND",p3Description:"Web corporativa bilingüe con diseño adaptable, contenido interactivo, metadatos SEO y presentación de una cooperativa de pistacho.",
      skillsTitle:"Tecnologías",skillLanguages:"Lenguajes",skillBackend:"Backend y datos",skillFrontend:"Web",skillAutomation:"IA, herramientas y despliegue",
      educationTitle:"Formación",anticipated:"· Previsto",degree:"Grado en Ingeniería Informática",average:"Media académica (aritmética, cursos completados): 8,12 / 10",certificate:"Certificado en Business & Innovación de Producto",languagesMeta:"IDIOMAS",english:"Inglés · C2 (MCER)",spanish:"Español · Nativo",
      contactOverline:"05 / CONTACTO",contactTitle:"Hablemos.",contactBody:"Interesado en oportunidades de desarrollo de software, Python e inteligencia artificial aplicada.",footer:"Desarrollado con atención al detalle · Alojado en GitHub Pages",backTop:"Volver arriba ↑",
      themeLabel:"Cambiar tema de color",navLabel:"Navegación principal",factsLabel:"Datos principales",title:"Javier Yustres Rodríguez — Desarrollo de software e IA",
      description:"Javier Yustres Rodríguez — estudiante de Ingeniería Informática en UAX. Python, desarrollo de software, automatización e inteligencia artificial."
    }
  };
  const source = Object.prototype.hasOwnProperty;
  const getStored = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
  const saveStored = (key, val) => { try { localStorage.setItem(key, val); } catch {} };
  function updateLocale(lang) {
    if (!source.call(messages, lang)) return;
    const copy = messages[lang];
    document.documentElement.lang = lang;
    for (const element of document.querySelectorAll("[data-i18n]")) {
      const key = element.dataset.i18n;
      if (!source.call(copy, key)) continue;
      if (key === "heroRole") element.innerHTML = copy[key];
      else element.textContent = copy[key];
    }
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelector('meta[property="og:description"]').content = copy.description;
    document.title = copy.title;
    document.querySelector('nav').setAttribute("aria-label", copy.navLabel);
    document.querySelector(".hero-side").setAttribute("aria-label", copy.factsLabel);
    document.querySelector(".theme-toggle").setAttribute("aria-label", copy.themeLabel);
    document.querySelector(".theme-toggle").title = copy.themeLabel;
    for (const button of document.querySelectorAll("[data-lang]")) button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    saveStored("portfolio-language", lang);
    const url = new URL(location.href);
    url.searchParams.delete("lang");
    if (lang === "es") url.searchParams.set("lang", "es");
    history.replaceState(null, "", url);
  }
  const params = new URLSearchParams(location.search);
  const requested = params.get("lang");
  const saved = getStored("portfolio-language");
  updateLocale(requested === "en" || requested === "es" ? requested : saved === "es" ? "es" : "en");
  for (const button of document.querySelectorAll("[data-lang]")) {
    button.addEventListener("click", () => updateLocale(button.dataset.lang));
  }
  const theme = getStored("portfolio-theme");
  const initial = theme === "light" || theme === "dark" ? theme : (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.documentElement.dataset.theme = initial;
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    saveStored("portfolio-theme", next);
  });
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
