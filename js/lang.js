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
      contextTitle: "🎮 Context",
      contextText: "<b>What the Scout?!</b> is a <b>party game</b> developed on <b>Unreal Engine 4.27</b> for <b>PS4</b>, as part of the final year project at <b>ISART Digital</b>.<br><br>The player embodies a scout leader tasked with saving a group of uncontrollable children from a death as absurd as it is spectacular. The game is based on an <b>autonomous and chaotic AI</b>, generating comical and unpredictable situations with each game.<br>",
      teamText: "The team had <b>19 members</b>: 2 producers, 2 sound designers, 3 game designers & programmers, 4 game designers, 4 3D artists, 2 2D artists, and 2 game programmers.",
      workTitle: "🧩 My work",
      workAI: "🧠 <b>Artificial Intelligence:</b> Designed a modular and parameterized system based on <b>weighted probabilities (Data Tables)</b>, generating varied and unpredictable behaviors.",
      workTools: "🧰 <b>Production Tools:</b> Created <b>generic Blueprints</b> and editor tools for designers to adjust and test AI behaviors.",
      workShader: "🎨 <b>Outline Shader:</b> Developed an optimized shader to improve readability of characters.",
      workPerf: "⚙️ <b>Performance optimization:</b><br><p class='indent'>• Reduced <b>draw calls</b> from ~9000 to ~1300.</p><p class='indent'>• <b>Bake lights</b> (90% static) to stabilize rendering on PS4.</p><p class='indent'>• Migrated <b>Deferred → Forward Shading</b> for better performances and smoother rendering.</p>",
      skillsTitle: "🚀 Skills acquired",
      skillsText: "This project strengthened my skills in <b>AI programming</b> and <b>gameplay</b> in Unreal Engine, as well as <b>technical optimization</b> for consoles.",
      itchLink: "See on itch.io →"
    },
    raymarchingPage: {
      contextTitle: "🔬 Context",
      contextText: "This research project, entitled <b>3D Visualization of Molten Glass using Raymarching Technique</b>, was carried out in collaboration with <b>LORIA</b> (Lorraine Laboratory for Research in Computer Science and its Applications) as part of the <b>GPU Option – ISART Digital</b> program.<br><br>The objective was to design a <b>real-time rendering engine</b> capable of simulating the visual behavior of <b>molten glass</b> without resorting to explicit geometry. The project is part of an approach to <b>preserving artisanal know-how</b> and <b>technological innovation</b>, aiming to provide an immersive tool for glassmaking training using augmented reality.",
      workTitle: "🧩 My work",
      workRendering: "💡 <b>Raymarching and Implicit Rendering:</b><br>Complete development of the <b>raymarching pipeline</b> in <b>Vulkan</b>, based on <b>Signed Distance Functions (SDF)</b> to represent implicit deformable surfaces (spheres, tori, metaballs). Implementation of <b>surface blending</b> to reproduce the organic fusion of molten glass and its fluid visual behavior.",
      workTransparency: "🌫️ <b>Transparency and Refraction:</b><br>Integrated a <b>light transmission and absorption</b> model simulating the translucency of glass. Application of <b>light reflection, refraction, and attenuation</b> effects dependent on the refractive index, resulting in a realistic and dynamic visual appearance.",
      workPerf: "⚙️ <b>GPU Optimization:</b><br>Pipeline migration from <b>fragment shaders</b> to <b>compute shaders</b> for direct control of parallel computing and better memory management. Performance improvements via <b>hierarchical spatial partitioning (Binary Tree)</b> to speed up distance evaluations and reduce the number of calculations per ray.",
      resultTitle: "🚀 Result and prospects",
      resultText: "The engine now allows for <b>real-time visualization</b> of implicit semi-transparent surfaces with realistic <b>Phong + Fresnel</b> lighting. The switch to compute shaders has significantly improved GPU performance, while paving the way for the future integration of <b>volumetric data</b> or <b>3D point clouds</b>. This work lays the foundation for <b>interactive molten glass simulation</b>, paving the way for applications in <b>craft training</b> and <b>advanced graphics research</b>.",
      gitLink: "See on GithHub →",
      paperLink: "See the research paper →"
    },
    parallaxPage: {
      contextTitle: "🔬 Context",
      contextText: "The <b>Parallax Mapping</b> project is a graphical experiment developed using a fully custom <b>OpenGL engine</b> built from scratch. The main goal was to understand and implement the <b>Parallax Mapping</b> technique — a visual effect used in many video games to simulate <b>depth on flat surfaces</b> without relying on real 3D geometry.",
      contentText: "The project also includes an <b>ImGui interface</b>, allowing the user to adjust <b>render parameters</b> in real time (camera position, object movement, relief height, etc.).",
      workTitle: "🧩 My Work",
      workEngine: "🔧 <b>Creation of a minimalist OpenGL engine</b>, integrating <b>shader management</b>, <b>texture handling</b>, and <b>camera control</b>.",
      workParallax: "🎨 <b>Full implementation of Parallax Mapping:</b><br><p class='indent'>• Computation of <b>UV coordinate offsets</b> based on height values.</p><p class='indent'>• Use of a <b>Height Map</b> to generate perceived depth.</p><p class='indent'>• Dynamic adjustment of the <b>height scale factor</b> through the ImGui interface.</p>",
      workDebug: "🧠 <b>Interactive user interface (ImGui):</b><br><p class='indent'>• <b>Camera controls</b> (W, A, S, D, Space, Right Ctrl, right click).</p><p class='indent'>• <b>Real-time height adjustment</b> to observe the Parallax Mapping effect from different angles.</p>",
      workPerf: "⚙️ <b>Code organization and structure</b> to separate rendering logic, window management, and <b>GLSL shaders</b>.",
      resultTitle: "🚀 Results and Perspectives",
      resultText: "This project helped me strengthen my understanding of the <b>OpenGL graphics pipeline</b> and the development of <b>GLSL shaders</b>. I deepened my knowledge of <b>advanced texture mapping</b>, <b>tangent-space manipulation</b>, and the integration of <b>debugging tools</b> like ImGui.",
      resultText2: "The final render provides a <b>realistic depth effect</b>, controllable in real time, while maintaining <b>strong performance</b> thanks to efficient shader and GPU resource management.",
      gitLink: "View on GitHub →"
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
      contextTitle: "🎮 Contexte",
      contextText: "<b>What the Scout?!</b> est un <b>party game</b> développé sur <b>Unreal Engine 4.27</b> pour <b>PS4</b>, dans le cadre du projet de fin d’études à <b>ISART Digital</b>.<br><br>Le joueur incarne un chef scout chargé de sauver un groupe d’enfants incontrôlables d’une mort aussi absurde que spectaculaire. Le jeu repose sur une <b>IA autonome et chaotique</b>, générant des situations comiques et imprévisibles à chaque partie.",
      teamText: "L’équipe comptait <b>19 membres</b>, incluant : 2 producers, 2 sound designers, 3 game designers & programmers, 4 game designers, 4 artistes 3D, 2 artistes 2D, et 2 game programmers.",
      workTitle: "🧩 Mon travail",
      workAI: "🧠 <b>Intelligence artificielle :</b> conception d’un système modulaire et paramétrable basé sur des <b>probabilités pondérées (Data Tables)</b>, générant des comportements variés et imprévisibles.",
      workTools: "🧰 <b>Outils de production :</b> création de <b>Blueprints génériques</b> et d’outils d’édition pour ajuster et tester les comportements IA.",
      workShader: "🎨 <b>Outline Shader :</b> développement d’un shader optimisé pour améliorer la lisibilité des personnages.",
      workPerf: "⚙️ <b>Optimisation des performances :</b><br><p class='indent'>• Réduction des draw calls de ~9000 à ~1300.</p><p class='indent'>• Bake des lumières (90% statiques).</p><p class='indent'>• Migration Deferred → Forward Shading pour un rendu plus fluide.</p>",
      skillsTitle: "🚀 Les compétences acquises",
      skillsText: "Ce projet m’a permis de renforcer mes compétences en <b>programmation IA</b> et <b>gameplay</b> sur Unreal Engine, ainsi qu’en <b>optimisation technique</b> pour consoles.",
      itchLink: "Voir sur itch.io →"
    },
    raymarchingPage: {
      contextTitle: "🔬 Contexte",
      contextText: "Ce projet de recherche, intitulé <b>3D Visualisation of Molten Glass using Raymarching Technique</b>, a été réalisé en collaboration avec le <b>LORIA</b> (Laboratoire Lorrain de Recherche en Informatique et ses Applications) dans le cadre du programme <b>GPU Option – ISART Digital</b>.<br><br>L’objectif était de concevoir un <b>moteur de rendu temps réel</b> capable de simuler le comportement visuel du <b>verre en fusion</b> sans recourir à une géométrie explicite. Le projet s’inscrit dans une démarche de <b>préservation des savoir-faire artisanaux</b> et d’<b>innovation technologique</b>, visant à fournir un outil immersif pour la formation à la verrerie en réalité augmentée.",
      workTitle: "🧩 Mon travail",
      workRendering: "💡 <b>Raymarching et rendu implicite :</b><br>Développement complet du <b>pipeline de raymarching</b> sous <b>Vulkan</b>, basé sur des <b>Signed Distance Functions (SDF)</b> pour représenter des surfaces implicites déformables (sphères, tori, métaballes). Implémentation du <b>blending entre surfaces</b> pour reproduire la fusion organique du verre fondu et de son comportement visuel fluide.",
      workTransparency: "🌫️ <b>Transparence et réfraction :</b><br>Intégration d’un modèle de <b>transmission et d’absorption lumineuse</b> simulant la translucidité du verre. Application d’effets de <b>réflexion, refraction et atténuation lumineuse</b> dépendant de l’indice de réfraction, permettant d’obtenir une apparence visuelle réaliste et dynamique.",
      workPerf: "⚙️ <b>Optimisation GPU :</b><br>Migration du pipeline depuis les <b>fragment shaders</b> vers les <b>compute shaders</b> pour un contrôle direct du calcul parallèle et une meilleure gestion mémoire. Amélioration des performances via une <b>partition spatiale hiérarchique (Binary Tree)</b> pour accélérer les évaluations de distance et réduire le nombre de calculs par rayon.",
      resultTitle: "🚀 Resultats et perspectives",
      resultText: "Le moteur permet aujourd’hui de <b>visualiser en temps réel</b> des surfaces implicites semi-transparentes avec un éclairage <b>Phong + Fresnel</b> réaliste. Le passage aux compute shaders a amélioré les performances GPU de manière significative, tout en préparant l’intégration future de <b>données volumétriques</b> ou de <b>nuages de points 3D</b>. Ce travail pose les bases d’une <b>simulation de verre en fusion interactive</b>, ouvrant la voie à des applications dans la <b>formation artisanale</b> et la <b>recherche graphique avancée</b>.",
      gitLink: "Voir sur GithHub →",
      paperLink: "Voir le document de recherche →"
    },
    parallaxPage: {
      contextTitle: "🔬 Contexte",
      contextText: "Le projet <b>Parallax Mapping</b> est une expérimentation graphique développée à l’aide d’un moteur <b>OpenGL</b> conçu entièrement from scratch. L’objectif principal était de comprendre et d’implémenter la technique du <b>Parallax Mapping</b>, un effet visuel utilisé dans de nombreux jeux vidéo pour simuler de la <b>profondeur sur des surfaces planes</b>, sans recourir à de la vraie géométrie 3D.",
      contentText: "Le projet inclut également une interface <b>ImGui</b>, permettant à l’utilisateur de manipuler les <b>paramètres du rendu</b> en temps réel (position de la caméra, déplacement de l’objet, hauteur du relief, etc.).",
      workTitle: "🧩 Mon travail",
      workEngine: "🔧 <b>Création d’un moteur OpenGL minimaliste</b>, intégrant la gestion des <b>shaders</b>, des <b>textures</b> et de la <b>caméra</b>.",
      workParallax: "🎨 <b>Implémentation complète du Parallax Mapping :</b><br><p class='indent'>• Calcul du <b>décalage des coordonnées UV</b> selon la hauteur du relief.</p><p class='indent'>• Utilisation d’une <b>Height Map</b> pour générer la profondeur perçue.</p><p class='indent'>• Réglage dynamique du <b>facteur de height scale</b> via l’interface ImGui.</p>",
      workDebug: "🧠 <b>Interface utilisateur interactive (ImGui) :</b><br><p class='indent'>• <b>Contrôles caméra</b> (Z, Q, S, D, Espace, Ctrl droit, clic droit).</p><p class='indent'>• <b>Ajustement du relief en direct</b> pour observer l’effet du Parallax Mapping sous différents angles.</p>",
      workPerf: "⚙️ <b>Organisation et structuration du code</b> pour séparer la logique du rendu, la gestion de la fenêtre et les <b>shaders GLSL</b>.",
      resultTitle: "🚀 Résultats et perspectives",
      resultText: "Ce projet m’a permis de consolider ma compréhension du <b>pipeline graphique OpenGL</b> et de l’écriture de <b>shaders GLSL</b>. J’ai approfondi ma maîtrise du <b>mapping de textures avancé</b>, de la <b>manipulation des coordonnées tangentes</b> et de l’intégration d’outils de <b>debug graphique</b> comme ImGui.",
      resultText2: "Le rendu final offre un <b>effet de relief réaliste</b>, contrôlable en temps réel, tout en maintenant de <b>bonnes performances</b> grâce à une gestion efficace du shader et des ressources GPU.",
      gitLink: "Voir sur GitHub →"
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
  
  // 1) Détection par classe body (ex: <body class="raymarching-page">)
  let pageTrans = null;
  try {
    const body = document.body;
    if (body && body.classList) {
      if (body.classList.contains("scout-page")) {
        pageTrans = t.scoutPage;
      } else if (body.classList.contains("raymarching-page")) {
        pageTrans = t.raymarchingPage;
      } else if (body.classList.contains("parallax-page")) {
        pageTrans = t.parallaxPage;
      }
    }
  } catch (e) {
    console.warn("[lang] error reading body.classList", e);
  }

  // 2) Détection par attribut data-page (ex: <body data-page="raymarching">)
  if (!pageTrans) {
    const pageAttr = document.body?.dataset?.page || null;
    if (pageAttr) {
      const key = pageAttr.trim().toLowerCase();
      if (key === "scout" && t.scoutPage) {
        pageTrans = t.scoutPage;
        console.log("[lang] detected page by data-page: scout");
      } else if (key === "raymarching" && t.raymarchingPage) {
        pageTrans = t.raymarchingPage;
        console.log("[lang] detected page by data-page: raymarching");
      } else if (key === "parallax" && t.parallaxPage) {
        pageTrans = t.parallaxPage;
        console.log("[lang] detected page by data-page: parallax");
      }
    }
  }

  // 3) Détection par URL (ex: '/projects/raymarching.html' ou '/raymarching/')
  if (!pageTrans) {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("scout")) {
      pageTrans = t.scoutPage;
    } else if (path.includes("raymarching")) {
      pageTrans = t.raymarchingPage;
    } else if (path.includes("parallax")) {
      pageTrans = t.parallaxPage;
    }
  }

  // 4) Appliquer si trouvé
  if (pageTrans) {
    Object.keys(pageTrans).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = pageTrans[id];
      else console.warn(`[lang] element with id "${id}" not found on page`);
    });
  } else {
    console.log("[lang] no page-specific translation applied");
  }

  // Experiences
  const expItems = document.querySelectorAll("#exp li");
  expItems.forEach((li, i) => { if (t.exp[i]) li.innerHTML = t.exp[i]; });

  // Projects
  const projectItems = document.querySelectorAll(".project", ".disabled");
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
