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
    },
    scoutPage: {
      projectTitle: "What the Scout",
      contextText: "<b>What the Scout?!</b> is a party game developed in <b>Unreal Engine 4.27</b> for <b>PS4</b> as a final project at ISART Digital. The player controls a scout leader in charge of saving a group of uncontrollable children from absurdly spectacular deaths. The game relies on autonomous and chaotic AI, generating humorous and unpredictable situations.",
      teamText: "The team had 19 members: 2 producers, 2 sound designers, 3 game designers & programmers, 4 game designers, 4 3D artists, 2 2D artists, and 2 game programmers.",
      workAI: "🧠 AI: Designed a modular and parameterized system based on weighted probabilities (Data Tables), generating varied and unpredictable behaviors.",
      workTools: "🧰 Production Tools: Created generic Blueprints and editor tools for designers to adjust and test AI behaviors.",
      workShader: "🎨 Outline Shader: Developed an optimized shader to improve readability of characters.",
      workPerf: "⚙️ Performance optimization:<br><p class='indent'>• Reduced draw calls from ~9000 to ~1300.</p><p class='indent'>• Baked 90% of lights.</p><p class='indent'>• Migrated Deferred → Forward Shading for smoother rendering.</p>",
      skillsText: "This project strengthened my skills in AI programming and gameplay in Unreal Engine, as well as technical optimization for consoles.",
      itchLink: "See on itch.io →"
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
    },
    scoutPage: {
      projectTitle: "What the Scout",
      contextText: "<b>What the Scout?!</b> est un <b>party game</b> développé sur <b>Unreal Engine 4.27</b> pour <b>PS4</b>, dans le cadre du projet de fin d’études à <b>ISART Digital</b>.<br><br>Le joueur incarne un chef scout chargé de sauver un groupe d’enfants incontrôlables d’une mort aussi absurde que spectaculaire. Le jeu repose sur une <b>IA autonome et chaotique</b>, générant des situations comiques et imprévisibles à chaque partie.",
      teamText: "L’équipe comptait <b>19 membres</b>, incluant : 2 producers, 2 sound designers, 3 game designers & programmers, 4 game designers, 4 artistes 3D, 2 artistes 2D, et 2 game programmers.",
      workAI: "🧠 <b>Intelligence artificielle :</b> conception d’un système modulaire et paramétrable basé sur des <b>probabilités pondérées (Data Tables)</b>, générant des comportements variés et imprévisibles.",
      workTools: "🧰 <b>Outils de production :</b> création de <b>Blueprints génériques</b> et d’outils d’édition pour ajuster et tester les comportements IA.",
      workShader: "🎨 <b>Outline Shader :</b> développement d’un shader optimisé pour améliorer la lisibilité des personnages.",
      workPerf: "⚙️ <b>Optimisation des performances :</b><br><p class='indent'>• Réduction des draw calls de ~9000 à ~1300.</p><p class='indent'>• Bake des lumières (90% statiques).</p><p class='indent'>• Migration Deferred → Forward Shading pour un rendu plus fluide.</p>",
      skillsText: "Ce projet m’a permis de renforcer mes compétences en <b>programmation IA</b> et <b>gameplay</b> sur Unreal Engine, ainsi qu’en <b>optimisation technique</b> pour consoles.",
      itchLink: "Voir sur itch.io →"
    }
  }
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Bio and titles
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
  if (document.getElementById("projectTitle") && document.getElementById("contextText")) {
    const pageTrans = t.scoutPage;
    if (!pageTrans) return;
    Object.keys(pageTrans).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = pageTrans[id];
    });
  }

  // Experiences
  const expItems = document.querySelectorAll("#exp li");
  expItems.forEach((li, i) => { if (t.exp[i]) li.innerHTML = t.exp[i]; });

  // Projects
  const projectItems = document.querySelectorAll(".project");
  projectItems.forEach(project => {
    const id = project.dataset.id ? project.dataset.id.toLowerCase() : null;
    if (id && t.projects[id]) {
      project.querySelector("p").innerHTML = t.projects[id];
    }
  });

  // Update button
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = t.langBtn;

  // Save
  localStorage.setItem("lang", lang);
}

  document.addEventListener("DOMContentLoaded", () => {
  let currentLang = localStorage.getItem("lang") || "fr";
  applyLanguage(currentLang);

  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      applyLanguage(currentLang);
    });
  }
});
// document.addEventListener("DOMContentLoaded", () => {
//   const langBtn = document.getElementById("langBtn");
//   let currentLang = localStorage.getItem("lang") || "fr";

//   applyLanguage(currentLang);

//   if (langBtn) {
//     langBtn.addEventListener("click", () => {
//       currentLang = currentLang === "fr" ? "en" : "fr";
//       applyLanguage(currentLang);
//     });
//   }
// });
