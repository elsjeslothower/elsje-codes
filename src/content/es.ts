import type { SiteContent } from "./en";

export const es: SiteContent = {
  banner: "En construcción",
  nav: {
    links: {
      about: "Sobre Mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      resume: "Currículum",
      puzzle: "Juego de Palabra",
    },
    toggleDarkMode: "Cambiar a modo oscuro",
    switchLanguage: "Cambiar idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Elsje Slothower",
    title: "Desarrolladora, diseñadora, artista.",
    bio1Pre:
      "Soluciono problemas con código. Tengo experiencia en el backend, y en cada proyecto pienso primero en las bases de datos y la escalabilidad.",
    bio1Post: "También trabajo en el frontend, y me importa mucho la experiencia del usuario.",
    bio2Pre:
      "Además, tengo un pequeño negocio de vidrio de colores. Trato de mostrar todo el proceso de crear y vender mi arte en línea, incluyendo los errores. Si tienes curiosidad, puedes ver mi ",
    bio2LinkText: "trabajo de vidrio",
    bio2Post: " si quieres.",
    ctaProjects: "Ver mi código",
    ctaContact: "Contáctame",
  },
  about: {
    heading: "Sobre Mí",
    developerHeading: "Desarrolladora",
    developerPre:
      "Ada Developers Academy me dio mi primer paso en el desarrollo de software, pero todo empezó en la escuela secundaria cuando tomé una clase de programación. Las bases de la programación empezaron con ",
    developerLinkText: "¡Snap!",
    developerPost:
      " y sigo construyendo sobre esa base. El pensamiento crítico, la resolución de problemas, y la creatividad son las habilidades que aporto a cada proyecto.",
    creatorHeading: "Creadora",
    creatorText:
      "Mi título universitario es en Periodismo e Interés Público. Tengo una larga historia de crear cosas, ya sea escribiendo artículos, conectando con la comunidad, o publicando en redes sociales. En mi trabajo actual, creo software mientras construyo una relación de confianza con mis clientes. Disfruto el proceso creativo de construir software, y también disfruto el proceso creativo de construir relaciones.",
    artistHeading: "Artista",
    artistText:
      "Me gusta trabajar con las manos tanto como con la mente. La curiosidad es clave, y la practico en todas partes. Terminar un proyecto de principio a fin es muy satisfactorio, y es aún mejor compartir mis creaciones con otras personas. El vidrio de colores es mi manera de mostrar la belleza que veo en el mundo.",
  },
  projects: {
    heading: "Proyectos",
    paragraph1:
      "Una colección de lo que he creado y lo que estoy creando — algunos proyectos terminados, otros todavía en proceso.",
    photoComingSoon: "Foto próximamente",
    previousPhoto: "Foto anterior",
    nextPhoto: "Foto siguiente",
    goToPhoto: "Ir a la foto",
    photoLabel: "Foto",
    loginCta: "Iniciar",
    items: [
      {
        status: "En progreso",
        eyebrow: "Proyecto personal centrado en IA",
        title: "Stained Glass Quote Tool",
        descriptionPre:
          "Backend que convierte la foto y descripción de un proyecto de un cliente en un presupuesto estructurado y editable. Una llamada de IA con visión genera el primer cálculo. Cabe destacar que ",
        descriptionEmphasis: "una persona siempre revisa el presupuesto antes de enviarlo",
        descriptionPost: ". Hecho para un negocio real y pequeño de vidrio de colores.",
        cta: "Ver en GitHub",
      },
      {
        status: "Completo",
        eyebrow: "Proyecto final de Ada Developers Academy",
        title: "Pantry Pickings",
        descriptionPre:
          "Una aplicación web para fiestas que ayuda a los anfitriones a elegir una receta usando los ingredientes que ya tienen — ",
        descriptionEmphasis:
          "económica, y que toma en cuenta las preferencias e intolerancias alimentarias de los invitados",
        descriptionPost: ".",
        timeline: [],
        cta: "Ver en GitHub",
      },
    ],
  },
  skills: {
    heading: "Habilidades",
    groupLabels: [
      "Idiomas",
      "Backend",
      "Frontend",
      "Herramientas y prácticas",
    ],
  },
  contact: {
    heading: "Contacto",
    tagline: "¿Estás construyendo algo interesante? Me encantaría saberlo.",
    emailLabel: "Correo",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    calendlyLabel: "Agenda una charla",
  },
  footer: {
    builtWith: "Hecho con Next.js y Tailwind.",
  },
  resume: {
    heading: "Currículum",
    name: "Elsje Slothower",
    title: "Desarrolladora de Software",
    location: "Salem, OR (EE. UU.)",
    email: "contact@elsje.codes",
    linkedinLabel: "linkedin.com/in/elsje-slothower",
    githubLabel: "github.com/elsjeslothower",
    phone: "(253) 509-8262",
    summary:
      "Desarrolladora de Software enfocada en crear soluciones web y empresariales listas para producción, con experiencia práctica en implementación y desarrollo frontend. Busco aplicar mis habilidades de depuración, diseño de interfaces, y trabajo en equipo para construir sistemas confiables.",
    downloadPdfLabel: "Descargar PDF",
    sectionLabels: {
      employment: "Experiencia laboral",
      skills: "Habilidades",
      education: "Educación",
      extracurriculars: "Actividades extracurriculares",
    },
    jobs: [
      {
        title: "Consultora de Implementación de Software",
        org: "Fast Enterprises, Salem, OR (US)",
        dates: "Abril 2024 – Presente",
        bullets: [
          "Realicé dos implementaciones de software en sitio para gobiernos municipales, en las áreas de Seguro de Desempleo y Servicios Vehiculares, completando las instalaciones dentro del tiempo acordado.",
          "Capacité a usuarios clientes en configuración y reportes a través de talleres prácticos y guías paso a paso.",
          "Reduje los errores conocidos en el ambiente de producción de más de 2,000 a menos de 100.",
          "Creé temas de ayuda y procedimientos de triage después de la implementación, lo cual redujo el tiempo de resolución de incidentes.",
        ],
      },
      {
        title: "Pasante de Desarrollo Frontend",
        org: "Kyndryl (formerly Skytap), Remote (US)",
        dates: "Marzo 2023 – Agosto 2023",
        bullets: [
          "Escribí pruebas unitarias con Jest para módulos principales, detectando errores antes de la fase de control de calidad.",
          "Refactoricé scripts antiguos de Backbone MVC a funciones modulares de React, mejorando el rendimiento y facilitando el mantenimiento.",
          "Adopté prácticas de Agile/Scrum, reduciendo las tareas pendientes a menos del 10% entre sprints.",
          "Implementé funciones de interfaz para la aplicación web de la empresa, usada por clientes y negocios.",
        ],
      },
    ],
    skillsList: [
      "Diseño UI/UX",
      "Resolución de Problemas",
      "Colaboración en Equipo",
      "C#",
      "FinTech",
      "React",
      "JavaScript",
      "Desarrollo Web",
      "Meticulosa",
      "Pensamiento Crítico",
      "Creatividad",
      "Gestión del Tiempo",
      "Python",
      "SQL",
      "Desarrollo de APIs",
      "AI",
      "HTML",
      "CSS",
      "REST",
      "CI/CD",
      "Jira",
    ],
    education: [
      {
        degree: "Licenciatura en Periodismo e Interés Público",
        org: "University of Washington-Seattle Campus, Seattle, WA (US)",
        dates: "Sep 2018 – Dic 2021",
        description:
          "Título universitario con especialización menor en música. Publiqué artículos en varias revistas de Seattle. Estuve en la Lista del Decano la mayoría de los trimestres.",
      },
      {
        degree: "Certificado en Ingeniería de Software",
        org: "Ada Developers Academy, Seattle, WA (US)",
        dates: "Sep 2022 – Jul 2023",
        description:
          'Programa selectivo de desarrollo de software con una tasa de aceptación menor al 8%, enfocado en desarrollo web full stack y fundamentos de ciencias de la computación. El proyecto final "Pantry Pickings" fue una despensa virtual que sugiere recetas usando los ingredientes que ya tienes.',
      },
    ],
    extracurriculars: [
      {
        role: "Miembro del Comité",
        org: "Fast for All at Fast Enterprises",
        description:
          "Miembro de un comité cuya misión es mejorar la experiencia de los empleados, implementando beneficios más equitativos, creando grupos de recursos para empleados (ERGs), y organizando oportunidades de voluntariado dos veces al año.",
      },
      {
        role: "Voluntaria de Costura",
        org: "Salem Health Cancer Resource Center",
        description:
          "Participante en 'Purls of Love', un esfuerzo voluntario para coser, tejer, y crochetear gorros para pacientes de cáncer en quimioterapia.",
      },
      {
        role: "Miembro de la Comunidad",
        org: "Common People Yoga",
        description:
          "Miembro de un estudio de yoga comunitario que promueve la accesibilidad e inclusión en la práctica de yoga, incluyendo clases para personas con discapacidades y personas neurodivergentes.",
      },
      {
        role: "Dueña de Pequeño Negocio",
        org: "Elsje's Glass",
        description:
          "Creadora de un canal de YouTube que documenta el proceso de hacer y vender arte de vidrio de colores, incluyendo tutoriales, contenido detrás de cámaras, y reflexiones sobre el proceso creativo.",
      },
    ],
  },
  puzzle: {
    heading: "Rompecabezas",
    paragraph1:
      "Adivina la palabra de 5 letras en 6 intentos. Si las letras se vuelven verdes, están en el lugar correcto. Si se vuelven color ámbar, están en la palabra pero en el lugar equivocado. Si son grises, no están en la palabra.",
    paragraph2:
      "Cuando adivines la palabra, escribe la respuesta en la URL después de elsje.codes/_____ para encontrar una secreta.",
    legendCorrect: "Lugar correcto",
    legendPresent: "En la palabra, lugar equivocado",
    legendAbsent: "No está en la palabra",
    notEnoughLetters: "Faltan letras",
    wonMessage: "¡Lo lograste!",
    lostMessagePrefix: "Eso si que es; la palabra es: ",
    playAgain: "Jugar de nuevo",
  },
  steppingStones: {
    heading: "Piedras del Camino",
    paragraph1:
      "¡Lo lograste, qué inteligente eres! Como todos tropezamos en el camino hacia la maestría, es importante reflexionar sobre las lecciones aprendidas. Aquí están algunas de las mías.",
    photoComingSoon: "Foto próximamente",
    stones: [
      {
        status: "Lección",
        eyebrow: "Texto de ejemplo",
        title: "Título de la lección aquí",
        description:
          "Texto de ejemplo — escribe aquí qué salió mal y qué aprendiste de eso.",
        tags: ["Etiqueta uno", "Etiqueta dos"],
      },
      {
        status: "Lección",
        eyebrow: "Texto de ejemplo",
        title: "Título de la lección aquí",
        description:
          "Texto de ejemplo — escribe aquí qué salió mal y qué aprendiste de eso.",
        tags: ["Etiqueta uno", "Etiqueta dos"],
      },
      {
        status: "Lección",
        eyebrow: "Texto de ejemplo",
        title: "Título de la lección aquí",
        description:
          "Texto de ejemplo — escribe aquí qué salió mal y qué aprendiste de eso.",
        tags: ["Etiqueta uno", "Etiqueta dos"],
      },
    ],
  },
  signatureIntro: {
    skip: "Saltar",
  },
  notFound: {
    eyebrow: "404",
    heading: "Este panel no sobrevivió.",
    body: "La página que buscas no es parte del patrón.",
    cta: "Volver al inicio",
  },
};
