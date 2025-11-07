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
      subtitle2: "From React frontends to Java backends — I turn complex problems into elegant, human-centered experiences.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "Learn More",
      location: "Amsterdam, NL",
    },
    
    // About Section
    about: {
      title: "The Human Behind the Code",
      subtitle: "I believe great software is built by people who care — about craft, collaboration, and the users on the other side of the screen.",
      quickFacts: "Quick Facts",
      location: "Location:",
      locationValue: "Amsterdam, Netherlands",
      experience: "Experience:",
      experienceValue: "7+ Years",
      currentRole: "Current Role:",
      currentRoleValue: "Full-Stack Engineer @ VGZ",
      sideGig: "Side Gig:",
      sideGigValue: "Bass Player",
      
      story1: "Hi, I'm Laurent — a full-stack developer who loves turning ambiguous problems into clean, working solutions.",
      story2: "Over the past 7 years, I've built web and mobile apps for companies like VGZ, Ayvens (LeasePlan), and Rebels.io. My sweet spot? Combining frontend polish (React, TypeScript) with backend power (Java, .NET) to deliver systems that scale.",
      story3: "But here's what makes me different: I'm also a musician. I play bass in the reggae band Jah Riddim and freelance across pop, rock, and R&B. Music taught me rhythm, listening, and improvisation — skills that shape how I code, collaborate, and solve problems.",
      
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
      description: "Outside of software, I play bass in Jah Riddim — a reggae band that performs across Europe. I also produce and record my own music, blending groove and emotion with precision and sound design.",
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
      title2: "Waar Mensen Van Houden",
      subtitle1: "7+ jaar ervaring met het bouwen van schaalbare web- en mobiele oplossingen.",
      subtitle2: "Van React frontends tot Java backends — ik zet complexe problemen om in elegante, gebruiksvriendelijke ervaringen.",
      ctaPrimary: "Start een Project",
      ctaSecondary: "Lees Meer",
      location: "Amsterdam, NL",
    },
    
    // About Section
    about: {
      title: "De Mens Achter de Code",
      subtitle: "Ik geloof dat geweldige software wordt gebouwd door mensen die geven om vakmanschap, samenwerking en de gebruikers aan de andere kant van het scherm.",
      quickFacts: "Snelle Feiten",
      location: "Locatie:",
      locationValue: "Amsterdam, Nederland",
      experience: "Ervaring:",
      experienceValue: "7+ Jaar",
      currentRole: "Huidige Rol:",
      currentRoleValue: "Full-Stack Engineer @ VGZ",
      sideGig: "Bijbaan:",
      sideGigValue: "Bassist",
      
      story1: "Hoi, ik ben Laurent — een full-stack developer die ervan houdt om onduidelijke problemen om te zetten in werkende oplossingen.",
      story2: "De afgelopen 7 jaar heb ik web- en mobiele apps gebouwd voor bedrijven zoals VGZ, Ayvens (LeasePlan) en Rebels.io. Mijn specialiteit? Het combineren van frontend finesse (React, TypeScript) met backend kracht (Java, .NET) om schaalbare systemen te leveren.",
      story3: "Maar dit maakt me anders: ik ben ook muzikant. Ik speel bas in de reggaeband Jah Riddim en werk freelance in de pop-, rock- en R&B-scene. Muziek leerde me ritme, luisteren en improviseren — vaardigheden die mijn manier van coderen, samenwerken en problemen oplossen vormgeven.",
      
      values: {
        technical: {
          label: "Technische Excellentie",
          desc: "7+ jaar beproefde code",
        },
        team: {
          label: "Teamspeler",
          desc: "Samenwerkend & communicatief",
        },
        creative: {
          label: "Creatieve Mindset",
          desc: "Muzikant in hart en nieren",
        },
        learner: {
          label: "Snelle Leerling",
          desc: "Aanpasbaar aan elke stack",
        },
      },
      
      techTitle: "Technologieën Waar Ik Van Hou",
    },
    
    // Projects Section
    projects: {
      title: "Werk",
      duration: "Duur",
      stack: "Stack",
      current: "Huidig",
    },
    
    // Music Section
    music: {
      title: "Muziek",
      description: "Buiten software speel ik bas in Jah Riddim — een reggaeband die door heel Europa optreedt. Ik produceer en neem ook mijn eigen muziek op, waarbij ik groove en emotie combineer met precisie en geluidontwerp.",
      cta: "Bekijk op YouTube",
    },
    
    // CTA Section
    cta: {
      title: "Laten We Iets Geweldigs Bouwen",
      subtitle: "Ik sta altijd open om nieuwe projecten, creatieve ideeën of kansen te bespreken om deel uit te maken van jouw visie.",
      ctaPrimary: "Neem Contact Op",
      ctaSecondary: "Verbind op LinkedIn",
      availability: "Beschikbaar voor freelance werk en fulltime kansen",
    },
    
    // Footer
    footer: {
      builtWith: "gebouwd met Next.js",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
