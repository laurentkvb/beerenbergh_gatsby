export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      music: "Music",
    },

    // Hero Section
    hero: {
      badge: "Full-Stack Developer • Musician • Problem Solver",
      title1: "I Build Apps",
      title2: "People Love to Use",
      subtitle1: "7+ years crafting scalable web and mobile solutions.",
      subtitle2: "From React frontends to Java backends, I turn complex problems into elegant, human-centered experiences.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "Learn More",
      location: "Amsterdam, NL",
    },

    // About Section
    about: {
      title: "Laurent Kleering van Beerenbergh",
      subtitle: "I believe great software is built by people who cares about craft, collaboration, and the users on the other side of the screen.",
      quickFacts: "Quick Facts",
      location: "Location:",
      locationValue: "Amsterdam, Netherlands",
      experience: "Experience:",
      experienceValue: "7+ Years",
      currentRole: "Current Role:",
      currentRoleValue: "Full-Stack Engineer @ VGZ",
      sideGig: "Side Gig:",
      sideGigValue: "Bass Player",

      story1: "Hi, I'm Laurent a full-stack developer who loves turning ambiguous problems into clean, working solutions.",
      story2: "Over the past 7 years, I've built web and mobile apps for companies like VGZ, Ayvens (LeasePlan), and Rebels.io. My sweet spot? Combining frontend polish (React, TypeScript) with backend power (Java, .NET) to deliver systems that scale.",
      story3: "But here's what makes me different: I'm also a musician. I play bass in the reggae band Jah Riddim and freelance across pop, rock, and R&B. Music taught me rhythm, listening, and improvisation skills that shape how I code, collaborate, and solve problems.",

      values: {
        technical: {
          label: "Technical Excellence",
          desc: "7+ years of battle-tested code",
        },
        team: {
          label: "Team Player",
          desc: "Collaborative & communicative",
        },
        creative: {
          label: "Creative Mindset",
          desc: "Musician at heart",
        },
        learner: {
          label: "Fast Learner",
          desc: "Adaptable to any stack",
        },
      },

      techTitle: "Technologies I Love",
    },

    // Projects Section
    projects: {
      title: "Work",
      duration: "Duration",
      stack: "Stack",
      current: "Current",
    },

    // Music Section
    music: {
      title: "Music",
      description: "Outside of software, I play music, especially bass guitar and guitar. I also produce and record my own music, blending groove and emotion with precision and sound design.",
      cta: "Watch on YouTube",
    },

    // CTA Section
    cta: {
      title: "Let's Build Something Great",
      subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      ctaPrimary: "Get In Touch",
      ctaSecondary: "Connect on LinkedIn",
      availability: "Available for freelance work and full-time opportunities",
    },

    // Footer
    footer: {
      builtWith: "built with Next.js",
    },
  },

  nl: {
    // Navigation
    nav: {
      home: "Home",
      about: "Over mij",
      projects: "Projecten",
      music: "Muziek",
    },

    // Hero Section
    hero: {
      badge: "Full-Stack Developer • Muzikant • Probleemoplosser",
      title1: "Ik Bouw Apps",
      title2: "Waar Mensen Dol Op Zijn",
      subtitle1: "7+ jaar ervaring in het creëren van schaalbare web en mobiele oplossingen.",
      subtitle2: "Van React frontends tot Java backends,  ik transformeer complexe uitdagingen naar elegante, mensgerichte ervaringen.",
      ctaPrimary: "Start een Project",
      ctaSecondary: "Ontdek Meer",
      location: "Amsterdam, NL",
    },

    // About Section
    about: {
      title: "De Mens Achter de Code",
      subtitle: "Goede software ontstaat door mensen die echt geven om hun vak, hun team en de eindgebruiker.",
      quickFacts: "In het Kort",
      location: "Locatie:",
      locationValue: "Amsterdam, Nederland",
      experience: "Ervaring:",
      experienceValue: "7+ Jaar",
      currentRole: "Huidige Functie:",
      currentRoleValue: "Full-Stack Engineer @ VGZ",
      sideGig: "Daarnaast:",
      sideGigValue: "Bassist",

      story1: "Hey, ik ben Laurent — een full-stack developer die complexe problemen omtovert tot elegante, werkende oplossingen.",
      story2: "De afgelopen 7 jaar bouwde ik web en mobiele apps voor bedrijven als VGZ, Ayvens (LeasePlan) en Rebels.io. Mijn kracht? Frontend finesse (React, TypeScript) combineren met backend power (Java, .NET) om systemen te bouwen die écht schalen.",
      story3: "Wat me uniek maakt: ik ben ook muzikant. Ik speel bas in reggaeband Jah Riddim en werk freelance in pop, rock en R&B. Muziek leerde me ritme, luisteren en improviseren — skills die mijn manier van coderen en samenwerken vormgeven.",

      values: {
        technical: {
          label: "Technische Excellentie",
          desc: "7+ jaar battle-tested code",
        },
        team: {
          label: "Teamspeler",
          desc: "Samenwerkend & communicatief",
        },
        creative: {
          label: "Creatieve Geest",
          desc: "Muzikant in hart en nieren",
        },
        learner: {
          label: "Snelle Leerling",
          desc: "Past zich aan elke stack aan",
        },
      },

      techTitle: "Tech die ik Liefheb",
    },

    // Projects Section
    projects: {
      title: "Werk",
      duration: "Periode",
      stack: "Stack",
      current: "Huidig",
    },

    // Music Section
    music: {
      title: "Muziek",
      description: "Buiten software speel ik bas in Jah Riddim — een reggaeband die door heel Europa toert. Daarnaast produceer en neem ik mijn eigen muziek op, waar groove en emotie samenkomen met precisie en sound design.",
      cta: "Bekijk op YouTube",
    },

    // CTA Section
    cta: {
      title: "Klaar om Iets Moois te Bouwen?",
      subtitle: "Ik sta altijd open voor nieuwe projecten, creatieve ideeën of kansen om jouw visie werkelijkheid te maken.",
      ctaPrimary: "Neem Contact Op",
      ctaSecondary: "Verbind op LinkedIn",
      availability: "Beschikbaar voor freelance projecten en fulltime kansen",
    },

    // Footer
    footer: {
      builtWith: "gebouwd met Next.js ❤️",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
