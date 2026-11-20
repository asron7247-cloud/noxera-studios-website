const intro=document.getElementById('intro');
const skip=document.getElementById('skipIntro');
function closeIntro(){if(intro){intro.classList.add('done');setTimeout(()=>intro.remove(),900)}}
const introTimer=setTimeout(closeIntro,3200);
skip?.addEventListener('click',()=>{clearTimeout(introTimer);closeIntro()});

const menuToggle=document.getElementById('menuToggle');
const navPanel=document.getElementById('navPanel');
function closeMenu(){navPanel.classList.remove('open');menuToggle.classList.remove('active');menuToggle.setAttribute('aria-expanded','false')}
menuToggle?.addEventListener('click',()=>{const open=!navPanel.classList.contains('open');navPanel.classList.toggle('open',open);menuToggle.classList.toggle('active',open);menuToggle.setAttribute('aria-expanded',String(open))});
navPanel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>backTop.classList.toggle('visible',window.scrollY>500));
backTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const translations={
  fr:{
    navigation:'NAVIGATION',home:'Accueil',independent:'STUDIO INDÉPENDANT DE JEUX VIDÉO',
    heroSub:"Un studio indépendant animé par l'envie de créer des univers mémorables.",discover:'DÉCOUVRIR NOS JEUX',
    who:'QUI NOUS SOMMES',aboutTitle:'BÂTI SUR<br><em>L’IMAGINATION.</em>',
    aboutText:"NOXERA STUDIOS est un studio indépendant en construction, dédié à la création de jeux et d'expériences interactives. Notre ambition : imaginer des mondes dans lesquels les joueurs peuvent explorer, découvrir et écrire leur propre histoire.",
    aboutNote:"Nous grandissons projet après projet. Cette page évoluera avec l'histoire du studio.",
    vision1:"Créer des univers qui donnent envie de rester et d'explorer.",vision2:"Récompenser la curiosité et les aventures inattendues.",vision3:"Construire avec les joueurs et apprendre de leurs retours.",
    gamesIntro:"Découvrez les projets de NOXERA STUDIOS.",averonShort:"Explore. Découvre. Deviens une légende.",
    averonTag:"UN MONDE DE MYSTÈRES<br>VOUS ATTEND.",discoverMedia:"DÉCOUVRIR L’UNIVERS ↗",
    averonAboutTitle:"VOTRE AVENTURE.<br><em>VOTRE LÉGENDE.</em>",
    averonAbout:"AVERON est un projet de jeu d'aventure et d'exploration fantastique. Partez à la découverte d'îles et de royaumes, accomplissez des quêtes, récoltez des ressources et affrontez des créatures mystérieuses.",
    averonFeatures:"Exploration · Quêtes · Artisanat · Combats · Boss",
    feat1:"Des îles et des lieux à découvrir.",feat2:"Des secrets, des personnages et des quêtes.",feat3:"Récoltez des minerais et améliorez votre équipement.",feat4:"Préparez-vous à affronter de puissants ennemis.",
    averonDisclaimer:"AVERON est actuellement en développement. Les fonctionnalités et visuels présentés peuvent évoluer.",
    news1:"Le site officiel de NOXERA STUDIOS entre en phase de conception.",news2:"Notre projet phare poursuit son développement.",
    newsAdminNote:"Les actualités ci-dessus sont des exemples de départ. La publication en direct nécessitera la configuration du futur espace administrateur.",
    mediaNote:"Les visuels définitifs et la bande-annonce seront ajoutés lorsqu'ils seront prêts.",
    careersIntro:"Nous souhaitons rencontrer des personnes créatives et motivées dans différents domaines.",departments:"DÉPARTEMENTS",
    applyTitle:"TU AS QUELQUE CHOSE À APPORTER ?",applyText:"Présente-toi, indique le domaine qui t'intéresse et partage quelques exemples de ton travail si tu en as.",emailApply:"CONTACTER LE RECRUTEMENT",
    emailPublicNote:"Adresse de contact affichée à la demande du fondateur. Elle pourra être remplacée par une adresse professionnelle dédiée.",
    careersSafety:"Merci de ne pas envoyer de documents sensibles. Les candidatures doivent être gérées avec prudence et avec l'aide d'un adulte responsable.",
    press1:"Présentation du studio et identité officielle.",press2:"Description et informations du jeu.",press3:"Logos, captures et visuels autorisés.",
    contactText:"Pour le moment, les demandes de recrutement peuvent être envoyées via la page Careers. Une adresse de contact générale sera ajoutée ultérieurement.",
    contactCareers:"CONTACTER L’ÉQUIPE RECRUTEMENT ↗",teamPlaceholder:"L'équipe sera présentée ici au fur et à mesure de son développement.",
    road1:"Identité NOXERA et préparation du site officiel.",road2:"Mise en ligne du site et configuration des services.",road3:"Continuer la création et les tests du jeu.",
    communityText:"Nos espaces communautaires seront annoncés ici lorsqu'ils seront officiellement disponibles.",
    updateText:"Première version de travail du site NOXERA STUDIOS.",showcaseText:"Un univers d'aventure fantastique actuellement en développement.",
    legalTitle:"INFORMATIONS IMPORTANTES",
    legalText:"Cette version de démonstration ne collecte pas et ne stocke pas de candidature sur un serveur. Le bouton de contact ouvre le logiciel de messagerie du visiteur. Avant la mise en ligne publique, NOXERA devra ajouter une politique de confidentialité adaptée, les coordonnées du responsable du site et les informations légales nécessaires.",
    legalFuture:"Les formulaires, comptes administrateur, cookies éventuels et outils externes devront être documentés avant leur activation."
  },
  en:{
    navigation:'NAVIGATION',home:'Home',independent:'INDEPENDENT GAME STUDIO',
    heroSub:'An independent studio driven by the desire to create memorable worlds.',discover:'DISCOVER OUR GAMES',
    who:'WHO WE ARE',aboutTitle:'BUILT ON<br><em>IMAGINATION.</em>',
    aboutText:'NOXERA STUDIOS is an independent studio in the making, dedicated to creating games and interactive experiences. Our ambition is to imagine worlds where players can explore, discover and write their own stories.',
    aboutNote:'We grow with every project. This page will evolve alongside the studio.',
    vision1:'Creating worlds that make people want to stay and explore.',vision2:'Rewarding curiosity and unexpected adventures.',vision3:'Building with players and learning from their feedback.',
    gamesIntro:'Discover the projects from NOXERA STUDIOS.',averonShort:'Explore. Discover. Become a legend.',
    averonTag:'A WORLD OF MYSTERY<br>AWAITS YOU.',discoverMedia:'DISCOVER THE UNIVERSE ↗',
    averonAboutTitle:'YOUR ADVENTURE.<br><em>YOUR LEGEND.</em>',
    averonAbout:'AVERON is a fantasy adventure and exploration game project. Discover islands and kingdoms, complete quests, gather resources and face mysterious creatures.',
    averonFeatures:'Exploration · Quests · Crafting · Combat · Bosses',
    feat1:'Islands and places waiting to be discovered.',feat2:'Secrets, characters and quests.',feat3:'Gather ores and upgrade your equipment.',feat4:'Prepare to face powerful enemies.',
    averonDisclaimer:'AVERON is currently in development. Features and visuals may change.',
    news1:'The official NOXERA STUDIOS website enters its design phase.',news2:'Our flagship project continues development.',
    newsAdminNote:'The news above are starter examples. Live publishing will require the future admin system to be configured.',
    mediaNote:'Final artwork and the trailer will be added when ready.',
    careersIntro:'We want to meet creative and motivated people across different disciplines.',departments:'DEPARTMENTS',
    applyTitle:'HAVE SOMETHING TO BRING?',applyText:'Introduce yourself, tell us which field interests you and share examples of your work if available.',emailApply:'CONTACT RECRUITMENT',
    emailPublicNote:'Contact address displayed at the founder’s request. It can later be replaced with a dedicated professional address.',
    careersSafety:'Please do not send sensitive documents. Applications should be handled carefully and with help from a responsible adult.',
    press1:'Studio overview and official identity.',press2:'Game description and information.',press3:'Logos, screenshots and approved visuals.',
    contactText:'For now, recruitment enquiries can be sent through the Careers page. A general contact address will be added later.',
    contactCareers:'CONTACT THE RECRUITMENT TEAM ↗',teamPlaceholder:'Team members will be introduced here as the studio grows.',
    road1:'NOXERA identity and preparation of the official website.',road2:'Website launch and service configuration.',road3:'Continue building and testing the game.',
    communityText:'Our community spaces will be announced here when they are officially available.',
    updateText:'First working version of the NOXERA STUDIOS website.',showcaseText:'A fantasy adventure world currently in development.',
    legalTitle:'IMPORTANT INFORMATION',
    legalText:'This demo does not collect or store applications on a server. The contact button opens the visitor’s email application. Before public launch, NOXERA must add an appropriate privacy policy, site owner contact details and any required legal information.',
    legalFuture:'Forms, admin accounts, any cookies and external tools must be documented before activation.'
  }
};
let lang='fr';
document.getElementById('langSwitch')?.addEventListener('click',()=>{
  lang=lang==='fr'?'en':'fr';document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key]});
  document.getElementById('langSwitch').textContent=lang==='fr'?'FR / EN':'EN / FR';
});
// Respect browser language on first load; user can switch manually at any time.
if(navigator.language && !navigator.language.toLowerCase().startsWith('fr')){
  document.getElementById('langSwitch')?.click();
}


// Cinematic scroll reveals — disabled automatically for reduced-motion preferences.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll(
    '.section > :not(.section-kicker), .vision-cards article, .feature-tile, .news-card, .media-shot, .department-grid span, .roadmap-list > div, .press-list > div'
  );
  revealTargets.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  });
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => revealObserver.observe(el));
}

// Subtle cursor glow on large screens only.
if (window.matchMedia('(pointer:fine)').matches && !reduceMotion) {
  document.querySelectorAll('.game-card, .news-card, .apply-panel, .showcase-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
}
