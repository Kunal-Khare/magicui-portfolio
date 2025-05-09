import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kunal Khare",
  initials: "KK",
  url: "https://dillion.io",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description: "engineer ~ I love building things. active on Twitter(X).",
  summary: "",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Javascript",
    "Node.js",
    "Python",
    "TailwindCSS",
    "Postgres",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kunalkhare47@gmail.com",
    //tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kunal-Khare",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kunal-khare/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kharesaab_x",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@rimor30exe",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BuildersChain",
      href: "https://github.com/BuildersChain",
      badges: [],
      location: "Remote",
      title: "Community Ambassador",
      logoUrl: "/atomic.png",
      start: "Feb 2023",
      end: "Feb 2024",
      description:
        "Open source community for builders to learn, build, and earn.",
    },
  ],
  education: [
    {
      school: "Madhav Institute of Technology & Science",
      href: "https://web.mitsgwalior.in/",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "100xDevs",
      href: "https://100xdevs.com/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
    },
  ],
  projects: [
    {
      title: "apnaGPT",
      href: "https://github.com/Kunal-Khare/apnaGPT",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a chatbot using Ollama and Deepseek-r1:1.5b. The chatbot can answer questions, generate code, and more.  ",
      technologies: [
        "Pyhton",
        "Ollama",
        "Deepseek-r1:1.5b",
        "Chainlit",
        "Langchain",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Kunal-Khare/apnaGPT",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      /*video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",*/
    },

    {
      title: "FilmPie",
      href: "https://film-pie.vercel.app/",
      dates: "Jan 2024",
      active: true,
      description:
        " Developed a web application that allows users to search for movies and TV shows, view details about them, and add them to a watchlist.",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
        "IMDB API"
      
        
      
      ],
      links: [
        {
          type: "Website",
          href: "https://film-pie.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kunal-Khare/FilmPie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      //video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "KrishiUrja",
      href: "https://krishiurja.vercel.app/",
      dates: "Sep 2022",
      active: true,
      description:
        "  ",
      technologies: [
        "Next.js",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://krishiurja.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      /*video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",*/
    },
  ],
  hackathons: [
    {
      title: "Hack The Mountain 3.0",
      dates: "Sept 2022",
      location: "New Delhi, India",
      description:
        "",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  
  ],
} as const;
