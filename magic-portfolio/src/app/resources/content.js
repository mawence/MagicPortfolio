import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Maxence",
  lastName: "Shan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Recherche d'alternance Master 1 & 2",
  avatar: "/images/avatar_max_zoom.jpeg",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [] // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Links</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/shanmax",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:maxence.shan@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio design de ${person.role}`,
  headline: <>Designer global et Développeur</>,
  subline: (
    <>
      Je suis Maxence, étudiant à <InlineCode>CY ÉCOLE DE DESIGN</InlineCode>, fan de tech, passionné de design d'expérience et de sciences sociales.
    </>
  ),
};

const about = {
  label: "CV",
  title: "Voir le CV",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "/documents/CV_Maxence_Shan_2025.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Etudiant en 3ème année de design global,
        j'aime transformer concepts et visions en designs impactants.
        Ma maîtrise des outils numériques et mes expériences sur des
        projets variés me permetteront de m'adapter à votre équipe
        et vos problématiques.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience professionelle",
    experiences: [
      {
        company: "Festival Science Infuze",
        timeframe: "(1 mois) 2024",
        role: "Stage Design & Marketing",
        achievements: [
          <>
             Marketing, définition des personas, Analyse de terrain, travail
 sur l’aménagement et l’identité visuelle de l’évènement
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/scienceInfuze/graphisme.png",
            alt: "Graphisme",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/scienceInfuze/recherches.png",
            alt: "Recherches",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MicroPort (implants médicaux)",
        timeframe: "(1 mois) 2023",
        role: "Stage assistant R&D Pacemakers",
        achievements: [
          <>
           Participation à l’optimisation
           de la méthode d’assemblage de sondes pour pacemaker
          </>,
          <>
          UX Design & Vulgarisation : Compréhension de mécanismes complexes et conception de guides de montages à destination des médecins
          </>
        ],
        images: [],
      },
      {
        company: "Sophie Luxemberg (Coach en orientation)",
        timeframe: "(2 mois) 2022",
        role: "Designer & développeur web (en freelance)",
        achievements: [
          <>
           Conception d'une maquette d'un jeu de société d'orientation pour collégiens et lycéens en ligne sur Figma 
          </>,
          <>
           Développement du projet en HTML CSS JavaScript
          </>,
          <>
           <a href="/work/100METIERS">Voir le projet -&gt;</a>
          </>
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Etudes",
    institutions: [
      {
        name: "RMIT Australie",
        role: "Lead Designer",
        description: <>2024 (6 mois) - Echange universitaire</>,
      },
      {
        name: "CY Ecole de design (2022-2027)",
        description: <>2022-2027 -</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Outils",
    skills: [
      {
        title: "Figma",
        description: <>Graphisme, prototypes d'interfaces, mises en page, vectorisation d'idées ou juste mon tableau blanc</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/figma/violette.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/figma/beffroi.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/figma/aday.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/asmjudo/asmjudo.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Developpement : Python, JavaScript, HTML, CSS",
        description: <>Créations de sites, WebApps, programmes, automatisation et pour concrétiser mes projets design. (+ apprentissage de React & NextJS)</>,
        // optional: leave the array empty if you don't want to display images
        
      },
      {
        title: "Autres outils créatifs",
        description: <>Illustrator, Photoshop, Première Pro, Zbrush, Rhino, Alias, Suite Office</>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projets",
  title: "Mes projets",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Sketch",
  title: "My sketches",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/image1.png",
      alt: "image",
      orientation: "horizontal_flat",
    },
    {
      src: "/images/gallery/image2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image6.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/seats.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/gallery/image4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image5.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image3.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image7.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image8.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image9.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image10.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image11.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/gallery/image12.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image13.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image14.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image15.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image16.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image17.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image18.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/gallery/ChairHQ.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const modelisations = {
  label: "3D CAD",
  title: "Mes créations 3D",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/modelisations/lock.png",
      alt: "image",
      orientation: "horizontal_flat",
    },
    {
      src: "/images/modelisations/carHQ.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/modelisations/rabbitHQ.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/modelisations/demo2.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/modelisations/turbine.png",
      alt: "image",
      orientation: "horizontal_flat",
    },
    {
      src: "/images/modelisations/antenne_toutes.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/modelisations/tram1HQ.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/modelisations/tram2HQ.png",
      alt: "image",
      orientation: "horizontal_flat",
    },
    {
      src: "/images/modelisations/fish.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/modelisations/bottle.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/modelisations/hammers.png",
      alt: "image",
      orientation: "horizontal_flat",
    },
    {
      src: "/images/modelisations/bottle2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/modelisations/lamp.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const graphismes = {
  label: "Graphisme & Ui",
  title: "Mes créations graphiques",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/graphismes/frog.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/graphismes/asm1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/graphismes/trainprice.png",
      alt: "image",
      orientation: "horizontal_mid",
    },
    {
      src: "/images/graphismes/deskme.png",
      alt: "image",
      orientation: "horizontal_mid",
    },
    {
      src: "/images/graphismes/beffroi.png",
      alt: "image",
      orientation: "horizontal_mid",
    },
    {
      src: "/images/graphismes/aday.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/graphismes/takeoff.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/graphismes/violette.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/graphismes/asm2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/graphismes/train2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/graphismes/scienceinfuze2.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/graphismes/signa.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/graphismes/arch_main.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/graphismes/played.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/graphismes/arch_letters.png",
      alt: "image",
      orientation: "horizontal_flat",
    },
    {
      src: "/images/graphismes/portmarly.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/graphismes/py.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/graphismes/screen.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/graphismes/ix.png",
      alt: "image",
      orientation: "square",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, modelisations, graphismes};
