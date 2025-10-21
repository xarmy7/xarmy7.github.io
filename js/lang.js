// === Gestion de la langue globale ===

// ✅ 1. Définir les traductions
const translations = {
  en: {
    bio: "Passionate about video game development, graduated from Isart Digital in Game Programming. I have two years of experience working on immersive 3D, VR and AR projects. I love designing innovative and fun-to-play experiences where technology meets creativity.",
    projectsTitle: "🕹️ Projects",
    expTitle: "💼 Experiences",
    contactTitle: "📫 Contact",
    footer: "© 2025 Maxence Retier — Portfolio made with Github.",
    langBtn: "Français 🇫🇷",
    cvBtn: "📄 Download my CV",
    exp: [
      "<b>Orbital Views</b> — 3D Developer (2023–2025)<br>Rendering optimization, gameplay development, R&D of new technologies.",
      "<b>Tkorp</b> — VR/AR Developer (2023)<br>VR/AR research, multiplayer netcode, cross-platform management.",
      "<b>WWF</b> — Video Game Communication (2021)<br>Study on visibility and donations in the gaming world."
    ],
    projects: {
      raymarching: "3D glass visualization using raymarching and compute shaders (Vulkan). Collaboration with LORIA, real-time rendering with transparency/reflection effects.",
      parallax: "OpenGL engine and Parallax Mapping shader developed from scratch.",
      scout: "Final-year game project made with 19 people. AI in C++, production tools, custom shaders.",
      padel: "Local multiplayer VR game (Unity + Mirror). Network management and multi-headset support.",
      hainedjinn: "OpenGL game engine built from scratch. Architecture, optimization, rendering, and shader system."
    }
  },

  fr: {
    bio: "Passionné par le développement de jeux vidéo, diplômé d’Isart Digital en Game Programming, je dispose de deux ans d’expérience sur des projets immersifs en 3D, VR et AR. J’aime concevoir des expériences innovantes et fun à jouer, où la technique rencontre la créativité.",
    projectsTitle: "🕹️ Projets",
    expTitle: "💼 Expériences",
    contactTitle: "📫 Contact",
    footer: "© 2025 Maxence Retier — Portfolio créé avec Github.",
    langBtn: "English 🇬🇧",
    cvBtn: "📄 Télécharger mon CV",
    exp: [
      "<b>Orbital Views</b> — Développeur 3D (2023–2025)<br>Optimisation de rendu, gameplay, R&D de nouvelles technologies.",
      "<b>Tkorp</b> — Développeur VR/AR (2023)<br>R&D VR/AR, Netcode multijoueur, gestion cross-platform.",
      "<b>WWF</b> — Communication jeu vidéo (2021)<br>Étude sur la visibilité et les dons dans le monde du jeu vidéo."
    ],
    projects: {
      raymarching: "Visualisation 3D du verre fondu avec raymarching et compute shaders (Vulkan). Collaboration avec le LORIA, rendu temps réel et effets de transparence/réflexion.",
      parallax: "OpenGL engine et shader de Parallax Mapping développés from scratch.",
      scout: "Jeu de fin d’étude réalisé avec 19 personnes. IA en C++, outils de production, shaders personnalisés.",
      padel: "Jeu VR multijoueur local (Unity + Mirror). Gestion réseau et compatibilité multi-casques.",
      hainedjinn: "Moteur de jeu OpenGL créé de zéro. Architecture, optimisation, rendu et système de shaders."
    }
  }
};

// ✅ 2. Fonction d’application de la langue
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Bio et titres (si présents sur la page)
  if (document.getElementById("bio")) {
    document.getElementById("bio").innerHTML = `<p>${t.bio}</p>`;
  }
  if (document.getElementById("projects-title")) {
    document.getElementById("projects-title").textContent = t.projectsTitle;
  }
  if (document.getElementById("exp-title")) {
    document.getElementById("exp-title").textContent = t.expTitle;
  }
  if (document.getElementById("contact-title")) {
    document.getElementById("contact-title").textContent = t.contactTitle;
  }
  if (document.getElementById("footer")) {
    document.getElementById("footer").textContent = t.footer;
  }
  if (document.getElementById("cvBtn")) {
    document.getElementById("cvBtn").textContent = t.cvBtn;
  }

  // Expériences
  const expItems = document.querySelectorAll("#exp li");
  expItems.forEach((li, i) => { if (t.exp[i]) li.innerHTML = t.exp[i]; });

  // Projets
  const projectItems = document.querySelectorAll(".project");
  projectItems.forEach(project => {
    const id = project.dataset.id ? project.dataset.id.toLowerCase() : null;
    if (id && t.projects[id]) {
      project.querySelector("p").innerHTML = t.projects[id];
    }
  });

  // Mettre à jour le bouton
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = t.langBtn;

  // Sauvegarder la préférence
  localStorage.setItem("lang", lang);
}

// ✅ 3. Gestion du clic sur le bouton
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langBtn");
  let currentLang = localStorage.getItem("lang") || "fr";

  // Appliquer la langue enregistrée
  applyLanguage(currentLang);

  // Changement de langue au clic
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      applyLanguage(currentLang);
    });
  }
});
