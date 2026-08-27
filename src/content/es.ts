import type { SiteContent } from "./en";

export const es: SiteContent = {
  banner: "En construcción",
  nav: {
    links: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      resume: "Currículum",
      puzzle: "Wordle",
      contact: "Contacto",
    },
    toggleDarkMode: "Cambiar a modo oscuro",
    switchLanguage: "Cambiar idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Elsje Slothower",
    title: "Artista, Creadora, Desarrolladora.",
    bio1Pre: "Soluciono problemas con software.",
    bio1Post:
      "Con experiencia en frontend y backend, mis proyectos se enfocan en las bases de datos y la experiencia del usuario.",
    bio2Pre:
      "También tengo un pequeño negocio de vidrio de colores para documentar el proceso de crear y vender mi arte en línea, incluyendo los errores. Si quieres, puedes ver mi ",
    bio2LinkText: "vidrio de colores",
    bio2Post: " si tienes curiosidad.",
    ctaProjects: "Ver mi código",
    ctaContact: "Contáctame",
  },
  about: {
    heading: "Sobre mí",
    developerHeading: "Desarrolladora",
    developerPre:
      "Ada Developers Academy me dio mi primer paso en el desarrollo de software, pero todo empezó en la escuela secundaria cuando tomé una clase de programación. Las bases de la programación empezaron con ",
    developerLinkText: "¡Snap!",
    developerPost:
      " y desde entonces sigo construyendo sobre esa base. El pensamiento crítico, la resolución de problemas y la creatividad son las habilidades que aporto a cada proyecto.",
    creatorHeading: "Creadora",
    creatorText:
      "Mi título universitario es en Periodismo e Interés Público. Tengo una larga historia de crear cosas, ya sea publicando artículos, conectando con la comunidad o publicando en redes sociales. En mi trabajo actual, creo software mientras construyo una relación de confianza con mis clientes. Disfruto el proceso creativo de construir software, y también disfruto el proceso creativo de construir relaciones.",
    artistHeading: "Artista",
    artistText:
      "Me gusta trabajar con las manos tanto como con la mente. La curiosidad es la clave, y la practico en todas partes. Terminar un proyecto de principio a fin es muy satisfactorio, y es aún mejor compartir tus creaciones con otras personas. El vidrio de colores es mi manera de mostrar la belleza que veo en el mundo cuando quiero que otros también la vean.",
  },
  projects: {
    heading: "Proyectos",
    paragraph1: "Lo que he creado y lo que estoy creando.",
    photoComingSoon: "Foto próximamente",
    previousPhoto: "Foto anterior",
    nextPhoto: "Foto siguiente",
    goToPhoto: "Ir a la foto",
    photoLabel: "Foto",
    demoCta: "Pruébalo",
    // statusStyle quick ref: 0 = "En progreso" (amber), 1 = "Completo" (green)
    items: [
      {
        eyebrow: "Proyecto personal centrado en IA",
        status: "Completo",
        statusStyle: 1,
        title: "Stained Glass Quote Tool",
        descriptionPre:
          "Backend que convierte la foto y la descripción de un proyecto de un cliente en un presupuesto estructurado y editable. Una llamada de IA con visión genera el primer cálculo. Cabe destacar que ",
        descriptionEmphasis: "una persona siempre revisa el presupuesto antes de enviarlo",
        descriptionPost: ". Hecho para un negocio pequeño y real de vidrio de colores.",
        cta: "Ver en GitHub",
      },
      {
        eyebrow: "Visualizador Alfanumérico Caleidoscópico",
        status: "En progreso",
        statusStyle: 0,
        title: "AuraScope",
        descriptionPre:
          "Un algoritmo de texto a arte que toma una serie de letras y números para crear un mosaico hermoso. Escribe cualquier ",
        descriptionEmphasis: "palabra, frase o número de la suerte",
        descriptionPost: " que hayas sacado de una galleta de la fortuna, y mira qué pasa.",
        cta: "Ver en GitHub",
      },
      {
        eyebrow: "Mapas para Embarcaciones",
        status: "Completo",
        statusStyle: 1,
        title: "Pier to Pier",
        descriptionPre:
          "Tu compañero personal que te ayuda a llegar desde tu embarcadero hasta ",
        descriptionEmphasis: "dondequiera que te lleve el agua",
        descriptionPost: ". Un algoritmo A* construido desde cero traza rutas sobre datos reales de la costa de Puget Sound, evitando tierra firme, con un interruptor para comparar la ruta más corta con una más segura en aguas más profundas.",
        cta: "Ver en GitHub",
      },
      {
        eyebrow: "Proyecto final de Ada Developers Academy",
        status: "Completo",
        statusStyle: 1,
        title: "Pantry Pickings",
        descriptionPre:
          "Una aplicación web para fiestas que ayuda a los anfitriones a elegir una receta usando los ingredientes que ya tienen. La aplicación está diseñada a propósito para ser rápida, simple, económica, y ",
        descriptionEmphasis:
          "atenta a las preferencias e intolerancias alimentarias de los invitados",
        descriptionPost: ".",
        timeline: [],
        cta: "Ver en GitHub",
      },
    ],
  },
  skills: {
    heading: "Habilidades",
    groupLabels: ["Lenguajes", "Backend", "Frontend", "Herramientas y prácticas"],
  },
  contact: {
    heading: "Contacto",
    tagline: "Eres la soldadura de mi cinta de cobre. Conectemos.",
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
    headshotAlt: "Retrato de Elsje Slothower",
    logoAlt: "logo",
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
    linkedinCta: "Ver en LinkedIn",
    sectionLabels: {
      employment: "Experiencia laboral",
      impact: "Impacto",
      skills: "Habilidades",
      education: "Educación",
      extracurriculars: "Actividades extracurriculares",
    },
    impactLinkLabel: "Ver más",
    impact: [
      {
        title: "Modernización del sistema del DMV de Oregón",
        org: "Fast Enterprises",
        summary:
          "Apoyé una implementación en sitio para el Departamento de Vehículos Motorizados de Oregón, ayudando a instalar y configurar el nuevo sistema dentro de los tiempos acordados. El enlace al comunicado de prensa del gobierno vendrá pronto.",
        link: null,
      },
      {
        title: "Modernización del sistema de impuestos del seguro de desempleo de Tennessee",
        org: "Fast Enterprises",
        summary:
          "Apoyé el lanzamiento de un nuevo sistema de impuestos para empleadores en Tennessee que reemplazó un proceso manual, basado en papel, con herramientas digitales de autoservicio. Ahora los empleadores pueden registrarse al instante, presentar reportes de salarios y primas en línea, y corregir errores sin esperar al personal del estado. El sistema se lanzó en mayo de 2025 sin problemas inesperados.",
        link: "https://www.tn.gov/workforce/newsletter/2025/june-unemployment-insurance-tax-system.html",
      },
      {
        title: "Modernización de la página de conectividad de Skytap Cloud",
        org: "Kyndryl (formerly Skytap)",
        summary:
          "Migré la página de conectividad de Skytap Cloud de una implementación antigua en Backbone.js a React, mejorando el mantenimiento y facilitando futuras actualizaciones.",
        link: "https://cloud.skytap.com/connectivity",
      },
      {
        title: "Iniciativa de networking BuddyUp!",
        org: "Fast for All",
        summary:
          "Lideré BuddyUp!, una iniciativa que conectaba a los participantes con intereses en común durante los eventos de networking de toda la empresa, haciendo que socializar fuera más fácil para quienes podrían sentirse intimidados por ello.",
        link: null,
      },
    ],
    jobs: [
      {
        title: "Software Desarrolladora",
        org: "Fast Enterprises, Salem, OR (EE. UU.)",
        dates: "Abril 2024 – Presente",
        bullets: [
          "Desarrollé dos implementaciones de software en sitio para gobiernos municipales, en las áreas de Seguro de Desempleo y Servicios Vehiculares, completando las instalaciones y configuraciones dentro de los tiempos acordados.",
          "Capacité a usuarios clientes en funciones de configuración y reportes a través de talleres prácticos y guías paso a paso.",
          "Reduje los errores conocidos en el ambiente de producción de más de 2,000 a menos de 100.",
          "Creé temas de ayuda y procedimientos de triage después de la implementación, lo cual redujo el tiempo de entrega de incidentes a los equipos de soporte.",
        ],
      },
      {
        title: "Pasante de Desarrollo",
        org: "Kyndryl (formerly Skytap), Remoto (EE. UU.)",
        dates: "Marzo 2023 – Agosto 2023",
        bullets: [
          "Escribí pruebas unitarias con Jest para módulos principales, detectando errores antes del control de calidad y mejorando la confiabilidad del código.",
          "Refactoricé scripts antiguos de Backbone MVC a funciones modulares de React, reduciendo el tiempo de ejecución y facilitando el mantenimiento.",
          "Adopté prácticas de Agile/Scrum, reduciendo las tareas pendientes a menos del 10% entre sprints.",
          "Implementé funciones de interfaz para la aplicación en línea de la empresa, usada por clientes y negocios.",
        ],
      },
    ],
    skillsList: [
      "Diseño UI/UX",
      "Resolución de Problemas",
      "C#",
      "React",
      "JavaScript",
      "Desarrollo Web",
      "Fullstack",
      "Pensamiento Crítico",
      "Creatividad",
      "Gestión del Tiempo",
      "Python",
      "SQL",
      "Desarrollo de APIs",
      "IA",
      "HTML",
      "CSS",
      "REST",
      "CI/CD",
      "Jira",
    ],
    education: [
      {
        degree: "Licenciatura en Periodismo e Interés Público",
        org: "University of Washington-Seattle Campus, Seattle, WA (EE. UU.)",
        dates: "Septiembre 2018 – Diciembre 2021",
        description:
          "Título universitario con especialización menor en música. Publiqué artículos en varias revistas de Seattle. Estuve en la Lista del Decano la mayoría de los trimestres.",
      },
      {
        degree: "Certificado en Ingeniería de Software",
        org: "Ada Developers Academy, Seattle, WA (EE. UU.)",
        dates: "Septiembre 2022 – Julio 2023",
        description:
          'Programa selectivo de desarrollo de software con una tasa de aceptación menor al 8%, enfocado en desarrollo web full stack y fundamentos de ciencias de la computación. El proyecto final "Pantry Pickings" fue una despensa virtual que sugiere comidas usando los ingredientes que ya tienes, para reducir el desperdicio de comida.',
      },
    ],
    extracurriculars: [
      {
        role: "Miembro del Comité",
        org: "Fast for All at Fast Enterprises",
        description:
          "Miembro de un comité cuya misión es mejorar la experiencia de los empleados, implementando beneficios más equitativos, creando y administrando grupos de recursos para empleados (ERGs), y organizando oportunidades de voluntariado dos veces al año para toda la empresa.",
      },
      {
        role: "Voluntaria de Costura",
        org: "Purls of Love",
        description:
          "Participante en un esfuerzo voluntario para coser, tejer y hacer crochet de gorros para pacientes de cáncer en quimioterapia.",
      },
      {
        role: "Miembro de la Comunidad",
        org: "Common People Yoga",
        description:
          "Miembro de un estudio de yoga comunitario que promueve la accesibilidad y la inclusión en la práctica de yoga, incluyendo clases para personas con discapacidades y personas neurodivergentes.",
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
    heading: "Copia de Wordle",
    paragraph1: "Adivina la palabra de 5 letras en 6 intentos.",
    paragraph2:
      "Cuando adivines la palabra, escribe la respuesta en la URL después de elsje.codes/_____ para encontrar un secreto.",
    legendCorrect: "Lugar correcto",
    legendPresent: "En la palabra, lugar equivocado",
    legendAbsent: "No está en la palabra",
    notEnoughLetters: "Faltan letras",
    wonMessage: "¡Lo lograste!",
    lostMessagePrefix: "¡Ay, buen intento! De todos modos eres genial. La palabra es: ",
    playAgain: "Jugar de nuevo",
  },
  steppingStones: {
    heading: "Piedras del Camino",
    paragraph1:
      "¡Lo lograste, qué inteligente eres! 🍪 Como todos tropezamos en el camino hacia la maestría, es importante reflexionar sobre las lecciones aprendidas. Aquí están algunas de las mías.",
    photoComingSoon: "Foto próximamente",
    readMore: "Leer más",
    closeModal: "Cerrar",
    stones: [
      {
        status: "Seguridad de IA",
        link: "/#stained-glass-quote-tool",
        eyebrow: "Stained Glass Quote Tool",
        title: "La Importancia de la Autenticación",
        description:
          "Una lección de seguridad: adelantarse a los atacantes antes de lanzar una función de IA.",
        tags: ["Seguridad", "IA"],
        articleBody:
          "Antes de lanzar el endpoint de IA de la herramienta de cotización, ya había escuchado lo expuestas que pueden estar las funciones con IA, desde inyección de prompts hasta bots que aumentan los costos de la API. Por eso me aseguré de tener autenticación real antes de que la herramienta llegara a un cliente, no después de que algo saliera mal. Esto reforzó un hábito que sigo teniendo: pensar en cómo se ve una función para alguien que intenta romperla, antes de lanzarla.",
      },
      {
        status: "Escalabilidad",
        link: "/resume#impact",
        eyebrow: "Tennessee UI e-Services",
        title: "Pensar en el Futuro es Clave",
        description:
          "Una lección de escalabilidad, aprendida de la manera difícil mientras construía un sistema para el gobierno.",
        tags: ["Escalabilidad", "Sistemas Gubernamentales"],
        articleBody:
          "Mientras construía la página de resumen de Cargos Reembolsables para el nuevo sistema e-Services de Tennessee, aprendí que una función que funciona bien en una demostración puede fallar con datos reales. Algunos empleadores tenían años de registros históricos, y mi primera versión los cargaba todos a la vez. Ahora la escalabilidad es una pregunta que me hago desde el primer día, no después de la primera página lenta.",
      },
      {
        status: "Planificación y Proceso",
        link: "/#pantry-pickings",
        eyebrow: "Pantry Pickings",
        title: "Las Pizarras Son las Mejores Amigas de un Desarrollador",
        description: "Una lección sobre planificar tu código antes de escribirlo.",
        tags: ["Planificación", "Diseño de Backend"],
        articleBody:
          "Antes de escribir una sola línea de Pantry Pickings, un proyecto individual, pasé horas en la pizarra planeando los flujos de usuario, los modelos de datos y los endpoints de la API por mi cuenta. En ese momento parecía lento, pero dibujarlo reveló errores reales en cómo estaba diseñando el backend, errores que solo habría descubierto mucho más tarde si hubiera empezado a programar primero. Planificar no le quita tiempo a construir, es lo que hace que lo construido se sostenga.",
      },
      {
        status: "Resolución de Problemas",
        link: "/resume#skills",
        eyebrow: "Habilidades",
        title: "Recordar el Razonamiento es Mejor que Memorizar",
        description: "Una lección de resolución de problemas: por qué entender es mejor que memorizar.",
        tags: ["Resolución de Problemas", "Repetición Espaciada"],
        articleBody:
          "Un libro llamado ''Fluent Forever'' me presentó los sistemas de repetición espaciada, algoritmos respaldados por investigaciones que muestran que son una de las formas más efectivas de fijar información en la memoria a largo plazo. Empecé a usarlo para aprender español, y luego me di cuenta de que el mismo método funciona también para conceptos de programación. Ahora, cuando me encuentro con un problema lógico difícil en el trabajo, recuerdo un razonamiento que realmente he retenido, no una respuesta memorizada que aprendí una vez y olvidé.",
      },
      {
        status: "Trabajo con Clientes",
        link: "/resume#employment",
        eyebrow: "Fast Enterprises",
        title: "A Tiempo y Dentro del Presupuesto",
        description:
          "Una lección sobre los desafíos únicos de crear software para gobiernos municipales.",
        tags: ["Contratos Gubernamentales", "Gestión de Proyectos"],
        articleBody:
          "Trabajar en sitio con gobiernos municipales me enseñó que las fechas límite no son solo metas internas, muchas veces las define una ley o un ciclo de presupuesto que no se puede mover. Entre sistemas antiguos y una amplia variedad de comodidad técnica entre el personal, entregar software en este entorno requiere más paciencia y comunicación que un proyecto de cliente típico.",
      },
    ],
  },
  auraScope: {
    eyebrow: "Visualizador Alfanumérico Caleidoscópico",
    heading: "AuraScope",
    body: "Próximamente: Una herramienta de texto a arte que toma una serie de letras y números para crear un mosaico hermoso. Escribe cualquier palabra, frase o número de la suerte que quieras ver.",
    cta: "Volver a Proyectos",
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
